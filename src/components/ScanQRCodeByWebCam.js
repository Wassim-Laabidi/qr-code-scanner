import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
import axios from 'axios';

function ScanQRCodeByWebCam() {
    const [scanResultWebCam, setScanResultWebCam] = useState('');

    const handleErrorWebCam = (error) => {
        console.log(error);
    };

    const handleScanWebCam = (result) => {
        if (result) {
            setScanResultWebCam(result);

            // Send the scanned result to the backend service
            axios.post('http://197.13.9.211/api/qr-code', { qrText: result })
                .then(response => {
                    console.log('QR Code sent to backend successfully:', response.data);
                })
                .catch(error => {
                    console.error('Error sending QR Code to backend:', error);
                });
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