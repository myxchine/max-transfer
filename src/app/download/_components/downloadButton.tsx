"use client";

import { getSignedUrl } from "@/server/storage/getSignedUrl";

const DownloadButton = ({ fileName }: { fileName: string }) => {
  const handleDownload = async () => {
    try {
      const signedUrl = await getSignedUrl(fileName);
      console.log(signedUrl);

      // Create a temporary anchor element
      const link = document.createElement("a");
      link.href = signedUrl[0];
      link.setAttribute("download", ""); // Set the download attribute to specify filename
      link.style.display = "none"; // Hide the link

      // Append the anchor element to the body
      document.body.appendChild(link);

      // Trigger the download by simulating a click
      link.download;
      link.click();
      // Clean up: remove the anchor element from the DOM
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <button
      className="border border-black bg-black rounded-md text-white p-2 px-4 hover:bg-black/80 w-full text-sm"
      onClick={handleDownload}
    >
      Download
    </button>
  );
};

export default DownloadButton;
