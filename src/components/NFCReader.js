import React, { useState } from "react";

function NFCReader() {
  const [isNFCEnabled, setIsNFCEnabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [tagData, setTagData] = useState("");

  // Function to check NFC support and request permission
  const checkNFC = async () => {
    try {
      if ('NFC' in window) {
        // Request permission to access NFC
        await navigator.nfc.requestPermission();
        console.log("NFC Permission granted.");
        setIsNFCEnabled(true);
        setErrorMessage('');
      } else {
        setIsNFCEnabled(false);
        setErrorMessage('Your device does not support NFC.');
      }
    } catch (error) {
      console.error("Error requesting NFC permission:", error);
      setIsNFCEnabled(false);
      setErrorMessage('NFC permission denied or device not compatible.');
    }
  };

  // Function to read NFC tag
  const readNFC = async () => {
    try {
      if ('NFC' in window) {
        // Create a new NFCReader instance
        const reader = new NFCReader();
        // Start scanning for NFC tags
        await reader.scan();
        // You can handle the tag data here
        setTagData('NFC tag detected!');
      }
    } catch (error) {
      console.error('Error reading NFC:', error);
      setErrorMessage('Failed to read NFC tag.');
    }
  };

  return (
    <div className="App flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-4 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">NFC Tag Reader</h1>

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
          onClick={checkNFC}
        >
          Check NFC Availability
        </button>

        {isNFCEnabled ? (
          <div>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-md mb-4"
              onClick={readNFC}
            >
              Start NFC Scan
            </button>
            <p>{tagData}</p>
          </div>
        ) : (
          <p className="text-red-500">{errorMessage}</p>
        )}
      </div>
    </div>
  );
}

export default NFCReader;
