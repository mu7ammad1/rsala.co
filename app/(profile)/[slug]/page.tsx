"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Loading_user from "@/components/comps/loading/loading_user";
import NotFound_user from "@/components/comps/NotFound/NotFound_user";

interface Profile {
  image: string;
  name: string;
  username: string;
  bio: string;
  // add any other fields you expect from the API response
}

async function getPostsDataById(postId: string): Promise<Profile> {
  const res = await fetch(`https://rsalaco.vercel.app/api/posts/${postId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}

const U: React.FC<{ params: { slug: string } }> = ({ params }) => {
  const [profiles, setProfiles] = useState<Profile | null>(null);

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
  
      return (
        <NotFound_user />
      );}

  return (
    <main className="mx-5">
      <div className="flex justify-center">
        <div className="w-[700px] mt-8 rounded-md ">
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
              <h1 className="text-lg font-normal text-gray-800">
                @{profiles.username}
              </h1>
              <p className="mt-1">{profiles.bio}</p>
              <div className="flex justify-end space-x-3 mt-4 ">
                <Link href={`#`}>
                  <p className="text-[#101010] rounded-md">hello LINK</p>
                </Link>
                <Link href={`#`}>
                  <p className="text-[#101010] rounded-md">hello LINK</p>
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
            <textarea
              name="textarea"
              placeholder="Enter massages"
              className="bg-gray-200 h-32 mt-3 p-3 rounded-md w-full outline-none flex jc"
            />
            <Button className="bg-[#101010] hover:bg-[#303030] w-32 text-lg mt-2">
              Send
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default U;
