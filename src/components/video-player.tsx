import React, { useRef, useState } from "react";

const CustomVideoPlayer = ({ src }: { src: string }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMuted, setIsMuted] = useState(false);

  // Toggle play/pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update current duration
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  // Set video duration
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  // Move video when clicked
  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current && progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      const progressBarWidth = rect.width;
      const time = (clickPosition / progressBarWidth) * duration; // Calculate time
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  // Toggle mute/unmute
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Toggle fullscreen
  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const progress = (currentTime / duration) * 100;

  return (
    <div className="relative w-full max-w-[644px] h-auto aspect-video bg-black rounded-lg overflow-hidden">
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      >
        <source src={`/videos/${src}`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        ref={progressBarRef}
        className="absolute bottom-11 left-0 right-0 mx-auto w-[95%] cursor-pointer"
        onClick={handleSeek}
      >
        <div className="w-full h-1 bg-gray-600 rounded-lg relative">
          <div
            className="h-1 bg-gray-300 rounded-lg"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="absolute bottom-3 left-0 right-0 mx-auto w-[95%] bg-opacity-50 flex justify-between items-center">
        <button onClick={togglePlayPause} className="text-white">
          {isPlaying ? (
            <img src="/svgs/pause.svg" alt="Pause" />
          ) : (
            <img src="/svgs/play.svg" alt="Play" />
          )}
        </button>
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            <span className="text-sm text-white">
              {formatTime(currentTime)}
            </span>
            <span className="text-sm text-white">/</span>
            <span className="text-sm text-white opacity-60">
              {formatTime(duration)}
            </span>
          </div>

          <button onClick={toggleMute} className="text-white cursor-pointer">
            {isMuted ? (
              <img src="/svgs/muted.svg" alt="Unmute" />
            ) : (
              <img src="/svgs/unmuted.svg" alt="Mute" />
            )}
          </button>

          <button onClick={toggleFullscreen} className="text-white">
            <img src="/svgs/arrowoutsimple.svg" alt="Fullscreen" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomVideoPlayer;
