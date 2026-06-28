import sharp from 'sharp';

async function processImage() {
  const input = '/Users/jko/Downloads/precisionjs_logo.png';
  
  // Trim the image to remove outer whitespace
  const { data, info } = await sharp(input)
    .trim({ threshold: 240 }) // threshold to trim white/off-white background
    .toBuffer({ resolveWithObject: true });
    
  console.log("Trimmed dimensions:", info.width, "x", info.height);

  // The % sign is roughly square and sits on the left.
  // We'll extract a square block from the left based on the height.
  // We add a small pad to make it a perfect square centered nicely.
  const size = info.height;
  
  await sharp(data)
    .extract({ left: 0, top: 0, width: size, height: size })
    // Ensure it's 512x512 for a good favicon size
    .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toFile('public/favicon.png');
    
  console.log("Favicon created at public/favicon.png");
}

processImage().catch(console.error);
