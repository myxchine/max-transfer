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

export const getFileByName = async (fileName: string) => {
  const bucketName = "duality-uploads"; // Replace with your bucket name
  const bucket = storage.bucket(bucketName);

  try {
    const [files] = await bucket.getFiles({
      prefix: fileName,
    });

    if (files.length > 0) {
      // Return the first file found matching the fileName
      return files[0];
    } else {
      throw new Error(`File '${fileName}' not found in bucket '${bucketName}'`);
    }
  } catch (err) {
    console.error(`Error fetching file '${fileName}':`, err);
    throw new Error(`Error fetching file '${fileName}'`);
  }
};
