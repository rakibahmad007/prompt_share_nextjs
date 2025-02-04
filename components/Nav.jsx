"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/client";
const Nav = () => {
  return (
    <nav className="flex-betweem w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/logo.png" width={50} height={50} alt="logo" />
        <h1 className="text-2xl">PromptShare</h1>
        <Image 
        src="/assets/images/logo.png" 
        alt="logo" 
        width={50} 
        height={50} 
        />
      </Link>
    </nav>
  );
};

export default Nav;
