'use client'
import React, { useState, useEffect } from "react";

interface Profile {
  receivedMessages: {
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
    return <div>Loading...</div>
  }

  return (
    <main className="mx-5">
      <div className="flex justify-center">
        <div>
          {profiles.receivedMessages &&
            profiles.receivedMessages.map((message) => (
              <div key={message.id} className="bg-rose-500 text-white">
                <p>{message.content}</p>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
