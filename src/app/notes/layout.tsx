import Navbar from "@/components/Navbar";
import { ClerkLoaded } from "@clerk/nextjs";

export default function Noteslayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkLoaded>
      <Navbar />
      <main className="m-auto max-w-7xl p-4">{children}</main>
    </ClerkLoaded>
  );
}
