import { Playfair_Display } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Playfair_Display({
  subsets: ["vietnamese"],
  weight: ["800"],
});

interface HeaderProps {
  label: string;
};

export const Header = ({
  label,
}: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn(
        "text-4xl font-semibold",
        font.className,
      )}>
        Rsala.co
      </h1>
      <p className="text-muted-foreground text-sm">
        {label}
      </p>
    </div>
  );
};
