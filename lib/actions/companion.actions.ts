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
