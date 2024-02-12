"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Loading_user from "@/components/comps/loading/loading_user";
import NotFound_user from "@/components/comps/NotFound/NotFound_user";
import FormSendMessage from "@/components/comps/FormSendMessage/FormSendMessage";
import axios from "axios";

interface Profile {
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

interface Inputs {
  content: string;
  senderId: string;
  receiverId: string;
}

async function getPostsDataById(postId: string): Promise<Profile> {
  const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
    cache: "no-store",
  });
  return res.json();
}

const U: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const [profiles, setProfiles] = useState<Profile | null>(null);

  const [inputs, setInputs] = useState<Inputs>({
    content: "",
    senderId: "rsala",
    receiverId: params.slug,
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    axios
      .post("api/posts", inputs)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setInputs({} as Inputs);
      });
    console.log(inputs);
    setInputs({} as Inputs);
  };
  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prevState) => ({ ...prevState, [name]: value }));
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
    <main className="mx-5">
      <div className="flex justify-center">
        <div className="w-[600px] mt-8 rounded-md ">
          <div className="flex flex-row">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={profiles.image}
              alt="img"
              srcSet={profiles.image}
              className="w-[130px] h-[130px] basis-1/4 rounded-full outline outline-2 outline-white object-cover object-center"
            />
            <div className="text-right basis-full ">
              <h1 className="text-3xl font-medium">{profiles.name}</h1>
              <h1 className="text-lg font-normal">@{profiles.username}</h1>
              <p className="mt-1">{profiles.bio}</p>
              <div className="flex justify-end space-x-3 mt-4 ">
                <Link href={`#`}>
                  <p className="rounded-md">hello LINK</p>
                </Link>
                <Link href={`#`}>
                  <p className="rounded-md">hello LINK</p>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-3">
            <Button className="bg-[#c38b8b] hover:bg-[#202020] w-full text-lg">
              Follow
            </Button>
          </div>

          <div className="">
            <form className="" onSubmit={handleSubmit}>
              <textarea
                name="content"
                value={inputs.content || ""}
                onChange={handleChange}
                placeholder="Enter massages"
                className="bg-[#191919] h-32 mt-3 p-3 rounded-md w-full outline-none "
              ></textarea>
              <input
                type="text"
                placeholder="senderId"
                name="senderId"
                value={inputs.senderId || "rsala"}
                onChange={handleChange}
                className="bg-slate-300"
              />
              <input
                type="text"
                placeholder="receiverId"
                name="receiverId"
                value={inputs.receiverId || params.slug}
                onChange={handleChange}
                className="bg-fuchsia-400"
              />
              <Button
                type="submit"
                className="bg-[#101010] hover:bg-[#303030] w-32 text-lg mt-2"
              >
                Send
              </Button>
            </form>
          </div>
          <div>
            {profiles.receivedMessages &&
              profiles.receivedMessages
                .filter((message) => message.isPublic === true)
                .map((message) => (
                  <div key={message.id} className="bg-black text-white">
                    <p>{message.content}</p>
                  </div>
                ))}

            {profiles.sentMessages &&
              profiles.sentMessages
                .filter((message) => message.isPublic === true)
                .map((message) => (
                  <div key={message.id}>
                    <p>Sent Message: {message.content}</p>
                    <p>To: {message.senderId}</p>
                    <p>Created At: {message.createdAt}</p>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default U;