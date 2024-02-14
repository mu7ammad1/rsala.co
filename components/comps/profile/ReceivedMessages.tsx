"use client";
import React, { useState, useEffect } from "react";
import ViewMessages from "../ViewMessages/ViewMessages";

interface Profile {
  receivedMessages: {
    id: string;
    content: string;
    img1: string;
    img2: string;
    img3: string;
    img4: string;
    img5: string;
    img6: string;
    img7: string;
    img8: string;
    img9: string;
    img10: string;
    img11: string;
    img12: string;
    createdAt: string;
    updatedAt: string;
    isPublic: boolean;
    senderUsernameId: string;
    senderId: string;
    receiverId: string;
  }[];
}

async function getPostsDataById(postId: string): Promise<Profile> {
  const res = await fetch(`https://rsalaco.vercel.app/api/posts/${postId}`, {
    cache: "no-store",
  });
  return res.json();
}

export default function ReceivedMessages(params: { slug: any }) {
  const [profiles, setProfiles] = useState<Profile | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPostsDataById(params.slug);
      setProfiles(data);
    };

    fetchData();
  }, [params.slug]);

  if (profiles === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-full space-y-3">
          {profiles.receivedMessages &&
            profiles.receivedMessages.map((message) => (
              <div key={message.id}>
                <ViewMessages rsala={message.content} username={message.senderUsernameId} picture={message.id} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
