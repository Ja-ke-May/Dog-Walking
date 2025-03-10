import React, { useEffect, useState } from "react";

const Paws = () => {
  const [images, setImages] = useState([]);
  const [visible, setVisible] = useState(true);
  const maxStepDistance = 50;
  const maxAngleDeviation = Math.PI / 6;
  const staggerAmount = 40;
  const minDistance = 40;

  const checkForOverlap = (newX, newY) => {
    return images.some((image) => {
      const dx = newX - image.x;
      const dy = newY - image.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < minDistance;
    });
  };
  const movePawPrint = () => {
    const newImageId = Date.now();
    let newX = 0;
    let newY = 0;
    let angleToNextMove = 0;
  
    if (images.length === 0) {
      newX = Math.random() * window.innerWidth;
      newY = Math.random() * window.innerHeight;
    } else {
      const lastImage = images[images.length - 1];
      newX = lastImage.x;
      newY = lastImage.y;
      angleToNextMove = lastImage.angle;
      const deviation = (Math.random() - 0.5) * 2 * maxAngleDeviation;
      const newAngle = angleToNextMove + deviation;
      const offsetX = Math.cos(newAngle) * maxStepDistance;
      const offsetY = Math.sin(newAngle) * maxStepDistance;
      newX += offsetX;
      newY += offsetY;
      angleToNextMove = newAngle;
    }
  
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    let clampedX = Math.max(0, Math.min(screenWidth - 50, newX));
    let clampedY = Math.max(0, Math.min(screenHeight - 50, newY));
  
    if (clampedX <= 0 || clampedX >= screenWidth - 50) {
      angleToNextMove = Math.PI - angleToNextMove;
    }
    if (clampedY <= 0 || clampedY >= screenHeight - 50) {
      angleToNextMove = -angleToNextMove;
    }
  
    // Use staggered path for odd and even steps
    let finalX = clampedX + (images.length % 2 === 0 ? staggerAmount : -staggerAmount);
  
    if (checkForOverlap(finalX, clampedY)) {
      let attempts = 0;
      while (checkForOverlap(finalX, clampedY) && attempts < 10) {
        finalX = clampedX + (Math.random() - 0.5) * 100;
        clampedY = Math.max(0, Math.min(screenHeight - 50, clampedY + (Math.random() - 0.5) * 100));
        attempts++;
      }
    }
  
    const newImage = {
      id: newImageId,
      x: finalX,
      y: clampedY,
      angle: angleToNextMove,
      opacity: 1,
    };
  
    if (images.length === 100) {
      setImages((prevImages) => {
        const updatedImages = prevImages.map((img) => {
          if (img.id === prevImages[0].id) {
            return { ...img, opacity: 0 };
          }
          return img;
        });
        return updatedImages;
      });
    }
  
    setImages((prevImages) => [...prevImages, newImage]);
  };
  

  useEffect(() => {
    const intervalId = setInterval(movePawPrint, 300);
    return () => clearInterval(intervalId);
  }, [images]);

  useEffect(() => {
    const visibilityInterval = setInterval(() => {
      setVisible(false); // Start fade-out effect
      setTimeout(() => {
        setImages([]); // Clear images AFTER fade-out completes
        setTimeout(() => {
          setVisible(true); // Start fade-in effect
        }, 500); // Delay fade-in slightly after clearing images
      }, 2000); // Ensure this timeout matches the fade-out duration (2s)
    }, 4500); // Extend the interval to allow full fade-in and fade-out before restarting
  
    return () => clearInterval(visibilityInterval);
  }, []);
  

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transition: "opacity 2s ease-in-out",
      }}
      className="w-full h-full fixed pointer-events-none z-[-1]"
    >
      {images.map((image) => (
        <div
          key={image.id}
          style={{
            position: "absolute",
            top: `${image.y - 25}px`,
            left: `${image.x - 25}px`,
            transform: `translate(-50%, -50%) rotate(${(image.angle + Math.PI / 2) * (180 / Math.PI)}deg)`,
            opacity: image.opacity,
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          }}
        >
          <img src="../paw-space-nb.png" alt="Paw Print" className="h-8 w-8 opacity-80 brightness-125" />
        </div>
      ))}
    </div>
  );
};

export default Paws;