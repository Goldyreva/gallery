import React from 'react';

const Comment = (props) => {
    return (
        <div className="border border-gray-300 rounded-md my-2 p-2">
        <div className="flex">
            <p className="text-start text-md text-gray-500 mr-2">id: {props.comment.id}</p>
            <p className="text-start text-md">{props.comment.author}</p>
            
        </div>
         <p className="text-start text-md">{props.comment.text}</p>
     </div>
  );
};

export default Comment;