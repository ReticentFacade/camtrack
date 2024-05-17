import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky h-14 z-[100] top-0 backdrop-blur-sm inset-x-0 w-full px-8 text-lg border-b rounded-b-md ">
      <MaxWidthWrapper className="">
        <div className="flex h-14 items-center justify-between">
          <div className="">
            <Link href="/">
              <span className="font-semibold">CamTrack</span>
            </Link>
          </div>

          <div className="flex justify-center space-x-10 mr-10">
            <div className="cursor-pointer">
              <Link href="/about">About</Link>
            </div>
            <div className="h-8 w-px bg-white hidden sm:block" />
            <div className="cursor-pointer">
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
