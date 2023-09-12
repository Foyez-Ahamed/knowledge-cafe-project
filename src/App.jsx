import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  return (

    <>
      <Header></Header>
      <div className='flex justify-between items-center py-12 px-10 gap-6'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </div>
    </>

  )
}

export default App
