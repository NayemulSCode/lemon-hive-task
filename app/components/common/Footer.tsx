import logo from "@/public/brand-icon/white-logo.png";
import facebook from "@/public/socila-icon/facebook.png";
import linkedIn from "@/public/socila-icon/linked-in.png";
import WW from "@/public/socila-icon/world-wide.png";
import x from "@/public/socila-icon/x.png";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-[#111D5E] text-white  grid justify-items-center grid-flow-row items-center">
      <Image src={logo} alt="logo" className="py-16" />
      <div className="grid grid-flow-col justify-items-center">
        {" "}
        <Link href="#" className="text-white hover:underline">
          <Image className="w-6" src={x} alt="x" />
        </Link>
        <Link href="#" className="text-white ml-4">
          <Image className="w-6" src={linkedIn} alt="linked-in" />
        </Link>
        <Link href="#" className="text-white ml-4">
          <Image className="w-6" src={facebook} alt="linked-in" />
        </Link>
        <Link href="#" className="text-white ml-4">
          <Image className="w-6" src={WW} alt="world-wide" />
        </Link>
      </div>
      
      <h3 className="my-5">© 2033 Lamehive. All rights reserved.</h3>
    </footer>
  );
};

export default Footer;
