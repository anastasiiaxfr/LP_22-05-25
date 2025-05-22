"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Fancybox from "../Fancybox";
import Carousel from "../Carousel";
import video0 from "@/app/assets/img/video0.jpg";

const videoItems = [
  {
    src: "https://youtu.be/Uq3Z6D74dSA?si=aDvdRQ3jw-SZQKQ6",
    poster: video0,
    alt: "Video 1",
  },
  {
    src: "https://youtu.be/s_nc1IVoMxc?si=Cxgtz3ud4C7ECuzq",
    poster: video0,
    alt: "Video 2",
  },
  {
    src: "https://youtu.be/xG6ckC1Q4eU?si=ua4e5BTBiX3bPV6_",
    poster: video0,
    alt: "Video 3",
  },
  {
    src: "https://youtu.be/0ivQwwgW4OY?si=uui-Mnvnpo07jdx1",
    poster: video0,
    alt: "Video 4",
  },
];

function VideoGallery() {
  const [showCarousel, setShowCarousel] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCarousel(true);
    }, 100);

    return () => clearTimeout(timer); // Очистка при размонтировании
  }, []);

  return (
    <section className="section section_video py-10">
      <div className="container">
        <div className="row">
          <div>
            <h2>Transform your life through education</h2>
            <p className="subtitle">
              Ariel Hocsman launched a new career in software development by
              taking courses on Besnik. What will you be able to do?
            </p>
            <Button className="px-10 py-6 font-bold">Get Started</Button>
          </div>

          <div className="video">
            {showCarousel && (
              <Fancybox
                options={{
                  Carousel: {
                    infinite: false,
                  },
                }}
              >
                <Carousel options={{ infinite: false }}>
                  {videoItems.map((video, index) => (
                    <div
                      key={index}
                      className="f-carousel__slide"
                      data-fancybox="gallery"
                      data-src={video.src}
                      data-thumb-src={video.poster.src}
                    >
                      <Image
                        src={video.poster}
                        alt={video.alt}
                        className="rounded-md w-full mx-auto"
                        placeholder="blur"
                      />
                    </div>
                  ))}
                </Carousel>
              </Fancybox>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoGallery;
