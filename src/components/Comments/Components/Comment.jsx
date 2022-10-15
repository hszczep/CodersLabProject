import React, { useState } from "react";
import "../Scss/Comment.css";
import ReplyIcon from "@mui/icons-material/Reply";
import DeleteIcon from "@mui/icons-material/Delete";
export default function Comment({ comment, getChildren, deleteComment }) {
  const [bumps, setBumps] = useState(0);
  const replyCom = Boolean(1);
  return (
    <div className="comment-container">
      <div>
        <div className="comment-header">
          <div className="comment-counter">
            <button onClick={() => setBumps(bumps + 1)}>+</button>
            <span>{bumps}</span>
            <button onClick={() => setBumps(bumps - 1 < 0 ? 0 : bumps - 1)}>
              -
            </button>
          </div>
          <img src={require(`./images/avatars/${comment.avatar}`)} />
          <span className="comment-header-nick">{comment.nickname}</span>
          <span className="comment-header-date">{comment.date}</span>
          <div>
            {replyCom && (
              <div className="reply-comment">
                <ReplyIcon />
                <p>Reply</p>
              </div>
            )}

            <div className="delete-comment" onClick={() => deleteComment(comment.id)}>
              <DeleteIcon className="bin" />
              <p>Delete</p>
            </div>
          </div>
        </div>
        <div className="comment-main">{comment.description}</div>
        {getChildren.length > 0 && (
          <div className="comment-children">
            {getChildren.map((child) => (
              <Comment
                key={child.id}
                comment={child}
                getChildren={[]}
                deleteComment={deleteComment}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
