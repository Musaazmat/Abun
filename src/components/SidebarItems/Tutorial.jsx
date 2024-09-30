import React from "react";
import "./Tutorial.css";

const Tutorial = () => {
    return (
        <div className="tutorial-container">
            <h2>Get Started with Abun</h2>
            <div className="video-item">
                {/* <iframe
                    width="250"
                    height="150"
                    src="https://www.youtube.com/embed/aid0_5XlecA?si=qkKKgu6vcbQk0IVX"
                    frameborder="4"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe> */}
                <iframe
                    width="250"
                    height="150"
                    src="https://www.youtube.com/embed/aid0_5XlecA?si=PLujV2g3N516_wst"
                    title="YouTube video player"
                    frameborder="4"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
                <h3>Tutorial: How to Create SEO-Optimized AI Articles using Abun</h3>
            </div>
        </div>
    );
};

export default Tutorial;
