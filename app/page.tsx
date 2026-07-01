"use client";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/sidebar";

import { useState } from "react";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="m-0 w-screen h-screen bg-[rgb(147,111,158)]">
      <Navbar
        onToggle={() => {
          setIsOpen(!isOpen);
        }}
      ></Navbar>
      <Sidebar
        toggle={isOpen}
        onClose={() => {
          setIsOpen(!isOpen);
        }}
      ></Sidebar>
    </div>
  );
}
