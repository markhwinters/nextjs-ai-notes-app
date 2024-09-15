"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export default function Navbar() {
  const { theme } = useTheme();
  return (
    <>
      <div className="flex items-center justify-between p-5 shadow-sm">
        <Link href="/notes" className="text-2xl">
          Notes <span className="text-indigo-600">App</span>
        </Link>
        <SignedIn>
          <div className="flex items-center space-x-2">
            <Button asChild variant="outline" className="border-indigo-600">
              <Link href="/notes">
                <Plus className="mr-2 text-indigo-600" />
                Add Note
              </Link>
            </Button>

            <ThemeToggle />

            <UserButton
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
              }}
            />
          </div>
        </SignedIn>
      </div>
    </>
  );
}
