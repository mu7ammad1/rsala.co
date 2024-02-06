import Image from "next/image";
import React from "react";
import image from "@/assets/N4531AZ_23AU_GR361_02_02.webp";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const profile = {
  image: image,
  name: "muhammad osama",
  username: "mu7ammad",
  bio: "البشرية ليست وحدها في هذا الكون, البشرية ليست وحدها في هذا الكون, البشرية ليست وحدها في هذا الكون, البشرية ليست وحدها في هذا الكون",
  links: {
    link1: "fb.com/mu7ammad",
    link2: "tw.com/mu7ammad",
  },
};
async function getPostsDataById(postId: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/posts/${postId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.json();
}
export default async function U({ params }: { params: { slug: string } }) {
  const user = await getPostsDataById(params.slug);
  return (
    <main className="mx-5">
      <div className="flex justify-center">
        <div className="w-[700px] mt-8 rounded-md ">
          <div className="flex flex-row">
            {/* <Image
              src={user.image}
              alt={`profile-${user.image}`}
              className="w-[130px] h-[130px] basis-1/4 rounded-full outline outline-2 outline-white object-contain object-center"
            /> */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={user.image}
              alt="img"
              srcSet={user.image}
              className="w-[130px] h-[130px] basis-1/4 rounded-full outline outline-2 outline-white object-contain object-center"
            />
            <div className="text-right basis-full ">
              <h1 className="text-3xl font-medium">{user.name}</h1>
              <h1 className="text-lg font-normal text-gray-800">
                @{user.username}
              </h1>
              <p className="mt-1">{user.bio|| "No asfj kjsafjhlakd dh No asfj kjsafjhlakd dh kajhdkhNo asfj kjsafjhlakd dh kajhdkh "}</p>
              <div className="flex justify-end space-x-3 mt-4 ">
                <Link href={profile.links.link1}>
                  <p className="text-[#101010] rounded-md">
                    {profile.links.link1}
                  </p>
                </Link>
                <Link href={profile.links.link2}>
                  <p className="text-[#101010] rounded-md">
                    {profile.links.link2}
                  </p>
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
}
