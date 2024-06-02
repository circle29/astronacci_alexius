"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";
import MembershipModal from "./MembershipModal";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isSignedIn } = useUser();

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="flex items-center justify-between bg-[#EEEEEE] p-5 w-full">
      <div>
        <Link className="bold-24 text-black" href="/">
          Astronacci App
        </Link>
      </div>
      <div className="mx-5 borber border-black flex flex-row">
        {isSignedIn ? (
          <button
            className="rounded-lg bg-white mx-3 p-2 flex items-center justify-center hover:bg-black hover:text-white"
            onClick={handleClick}
          >
            Membership
          </button>
        ) : (
          <p></p>
        )}
        {isModalOpen && (
          <MembershipModal isOpen={isModalOpen} onClose={closeModal} />
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
