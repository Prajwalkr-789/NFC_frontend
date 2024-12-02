import React, { useState } from "react";
import ndef from "ndef"; // Import the ndef package

function NFCReader() {
  const [isNFCEnabled, setIsNFCEnabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [tagData, setTagData] = useState("");

  // Function to check NFC support
  const checkNFC = () => {
    if ("NDEFReader" in window) {
      setIsNFCEnabled(true);
      setErrorMessage("");
    } else {
      setIsNFCEnabled(false);
      setErrorMessage(
        "Your browser/device does not support native Web NFC. Using ndef package for fallback."
      );
    }
  };

  // Function to read NFC tag using ndef package
  const readNFC = async () => {
    try {
      // Simulate reading bytes from an NFC tag
      const simulatedTagBytes = ndef.encodeMessage([
        ndef.textRecord("Hello, NFC World!"),
      ]);

      // Decode the tag data
      const records = ndef.decodeMessage(simulatedTagBytes);

      // Decode the payload of the first record
      const text = ndef.text.decodePayload(records[0].payload);

      setTagData(text || "NFC tag detected but no data.");
      console.log("NFC Data:", text);
    } catch (error) {
      console.error("Error reading NFC:", error);
      setErrorMessage("Failed to read NFC tag.");
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
