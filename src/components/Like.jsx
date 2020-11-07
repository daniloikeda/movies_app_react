import React from 'react';

const Like = props => {

    const getIconClass = () => {
        return props.liked ? "fas fa-heart" : "far fa-heart";
    };

    return (
        <i className={getIconClass()} style={{cursor: "pointer"}} aria-hidden="true" onClick={props.handleLikeMovie}></i>
    )
}

export default Like;