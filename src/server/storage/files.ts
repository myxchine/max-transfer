"use server";

import { storage } from ".";

export const getFiles = async () => {
  const bucket = storage.bucket("duality-uploads");

  try {
    const data = await bucket.getFiles();

    return data;
  } catch (err) {
    console.log(err);
    throw new Error("Error fetching files");
  }
};
