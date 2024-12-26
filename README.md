# Image Compressor

A simple React-based web application to compress images directly in the browser using the [`browser-image-compression`](https://www.npmjs.com/package/browser-image-compression) library.

---

## 📋 Features

- **Upload Image**: Upload an image file from your local system.
- **Compress Image**: Reduce the file size of the image while maintaining quality.
- **Download Compressed Image**: Save the compressed image to your system.

---

## 🌐 Demo

Try the live demo here: [Image Compressor](https://image-compressor-lemon-three.vercel.app/)

---

## 🚀 Installation

Follow these steps to set up the project locally:

### Step 1: Clone the repository
```bash
git clone <repository-url>
```

### Step 2: Navigate to the project directory
```bash
cd image-compressor
```

### Step 3: Install dependencies
```bash
npm install
```

### Step 4: Run the development server
```bash
npm run dev
```

---

## 🛠️ Usage

1. Open the application in your browser (default URL: [http://localhost:5173](http://localhost:5173)).
2. Upload an image using the file input field.
3. Click the "Compress Image" button to reduce the size of the uploaded image.
4. Download the compressed image by clicking the "Download" button.

---

## 📂 Code Overview

### `ImageCompressor.js`

The core component of the application that handles:
- **Image upload**
- **Compression** using `browser-image-compression`
- **Displaying original and compressed images** with their respective sizes.

#### Key States Used:
- `originalImage`: Stores the uploaded image file.
- `compressedImage`: Stores the URL of the compressed image.
- `originalImageSize` and `compressedImageSize`: Hold the sizes of the original and compressed images respectively.
- `isCompressing`: Tracks the compression process.

---

## 🧩 Key Dependencies

- **React**: UI library for building the application.
- **browser-image-compression**: Library for compressing images in the browser.
- **Bootstrap**: For responsive and styled UI components.

---

## 📌 Example Code

To integrate the image compression functionality in a React component, refer to the following snippet:

```javascript
import imageCompression from "browser-image-compression";

const handleCompression = async (file) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1024,
    useWebWorker: true,
  };

  try {
    const compressedFile = await imageCompression(file, options);
    return compressedFile;
  } catch (error) {
    console.error("Compression Error:", error);
  }
};
```

---

## 📸 Screenshots

### Original and Compressed Image
![Screenshot](https://via.placeholder.com/800x400?text=Original+and+Compressed+Image)

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

### 🖊️ Developed by [Asad](#)
