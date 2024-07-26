import React, { useState, useEffect } from 'react';
import Blogs from '../Blogs/Blogs';
import './postList.css';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import { data } from '../data';

function PostList({ openModal, newBlog }) {
    const [arrayOfBlogPosts, setArrayOfBlogPosts] = useState([]);

    useEffect(() => {
        const storedData = localStorage.getItem('data');
        if (storedData) {
            setArrayOfBlogPosts(JSON.parse(storedData));
        } else {
            localStorage.setItem('data', JSON.stringify(data));
            setArrayOfBlogPosts(data);
        }
    },[]);

    useEffect(() => {
        if (Object.keys(newBlog).length > 0) {
            const newData = {
                id: arrayOfBlogPosts.length + 1,
                author: newBlog.author,
                title: newBlog.title,
                category: newBlog.category,
                blogContents: newBlog.contents,
                duration: newBlog.duration,
                publishedDate: newBlog.publishedDate,
            };
            const updatedArray = [...arrayOfBlogPosts, newData];
            setArrayOfBlogPosts(updatedArray);
            localStorage.setItem('data', JSON.stringify(updatedArray));
        }
    }, [newBlog]);

    return (
        <div>
            <Header title={'Blogs'} openModal={openModal} />
            <div className='postList-blogs-cards-container'>
                {arrayOfBlogPosts.map((blog) => (
                    <div className='blogPosts-cards' key={blog.id}>
                        <Link to={`/blog/${blog.id}`}>
                            <Blogs blog={blog} />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostList;
