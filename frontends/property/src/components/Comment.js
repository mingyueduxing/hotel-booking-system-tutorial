import React from 'react';
import '../styles/comment.scss'; 

const Comment = () => {

    const handleOnClick = () => {

    }

    return(
        <>
            <p>READ THE REVIEWS,WRITTEN BY</p>
            <h1>Our Hotel's Guest:</h1>
            <div className="info"></div>
            <button id='testimonals' onClick={handleOnClick}>SEE ALL TESTIMONIALS</button>
        </>
    )
}

export default Comment;