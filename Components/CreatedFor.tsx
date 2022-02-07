const CreatedFor = () => {
const url = process.env.NEXT_PUBLIC_BLOG_URL
const author = process.env.NEXT_PUBLIC_MY_NAME
const twitter = process.env.NEXT_PUBLIC_MY_TWITTER
    return (
        <div className="text-center w-72 mx-auto text-sm mt-8">
            <p>
                This project was created for <a href={url} className="text-blue-500 hover:underline cursor-pointer" target="_blank" rel="noreferrer">a blog post</a>
            </p>
            <p>
                written by <span><a href={twitter} target="_blank" className="text-blue-500 hover:underline cursor-pointer" rel="noreferrer">{author}</a></span>
            </p>
        </div>
      
    )
}

export default CreatedFor