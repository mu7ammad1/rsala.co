import Image from "next/image";
import Logo from "@/assets/Rsala.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Social } from "@/components/auth/social";
import { LoginButton } from "@/components/auth/login-button";

export default function Navbar() {
  return (
    <main className="absolute w-full">
      <div className="px-5 py-2   *:font-normal *:text-sm flex justify-between items-center">
        <div className="flex gap-5">
          <Link
            href={"/privacy-policy"}
            className=" text-xl decoration-slice decoration-1 underline-offset-8 capitalize hover:underline "
          >
            RSALA.co
          </Link>
        </div>
        <div className="flex gap-5">
          <LoginButton mode="modal" asChild>
            <Button
              variant="secondary"
              className="px-10  text-lg py-5 rounded-full"
            >
              تسجيل الدخول
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
