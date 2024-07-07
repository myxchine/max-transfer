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

export const getFileByFolder = async (folderName: string) => {
  console.log(`getFileByFolder called with folderName: ${folderName}`); // Debug log

  if (!folderName) {
    throw new Error("folderName is undefined or empty");
  }

  const bucketName = "duality-uploads"; // Replace with your bucket name
  const bucket = storage.bucket(bucketName);

  try {
    const [files] = await bucket.getFiles({
      prefix: folderName,
    });

    if (files.length > 0) {
      console.log(
        `Found ${files.length} files in bucket '${bucketName}' with prefix '${folderName}'`
      );
      return files;
    } else {
      throw new Error(
        `Folder '${folderName}' not found in bucket '${bucketName}'`
      );
    }
  } catch (err) {
    console.error(`Error fetching folder '${folderName}':`, err);
    throw new Error(`Error fetching folder '${folderName}'`);
  }
};
