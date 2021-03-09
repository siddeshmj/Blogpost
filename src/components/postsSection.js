import React from 'react';
import { useSelector } from 'react-redux';
import PostItem from './postsItem';

const PostsSection = () => {

    const posts = useSelector(state => state.posts.posts)

    if(posts.length === 0) {
        return(
          <p>There is no posts add posts</p>
        )
    }


    return (

        <div className="content"  >
            
            {posts.map((item, index) => (
                <div style={{padding:"9px", border: "1px solid black"}}>
                <PostItem key={index} title={item.title}
                content={item.content}  />
                </div>
               ))}
           
           
        </div>
    );
}

export default PostsSection;
