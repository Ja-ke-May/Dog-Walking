import { useState } from "react";
import { jsPDF } from "jspdf";

const ReportForm = () => {
  const [dogName, setDogName] = useState("");
  const [walkDate, setWalkDate] = useState("");
  const [walkTime, setWalkTime] = useState("");
  const [walkLength, setWalkLength] = useState("");
  const [comments, setComments] = useState("");
  const [toilet1, setToilet1] = useState(false);
  const [toilet2, setToilet2] = useState(false);
  const [photo, setPhoto] = useState(null);

  const formatDateUK = (date) => {
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  function getBase64Image(img) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL();
  }
  
  const generatePDF = () => {
    const doc = new jsPDF("p", "mm", "a4");
    const width = 210;
    const height = 297;
  
    const colorStops = [
      { color: "#B5A888", yPos: 0 },
      { color: "#9A9A7B", yPos: 99 },
      { color: "#9A9A7B", yPos: 198 },
    ];
  
    colorStops.forEach((stop) => {
      doc.setFillColor(stop.color);
      doc.rect(0, stop.yPos, width, height / colorStops.length, "F");
    });
  
    // Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(30);
    doc.setTextColor(0, 0, 0);
    const topMargin = 6;
    const titleY = topMargin + 19;
    doc.text("Walk Report", 105, titleY, { align: "center" });
  
    //dog photo
    if (photo) {
      const image = new Image();
      const imageURL = URL.createObjectURL(photo);
      
      image.src = imageURL;
    
      image.onload = function () {
        const imgWidth = 60; 
        const imgHeight = (image.height / image.width) * imgWidth;
    
        if (imgWidth <= 0 || imgHeight <= 0 || isNaN(imgWidth) || isNaN(imgHeight)) {
          console.error("Invalid image dimensions:", imgWidth, imgHeight);
          return;
        }
    
        const imgX = 10;
        const imgY = 2;
    
        // Ensure the image format is correctly set
        let imgFormat = "JPEG"; 
        const fileExtension = photo.name.split(".").pop().toLowerCase();
        if (fileExtension === "png") {
          imgFormat = "PNG";
        } else if (fileExtension === "gif") {
          imgFormat = "GIF";
        }
    
        // Use base64 encoding to add the image
        const imgBase64 = getBase64Image(image);
    
        // Add image using base64 data
        doc.addImage(imgBase64, imgFormat, imgX, imgY, imgWidth, imgHeight, undefined, "FAST");
    
  
        
        const formattedWalkDate = formatDateUK(walkDate);
  
        const nameDateTimeX = 80;
        const nameDateTimeY = 55;
        const nameDateTimeWidth = 70; 
        const nameDateTimeHeight = 30;
        const nameDateTimeRadius = 8;
  
        
        doc.setFillColor(0, 0, 0);
        doc.roundedRect(nameDateTimeX - 5, nameDateTimeY - 5, nameDateTimeWidth + 10, nameDateTimeHeight + 10, nameDateTimeRadius, nameDateTimeRadius, "F");
  
        
        doc.setFontSize(18);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(255, 255, 255);
        doc.text(`Name: ${dogName}`, nameDateTimeX, nameDateTimeY + 8);
        doc.text(`Date: ${formattedWalkDate}`, nameDateTimeX, nameDateTimeY + 16);
        doc.text(`Time: ${walkTime}`, nameDateTimeX, nameDateTimeY + 24);
  
        
        const toiletBoxX = 165;
        const toiletBoxY = 55;
        const toiletBoxWidth = 30;
        const toiletBoxHeight = 30;
        const toiletBoxRadius = 8;
  
    
        doc.setFillColor(0, 0, 0);
        doc.roundedRect(toiletBoxX - 5, toiletBoxY - 5, toiletBoxWidth + 10, toiletBoxHeight + 10, toiletBoxRadius, toiletBoxRadius, "F");
  
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(255, 255, 255);
        doc.text("Toilet:", toiletBoxX, toiletBoxY + 8);
  
        doc.setFontSize(16);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(255, 255, 255);
  
        if (toilet1) {
          doc.setTextColor(0, 255, 0); 
        } else {
          doc.setTextColor(255, 0, 0); 
        }
        doc.text(`T1: ${toilet1 ? "Yes" : "No"}`, toiletBoxX, toiletBoxY + 18);
  
        if (toilet2) {
          doc.setTextColor(0, 255, 0);
        } else {
          doc.setTextColor(255, 0, 0); 
        }
        doc.text(`T2: ${toilet2 ? "Yes" : "No"}`, toiletBoxX, toiletBoxY + 26);
  
        const commentBoxX = 10;
        const commentBoxY = 110;
        const commentBoxWidth = 190;
        const commentBoxHeight = 70;
        const cornerRadius = 8;
  
        doc.setFillColor(0, 0, 0);
        doc.roundedRect(commentBoxX, commentBoxY, commentBoxWidth, commentBoxHeight, cornerRadius, cornerRadius, "F");
  
        doc.setFontSize(18);
        doc.setTextColor(255, 255, 255);
        doc.text("Comments:", commentBoxX + 10, commentBoxY + 13);
        doc.setFontSize(16);
        doc.text(comments, commentBoxX + 10, commentBoxY + 22, { maxWidth: commentBoxWidth - 20 });
  
        const logo = "../../BIG_WALKS_green_brown_bg-removebg.png";
        const marginBottom = 5;
  
        const availableHeight = height - (commentBoxY + commentBoxHeight) - marginBottom;
        const logoWidth = width;
        const logoHeight = availableHeight > 0 ? availableHeight : 30;
  
        const logoX = 0;
        const logoY = commentBoxY + commentBoxHeight;
  
        doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);

        const smallLogo = "../../BIG_WALKS_green_brown_bg-removebg.png"; 
      const smallLogoWidth = 40;
      const smallLogoHeight = 30;
      const smallLogoX = width - smallLogoWidth - 6; 
      const smallLogoY = 6; 

      doc.addImage(smallLogo, "PNG", smallLogoX, smallLogoY, smallLogoWidth, smallLogoHeight);
  
        doc.save("Big_Walk_Report.pdf");
      };
    }
  };
  
  
  return (
    <div className="w-full max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Big Walk Report</h2>
      <form className="space-y-6">
        
        <div>
          <label htmlFor="dogName" className="block text-xl font-semibold">
            Dog's Name:
          </label>
          <input
            type="text"
            id="dogName"
            value={dogName}
            onChange={(e) => setDogName(e.target.value)}
            required
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B5A888] transition"
          />
        </div>

       
        <div>
          <label htmlFor="walkDate" className="block text-xl font-semibold">
            Walk Date:
          </label>
          <input
            type="date"
            id="walkDate"
            value={walkDate}
            onChange={(e) => setWalkDate(e.target.value)}
            required
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B5A888] transition"
          />
        </div>

       
        <div>
          <label htmlFor="walkTime" className="block text-xl font-semibold">
            Walk Time:
          </label>
          <input
            type="time"
            id="walkTime"
            value={walkTime}
            onChange={(e) => setWalkTime(e.target.value)}
            required
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B5A888] transition"
          />
        </div>

       
        <div>
          <label htmlFor="walkLength" className="block text-xl font-semibold">
            Walk Length (in minutes):
          </label>
          <input
            type="number"
            id="walkLength"
            value={walkLength}
            onChange={(e) => setWalkLength(e.target.value)}
            required
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B5A888] transition"
          />
        </div>

       
        <div>
          <label htmlFor="comments" className="block text-xl font-semibold">
            Comments:
          </label>
          <textarea
            id="comments"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B5A888] transition"
            rows="4"
          />
        </div>

        
        <div className="flex items-center space-x-6">
          <div>
            <label htmlFor="toilet1" className="block text-xl font-semibold">
              Toilet 1:
            </label>
            <input
              type="checkbox"
              id="toilet1"
              checked={toilet1}
              onChange={() => setToilet1(!toilet1)}
              className="text-[#B5A888] focus:ring-2 focus:ring-[#B5A888] transition"
            />
          </div>
          <div>
            <label htmlFor="toilet2" className="block text-xl font-semibold">
              Toilet 2:
            </label>
            <input
              type="checkbox"
              id="toilet2"
              checked={toilet2}
              onChange={() => setToilet2(!toilet2)}
              className="text-[#B5A888] focus:ring-2 focus:ring-[#B5A888] transition"
            />
          </div>
        </div>

       
        <div>
          <label htmlFor="photo" className="block text-xl font-semibold">
            Photo (optional):
          </label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={(e) => setPhoto(e.target.files[0])}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B5A888] transition"
          />
        </div>

       
        <button
          type="button"
          onClick={generatePDF}
          className="mt-6 bg-[#B5A888] text-white py-3 px-6 rounded-full w-full shadow-md hover:bg-[#8C7A59] focus:outline-none focus:ring-2 focus:ring-[#B5A888] transition"
        >
          Generate PDF
        </button>
      </form>
    </div>
  );
};

export default ReportForm;
