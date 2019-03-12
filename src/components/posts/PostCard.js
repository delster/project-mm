import React from 'react';

const PostCard = ({ post }) => {
  const { postId, title, link, excerpt, featuredImage } = post;
  const { sourceUrl: imageUrl, altText } = featuredImage;

  return (
    <div key={postId} className="post-card">
      <div className="post-card__featuredimg--wrapper">
        <img src={imageUrl} alt={altText}  className="post-card__featuredimg" />
      </div>
      <h3 className="post-card__heading">{title}</h3>
      <div className="post-card__body">
        {excerpt}
        <a href={link} style={{display:`block`}}>Read More =></a>
      </div>
    </div>
  );
};

export default PostCard;