import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PostItem from '../components/postsItem';
import './search.css';
import InputSection from '../components/newPost';




function Searchh() {
    const [searchTerm, setSearchTerm] = useState("")

    const posts = useSelector(state => state.posts.posts)
    return (

        <div className="container">

            <div className="row justify-content-center">
                <div className="col-4 col-sm-6 pt-5" >
                <input type="text" className="form-control" placeholder="Search" onChange={(event) => { setSearchTerm(event.target.value); }} />
            </div>
            </div>
            <div className="row">
                <div className="col" id="userform">
                    <h3 className="header">New Post</h3>
                    <hr />

                    <InputSection />
                </div>
                <div className="col">
                    <div className="overflow-auto" id="card">

                        {posts.filter(val => {
                            if (searchTerm === "") {
                                return val
                            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }
                        }).map((item, index) => {
                            return (
                                <div style={{ padding: "9px", border: "1px solid black" }}>
                                    <PostItem key={index} title={item.title}
                                        content={item.content} />
                                </div>

                            );
                        })}
                    </div>
                </div>

            </div>
        </div>





    )
}

export default Searchh
