import React, {useEffect, useState} from 'react';
import Comment from '../comment/Comment';
import {addComment} from "../../api/gallery/gallery";
const Popup = (props) => {
    const [comment, setComment] = useState('')
    const [isError, setError] = useState(false)
    const [message, setMessage] = useState('Write a few sentences about the photo.')
    const addCommentHandler = (e) => {
        e.preventDefault()
        console.log(comment)
        if(comment.length > 0) {
            addComment(props.image.id, comment).then(response => {
                if(response === 204) {
                    setComment('')
                    setMessage('Comment successfully sent.')
                    setTimeout(() => {
                        setMessage('Write a few sentences about the photo.') 
                    }, 5000)
                }
                
            }).catch((e) => console.log(e.response.status))
        } else {
            setError(true)
            setMessage('The comment should not be empty.')
        }
    }
    
    useEffect(() => {
        isError === true && setError(false)
    }, [comment, isError])
    return (
        <div className="fixed w-full h-full bg-[#6B728075] top-0 right-0 flex justify-center items-center" onClick={() => props.setOpenedImage({})}>
            <div className="max-h-[90vh] max-w-5xl w-[90%] bg-white p-4 rounded-lg overflow-y-scroll" onClick={e => e.stopPropagation()}>
               <img src={props.image.largeImage} alt={props.image.id} className="rounded-3xl shadow-2xl w-full md:w-2/3 mx-auto"></img>
            <form className="flex flex-col items-start mt-6">
                <label className="text-sm">Comment</label>
                <textarea className={`self-stretch border rounded-md h-[100px] ${isError ? 'border-red-300' : 'border-gray-300'}`} value={comment} onChange={e => setComment(e.target.value)}></textarea>
                <p className={`text-sm my-2 ${isError ? 'text-red-500' : 'text-gray-500'}`}>{message}</p>
                <button className="text-sm px-4 py-2 text-white bg-indigo-600 rounded-md self-center shadow-sm" onClick={(e) => addCommentHandler(e)}>Save</button>
            </form>
               <h2 className="text-start">Comments:</h2>
               <div>
                   {
                   props.image.comments.map((comment) => <Comment comment={comment} key={comment.id} />)
                   }
               </div>
           </div>
        </div>
  );
};

export default Popup;