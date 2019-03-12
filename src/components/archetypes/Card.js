import React from 'react'

const ArchetypesCard = ({ post }) => {
  const { postId, title, link, excerpt, featuredImage } = post
  const { sourceUrl: imageUrl, altText } = featuredImage

  return (
    <div key={postId} className="archetype-card">
      <div className="archetype-card__featuredimg--wrapper">
        <img src={imageUrl} alt={altText} className="archetype-card__featuredimg" />
      </div>
      <h3 className="archetype-card__heading">{title}</h3>
      <div className="archetype-card__body">
        {excerpt}
        <a href={link} style={{ display: `block` }}>Read More =></a>
      </div>
    </div>
  )
}

export default ArchetypesCard