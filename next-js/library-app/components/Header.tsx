"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn, getInitials } from "@/lib/utils";

import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";
import { usePathname } from "next/navigation";

const Header = ({ session }: { session: Session }) => {
  const pathname = usePathname();
  return (
    <header className="my-10 flex justify-between gap-5 text-light-300">
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={40} height={40} />
      </Link>

      <ul className="flex flex-row items-center gap-8">
        <li>
          <Link
            href={"/library"}
            className={cn(
              "text-base cursor-pointer capitalize",
              pathname == "/library"
            )}
          >
            Library
          </Link>
        </li>
        <li>
          <Link href={"/my-profile"}>
            <Avatar>
              <AvatarFallback className="bg-amber-100 text-amber-800">
                {getInitials(session?.user?.name || "IN")}
              </AvatarFallback>
            </Avatar>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
