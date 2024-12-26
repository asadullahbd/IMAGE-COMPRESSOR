import React, { useState } from "react";
import imageCompression from "browser-image-compression";

const ImageCompressor = () => {
    const [originalImage, setOriginalImage] = useState(null);
    const [compressedImage, setCompressedImage] = useState(null);
    const [originalImageSize, setOriginalImageSize] = useState(0);
    const [compressedImageSize, setCompressedImageSize] = useState(0);
    const [isCompressing, setIsCompressing] = useState(false);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setOriginalImage(file);
            setOriginalImageSize((file.size / 1024).toFixed(2)); // Convert size to KB
            setCompressedImage(null);
            setCompressedImageSize(0);
        }
    };

    const handleCompression = async () => {
        if (!originalImage) {
            alert("Please upload an image first!");
            return;
        }
        const options = {
            maxSizeMB: 1, // Maximum size in MB
            maxWidthOrHeight: 1024, // Maximum width or height
            useWebWorker: true,
        };
        try {
            setIsCompressing(true);
            const compressedFile = await imageCompression(
                originalImage,
                options
            );
            const compressedFileUrl = URL.createObjectURL(compressedFile);
            setCompressedImage(compressedFileUrl);
            setCompressedImageSize((compressedFile.size / 1024).toFixed(2)); // Convert size to KB
            setIsCompressing(false);
        } catch (error) {
            console.error("Compression Error:", error);
            setIsCompressing(false);
        }
    };

    return (
        <div className="container ">
          
            <div className="row image-compressor mt-5 c-bg">
            <h2 className="text-center border-bottom pb-3 text-color mb-5">TinyPng By Asad</h2>
                <div className="col-md-6">
                    <div className="upload-section">
                        <input
                        className="form-control" 
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </div>
                    {originalImage && (
                        <>
                            <div className="preview-section">
                                <h3 className="text-color">Original Image</h3>
                                <img
                                    src={URL.createObjectURL(originalImage)}
                                    alt="Original"
                                />
                                <p className="negative-text-color">Size: {originalImageSize} KB</p>
                            </div>
                            <button
                                className="compress-button text-color"
                                onClick={handleCompression}
                                disabled={isCompressing}
                            >
                                {isCompressing
                                    ? "Compressing..."
                                    : "Compress Image"}
                            </button>
                        </>
                    )}
                </div>
                <div className="col-md-6 mt-5">
                    {compressedImage && (
                        <div className="preview-section">
                            <h3 className="text-color">Compressed Image</h3>
                            <img src={compressedImage} alt="Compressed" />
                            <p className=" negative-text-color">Size: {compressedImageSize} KB</p>
                            <a
                                href={compressedImage}
                                download="compressed-image.jpg"
                            >
                                <button className="download-button text-color">
                                    Download
                                </button>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ImageCompressor;
