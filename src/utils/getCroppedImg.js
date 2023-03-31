
function getCroppedImg (image, pixelCrop, fileObject) {
  const canvas = document.createElement('canvas');
  const img = document.createElement('img');

  img.src = image;
  const targetWidth = img.width * pixelCrop.width / 100;
  const targetHeight = img.height * pixelCrop.height / 100;
  const targetX = img.width * pixelCrop.x / 100;
  const targetY = img.height * pixelCrop.y / 100;

  canvas.width = targetWidth;
  canvas.height = targetHeight;
  const ctx = canvas.getContext('2d');

  ctx.drawImage(
    img,
    targetX,
    targetY,
    targetWidth,
    targetHeight,
    0,
    0,
    targetWidth,
    targetHeight
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob(file => {
      file.name = fileObject.name;
      resolve(file);
    }, fileObject.type);
  });
}

export default getCroppedImg;