import React from 'react';
import './blogs.css';


function Blogs(props) {
    return (
        <div className="blogPosts-cards">
            <div className="blogPosts-cards-img-container">
                <img
                    src={props.blog.blogImg}
                    alt={props.blog.category}
                    className="blogPosts-cards-img"
                />
            </div>
            <p>{props.blog.title}</p>
            <p>Read More</p>
        </div>
    );
}

export default Blogs;
