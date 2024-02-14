import { Button } from "@/components/ui/button";
import ViewMessages from "../ViewMessages/ViewMessages";

export default function HeadProfile() {
    return (
      <main className="flex justify-center items-center">
        <div className="max-w-xl bg-300  mt-5">
          <div className="">
            <div className="flex flex-row items-center">
              <div className="w-28 bg-gray-200 h-24 rounded-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://cdn.pixabay.com/photo/2023/12/27/14/08/hortensia-8472151_1280.jpg" alt="dgv" className="w-full h-full rounded-full object-cover" />
              </div>
              <div className="basis-full mt-5">
                <div className="basis-full flex flex-row justify-end space-x-2 *:rounded-xl">
                  <div className=" text-2xl font-medium flex justify-end items-center">muhammad osama</div>
                </div>
                <div className="basis-full flex flex-row justify-end space-x-2 *:rounded-xl">
                  <div className="  flex justify-end items-center">@muhammad</div>
                </div>
              </div>
            </div>
                <div className="basis-full *:rounded-xl mt-2">
                  <div className="  flex justify-end items-center text-right">It seems like you have entered a combination of random letters and words. If you need assistance with a specific question or topic, please</div>
                </div>
                <div className="basis-full flex flex-row justify-end space-x-5 *:rounded-xl mt-4">
                  <div className=" flex justify-end items-center hover:text-blue-500">https://fb.com/muhammad</div>
                  <div className=" flex justify-end items-center hover:text-blue-500">https://rsala.co/muhammad</div>
                </div>
            <div className="flex items-center space-x-3 w-full mt-4">
              <div className="h-10 bg-[#101010] rounded-lg dark:bg-gray-700 w-full flex justify-center items-center text-lg font-normal text-white">Follow</div>
              <div className="h-10 bg-[#101010] rounded-lg dark:bg-gray-600 w-full flex justify-center items-center text-lg font-normal text-white">Share Profile</div>
            </div>
            <div className="flex items-center w-full mt-6">
              <div className="h-32   w-full">
                <textarea name="" id="" placeholder="Whay, Who, Love you......." className="w-full h-full  rounded-lg  border border-[#101010] focus-within:border-emerald-600 p-3 outline-none"></textarea>
              </div>
            </div>
            <div className="flex items-center w-full mt-3">
              <div className="h-10  bg-gray-200 rounded-lg dark:bg-gray-700 w-32">
                <Button className="h-full hover:bg-emerald-600  bg-[#101010] rounded-lg  w-full" >Send</Button>
              </div>
            </div>
            <div className="flex justify-end w-full mt-5">
              <div className="h-[2px] bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>
            </div>
            <div className="flex justify-end w-full mt-5">
              <div className=" mr-2 mt-5">
                <p className="text-xl font-medium text-right">الرسائل المنشورة</p>
              </div>
            </div>
            <div className="flex items-center w-full mt-5">
              <ViewMessages rsala={"sfa"} username= {"safjhkj"} liked={"515"} />
            </div>
            <div className="flex items-center w-full mt-5">
              <div className="h-52  bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>
            </div>
            <div className="flex items-center w-full mt-5">
              <div className="h-52  bg-gray-200 rounded-lg dark:bg-gray-700 w-full"></div>
            </div>
          </div>
        </div>
      </main>
    );
  }
  