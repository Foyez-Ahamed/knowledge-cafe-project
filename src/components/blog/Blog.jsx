import { FaBeer, FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleBookmarks, handleReadingTime}) => {
    // console.log(blog);
    const {id, cover, title , author, author_img, reading_time, posted_date, hashtags} = blog || {};
    return (
        <div className="mb-8">
            <img className="mb-3 rounded-lg" src={cover} alt={`cover picture of the title ${title}`} />

            <div className="flex justify-between items-center py-4">
                {/* author */}
            <div className="flex items-center">
                <img className="w-[60px] h-[60px] rounded-full" src={author_img} alt="" />

                <div className="ml-2">
                    <p className="font-bold">{author}</p>
                    <span>{posted_date}</span>
                </div>
            </div>

            {/* reading time */}

            <div className='flex items-center'>
                <span>{reading_time} min read</span>
                <button onClick={() => handleBookmarks(blog)} className='ml-2 text-gray-600'><FaBookmark></FaBookmark></button>
            </div>
            </div>

            <h1 className="text-4xl font-semibold leading-[55px]">{title}</h1>

            <p className="text-blue-400">
                {
                    hashtags.map((hash, index) => <span key={index}> <a href="">#{hash} </a> </span>)
                }
            </p>

            <button onClick={() => handleReadingTime(id,reading_time)} className='mt-4 text-[#6047EC] underline'>Mark as read</button>
        </div>
    );
};

export default Blog;