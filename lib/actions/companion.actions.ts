"use server"; //every single line in this file will be executed only on the server side

import { auth } from "@clerk/nextjs/server";
import { createSuperbaseClient } from "@/lib/superbase";

// this code can only be used on the server side

//C in CRUD
export const createCompanion = async (formData: CreateCompanion) => {
  const { userId: author } = await auth();
  const supabase = createSuperbaseClient();

  const { data, error } = await supabase
    .from("companions")
    .insert({ ...formData, author })
    .select();

  if (error || !data)
    throw new Error(error?.message || "Failed to create companion");

  return data[0];
};

//R in CRUD
export const getAllCompanions = async ({
  limit = 10,
  page = 1,
  subject,
  topic,
}: GetAllCompanions) => {
  const supabase = createSuperbaseClient();
  let query = supabase.from("companions").select();

  //we're searching for the subject or the topic or both
  if (subject && topic) {
    query = query
      .ilike("subject", `%${subject}%`)
      .or(`topic.ilike.%${topic}%, name.ilike.%${topic}%`);
  } else if (subject) {
    query = query.ilike("subject", `%${subject}%`);
  } else if (topic) {
    query = query.or(`topic.ilike.%${topic}%, name.ilike.%${topic}%`);
  }

  //pagination
  query = query.range((page - 1) * limit, page * limit - 1); // we show the first 8 elements and then we show another 8 for the nd page

  //once we have the query we can fetch now
  const { data: companions, error } = await query;
  if (error) throw new Error(error.message);

  //if everything ok -> companions
  return companions;
};

//Get a specific companion by id
export const getCompanion = async (id: string) => {
  const supabase = createSuperbaseClient();

  const { data, error } = await supabase
    .from("companions")
    .select()
    .eq("id", id); //only the one equal to id that i pass through params
  if (error) throw new Error(error.message);

  return data[0];
};

//add to session history
export const addToSessionHistory = async (companionId: string) => {
  const { userId } = await auth();
  const supabase = createSuperbaseClient();

  const { data, error } = await supabase
    .from("session_history")
    .insert({ companion_id: companionId, user_id: userId });

  if (error) throw new Error(error.message);

  return data;
};

//recent sessions
export const getRecentSessions = async (limit = 10) => {
  const supabase = createSuperbaseClient();
  const { data, error } = await supabase
    .from("session_history")
    .select(`companions:companion_id(*)`)
    .order("created_at", { ascending: false })
    .limit(10); //from newest to oldest

  if (error) throw new Error(error.message);

  //destructure the data
  return data.map(({ companions }) => companions);
};

export const getUserSessions = async (userId: string, limit = 10) => {
  const supabase = createSuperbaseClient();
  const { data, error } = await supabase
    .from("session_history")
    .select(`companions:companion_id(*)`)
    .eq("user_id", userId)
    .order("created_at", { ascending: false })
    .limit(10); //from newest to oldest

  if (error) throw new Error(error.message);

  //destructure the data
  return data.map(({ companions }) => companions);
};

export const getUserCompanions = async (userId: string) => {
  const supabase = createSuperbaseClient();
  const { data, error } = await supabase
    .from("companions")
    .select()
    .eq("author", userId); //we only want to get the companions created by this specific user

  if (error) throw new Error(error.message);

  //destructure the data
  return data;
};
