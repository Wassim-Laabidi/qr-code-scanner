import React from 'react';
import './App.css'; // Import the CSS file
import GenerateQRCode from './components/GenerateQRCode';
import ScanQRCodeFromImage from './components/ScanQRCodeFromImage';
import ScanQRCodeByWebCam from './components/ScanQRCodeByWebCam';

function App() {
    return (
        <div className="container">
            <div className="sections">
                <GenerateQRCode />
                <ScanQRCodeFromImage />
                <ScanQRCodeByWebCam />
            </div>
        </div>
    );
}

export default App;
