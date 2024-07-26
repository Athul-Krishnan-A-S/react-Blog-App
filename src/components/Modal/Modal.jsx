import React , { useState } from 'react';
import Button from '../Button/Button';
import './Modal.css';

function Modal(props) {
    // initialise variables for form data 
    const [blogData, setBlogData] = useState({
        title: '',
        category: '',
        author: '',
        publishedDate: '',
        duration: '',
        blogImg: '',
        contents: ''
    });
    // store the values when the fields are modified 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value });
    };
    // on form submit , store the blog data 
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNewBlog(blogData); 
    };

    return (
        <div className="modal-container">
            <div className='modal'>
                <div className='close-button-modal'>
                    <p className='new-blog'>ADD NEW BLOG</p>
                    {/* button for closing the modal  */}
                    <Button value="X" onClick={props.closeModal} />
                </div>
                {/* form for adding new blog  */}
                <form className='form-modal' onSubmit={handleSubmit}>
                    <input type='text' name='title' placeholder='title' value={blogData.title} onChange={handleChange} />
                    <input type='text' name='category' placeholder='category' value={blogData.category} onChange={handleChange} />
                    <input type='text' name='author' placeholder='author' value={blogData.author} onChange={handleChange} />
                    <input type='file' name='profile' placeholder='profile' accept='image/jpeg' />
                    <input type='date' name='publishedDate' placeholder='published date' value={blogData.publishedDate} onChange={handleChange} />
                    <input type='text' name='duration' placeholder='duration' value={blogData.duration} onChange={handleChange} />
                    <input type='file' name='blogImg' placeholder='blog Img' accept='image/jpeg'  />
                    <textarea name='contents' cols={50} rows={20} placeholder='blog contents' value={blogData.contents} onChange={handleChange}></textarea>
                    {/* button for adding the blog  */}
                    <Button type='submit' value='Add Blog' />
                </form>
            </div>
        </div>
    );
}
export default Modal;