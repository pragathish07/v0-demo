"use client";

import Script from "next/script";

export default function BookingSection() {
  return (
    <section className="w-full flex justify-center py-12 bg-gray-50">
     {/*  <div className="w-full max-w-4xl shadow-xl rounded-2xl overflow-hidden">
        
        <iframe
          src="https://app.squareup.com/appointments/buyer/widget/2eb02510-65db-4773-9466-ebc2bf742d77/93THKJBR99KWV"
          allow="payment app.squareup.com"
          className="w-full h-[600px] border-none"
          style={{ minHeight: "500px" }}
        />
      </div> */ }

     
      <Script
        src="https://square.site/appointments/buyer/widget/2eb02510-65db-4773-9466-ebc2bf742d77/93THKJBR99KWV.js"
        strategy="afterInteractive"
      />
    </section>
  );
}


/* "use client";

import { useEffect, useRef } from "react";
import Hls from "hls.js";

export default function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      const videoSrc =
        "https://content.apisystem.tech/hls/medias/A1p0xff20t1rZ0E71/media_transcoded_videos/cts-7bb79e56620c7693_360_480_p.mp4.urlset/master.m3u8";

      if (video.canPlayType("application/vnd.apple.mpegurl")) {
        // Safari + some browsers
        video.src = videoSrc;
      } else if (Hls.isSupported()) {
        // Most modern browsers
        const hls = new Hls();
        hls.loadSource(videoSrc);
        hls.attachMedia(video);
      }
    }
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-8 shadow-xl rounded-xl overflow-hidden">
      <video
        ref={videoRef}
        className="w-full h-auto"
        controls
        playsInline
        muted
        autoPlay
      />
    </div>
  );
} */
