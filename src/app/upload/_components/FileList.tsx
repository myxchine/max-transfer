export default function FileList({ files }: { files: File[] }) {
  return (
    <>
      {files.length > 0 && (
        <ul className="flex flex-col gap-2 w-full">
          {files.map((file, index) => (
            <li key={index} className="border rounded-md p-2 px-4 bg-white">
              <div className="flex flex-row items-center justify-between gap-8">
                <p className="truncate">{file.name}</p>
                <div className="flex flex-row items-center bg-black/5 p-2 px-4 rounded-md text-sm text-black/50">
                  {(file.size / 1024).toFixed(2)}kb
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
