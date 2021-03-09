import React from 'react';
import './pi.css';

const PostItem = ({ title, content }) => {

return (
    <div className="PostItem">
        <h5>{title}</h5>
        <p>{content}</p>
    </div>
);
}

export default PostItem;