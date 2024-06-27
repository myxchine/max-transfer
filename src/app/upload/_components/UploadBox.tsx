export default function UploadBox({
  onFileChange,
}: {
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="flex flex-col w-full">
      <input
        type="file"
        id="file-upload"
        name="file-upload"
        className="hidden"
        multiple
        onChange={onFileChange}
        size={100}
        required
      />
      <label
        htmlFor="file-upload"
        className="flex flex-row items-center justify-center w-full aspect-square rounded-md border cursor-pointer p-4 bg-white"
      >
        <div className="flex flex-col gap-4 justify-center items-center text-black/50 text-center">
          Upload Files Here <br />
          (Max file size: 100mb)
          <UploadIcon />
        </div>
      </label>
    </div>
  );
}

function UploadIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
      />
    </svg>
  );
}
