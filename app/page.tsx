import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import { auth } from "@/auth";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["700"]
})


export default async function Home() {
  const session = await auth();
  if (session?.user) {
    return (
      <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        <Link href={`/settings`}>
          <Button >
            Go Setting
          </Button>
        </Link>
      </main>
    )
  } else {
    return (
      <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
        <div className="space-y-6 text-center">
          <h1 className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className,
          )}>
            🔐 Auth
          </h1>
          <p className="text-white text-lg">
            A simple authentication service
          </p>
          <div>
            <LoginButton mode="modal" asChild>
              <Button variant="secondary" size="lg">
                Sign in
              </Button>
            </LoginButton>
          </div>
        </div>

      </main>
    )
  }
}
