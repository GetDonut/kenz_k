"use client";
import MenuIcon from "@mui/icons-material/Menu";
type NavbarProps = {
  onToggle: () => void;
};
export default function Navbar({ onToggle }: NavbarProps) {
  return (
    <>
      <div
        className="
    top-0 
    left-0 
    w-screen h-1/12
     bg-[#c4a3cf]
     border-b-[rgb(145,100,162)]
     border-b-4
     flex justify-start items-center shadow-2xl
     "
      >
        <MenuIcon fontSize="large" onClick={onToggle} />
      </div>
    </>
  );
}
