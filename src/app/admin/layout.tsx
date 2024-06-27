import SideBar from "./_components/sideBar";
import Header from "./_components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <div className="flex fixed w-screen h-screen">
        <SideBar />
        <main className="w-full overflow-y-auto">
          <Header />
          {children}
        </main>
      </div>
    </main>
  );
}
