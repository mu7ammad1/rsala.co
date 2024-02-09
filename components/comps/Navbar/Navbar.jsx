import Image from "next/image";
import Logo from "@/assets/Rsala.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  return (
    <main className="m-5 px-5 bg-blue-500">
      <div className="flex flex-row px-5 py-0 bg-blue-500">
        <div className="basis-1/2 flex justify-start py-0 px-5">
          <Link href={`/`}>
            <Image src={Logo} alt="rsala.co" width={150} />
          </Link>
        </div>
        <div className="basis-1/2 justify-end flex items-center space-x-2 px-5">
          <Link href={`/settings`}>
            <Button className="text-base bg-white shadow-none hover:bg-white text-black *:hover:text-blue-500 "><p className="*:hover:text-blue-500 ">Who we</p></Button>
          </Link>
          <Link href={`/settings`}>
            <Button className="text-base bg-white shadow-none hover:bg-white text-black *:hover:text-blue-500 "><p className="*:hover:text-blue-500 ">Privacy</p></Button>
          </Link>
          <Link href={`/settings`}>
            <Button className="text-base bg-white shadow-none hover:bg-white text-black *:hover:text-blue-500 "><p className="*:hover:text-blue-500 ">Help</p></Button>
          </Link>
        </div>
      </div>
    </main>
  );
}
