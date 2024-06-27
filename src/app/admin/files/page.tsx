import { getFiles } from "@/server/storage/files";
import { FilesList } from "@/app/admin/_components/FilesList";
export const dynamic = "force-dynamic";

export default async function Files() {
  const data = await getFiles();
  return (
    <div className="flex flex-col gap-4 p-4">
      <h1>Files</h1>
      <FilesList data={data[2]} />
    </div>
  );
}
