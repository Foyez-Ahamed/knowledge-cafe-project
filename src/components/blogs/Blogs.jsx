import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handleBookmarks, handleReadingTime}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
           {
            blogs.map(blog => <Blog blog = {blog} key={blog.id} handleBookmarks = {handleBookmarks} handleReadingTime = {handleReadingTime}> </Blog>)
           }
        </div>
    );
};

export default Blogs;