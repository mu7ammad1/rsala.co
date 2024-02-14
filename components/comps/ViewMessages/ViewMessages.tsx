import { GoHeartFill } from "react-icons/go";
import { LuReply } from "react-icons/lu";
import { CiMenuKebab } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";

export default function ViewMessages({ rsala, liked, username }: any) {
  return (
    <div className="w-full bg-neutral-100 rounded-lg h-full p-2 text-primary">
      <h1 className="font-medium text-base ">{rsala}</h1>
      <div className="mt-3">
        <div className="flex justify-between w-full">
          <div className="flex flex-row space-x-5">
            <div className="basis-20 rounded-full flex items-center space-x-2 cursor-pointer hover:text-rose-500 text-xl">
              <GoHeartFill />
              <span className="text-sm textbla">{liked}</span>
            </div>
            <div className="basis-20 rounded-full flex items-center space-x-2 cursor-pointer hover:text-emerald-500 text-xl">
              <LuReply />
              <span className="text-base textbla">share</span>
            </div>
          </div>
          <Link href={username}>
            <p>{username}</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
