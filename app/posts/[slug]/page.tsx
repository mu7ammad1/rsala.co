
async function getPostsDataById(postId: string) {
  const res = await fetch(`${process.env.URL_RSASLA}/api/posts/${postId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Methods": "GET",
    },
  });
  return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
  const postss = await getPostsDataById(params.slug);
  console.log(postss);
  return (
    <div>
      My Post: {params.slug}
      <div className={`w-96`}>
        <h1
          className={` text-xl text-center bg-[#101010] text-white font-bold rounded-md m-5`}
        >
          posts
        </h1>
        <div className="grid grid-cols-1">
          <span>{postss.username}</span>
        </div>
      </div>
    </div>
  );
}
