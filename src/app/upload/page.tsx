import UploadElement from "./_components";

const Home = () => {
  return (
    <div className="flex flex-col fullScreen items-center justify-center gap-4 p-8">
      <section className="flex flex-col gap-4 w-[300px] justify-center items-center border rounded-lg p-4 shadow bg-black/5 text-black">
        <h1 className="text-md font-bold text-left w-full">Upload Files</h1>

        <UploadElement />
      </section>
    </div>
  );
};

export default Home;
