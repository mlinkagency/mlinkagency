"use client";

import React from "react";
import { WhatsappLogo } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";

import mlinklogo from "../../public/mlinklogo.svg";

function Navbar() {
  return (
    <nav className="bg-zinc-900 px-4 py-12">
      <div className="container lg:px-40 mx-auto flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src={mlinklogo}
              alt="Picture of the author"
              width={50}
              height={50}
            />
            <span className="text-white text-xl ml-4 font-semibold">
              M-LINK <strong className="text-blue-500 font-black text-sm">AGENCY</strong>
            </span>
          </div>
        </Link>

        <Link
          href="https://wa.me/5511934110891?text=Ol%C3%A1%2C+gostaria+de+conversar+com+a+M-LINK+Agency%21"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-full flex items-center"
        >
          <WhatsappLogo size={24} className="mr-2" />
          Whatsapp
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
