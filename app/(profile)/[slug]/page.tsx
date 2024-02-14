"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Loading_user from "@/components/comps/loading/loading_user";
import NotFound_user from "@/components/comps/NotFound/NotFound_user";
import axios from "axios";
import { Toaster } from "@/components/ui/toaster";
import { useCurrentUser } from "@/hooks/use-current-user";
import { GoHeartFill } from "react-icons/go";
import { LuReply } from "react-icons/lu";

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
  const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
    cache: "no-store",
  });
  return res.json();
}

const U: React.FC<{ params: { slug: string } }> = ({ params }) => {

  const user = useCurrentUser();
  const [profiles, setProfiles] = useState<Profile | null>(null);

 

  
    const bbbb = user?.username || "rsala";
    const cccc = user?.id || "rsala";
    const aaaa = profiles?.id
    const [formData, setFormData] = useState({
      content: "",
      img1: null,
      img2: null,
      img3: null,
      img4: null,
      img5: null,
      img6: null,
      img7: null,
      img8: null,
      img9: null,
      img10: null,
      img11: null,
      img12: null,
      senderId: `${cccc}` || user?.id,
      senderUsernameId: user?.username || `${bbbb}`,
      receiverId: `${aaaa}` || profiles?.id,
    });

  const handleChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/posts", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };


  

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPostsDataById(params.slug);
      setProfiles(data);
    };

    fetchData();
  }, [params.slug]);

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
                  value={formData.content}
                  onChange={handleChange}
                  placeholder="Whay, Who, Love you......."
                  className="w-full h-32  rounded-lg  border border-[#101010] focus-within:border-emerald-600 p-3 outline-none"
                  required
                />
              </div>
            </div>
            <div className="flex items-center w-full mt-6">
              <input
                type="text"
                name="senderId"
                placeholder="Sender ID "
                value={formData.senderId || ""}
                onChange={handleChange}
                className="hidden"
              />
              <input
                type="text"
                name="senderUsernameId"
                placeholder="Sender Username ID"
                value={formData.senderUsernameId || ""}
                onChange={handleChange}
                className="hidden"
              />
              <input
                type="text"
                name="receiverId"
                placeholder="Receiver ID"
                className="hidden"
                value={formData.receiverId || aaaa }
                onChange={handleChange}
                required
              />
              <h1>{profiles.id}</h1>
            </div>
            <div className="flex items-center w-full mt-0">
              <div className=" bg-gray-200 rounded-lg dark:bg-gray-700 w-32">
                <Toaster />
                <Button
                  className="h-full hover:bg-emerald-600 text-white hover:text-white bg-[#101010] rounded-lg  w-full"
                  variant="outline"
                  type="submit"
                >
                  Send
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
              {/* 
              {profiles.sentMessages &&
                profiles.sentMessages
                  .filter((message) => message.isPublic === true)
                  .map((message) => (
                    <div key={message.id}>
                      <p>Sent Message: {message.content}</p>
                      <p>To: {message.senderId}</p>
                      <p>Created At: {message.createdAt}</p>
                    </div>
                  ))} */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default U;
