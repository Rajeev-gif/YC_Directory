import { auth, signOut, signIn } from "@/auth";
import { CircleUserRound, CopyPlus, LogOut } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Avatar, AvatarImage } from "./ui/avatar";

const Navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session && session?.user ? (
            <>
              <Link href="/startup/create" className="flex gap-2">
                <span className="max-sm:hidden">Create</span>
                <CopyPlus className="size-5 text-fuchsia-500 inline" />
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
                className=""
              >
                <button type="submit" className="cursor-pointer flex gap-2">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-5 text-red-500 inline" />
                </button>
              </form>

              <Link href={`/user/${session?.id}`}>
                {session?.user?.image ? (
                  <Avatar className="size-10 ">
                    <AvatarImage
                      src={session?.user?.image}
                      alt="pfp"
                      className=""
                    />
                  </Avatar>
                ) : (
                  <CircleUserRound className="size-6 text-blue-500 inline" />
                )}
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
              className=""
            >
              <button type="submit" className="cursor-pointer">
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
