"use client";
import React, { useState, useEffect } from "react";
import Loading_user from "@/components/comps/loading/loading_user";
import NotFound_user from "@/components/comps/NotFound/NotFound_user";
import axios from "axios";
import { useCurrentUser } from "@/hooks/use-current-user";
import { GoHeartFill } from "react-icons/go";
import { LuReply } from "react-icons/lu";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";

interface Profile {
  id: any;
  image: string;
  name: string;
  username: string;
  bio: string;
  isTwoFactorEnabled: boolean;
  receivedMessages: {
    id: string;
    content: string;
    senderId: string;
    createdAt: string;
    updatedAt: string;
    isPublic: boolean;
    senderUsernameId: string;
  }[];
  sentMessages: {
    id: string;
    content: string;
    senderId: string;
    createdAt: string;
    updatedAt: string;
    isPublic: boolean;
  }[];
}

async function getPostsDataById(postId: string): Promise<Profile> {
  const res = await fetch(`https://rsalaco.vercel.app/api/posts/${postId}`, {
    cache: "no-store",
  });
  return res.json();
}

const U: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const user = useCurrentUser();
  const [profiles, setProfiles] = useState<Profile | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getPostsDataById(params.slug);
      setProfiles(data);
    };

    fetchData();
  }, [params.slug]);

  const defaultReceiverId = profiles?.id;

  const [inputs, setInputs] = useState({
    content: "",
    receiverId: defaultReceiverId,
    senderId: "",
    senderUsernameId: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [isUserExists, setIsUserExists] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    setIsUserExists(!!user);
    setIsChecked(!user);
  }, [user]);

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { content, receiverId } = inputs;
    const senderId = isChecked || !isUserExists ? "مجهول" : user?.id || "";
    const senderUsernameId =
      isChecked || !isUserExists ? "مجهول" : user?.username || "";

    axios
      .post("https://rsalaco.vercel.app/api/posts", {
        content,
        receiverId,
        senderId,
        senderUsernameId,
      })
      .then((res) => {
        setShowMessage(true);
        toast({
          title: "The message was sent successfully",
        });

        setTimeout(() => {
          setShowMessage(false);
        }, 3000);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setInputs({
          content: "",
          receiverId: defaultReceiverId,
          senderId: "",
          senderUsernameId: "",
        });
      });
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((prevState) => ({ ...prevState, [name]: value }));
  };

  // const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setIsChecked(e.target.checked);
  // };
  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  if (profiles === null) {
    return <Loading_user />;
  }

  if (profiles?.username == null) {
    return <NotFound_user />;
  }

  return (
    <main className="pt-5 flex justify-center items-center">
      <div className="min-w-[600px] bg-300  my-10">
        <div className="">
          <div className="flex flex-row items-center">
            <div className="w-28 bg-gray-200 h-24 rounded-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profiles.image}
                srcSet={profiles.image}
                alt={`${profiles.image}`}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="basis-full mt-5">
              <div className="basis-full flex flex-row justify-end space-x-2 *:rounded-xl">
                <div className=" text-2xl font-medium flex justify-end items-center">
                  <h1>{profiles.name}</h1>
                </div>
              </div>
              <div className="basis-full flex flex-row justify-end space-x-2 *:rounded-xl">
                <div className="  flex justify-end items-center">
                  <h1>@{profiles.username}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="basis-full *:rounded-xl mt-2">
            <div className="  flex justify-end items-center text-right">
              <p className="mt-1">
                {profiles.bio ||
                  "لا يُدركُ قدرُ الإنسانِ إلاّ بعدَ معرفةِ ما في الكونِ من مخلوقاتٍ"}
              </p>
            </div>
          </div>
          <div className="basis-full flex flex-row justify-end space-x-5 *:rounded-xl mt-4">
            <div className=" flex justify-end items-center hover:text-blue-500">
              {/* <p>https://fb.com/muhammad</p> */}
            </div>
            <div className=" flex justify-end items-center hover:text-blue-500">
              {/* <p>https://rsala.co/muhammad</p> */}
            </div>
          </div>
          <div className="flex items-center space-x-3 w-full mt-4">
            <div className="h-10 bg-[#101010] rounded-lg dark:bg-gray-700 w-full flex justify-center items-center text-lg font-normal text-white">
              Follow
            </div>
            <div className="h-10 bg-[#101010] rounded-lg dark:bg-gray-600 w-full flex justify-center items-center text-lg font-normal text-white">
              Share Profile
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="flex items-center w-full mt-6">
              <div className="w-full">
                <textarea
                  name="content"
                  value={inputs.content}
                  onChange={handleChange}
                  placeholder="Whay, Who, Love you......."
                  className="w-full h-32  rounded-lg  border border-[#101010] focus-within:border-emerald-600 p-3 outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex items-center w-full mt-1">
              <input
                type="text"
                name="senderId"
                placeholder="senderId"
                value={isChecked || !isUserExists ? "مجهول" : user?.id || ""}
                onChange={handleChange}
                className="hidden"
              />
              <input
                type="text"
                name="senderUsernameId"
                placeholder="senderUsernameId"
                value={
                  isChecked || !isUserExists ? "مجهول" : user?.username || ""
                }
                onChange={handleChange}
                className="hidden"
              />
              <input
                type="text"
                name="receiverId"
                placeholder="receiverId"
                value={(inputs.receiverId = defaultReceiverId)}
                onChange={handleChange}
                className="hidden"
                required
              />
              {showMessage && <div>تم</div>}
            </div>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center">
                <Switch
                  checked={isChecked}
                  onCheckedChange={handleCheckboxChange}
                  disabled={!isUserExists}
                  aria-readonly
                />
                {isChecked ? <span className="font-medium text-lg mx-2">مجهول</span> : "غير مجهول"}
              </div>

              <div className=" bg-gray-200 rounded-lg dark:bg-gray-700 w-32">
                <Toaster />
                <Button
                  className="h-full hover:bg-emerald-600 text-white hover:text-white bg-[#101010] rounded-lg  w-full"
                  variant="outline"
                  type="submit"
                >
                  إرسال
                </Button>
              </div>
            </div>
          </form>

          <div className="flex justify-end w-full mt-5">
            <div className=" mr-2 mt-5">
              <p className="text-xl font-medium text-right">الرسائل المنشورة</p>
            </div>
          </div>

          <div className="w-full">
            <div className=" mt-5">
              {profiles.receivedMessages &&
                profiles.receivedMessages
                  .filter((message) => message.isPublic === true)
                  .map((message) => (
                    <div key={message.id}>
                      <div className="w-full bg-neutral-100 rounded-lg h-full p-2 text-primary">
                        <h1 className="font-medium text-base ">
                          {message.content}
                        </h1>
                        <div className="mt-3">
                          <div className="flex justify-between w-full">
                            <div className="flex flex-row space-x-2">
                              <div className="basis-20 rounded-full flex items-center space-x-2 cursor-pointer hover:text-rose-500 text-xl">
                                <GoHeartFill />
                                <span className="text-base textbla">153</span>
                              </div>
                              <div className="basis-20 rounded-full flex items-center space-x-2 cursor-pointer hover:text-emerald-500 text-xl">
                                <LuReply />
                                <span className="text-base textbla">share</span>
                              </div>
                            </div>
                            <Link href={message.senderUsernameId}>
                              <p>{message.senderUsernameId}</p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <form className="pt-52 grid" onSubmit={handleSubmit}>
          <input
            type="text"
            name="content"
            placeholder="content"
            value={inputs.content}
            onChange={handleChange}
          />
          <input
            type="text"
            name="receiverId"
            placeholder="receiverId"
            value={(inputs.receiverId = defaultReceiverId)}
            onChange={handleChange}
          />
          <input
            type="text"
            name="senderId"
            placeholder="senderId"
            value={isChecked || !isUserExists ? "مجهول" : user?.id || ""}
            onChange={handleChange}
          />
          <input
            type="text"
            name="senderUsernameId"
            placeholder="senderUsernameId"
            value={isChecked || !isUserExists ? "مجهول" : user?.username || ""}
            onChange={handleChange}
          />
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            disabled={!isUserExists}
          />

          <input type="submit" value="submit" />
        </form>
        {showMessage && <div>تم</div>}
      </div> */}
    </main>
  );
};

export default U;
