"use client";

import { useActionState, useState, useRef } from "react";
import { uploadFile } from "@/server/storage/upload";
import UploadButton from "./UploadButton";
import UploadBox from "./UploadBox";
import FileList from "./FileList";
import { useRouter } from "next/navigation";

const Upload = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [status, upload, isPending] = useActionState(uploadFile, null);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const filesArray = Array.from(event.target.files);
      setSelectedFiles((prev) => [...prev, ...filesArray]);

      if (inputRef.current) {
        const dataTransfer = new DataTransfer();
        [...selectedFiles, ...filesArray].forEach((file) => {
          dataTransfer.items.add(file);
        });
        inputRef.current.files = dataTransfer.files;
      }

      console.log(inputRef.current?.files || "No files");
    }
  };

  if (status) {
    router.push(`/download/${status}`);
  }

  return (
    <form action={upload} className="flex flex-col gap-4 w-full text-center">
      <FileList files={selectedFiles} />
      <UploadBox onFileChange={onFileChange} inputRef={inputRef} />
      <UploadButton isPending={isPending} />
      <div className="text-sm text-black/50">
        {status ? "Success, redirecting..." : "Hurry up man."}
      </div>
    </form>
  );
};

export default Upload;
