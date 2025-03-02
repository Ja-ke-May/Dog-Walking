"use client";

import React, { useEffect, useState } from "react";

const Paws = () => {
  const [images, setImages] = useState([]); // Array to track the paw print images 
  const [visible, setVisible] = useState(true); 
  const maxStepDistance = 40; // Maximum distance the next paw print can move from the previous one
  const maxAngleDeviation = Math.PI / 6; // Allow movement within ±30 degrees of the last direction
  const staggerAmount = 20; // Amount to stagger paw prints left/right (in pixels)
  const minDistance = 40; // Minimum distance between paw prints to prevent overlap

  
  
  
  // Function to check if the new position collides with any existing paw prints
  const checkForOverlap = (newX, newY) => {
    return images.some((image) => {
      const dx = newX - image.x;
      const dy = newY - image.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      return distance < minDistance;
    });
  };

  // Function to handle movement and adding new paw prints
  const movePawPrint = () => {
    const newImageId = Date.now(); // Unique ID for each new image


    let newX = 0;
    let newY = 0;
    let angleToNextMove = 0;

    if (images.length === 0) {
      // If this is the first paw print, start at a random position
      newX = Math.random() * window.innerWidth;
      newY = Math.random() * window.innerHeight;
    } else {
      // Get the position of the last paw print in the trail
      const lastImage = images[images.length - 1];
      newX = lastImage.x;
      newY = lastImage.y;

      // Get the last angle of movement
      angleToNextMove = lastImage.angle;

      // Randomly deviate the next movement angle within the specified range
      const deviation = (Math.random() - 0.5) * 2 * maxAngleDeviation; // Random deviation within ±30 degrees
      const newAngle = angleToNextMove + deviation; // Apply the deviation to the last direction

      // Calculate the new position based on the new angle
      const offsetX = Math.cos(newAngle) * maxStepDistance;
      const offsetY = Math.sin(newAngle) * maxStepDistance;

      // Update the new position based on the offset
      newX += offsetX;
      newY += offsetY;

      // Update the angle of movement for the next step
      angleToNextMove = newAngle;
    }

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Clamping to ensure the paw print stays within the screen bounds
    let clampedX = Math.max(0, Math.min(screenWidth - 50, newX)); // Ensure it stays within screen
    let clampedY = Math.max(0, Math.min(screenHeight - 50, newY)); // Ensure it stays within screen

    // Check for screen boundaries and reverse direction if needed
    if (clampedX <= 0 || clampedX >= screenWidth - 50) {
      // Reverse horizontal direction when hitting left or right edge
      angleToNextMove = Math.PI - angleToNextMove; // Flip horizontal direction
    }
    if (clampedY <= 0 || clampedY >= screenHeight - 50) {
      // Reverse vertical direction when hitting top or bottom edge
      angleToNextMove = -angleToNextMove; // Flip vertical direction
    }

    // Apply stagger (left-right alternation)
    let finalX = clampedX + (images.length % 2 === 0 ? staggerAmount : -staggerAmount); // Make stagger changes

    // If overlap detected, adjust position
    if (checkForOverlap(finalX, clampedY)) {
      let attempts = 0;
      // Keep trying new positions until a non-overlapping position is found
      while (checkForOverlap(finalX, clampedY) && attempts < 10) {
        // Generate a new random position near the current one
        finalX = clampedX + (Math.random() - 0.5) * 100; // Randomly adjust within range
        clampedY = Math.max(0, Math.min(screenHeight - 50, clampedY + (Math.random() - 0.5) * 100)); // Randomly adjust Y
        attempts++;
      }
    }

    // Create the new image element object with position and angle
    const newImage = {
      id: newImageId,
      x: finalX,
      y: clampedY,
      angle: angleToNextMove,
      opacity: 1,
    };

    // If there are already 3 images, fade out the oldest
    if (images.length === 3) {
      setImages((prevImages) => {
        // Fade out the oldest image
        const updatedImages = prevImages.map((img) => {
          if (img.id === prevImages[0].id) {
            return { ...img, opacity: 0 };
          }
          return img;
        });

        // Remove the oldest image after the fade-out transition
        setTimeout(() => {
          setImages((prevImages) => prevImages.slice(1));
        }, 400); // Delay to allow the fade-out to finish

        return updatedImages;
      });
    }

    // Add the new image to the state (images array)
    setImages((prevImages) => [...prevImages, newImage]);
  };

  useEffect(() => {
    // Start moving paw prints every 400ms
    const intervalId = setInterval(movePawPrint, 300);

    // Cleanup on component unmount
    return () => clearInterval(intervalId);
  }, [images]);

  useEffect(() => {
    const visibilityInterval = setInterval(() => {
      // Fade out
      setVisible(false);
      // After 4 seconds, fade in again after a 3-second break
      setTimeout(() => {
        setVisible(true);
      }, 4000);     
    }, 8000); 

    return () => clearInterval(visibilityInterval);
  }, []);

  return (
    <div
    style={{
      opacity: visible ? 1 : 0,
      transition: "opacity 2s ease-in-out",
    }}
  >
      {images.map((image) => (
        <div
          key={image.id} // Use the unique ID as the key
          style={{
            position: "absolute",
            top: `${image.y - 25}px`, // Adjusted to keep paw centered
            left: `${image.x - 25}px`, // Adjusted to keep paw centered
            transform: `translate(-50%, -50%) rotate(${(image.angle + Math.PI / 2) * (180 / Math.PI)}deg)`, // Corrected rotation
            opacity: image.opacity,
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          }}
        >
          <img src="../paw-space-nb.png" alt="Paw Print" className="h-8 w-8" />
        </div>
      ))}
    </div>
  );
};

export default Paws;
