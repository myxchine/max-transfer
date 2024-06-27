import { getFiles } from "@/server/storage/files";
export const dynamic = "force-dynamic";

export default async function Files() {
  const data = await getFiles();
  console.log(data);
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1>Files</h1>
      <MapStorageItems data={data[2]} />
    </div>
  );
}

const MapStorageItems = ({ data }: { data: any }) => {
  if (data.kind === "storage#objects" && Array.isArray(data.items)) {
    const items = data.items.map((item: any) => (
      <div
        key={item.id}
        className="border rounded-md p-2 px-4 bg-white flex flex-row items-center justify-between gap-8"
      >
        <h2>{item.name}</h2>
        <div className="flex flex-row items-center bg-black/5 p-2 px-4 rounded-md text-sm text-black/50">
          {(item.size / 1024).toFixed(2)}kb
        </div>
      </div>
    ));
    return <div className="flex flex-col gap-4">{items}</div>;
  } else {
    return <p>No items found</p>;
  }
};
