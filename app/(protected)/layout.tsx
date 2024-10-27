import { Navbar } from "@/components";

export default function ProtectedLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex w-screen h-screen col items-center justify-center">
        {children}
      </main>
    </>
  );
}
