import './blogPost.css'
import React from "react";
import pizza from '../../assets/pizza.png';
import Header from '../../components/header/Header';
class BlogPost extends React.Component {

    render() {
        let id = new URL(window.location.href).searchParams.get('id');
        const url = window.location.href;
        const lastSegment = url.substring(url.lastIndexOf('/') + 1);
        let data = JSON.parse(localStorage.getItem('data'));
        let blogPost = data.find(blog => blog.id === parseInt(lastSegment));

        if (!blogPost) {
            return <div>Blog post not found</div>;
        }

        const { title, category, author, authorProfile, publishedDate, duration, blogImg, blogContents } = blogPost;

        return (
            <div>
                <Header title={title} category={category} />
                <div className="blogPost-container">
                    <div className="blogPost-author-details">
                        <img className="blogPost-author-image" src={authorProfile} alt="author"></img>
                        <p>By {author} | Published on {publishedDate} | {duration} Minutes Read </p>
                    </div>
                    <div className='blogPost-image-container'>
                        <img src={blogImg} alt='blog-image' className='blog-image'></img>
                    </div>
                    <div className='blogPost-two-cols'>
                        <div className='blogPost-contents-container'>
                            <p className='blogPost-content'>{blogContents}</p>
                        </div>
                        <div className='blogPost-popular-posts-container'>
                            <div className='blogPost-posts'>
                                <p>POPULAR POSTS</p>
                                <div className='blogPost-popularPosts-card'>
                                    <div className='blogPost-popularPosts-card-img-container'>
                                        <img
                                            src={pizza}
                                            alt='pizza'
                                            className='blogpost-popularPosts-card-img'>
                                        </img>
                                    </div>
                                    <div className='blogPosts-popularPosts-card-content'>
                                        <p>PRODUCT</p>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam corporis suscipit </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default (BlogPost);