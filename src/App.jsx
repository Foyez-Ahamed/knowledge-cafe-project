import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = blog => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }

  const handleReadingTime = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);

    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id !== id);

    setBookmarks(remainingBookmark);
  }

  return (

    <>
      <Header></Header>
      <div className='flex justify-between  py-12 px-10 gap-6'>
      <Blogs handleBookmarks = {handleBookmarks} handleReadingTime = {handleReadingTime}></Blogs>
      <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
      </div>
    </>

  )
}

export default App
