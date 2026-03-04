"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

export default function VideoModal({ videoId, children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {children({ open: () => setOpen(true) })}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Video]}
        slides={[
          {
            type: "video",
            sources: [
              {
                src: `https://www.youtube.com/watch?v=${videoId}`,
                type: "video/youtube",
              },
            ],
          },
        ]}
      />
    </>
  );
}