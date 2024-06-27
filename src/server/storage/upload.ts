"use server";

import { storage } from ".";

export const uploadFile = async (somestate: any, formData: FormData) => {
  const file = formData.get("file-upload") as File;
  if (!file) {
    return "No file selected";
  }

  if (file.size < 1) {
    return "File is empty";
  }

  const myBucket = storage.bucket("duality-uploads");

  try {
    const buffer = await file.arrayBuffer();
    await myBucket.file(file.name).save(Buffer.from(buffer));
    console.log(`${file.name} uploaded successfully`);

    return "File uploaded successfully";
  } catch (err) {
    console.log(err);
    return "Error uploading file";
  }
};
