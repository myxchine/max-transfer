"use server";

import { storage } from ".";
import { v4 as uuidv4 } from "uuid";

export const uploadFile = async (somestate: any, formData: FormData) => {
  const files = formData.getAll("file-upload") as File[];

  if (files.length === 0) {
    return "No files selected";
  }

  console.log(files);

  const myBucket = storage.bucket("duality-uploads");
  const folderName = uuidv4();
  try {
    for (const file of files) {
      if (file.size < 1) {
        console.log(`File ${file.name} is empty`);
        continue;
      }

      console.log(file);

      const buffer = await file.arrayBuffer();

      const filePath = `${folderName}/${file.name}`;
      await myBucket.file(filePath).save(Buffer.from(buffer));
      console.log(`${file.name} uploaded successfully to ${filePath}`);
    }

    return folderName;
  } catch (err) {
    console.log(err);
    return "Error uploading file";
  }
};
