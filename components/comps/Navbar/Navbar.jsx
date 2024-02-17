import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LoginButton } from "@/components/auth/login-button";
import { Playfair_Display } from "next/font/google";
import { auth } from "@/auth";

import { cn } from "@/lib/utils";

const font = Playfair_Display({
  subsets: ["vietnamese"],
  weight: ["800"],
});

export default async function Navbar() {
  const session = await auth();

  return (
    <main className="w-full">
      <div className="px-5 py-2   *:font-normal *:text-sm flex justify-between items-center">
        <div className="flex gap-5">
          <Link
            href={"/"}
            className={cn(
              "text-3xl font-semibold decoration-slice decoration-1 underline-offset-8 hover:underline ",
              font.className
            )}
          >
            Rsala.co
          </Link>
        </div>
        {session ? (
          // If user is logged in
          <div className="flex gap-5">
            <Link href={`/settings`}>
              <Button variant="secondary" className="text-lg py-5 rounded-lg">
                Profile
              </Button>
            </Link>
          </div>
        ) : (
          // If user is not logged in
          <div className="flex gap-5">
            <LoginButton mode="modal" asChild>
              <Button variant="secondary" className="text-lg py-5 rounded-lg">
                تسجيل الدخول
              </Button>
            </LoginButton>
          </div>
        )}
      </div>
    </main>
  );
}
