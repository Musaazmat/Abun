import React, { useEffect, useRef } from "react";
import "./GetDemo.css";

const GetDemo = () => {
    const widgetRef = useRef(null); // Create a ref to the widget container

    useEffect(() => {
        const loadCalendly = () => {
            const script = document.createElement("script");
            script.src = "https://assets.calendly.com/assets/external/widget.js";
            script.async = true;
            script.onload = () => {
                // Initialize the Calendly widget after the script loads
                window.Calendly.initInlineWidget({
                    url: "https://calendly.com/musaniazmat",
                    parentElement: widgetRef.current,
                    prefill: {},
                    utm: {},
                });
            };
            document.body.appendChild(script);
        };

        if (window.Calendly) {
            // If Calendly is already loaded, directly initialize
            window.Calendly.initInlineWidget({
                url: "https://calendly.com/musaniazmat",
                parentElement: widgetRef.current,
                prefill: {},
                utm: {},
            });
        } else {
            loadCalendly();
        }
    }, []);

    return (
      <div className="demo-container">
        <div
            className="calendly-inline-widget"
            ref={widgetRef} // Attach the ref here
            style={{ minWidth: "340px", height: "700px" }}
        ></div>
        </div>
    );
};

export default GetDemo;