// import React, { useRef, useEffect, useState } from 'react';

// const TShirtPreview = () => {
//   const canvasRef = useRef(null);
//   const [uploadedDesign, setUploadedDesign] = useState(null);
//   const [selectedSide, setSelectedSide] = useState('front');
//   const [selectedColor, setSelectedColor] = useState('white');
//   const [selectedProduct, setSelectedProduct] = useState('tshirt');

//   // Handle file upload
//   const handleFileUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => setUploadedDesign(e.target.result);
//       reader.readAsDataURL(file);
//     }
//   };

//   // Function to draw t-shirt shape
//   const drawTShirt = (ctx, color) => {
//     ctx.fillStyle = color;
//     ctx.strokeStyle = '#000'; // Outline for definition
//     ctx.lineWidth = 2;
//     ctx.beginPath();
//     // Neckline (rounded top)
//     ctx.moveTo(150, 60);
//     ctx.quadraticCurveTo(130, 70, 110, 90); // Left neck
//     ctx.lineTo(90, 110); // Left shoulder start
//     ctx.quadraticCurveTo(80, 130, 85, 160); // Left sleeve curve
//     ctx.lineTo(95, 180); // Left sleeve bottom
//     ctx.lineTo(110, 190); // Left body top
//     ctx.lineTo(110, 340); // Left body bottom
//     ctx.lineTo(190, 340); // Right body bottom
//     ctx.lineTo(190, 190); // Right body top
//     ctx.lineTo(205, 180); // Right sleeve bottom
//     ctx.quadraticCurveTo(210, 130, 200, 110); // Right sleeve curve
//     ctx.lineTo(190, 90); // Right shoulder start
//     ctx.quadraticCurveTo(170, 70, 150, 60); // Right neck back to top
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke(); // Add outline
//   };

//   // Function to draw hoodie shape (with hood)
//   const drawHoodie = (ctx, color) => {
//     ctx.fillStyle = color;
//     ctx.strokeStyle = '#000';
//     ctx.lineWidth = 2;
//     ctx.beginPath();
//     // Hood (top curved part)
//     ctx.moveTo(150, 40);
//     ctx.quadraticCurveTo(120, 50, 100, 70); // Left hood
//     ctx.quadraticCurveTo(110, 90, 140, 85); // Hood center
//     ctx.quadraticCurveTo(170, 90, 180, 70); // Right hood
//     ctx.quadraticCurveTo(200, 50, 150, 40); // Back to top
//     // Body (similar to t-shirt but starting from hood)
//     ctx.moveTo(140, 85);
//     ctx.quadraticCurveTo(130, 100, 110, 120); // Left neck
//     ctx.lineTo(90, 140); // Left shoulder
//     ctx.quadraticCurveTo(80, 160, 85, 190); // Left sleeve
//     ctx.lineTo(95, 210); // Left sleeve bottom
//     ctx.lineTo(110, 220); // Left body
//     ctx.lineTo(110, 370); // Left bottom
//     ctx.lineTo(190, 370); // Right bottom
//     ctx.lineTo(190, 220); // Right body
//     ctx.lineTo(205, 210); // Right sleeve bottom
//     ctx.quadraticCurveTo(210, 160, 200, 140); // Right sleeve
//     ctx.lineTo(190, 120); // Right shoulder
//     ctx.quadraticCurveTo(170, 100, 160, 85); // Right neck
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();
//   };

//   // Draw on canvas whenever state changes
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
    
//     // Clear canvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
    
//     // Draw base product shape
//     if (selectedProduct === 'tshirt') {
//       drawTShirt(ctx, selectedColor);
//     } else if (selectedProduct === 'hoodie') {
//       drawHoodie(ctx, selectedColor);
//     }
    
//     // If design is uploaded, draw it on the selected side
//     if (uploadedDesign) {
//       const img = new Image();
//       img.onload = () => {
//         const designX = selectedSide === 'front' ? 125 : 175; // Front: chest, Back: back
//         const designY = selectedProduct === 'tshirt' ? 160 : 180; // Adjust for hoodie height
//         ctx.drawImage(img, designX, designY, 70, 70); // Design size
//       };
//       img.src = uploadedDesign;
//     }
//   }, [uploadedDesign, selectedSide, selectedColor, selectedProduct]);

//   return (
//     <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
//       <h2>T-Shirt Printing Preview</h2>

