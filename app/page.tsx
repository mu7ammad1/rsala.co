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
import AccordionSingle from "@/components/comps/Accordion/Accordionsingle";

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
      <main className={cn("-5 ", rubik.className)}>
        <div className="cover flex flex-col items-center bg-cover bg-no-repeat bg-center object-center h-full py-10 *:text-center *:font-normal">
          <h1 className="text-5xl font-semibold text-white mt-12 mb-5">
            ارسل رسالة بشكل مجهول
          </h1>
          <h1 className="text-xl font-semibold text-white mb-12 mt-2">
            رساله يساعدك في الحصول على نقد بناء مع المحافظة على سرية هوية الناقد
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
            <Social />
          </div>
        </div>

        {/* Hidden elememt */}
        <div className="py-10 bg-emerald-500 hidden">
          <h1 className="text-center text-base mb-5">Get the app</h1>
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

        <div className="py-10 bg-amber-500 hidden">
          <h1 className="text-center text-base mb-5">Get the app</h1>
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

        <div className="flex justify-center items-center bg-emerald-500">
          <div className="w-[500px] max-md:w-full max-md:mx-16 max-sm:mx-5 my-10">
            <h1
              className={cn(
                "text-3xl font-semibold text-center py-5 ",
                rubik.className
              )}
            >
              اسئلة شائعة
            </h1>
            <AccordionSingle />
          </div>
        </div>
      </main>
    );
  }
}
