import React, { useState } from 'react';
import QRCode from 'qrcode';

function GenerateQRCode() {
    const [text, setText] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const generateQrCode = async () => {
        try {
            const response = await QRCode.toDataURL(text);
            setImageUrl(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="section bg-gray">
            <h3>Generate QR Code</h3>
            <input
                type="text"
                placeholder="Enter Text Here"
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={generateQrCode}>Generate</button>
            {imageUrl && (
                <div className="mt-4">
                    <a href={imageUrl} download>
                        <img src={imageUrl} alt="QR Code" className="mx-auto" />
                    </a>
                </div>
            )}
        </div>
    );
}

export default GenerateQRCode;
