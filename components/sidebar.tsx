"use client";

type SidebarProps = {
  toggle: boolean;
  onClose?: () => void;
};

export default function Sidebar({ toggle, onClose }: SidebarProps) {
  return (
    <div className="flex flex-row overflow-hidden">
      <div
        id="blackBg"
        className={`w-full h-11/12 absolute bg-[rgba(45,0,62,0.5)] transition-opacity duration-300
        ${toggle ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={onClose}
      ></div>

      <div
        id="sidebar"
        className={`w-64 h-11/12 absolute bg-[rgb(145,100,162)] shadow-2xl 
        transition-all duration-300 ease-in-out 
        ${toggle ? "left-0" : "-left-64"}`}
      ></div>
    </div>
  );
}
