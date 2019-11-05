import React from 'react';

function Post({ post }) {
  const { comments } = post;

  return (
    <div className="post">
      <div>
        <div>
          <img className="profile-image" src={post.author.avatar} alt="profile_img"/>
        </div>
        <div>
          <strong>{post.author.name}</strong>
          <span>{post.date}</span>
        </div>
      </div>
      <p>{post.content}</p>
      <hr />
      {comments.map(comment => (
        <Comment 
          key={comment.id}
          comment={comment}
        />
      ))}
      
      
    </div>
  )
}

export function Comment({ comment }) {
  return(
    <div className="comment">
      <img className="comment-profile-image" src={comment.author.avatar} alt="profile_img"/>
      <p><strong>{comment.author.name}</strong> {comment.content}</p>
    </div>
  )
}

export default Post;

