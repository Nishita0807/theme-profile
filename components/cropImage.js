// cropImage.js
export const getCroppedImg = (imageSrc, crop) => {
    const createImage = (url) =>
      new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener('load', () => resolve(image));
        image.addEventListener('error', (error) => reject(error));
        image.setAttribute('crossOrigin', 'anonymous'); // needed to avoid cross-origin issues on CodeSandbox
        image.src = url;
      });
  
    const getRadianAngle = (degreeValue) => {
      return (degreeValue * Math.PI) / 180;
    };
  
  
  
    const rotateSize = (width, height, rotation) => {
      const rotRad = getRadianAngle(rotation);
      return {
        width: Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
        height: Math.abs(Math.cos(rotRad) * height) + Math.abs(Math.sin(rotRad) * width),
      };
    };
  
    return createImage(imageSrc).then((image) => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
  
      const safeArea = Math.max(image.width, image.height) * 2;
  
      // set each dimensions to double largest dimension to allow for a safe area for the
      // image to rotate in without being clipped by canvas context
      canvas.width = safeArea;
      canvas.height = safeArea;
  
      // translate canvas context to a central location on image to allow rotating around the center.
      ctx.translate(safeArea / 2, safeArea / 2);
      ctx.translate(-safeArea / 2, -safeArea / 2);
  
      ctx.drawImage(
        image,
        safeArea / 2 - image.width * 0.5,
        safeArea / 2 - image.height * 0.5
      );
  
      const data = ctx.getImageData(0, 0, safeArea, safeArea);
  
      // set canvas width to final desired crop size - this will clear existing context
      canvas.width = crop.width;
      canvas.height = crop.height;
  
      // paste generated rotate image with correct offsets for x,y crop values.
      ctx.putImageData(
        data,
        Math.round(0 - safeArea / 2 + image.width * 0.5 - crop.x),
        Math.round(0 - safeArea / 2 + image.height * 0.5 - crop.y)
      );
  
      return new Promise((resolve) => {
        canvas.toBlob((file) => {
          resolve(URL.createObjectURL(file));
        }, 'image/jpeg');
      });
    });
  };
  