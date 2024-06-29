// ScanQRCodeFromImage.js
import React, { useState, useRef } from 'react';
import QrReader from 'react-qr-reader';

function ScanQRCodeFromImage() {
    const [scanResultFile, setScanResultFile] = useState('');
    const qrRef = useRef(null);

    const handleErrorFile = (error) => {
        console.log(error);
    };

    const handleScanFile = (result) => {
        if (result) {
            setScanResultFile(result);
        }
    };

    const onScanFile = () => {
        qrRef.current.openImageDialog();
    };

    return (
        <div className="section bg-gray">
            <h3>Scan QR Code from Image</h3>
            <button onClick={onScanFile}>Scan QR Code</button>
            <QrReader
                ref={qrRef}
                delay={300}
                style={{ width: '100%' }}
                onError={handleErrorFile}
                onScan={handleScanFile}
                legacyMode
            />
            <h3 className="scanned-text">Scanned Code: {scanResultFile}</h3>
        </div>
    );
}

export default ScanQRCodeFromImage;
