"use client"
import React, { useState, useEffect } from "react";

async function getPostsData() {
  const res = await fetch(`http://localhost:3000/api/posts`);
  return res.json();
}

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // حالة التحميل

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPostsData();
      setPosts(data);
      setLoading(false); // عندما تنتهي عملية التحميل
    };

    fetchData();
  }, []); // يتم استدعاء useEffect مرة واحدة فقط عند التحميل الأولي للمكون

  return (
    <div className={`w-96`}>
      <h1 className={` text-xl text-center bg-[#101010] text-white font-bold rounded-md m-5`}>
        posts
      </h1>
      {loading ? (
        <div>Loading...</div> // عنصر التحميل يظهر أثناء التحميل
      ) : (
        <ul>
          {posts.map((post) => (
            <div key={post.id} className={`flex flex-col gap-5`}>
              <h1>{post.username}</h1>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Posts;