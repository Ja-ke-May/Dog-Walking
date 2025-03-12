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
  const [bottomDogPhoto, setbottomDogPhoto] = useState(null);

const getBase64Image = (image) => {
  const canvas = document.createElement("canvas");
  canvas.width = image.width;
  canvas.height = image.height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0);
  return canvas.toDataURL("image/png"); // Force PNG output
};



  const generatePDF = async () => {
    const doc = new jsPDF("p", "mm", "a4");
    const width = 210;
    const height = 297;
  
    const formatDateUK = (date) => {
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, "0");
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    };
  
   
  
    // Background color stops
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
    doc.text("Walk Report", 105, 25, { align: "center" });
  
    
   
  
    
  // Handle top dog photo (any format)
if (photo) {
  const image = new Image();
  const imageURL = URL.createObjectURL(photo); // create URL for blob

  image.src = imageURL;

  await new Promise((resolve) => {
    image.onload = function () {
      const imgWidth = 56;
      const imgHeight = (image.height / image.width) * imgWidth;

      if (imgWidth <= 0 || imgHeight <= 0 || isNaN(imgWidth) || isNaN(imgHeight)) {
        console.error("Invalid image dimensions:", imgWidth, imgHeight);
        resolve(); // continue even if error
        return;
      }

      const imgX = 10;
      const imgY = 5;

      // Convert to base64 PNG (universal format for jsPDF)
      const imgBase64 = getBase64Image(image);

      // Add to PDF
      doc.addImage(imgBase64, "PNG", imgX, imgY, imgWidth, imgHeight, undefined, "FAST");
      resolve();
    };
  });
}

  
    // Name, Date, Time box
    const formattedWalkDate = formatDateUK(walkDate);
    const nameDateTimeX = 80;
    const nameDateTimeY = 55;
  
    doc.setFillColor(0, 0, 0);
    doc.roundedRect(nameDateTimeX - 5, nameDateTimeY - 5, 80, 40, 8, 8, "F");
    doc.setFontSize(18);
    doc.setTextColor(255, 255, 255);
    doc.text(`Name: ${dogName}`, nameDateTimeX, nameDateTimeY + 8);
    doc.text(`Date: ${formattedWalkDate}`, nameDateTimeX, nameDateTimeY + 16);
    doc.text(`Time: ${walkTime}`, nameDateTimeX, nameDateTimeY + 24);
  
    // Toilet box
    const toiletBoxX = 165;
    const toiletBoxY = 55;
    doc.setFillColor(0, 0, 0);
    doc.roundedRect(toiletBoxX - 5, toiletBoxY - 5, 40, 40, 8, 8, "F");
    doc.setFontSize(16);
    doc.text("Toilet:", toiletBoxX, toiletBoxY + 8);
  
    doc.setTextColor(toilet1 ? 0 : 255, toilet1 ? 255 : 0, 0);
    doc.text(`T1: ${toilet1 ? "Yes" : "No"}`, toiletBoxX, toiletBoxY + 18);
    doc.setTextColor(toilet2 ? 0 : 255, toilet2 ? 255 : 0, 0);
    doc.text(`T2: ${toilet2 ? "Yes" : "No"}`, toiletBoxX, toiletBoxY + 26);
  
    // Comments box
    const commentBoxY = 110;
    doc.setFillColor(0, 0, 0);
    doc.roundedRect(10, commentBoxY, 190, 70, 8, 8, "F");
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(18);
    doc.text("Comments:", 15, commentBoxY + 13);
    doc.setFontSize(16);
    doc.text(comments, 15, commentBoxY + 22, { maxWidth: 180 });
  
   // Handle bottom dog photo (any format)
if (bottomDogPhoto) {
  const image = new Image();
  const imageURL = URL.createObjectURL(bottomDogPhoto);

  image.src = imageURL;

  await new Promise((resolve) => {
    image.onload = function () {
      const imgWidth = 190;
      const imgHeight = (image.height / image.width) * imgWidth;
      const imgX = 10;
      const imgY = commentBoxY + 70 + 5;

      // Convert to base64 PNG
      const imgBase64 = getBase64Image(image);

      // Add to PDF
      doc.addImage(imgBase64, "PNG", imgX, imgY, imgWidth, imgHeight, undefined, "FAST");
      resolve();
    };
  });
}

  
    // Small logo
    const smallLogo = "../../BIG_WALKS_green_brown_bg-removebg.png";
    doc.addImage(smallLogo, "PNG", width - 46, 6, 40, 30);
  
    // Save PDF
    doc.save("Big_Walk_Report.pdf");
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
            Photo:
          </label>
          <input
            type="file"
            id="photo"
            accept="image/*"
            onChange={(e) => {
              setPhoto(e.target.files[0]);
              
            }}
            className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#B5A888] transition"
          />
        </div>

        <div>
  <label htmlFor="bottomDogPhoto" className="block text-xl font-semibold">
    Bottom Picture:
  </label>
  <input
    type="file"
    id="bottomDogPhoto"
    accept="image/*"
    onChange={(e) => {
      setbottomDogPhoto(e.target.files[0]);
      
    }}
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
