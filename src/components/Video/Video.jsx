import React from "react";

function Video() {
  return (
    <div className="Landing__hero-inner">
      <div className="Landing__hero-video">
        <video autoPlay={true} muted  loop={true} playsInline={true}>
          <source
            src="/assets/videos/video.mov"
            type="video/mp4"
          />
        </video>
      </div>
    </div>
  );
}

export default Video;
