import PropTypes from 'prop-types'
const Bookmark = ({bookmark,}) => {
    const {author}=bookmark;
    return (
        <div className=' bg-slate-200 p-4 m-4 rounded-xl'>
            <h3 className='text-2xl'>{author}</h3>
        </div>
    );
};
 
Bookmark.propType={
    bookmark: PropTypes.object,
}
export default Bookmark;