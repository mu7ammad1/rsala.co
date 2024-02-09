import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { auth } from "@/auth";
import Link from "next/link";
import { IoLogoAppleAppstore } from "react-icons/io5";
import { FaGoogle, FaGooglePlay } from "react-icons/fa6";
import Image from "next/image";
import img1 from "@/assets/2299884_lovemessage.png";
import { FaFacebook } from "react-icons/fa";

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    return (
      <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        <Link href={`/settings`}>
          <Button>Go Setting</Button>
        </Link>
      </main>
    );
  } else {
    return (
      <main className="flex flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        <div className={`space-y-6 text-center`}>
          <div className="flex flex-row items-center justify-center w-full max-sm:grid">
            <div className=" flex justify-center items-center w-full">
              <div className="mt-5">
                <h1 className="text-4xl mb-5 font-semibold text-white">
                  Sign in
                </h1>

                <div className=" *:m-1 *:text-xl *:bg-[#10101000] ">
                  <LoginButton mode="modal" asChild>
                    <Button
                      variant="secondary"
                      className="h-10 px-28 py-6 rounded-full text-white outline-1 outline outline-stone-300  hover:bg-[#10101000]"
                    >
                      <span>With Email</span>
                    </Button>
                  </LoginButton>
                </div>
                <div className=" *:m-1 *:text-xl *:bg-[#10101000] ">
                  <LoginButton mode="modal" asChild>
                    <Button
                      variant="secondary"
                      className="h-10 space-x-5 px-32 py-6 rounded-full text-white outline-1 outline outline-stone-300  hover:bg-[#10101000]"
                    >
                      <FaGoogle size='28px'/>
                      <span>Google</span>
                    </Button>
                  </LoginButton>
                </div>
                <div className=" *:m-1 *:text-xl *:bg-[#10101000] ">
                  <LoginButton mode="modal" asChild>
                    <Button
                      variant="secondary"
                      className="h-10 space-x-5  px-28 py-6 rounded-full text-white outline-1 outline outline-stone-300  hover:bg-[#10101000]"
                    >
                      <FaFacebook size='28px' />
                      <span>Facebook</span>
                    </Button>
                  </LoginButton>
                </div>
              </div>
            </div>
            <div className="space-x-4 my-5 basis-1/2 sm:basis-full max-sm:w-full w-1/2 max-sm:hidden">
              <Image src={img1} alt="rsala.co" className="w-96" />
            </div>
          </div>

          <div className="h-96 p-10 text-center">
            <h1 className="text-4xl mb-5 font-semibold text-white">
              Download App
            </h1>
            <div className="max-md:space-y-4 max-sm:space-x-0 space-x-6 *:m-1 *:text-xl *:bg-[#10101000] *:outline-1 *:outline *:outline-stone-300 hover:outline-black">
              <Button className="space-x-3 h-10 px-14 py-6 hover:outline-black">
                <FaGooglePlay className="text-3xl" />
                <p>Google Play</p>
              </Button>
              <Button className="space-x-3 h-10 px-14 py-6 hover:outline-black">
                <IoLogoAppleAppstore className="text-3xl" />
                <p>Apple Store</p>
              </Button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
