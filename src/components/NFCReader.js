import React, { useState } from 'react';

const NFCReader = () => {
    const [isNFCEnabled, setIsNFCEnabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    // Check if NFC is available and ask for permission
    const checkNFC = async () => {
        if ('NFC' in window) {
            try {
                // Check for NFC availability
                const nfc = await navigator.nfc.requestPermission();
                setIsNFCEnabled(true);
                setErrorMessage('');
            } catch (error) {
                setIsNFCEnabled(false);
                setErrorMessage('NFC permission denied or device not compatible.');
            }
        } else {
            setIsNFCEnabled(false);
            setErrorMessage('Your device does not support NFC.');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="p-4">
                <h1 className="text-2xl font-bold text-center text-blue-600">NFC Reader Compatibility</h1>
            </div>

            <div className="mt-4">
                <button 
                    onClick={checkNFC} 
                    className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-700 focus:outline-none">
                    Check NFC Compatibility
                </button>
            </div>

            {errorMessage && (
                <div className="mt-4 text-red-600 text-lg">
                    {errorMessage}
                </div>
            )}

            {isNFCEnabled && !errorMessage && (
                <div className="mt-4 text-green-600 text-lg">
                    NFC is supported and enabled on your device!
                </div>
            )}
        </div>
    );
};

export default NFCReader;
