import React, { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioController({ audioRef, orientation = "vertical" }) {
    const [volume, setVolume] = useState(0.5);
    const [isHovered, setIsHovered] = useState(false);

    // Sync initial volume if needed
    useEffect(() => {
        if (audioRef?.current) {
            setVolume(audioRef.current.volume);
        }
    }, [audioRef]);

    const handleVolumeChange = (e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef?.current) {
            audioRef.current.volume = newVolume;
            if (newVolume > 0 && audioRef.current.paused) {
                audioRef.current.play().catch(console.error);
            }
        }
    };

    const toggleMute = () => {
        if (!audioRef?.current) return;

        const isCurrentlyMuted = volume === 0 || audioRef.current.muted;

        if (isCurrentlyMuted) {
            // Unmute
            setVolume(0.5);
            audioRef.current.volume = 0.5;
            audioRef.current.muted = false;
            
            if (audioRef.current.paused) {
                audioRef.current.play().catch(console.error);
            }
        } else {
            // Mute
            setVolume(0);
            audioRef.current.volume = 0;
            audioRef.current.muted = true; // Crucial for iOS/Mobile
        }
    };

    const isHorizontal = orientation === "horizontal";

    if (isHorizontal) {
        return (
            <button
                onClick={toggleMute}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-white/10 transition-all shadow-lg active:scale-95 shadow-white/5"
                aria-label="Toggle Volume"
            >
                {volume === 0 || audioRef?.current?.paused ? <VolumeX size={18} /> : <Volume2 size={18} />}
            </button>
        );
    }

    return (
        <div
            className="relative w-9 h-9 flex-shrink-0 z-[100]"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="absolute top-0 left-0 flex flex-col items-center gap-3 p-1.5 bg-black/60 backdrop-blur-xl border border-white/10 rounded-full transition-all duration-300 overflow-hidden shadow-lg origin-top"
                style={{
                    height: isHovered ? "140px" : "36px",
                    width: "36px",
                }}
            >
                <button
                    onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                    className="flex-shrink-0 flex items-center justify-center w-6 h-6 text-gray-400 hover:text-white transition-colors"
                    aria-label="Toggle Volume"
                >
                    {volume === 0 || audioRef?.current?.paused ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>

                <div
                    className={`transition-opacity duration-300 flex items-center justify-center w-full flex-1 ${isHovered ? "opacity-100 delay-100" : "opacity-0 invisible"}`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="relative w-1 h-[70px] mt-1 mb-2">
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.01"
                            value={volume}
                            onChange={handleVolumeChange}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 rounded-lg appearance-none cursor-pointer outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full hover:[&::-webkit-slider-thumb]:bg-gray-200 block origin-center w-[70px] h-1 -rotate-90 [&::-webkit-slider-thumb]:w-3 [&::-webkit-slider-thumb]:h-3 shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
