import React, { useEffect, useState } from "react";
import { data } from "../data";
import Comment from "./Comment";
import TextareaValidator from "./CommentsForm";
import "../Scss/Comment.css";
export default function CommentsList() {
  const [backend, setBackend] = useState([]);
  const [parents, setParents] = useState([]);

  useEffect(() => {
    setBackend(data);
    let tempP = data.filter((e) => e.parentId === null);
    setParents(tempP);
  }, []);

  const getChildren = (id) => {
    return backend.filter((e) => e.parentId === id)
  };

  const createComment = (text, parentId = null) => {
    return {
      id: 10,
      userId: 11,
      parentId,
      avatar: "image-ramsesmiron.png",
      nickname: "amyrobson",
      date: new Date().toISOString(),
      description: text,
    };
  };

  const addComment = (text, parentId) => {
    console.log("addComment", text, parentId);
    setParents([...parents, createComment(text, parentId)]);
    setBackend([...backend, createComment(text, parentId)]);
  };


  const deleteComment = (commentId) => {
    if (window.confirm("Are you sure you want to remove comment?")) {   
      setBackend(backend.filter(e => (e.id !== commentId && e.parentId !== commentId)));
      setParents(backend.filter(e => (e.id !== commentId && e.parentId !== commentId)).filter((e) => e.parentId === null));
    }
  };



  return (
    <div className="commentsList-container">
      <div className="commentsList-parents">
        {parents.map((e) => (
          <Comment
            key={e.id}
            comment={e}
            getChildren={getChildren(e.id)}
            deleteComment={deleteComment}
          />
        ))}

        <div className="commentsList-text">
          <TextareaValidator handleSubmit={addComment} />
        </div>
      </div>
    </div>
  );
}
