import Bomark from "../bookmark/Bomark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 bg-slate-100">

            <h1 className="mb-4 text-2xl text-[#6047EC]">Spent time on read : {readingTime}  min</h1>
            
            <h1 className="text-2xl">Bookmarked Blogs: {bookmarks.length}</h1>

            {
                bookmarks.map((bookmark, index) => <Bomark bookmark = {bookmark} key={index}></Bomark>)
            }
        </div>
    );
};

export default Bookmarks;