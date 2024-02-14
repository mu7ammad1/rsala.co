import { Poppins, Rubik } from "next/font/google";

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
import { Social } from "@/components/auth/social";
import image from "@/assets/2299884_lovemessage.png";

const rubik = Rubik({
  subsets: ["arabic"],
  weight: ["500"],
});

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    return (
      <main className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        <Link href={`/settings`}>
          <Button>Go Setting</Button>
        </Link>
      </main>
    );
  } else {
    return (
      <main className={rubik.className + `pt-5`}>
        <div className="cover flex flex-col items-center bg-cover bg-no-repeat bg-center object-center h-full py-10 *:text-center *:font-normal">
          <h1 className="text-5xl font-semibold text-white my-12">
            ارسل رسالة بشكل مجهول
          </h1>

          <div className="my-8">
            <LoginButton mode="modal" asChild>
              <Button
                variant="secondary"
                className="px-16  text-lg py-5 rounded-full"
              >
                تسجيل الدخول عبر الاميل
              </Button>
            </LoginButton>
          </div>
          <div className=" space-y-5 my-10 *:rounded-full">
            <h1 className="text-2xl font-medium text-white ">تسجيل مباشر</h1>
            <Social  />
          </div>
        </div>



        {/* Hidden elememt */}
        <div className="py-10 bg-emerald-500">
          <h1 className="text-center text-base mb-5">
            Get the app
          </h1>
          <div className="flex justify-center items-center gap-5">
            <Button variant="secondary" size="lg" className="gap-5">
              <FaGooglePlay className="text-xl" />
              <span>Google Play</span>
            </Button>
            <Button variant="secondary" size="lg" className="gap-5">
              <IoLogoAppleAppstore className="text-xl" />
              <span>Apple Store</span>
            </Button>
          </div>
        </div>



        <div className="px-5 py-2 bg-yellow-500  static bottom-0 *:font-normal *:text-sm flex justify-between items-center">
          <div className="flex gap-5">
            <Link
              href={"/privacy-policy"}
              className="decoration-slice decoration-1 underline-offset-8 capitalize hover:underline "
            >
              privacy policy
            </Link>
            <Link
              href={"/about"}
              className="hidden decoration-slice decoration-1 underline-offset-8 capitalize hover:underline "
            >
               about Rsala
            </Link>

            <Link
              href={"/terms"}
              className="hidden decoration-slice decoration-1 underline-offset-8 capitalize hover:underline "
            >
              Terms of use
            </Link>
            <Link
              href={"/contact"}
              className="decoration-slice decoration-1 underline-offset-8 capitalize hover:underline "
            >
              Contact us
            </Link>
          </div>
          <h1 className="text-center text-base">🍉🍉 ❤️ صنع في مصر</h1>
        </div>
      </main>
    );
  }
}
