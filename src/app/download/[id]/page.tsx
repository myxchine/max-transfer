import { getFileByFolder } from "@/server/storage/files";
import DownloadButton from "../_components/downloadButton";
import CopyToClipboard from "../_components/copyToCLipboard";
export const dynamic = "force-dynamic";

export default async function Files({ params }: { params: { id: string } }) {
  const data = await getFileByFolder(params.id);

  return (
    <div className="flex flex-col gap-4 p-4 w-screen fullScreen justify-center items-center w-full">
      <section className="flex flex-col gap-4 min-w-[300px] w-full justify-center items-center border rounded-lg p-4 shadow bg-black/5 text-black w-full">
        <div className="flex flex-row justify-between gap-4 w-[300px]">
          <h1 className="text-xl font-bold">Download Files</h1>
          <CopyToClipboard text={params.id} />
        </div>
        <div className="flex flex-col  w-full">
          <MapStorageItems data={data} />
        </div>
      </section>
    </div>
  );
}

const MapStorageItems = ({ data }: { data: any }) => {
  if (data.length > 0) {
    console.log(data);
    const items = data.map((file: any) => (
      <div
        key={file.name}
        className="border rounded-md p-2 bg-white flex flex-col items-center justify-between gap-4 w-full"
      >
        <div className="flex flex-row gap-8 w-full justify-between items-center w-full">
          <h2 className=" overflow-ellipsis line-clamp-1 w-full">
            {file.name.split("/").pop()}
          </h2>
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-row items-center bg-black/5 p-2 px-4 rounded-md text-sm text-black/50">
              {(file.metadata.size / 1024).toFixed(2)}kb
            </div>
            <DownloadButton fileName={file.name} />
          </div>
        </div>
      </div>
    ));
    return <div className="flex flex-col gap-4">{items}</div>;
  } else {
    return <p>No items found</p>;
  }
};
