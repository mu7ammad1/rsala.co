import { GoHeartFill  } from "react-icons/go";
import { LuReply } from "react-icons/lu";

export default function ViewMessages() {
  return (
    <div className="w-full border border-[#191919] rounded-lg h-full my-3 p-3">
      <h1 className="font-medium text-base ">
        My Message: A Seed of Change Flourishing in the Garden of Ideas My
        Message: A Seed of Change Flourishing in the Garden of Ideas My Message:
        A Seed of Change Flourishing in the Garden of Ideas My Message: A Seed
        of Change Flourishing in the Garden of Ideas
      </h1>
      <div className="flex flex-row mt-5 space-x-2">
        <div className="basis-20 rounded-full flex items-center space-x-2 cursor-pointer hover:text-rose-500 text-xl"> <GoHeartFill  /> <span className="text-base textbla">153</span></div>
        <div className="basis-20 rounded-full flex items-center space-x-2 cursor-pointer hover:text-emerald-500 text-xl"> <LuReply  /> <span className="text-base textbla">reply</span></div>
      </div>
    </div>
  );
}
