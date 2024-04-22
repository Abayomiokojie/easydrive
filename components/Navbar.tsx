import Link from "next/link";
import Image from "next/image";

import CustomButton from "./CustomButton";

const NavBar = () => (
  <header className="w-full absolute z-10">
    <nav className="max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-transparent">
      <Link
        href="/"
        className="flex items-end scale-[0.8] justify-start origin-top-left sm:scale-100"
      >
        <Image
          src="/carhub2.png"
          alt="logo"
          width={118}
          height={18}
          className="object-contain h-12 w-fit"
        />
        <span className="sm:text-2xl text-lg font-bold font-inter ">
          EasyDrive
        </span>
      </Link>

      <CustomButton
        title="Sign in"
        btnType="button"
        containerStyles="text-red-700 rounded-full xl:bg-white bg-slate-300/30 font-bold min-w-[130px] hover:bg-slate-200 transition-colors lg:hover:bg-red-800 lg:hover:text-white scale-[0.74] sm:scale-[1]"
      />
    </nav>
  </header>
);

export default NavBar;
