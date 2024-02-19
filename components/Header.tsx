"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Heart, User } from "lucide-react";

// export default function Header() {
//   return (
//     <div>Header</div>
//   )
// }

function Header() {
  return (
    <header className="flex bg-movie items-center px-10 py-7 space-x-5">
      <Link href="/" className="">
        <Image
          // src="https://a.ltrbxd.com/logos/letterboxd-decal-dots-neg-rgb.svg"
          // src="https://upload.wikimedia.org/wikipedia/en/e/e3/Letterboxd_logo_%28dark%29.png"
          src="https://a.ltrbxd.com/logos/letterboxd-logo-h-neg-rgb.svg"
          width={160}
          height={160}
        />
      </Link>
      <form className="flex items-center bg-white rounded-full w-full flex-1">
        <input
          type="text"
          placeholder=" I wanna watch..."
          className="flex-1 px-4 rounded-l-full outline-none placeholder:text-sm"
        />
        <button type="submit">
          <Search className="rounded-full h-10 px-2 w-10 bg-blue-400 cursor-pointer" />
        </button>
      </form>

      <div className="flex space-x-5 p-5 pb-0 md:p-0">
        <Link
          href={"/"}
          className="flex text-white font-bold items-center space-x-2
                text-sm"
        >
          <Heart size={20} />
          <div>
            <p>Watchlist</p>
          </div>
        </Link>

        <Link
          href={"/"}
          className="flex text-white font-bold items-center space-x-2
                text-sm"
        >
          <User size={20} />
          <div>
            <p className="text-xs font-extralight">Sign In</p>
            <p>Account</p>
          </div>
        </Link>

        {/* <Link>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link> */}
      </div>
    </header>
  );
}

export default Header;
