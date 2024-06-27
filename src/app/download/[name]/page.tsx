import { getFiles } from "@/server/storage/files";
import DownloadButton from "../_components/downloadButton";
export const dynamic = "force-dynamic";

export default async function Files({ params }: { params: { name: string } }) {
  const data = await getFiles();
  return (
    <div className="flex flex-col gap-4 p-4 w-screen fullScreen justify-center items-center">
      <section className="flex flex-col gap-4 min-w-[300px] justify-center items-center border rounded-lg p-4 shadow bg-black/5 text-black">
        <div className="flex flex-col gap-4 w-[300px]">
          <h1 className="text-md font-bold">Download Files</h1>
          <MapStorageItems data={data[2]} name={params.name} />
        </div>
      </section>
    </div>
  );
}

const MapStorageItems = ({ data, name }: { data: any; name: string }) => {
  if (data.kind === "storage#objects" && Array.isArray(data.items)) {
    const filteredItems = data.items.filter((item: any) => item.name === name);
    const items = filteredItems.map((item: any) => (
      <div
        key={item.id}
        className="border rounded-md p-2 bg-white flex flex-col items-center justify-between gap-4"
      >
        <div className="flex flex-row gap-8 w-full justify-between items-center">
          <h2 className="truncate">{item.name}</h2>
          <div className="flex flex-row items-center bg-black/5 p-2 px-4 rounded-md text-sm text-black/50">
            {(item.size / 1024).toFixed(2)}kb
          </div>
        </div>

        <DownloadButton fileName={item.name} />
      </div>
    ));
    return <div className="flex flex-col gap-4">{items}</div>;
  } else {
    return <p>No items found</p>;
  }
};
