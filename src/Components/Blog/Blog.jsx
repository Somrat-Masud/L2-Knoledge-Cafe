import PropTypes from 'prop-types'

import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleAddToBookmarks,handleMarkAsRead}) => {
  const {id,name,img,reading_time,author_img,author,posted_date,hashtags}=blog;
    return (
        <div className='mb-20 space-y-4'>
         <div className=''>
         <img className='w-[420px] h-[380px]' src={img} alt={`cover picture of the title ${name}`} />
         
         </div>
           <div className='flex justify-between ml-4 mb-4 '>
                <div className='flex '>
                    <img  className='w-14 rounded-full mt-4' src={author_img} alt="" />
                    <div className='ml-6 mt-6 '>
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
               
                <div className='mt-6'>
               <span>{reading_time} min red</span>
                 <p><button className='ml-2 text-2xl text-red-500'
                 onClick={()=>handleAddToBookmarks(blog)}>
                    
                    <CiBookmark></CiBookmark>
                    </button></p>
                </div>
           </div>
           <h1 className='text-4xl'>{name}</h1>
           <p>{
            hashtags.map((hash, idx)=><span key={idx}><a href="">#{hash}</a></span>)
            }
       
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time,id)} className='text-purple-800 underline' >Mark As Read </button>
        </div>
    );
};
Blog.propTypes={
        blog:PropTypes.object.isRequired,
        handleAddToBookmarks:PropTypes.func,
        handleMarkAsRead:PropTypes.func
    }
export default Blog;



