import './indexPage.css'
import React, { useState } from 'react';
import Footer from '../../components/footer/Footer';
import PostList from '../../components/PostList/PostList';
import Modal from '../../components/Modal/Modal';


function IndexPage() {

    const [isModalOpen, setModalOpen] = useState(false);
    const [newBlog, setNewBlog] = useState({});

    // function to open the modal 
    const openModal = () => {
        setModalOpen(true);
    };

    // function to close the modal 
    const closeModal = () => {
        setModalOpen(false);
    };
    // check if newBlog is wheather array or not and add the data
    const addNewBlog = (blogData) => {
       setNewBlog(blogData);
       closeModal();
    };
    return (
        <div className='app-container'>
            {/* if modal is open , then display the modal  */}
            {isModalOpen && <Modal closeModal={closeModal} addNewBlog={addNewBlog} />}
            <div className='app-blogPosts'>
                {/* render PostList component and pass the functions as props  */}
                <PostList isModalOpen={isModalOpen} openModal={openModal} closeModal={closeModal} newBlog={newBlog} />
                {/* render footer component  */}
                <Footer />
            </div>
        </div>
    );

}

export default IndexPage;
