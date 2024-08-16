import React, { useState } from 'react';
import QrReader from 'react-qr-reader';

function ScanQRCodeByWebCam() {
    const [scanResultWebCam, setScanResultWebCam] = useState('');

    const handleErrorWebCam = (error) => {
        console.log(error);
    };

    const handleScanWebCam = (result) => {
        if (result) {
            setScanResultWebCam(result);
        }
    };

    return (
        <div className="section bg-gray">
            <h3>Scan QR Code by Web Cam</h3>
            <div className="qr-reader-container">
                <QrReader
                    className="qr-reader"
                    delay={300}
                    onError={handleErrorWebCam}
                    onScan={handleScanWebCam}
                />
            </div>
            <h3 className="scanned-text">Scanned By WebCam Code: {scanResultWebCam}</h3>
        </div>
    );
}

export default ScanQRCodeByWebCam;