//       {/* Upload Design */}
//       <div style={{ marginBottom: '20px' }}>
//         <label>Upload Your Design:</label>
//         <input type="file" accept="image/*" onChange={handleFileUpload} />
//       </div>

//       {/* Select Side */}
//       <div style={{ marginBottom: '20px' }}>
//         <label>Select Side:</label>
//         <select value={selectedSide} onChange={(e) => setSelectedSide(e.target.value)}>
//           <option value="front">Front</option>
//           <option value="back">Back</option>
//         </select>
//       </div>

//       {/* Select Color */}
//       <div style={{ marginBottom: '20px' }}>
//         <label>Select Color:</label>
//         <select value={selectedColor} onChange={(e) => setSelectedColor(e.target.value)}>
//           <option value="white">White</option>
//           <option value="black">Black</option>
//           <option value="blue">Blue</option>
//           <option value="red">Red</option>
//           <option value="green">Green</option>
//         </select>
//       </div>

//       {/* Select Product */}
//       <div style={{ marginBottom: '20px' }}>
//         <label>Select Product:</label>
//         <select value={selectedProduct} onChange={(e) => setSelectedProduct(e.target.value)}>
//           <option value="tshirt">T-Shirt</option>
//           <option value="hoodie">Hoodie</option>
//         </select>
//       </div>

//       {/* Canvas Preview */}
//       <div style={{ marginTop: '20px' }}>
//         <h3>Preview:</h3>
//         <canvas
//           ref={canvasRef}
//           width={300}
//           height={400}
//           style={{ border: '1px solid #ccc', backgroundColor: '#f9f9f9' }}
//         />
//         {!uploadedDesign && <p style={{ color: 'red' }}>Please upload a design to see the preview.</p>}
//       </div>
//     </div>
//   );
// };

// export default TShirtPreview;




















// import React, { useState, useEffect } from 'react';
// import { Engine, Scene } from 'react-babylonjs';
// import { Vector3, Color3, StandardMaterial, Texture } from '@babylonjs/core';

// const TshirtPreview = () => {
//   const [designURL, setDesignURL] = useState(null);
//   const [shirtColor, setShirtColor] = useState('#dadada');
//   const [shirtMaterial, setShirtMaterial] = useState(null);

//   // Handle file upload
//   const handleUpload = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const url = URL.createObjectURL(file);
//       setDesignURL(url);
//     }
//   };

//   // Update material when color or design changes
//   useEffect(() => {
//     if (!shirtMaterial) return;
//     shirtMaterial.diffuseColor = Color3.FromHexString(shirtColor);

//     if (designURL) {
//       const tex = new Texture(designURL, shirtMaterial.getScene());
//       shirtMaterial.diffuseTexture = tex;
//     } else {
//       shirtMaterial.diffuseTexture = null;
//     }
//   }, [shirtColor, designURL, shirtMaterial]);

//   return (
//     <div style={{ display: 'flex', height: '600px' }}>
//       <div style={{ width: '300px', padding: '20px' }}>
//         <h3>Upload Design</h3>
//         <input type="file" accept="image/*" onChange={handleUpload} />
//         <label style={{ display: 'block', marginTop: '10px' }}>
//           Shirt Color:
//           <input
//             type="color"
//             value={shirtColor}
//             onChange={(e) => setShirtColor(e.target.value)}
//             style={{ marginLeft: 10 }}
//           />
//         </label>
//       </div>

//       <Engine antialias adaptToDeviceRatio canvasId="babylon-canvas">
//         <Scene>
//           <arcRotateCamera name="camera" alpha={-Math.PI / 2} beta={Math.PI / 3} radius={5} target={Vector3.Zero()} />
//           <hemisphericLight name="light1" intensity={0.7} direction={Vector3.Up()} />
//           <directionalLight name="dir01" direction={new Vector3(-1, -2, -1)} intensity={0.4} />

//           {/* A sphere representing T-shirt base (placeholder - replace with model loading) */}
//           <mesh name="tshirt" onMeshInitialized={mesh => {
//             const mat = new StandardMaterial('shirtMat', mesh.getScene());
//             setShirtMaterial(mat);
//             mesh.material = mat;
//           }}>
//             <sphere name="shirtSphere" diameter={2} segments={32} />
//           </mesh>
//         </Scene>
//       </Engine>
//     </div>
//   );
// };

// export default TshirtPreview;

