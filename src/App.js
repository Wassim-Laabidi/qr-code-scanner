import React from 'react';
import './App.css';
import ScanQRCodeFromImage from './components/ScanQRCodeFromImage';
import ScanQRCodeByWebCam from './components/ScanQRCodeByWebCam';

function App() {
    return (
        <div className="container">
            <div className="sections">
                <ScanQRCodeFromImage />
                <ScanQRCodeByWebCam />
            </div>
        </div>
    );
}

export default App;
