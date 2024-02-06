
async function getPostsData() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/posts`)
    return res.json()
}

const Posts = async () => {

    const postss = await getPostsData()

    return(
        <div className={`w-96`}>
            <h1 className={` text-xl text-center bg-[#101010] text-white font-bold rounded-md m-5`}>posts</h1>
            <ul>
                {
                    postss.map( post => (
                        <div key={post.id} className={`flex flex-col gap-5`}>
                            <h1>{post.username}</h1>
                        </div>
                    ))
                }
            </ul>
        </div>
    )
}


export default Posts