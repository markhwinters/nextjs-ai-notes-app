import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Home() {
  const { userId } = await auth();

  if (userId) redirect("/notes");

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="flex items-center gap-4">
        <span className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Notes <span className="text-indigo-600">App</span>
        </span>
      </div>
      <p className="max-w-prose text-center">
        An intelligent note-taking app with AI integration, built with OpenAI,
        Pinecone, Next.js, Shadcn UI, Clerk, and more.
      </p>
      <Button size="lg" asChild variant="outline" className="border-indigo-600">
        <Link href="/notes">Get Started</Link>
      </Button>
    </main>
  );
}
