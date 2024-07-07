"use client";

import { getSignedUrl } from "@/server/storage/getSignedUrl";

const DownloadButton = ({ fileName }: { fileName: string }) => {
  const handleDownload = async () => {
    try {
      const signedUrl = await getSignedUrl(fileName);
      console.log(signedUrl);

      const gpcUrl = signedUrl[0];
      const blob = await fetch(gpcUrl).then((res) => res.blob());
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      link.download = fileName.split("/").pop() || fileName;

      console.log(link);
      document.body.appendChild(link);

      link.click();
      URL.revokeObjectURL(url);
      link.remove();
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <button
      className="border border-black bg-black rounded-md text-white p-2  hover:bg-black/80  text-sm "
      onClick={handleDownload}
    >
      <DownloadIcon />
    </button>
  );
};

export default DownloadButton;

function DownloadIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}
