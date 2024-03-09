import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./singlevideo.css";

export default function SingleVideo() {
  var location = useLocation();
  var id = location.state.id;
  var [video, setVideo] = useState({});
  var [comments, setComments] = useState([]);
  var [index, setIndex] = useState(0);

  useEffect(() => {
    async function getData() {
      var response = await fetch(`http://localhost:8080/videos/` + id);
      var data = await response.json();
      console.log(data);
      setVideo(data);
      setComments(data.comments);
    }
    getData();
  }, [id]);

  function scrollNext() {
    setIndex((prevIndex) => (prevIndex + 1) % comments.length);
  }
  function scrollPrevious() {
    setIndex(
      (prevIndex) => (prevIndex - 1 + comments.length) % comments.length
    );
  }

  return (
    <div>
      <div className="videocontainer">
        <h1>{video.title}</h1>
        <p>{video.description}</p>
        <img src={video.image} alt="video" />
        <p>
          Length: {video.duration} &nbsp;&nbsp;&nbsp; Likes: {video.likes}{" "}
          &nbsp;&nbsp;&nbsp; Views: {video.views} &nbsp;&nbsp;&nbsp; Channel:{" "}
          {video.channel}
        </p>
        <video src={video.video} controls width="640" height="360"></video>
        <br />
        <h2>Comments</h2>
        <div className="commentscontainer">
          <button onClick={scrollPrevious}>Previous</button>
          <div className="comments">
            {comments.length > 0 && (
              <p>{comments[index % comments.length].comment}</p>
            )}
          </div>
          <button onClick={scrollNext}>Next</button>
        </div>
      </div>
    </div>
  );
}
