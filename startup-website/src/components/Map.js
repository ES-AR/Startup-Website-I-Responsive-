import React, { useEffect } from "react";
import './Map.css';

function GoogleMap() {
    useEffect(() => {
        const iframeData = document.getElementById("iframeId");
        const lat = 10.002179;
        const lon = 7.591956;
        iframeData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
    }, []); // Add empty dependency array to run once

    return (
        <div className="map-container">
            <iframe
                id="iframeId"
                className="google-map-iframe"
                height="300px"
                width="400px"
                style={{ border: '0' }} // Inline styling for the iframe border
            ></iframe>
        </div>
    );
}

export default GoogleMap;
