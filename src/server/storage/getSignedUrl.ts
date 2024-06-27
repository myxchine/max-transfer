"use server";

import { storage } from ".";

export const getSignedUrl = async (fileName: string) => {
  const bucket = storage.bucket("duality-uploads");

  try {
    const data = await bucket.file(fileName).getSignedUrl({
      action: "read",
      expires: new Date(Date.now() + 1000 * 60 * 15),
    });

    return data;
  } catch (err) {
    console.log(err);
    throw new Error("Error fetching files");
  }
};
