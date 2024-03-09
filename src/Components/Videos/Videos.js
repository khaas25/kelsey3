import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./videos.css";

export default function Videos() {
  var [videos, setVideos] = useState([]);
  var navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      var response = await fetch("http://localhost:8080/videos");
      var data = await response.json();
      console.log(data);
      setVideos(data);
    }
    getData();
  }, []);
  function singleVideo(id) {
    navigate("/singlevideo", { state: { id: id } });
  }
  return (
    <div className="videocontainer">
      {/* <h1 className="title">Videos</h1> */}
      <div className="item">
        {videos.map((video) => {
          return (
            <>
              <div className="video-item">
                <h2 onClick={() => singleVideo(video.id)}>{video.title}</h2>
                <img src={video.image} alt="hi" />
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
