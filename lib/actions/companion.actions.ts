"use server"; //every single line in this file will be executed only on the server side

import { auth } from "@clerk/nextjs/server";
import { createSuperbaseClient } from "@/lib/superbase";

// this code can only be used on the server side

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
