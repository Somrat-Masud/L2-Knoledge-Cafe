
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks,setBookmarks]=useState([])
  const [readingTime,setReadingTime]=useState(0)

  const handleAddToBookmarks = blog=>{
    const newBookmark = [...bookmarks,blog]
    setBookmarks(newBookmark)
  }

  const handleMarkAsRead = (time,id) =>{
    // console.log('dsfsd',time)
   const newReadingTime = readingTime + time;
   setReadingTime(newReadingTime)
  //  console.log('remove is ',id)
  const reamainnigBookmark = bookmarks.filter(bookmark=>bookmark.id !==id);
  setBookmarks(reamainnigBookmark)
  }

  return (
    <>
      
<Header></Header>
<div  className='md:flex max-w-5xl mx-auto'>
<Blogs handleAddToBookmarks={handleAddToBookmarks} handleMarkAsRead={handleMarkAsRead} ></Blogs>
<Bookmarks  bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
</div>
      
    </>
  )
}

export default App
