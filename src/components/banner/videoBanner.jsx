"use client";

import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";

import "yet-another-react-lightbox/styles.css";

const VideoBanner = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Video]}
        slides={[
          {
            type: "video",
            sources: [
              {
                src: "https://www.youtube.com/watch?v=X7R-q9rsrtU",
                type: "video/youtube",
              },
            ],
          },
        ]}
      />

      <div
        className="ltn__video-bg-img bg-overlay-black-30 bg-image bg-fixed ltn__animation-pulse1"
        style={{ backgroundImage: `url("/img/bg/19.png")` }}
      >
        <button onClick={() => setOpen(true)} className="ltn__video-icon-2">
          <FaPlay />
        </button>
      </div>
    </>
  );
};

export default VideoBanner;