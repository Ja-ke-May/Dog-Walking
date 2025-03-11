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
  
  const generatePDF = () => {
    const doc = new jsPDF("p", "mm", "a4");
    const width = 210;
    const height = 297;
  
    // Background gradient
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
    doc.setFontSize(20);
    doc.setTextColor(255, 255, 255);
    const topMargin = 1;
    const titleY = topMargin + 19;
    doc.text("Big Walk Report", 105, titleY, { align: "center" });
  
    // Add dog image if available
    if (photo) {
      const image = URL.createObjectURL(photo);
      const imgX = 10;
      const imgY = 35;
      const imgWidth = 60;
      const imgHeight = 60;
      const imgRadius = 10;
  
      doc.setFillColor(255, 255, 255);
      doc.roundedRect(imgX, imgY, imgWidth, imgHeight, imgRadius, imgRadius, "F");
  
      doc.addImage(image, "JPEG", imgX, imgY, imgWidth, imgHeight, undefined, "FAST");
    }
  
    // Format the walk date to UK format
    const formattedWalkDate = formatDateUK(walkDate);
  
    // Position for the "Name," "Date," and "Time" box (adjusted width)
    const nameDateTimeX = 80;
    const nameDateTimeY = 50;
    const nameDateTimeWidth = 70;  // Reduced width
    const nameDateTimeHeight = 30;
    const nameDateTimeRadius = 8;
  
    // Background for Name, Date, Time section (black rounded corner)
    doc.setFillColor(0, 0, 0);
    doc.roundedRect(nameDateTimeX - 5, nameDateTimeY - 5, nameDateTimeWidth + 10, nameDateTimeHeight + 10, nameDateTimeRadius, nameDateTimeRadius, "F");
  
    // Add the Name, Date, and Time text inside the background
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text(`Name: ${dogName}`, nameDateTimeX, nameDateTimeY + 8);
    doc.text(`Date: ${formattedWalkDate}`, nameDateTimeX, nameDateTimeY + 16);
    doc.text(`Time: ${walkTime}`, nameDateTimeX, nameDateTimeY + 24);
  
    // Position for the "Toilet Info" box
    const toiletBoxX = 160; 
    const toiletBoxY = 50;
    const toiletBoxWidth = 30;
    const toiletBoxHeight = 30;
    const toiletBoxRadius = 8;
  
    // Background for Toilet Info section (black rounded corner)
    doc.setFillColor(0, 0, 0);
    doc.roundedRect(toiletBoxX - 5, toiletBoxY - 5, toiletBoxWidth + 10, toiletBoxHeight + 10, toiletBoxRadius, toiletBoxRadius, "F");
  
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255); 
    doc.text("Toilet:", toiletBoxX, toiletBoxY + 8);
  
    // Add the Toilet info text below the title
    doc.setFontSize(12);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
  
    // Toilet 1 info with color change
    if (toilet1) {
      doc.setTextColor(0, 255, 0); // Green for Yes
    } else {
      doc.setTextColor(255, 0, 0); // Red for No
    }
    doc.text(`T1: ${toilet1 ? "Yes" : "No"}`, toiletBoxX, toiletBoxY + 18);
  
    // Toilet 2 info with color change
    if (toilet2) {
      doc.setTextColor(0, 255, 0); // Green for Yes
    } else {
      doc.setTextColor(255, 0, 0); // Red for No
    }
    doc.text(`T2: ${toilet2 ? "Yes" : "No"}`, toiletBoxX, toiletBoxY + 26);
  
    // Comment box 
    const commentBoxX = 10;
    const commentBoxY = 110; 
    const commentBoxWidth = 190;
    const commentBoxHeight = 70;
    const cornerRadius = 8;
  
    doc.setFillColor(0, 0, 0);
    doc.roundedRect(commentBoxX, commentBoxY, commentBoxWidth, commentBoxHeight, cornerRadius, cornerRadius, "F");
  
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text("Comments:", commentBoxX + 10, commentBoxY + 12);
    doc.setFontSize(12);
    doc.text(comments, commentBoxX + 10, commentBoxY + 22, { maxWidth: commentBoxWidth - 20 });
  
    // --- Logo Section ---
    const logo = "../../BIG_WALKS_green_brown_bg-removebg.png";
    const marginBottom = 5;
  
    const availableHeight = height - (commentBoxY + commentBoxHeight) - marginBottom;
  
    const logoWidth = width;
    const logoHeight = availableHeight > 0 ? availableHeight : 30;
  
    const logoX = 0;
    const logoY = commentBoxY + commentBoxHeight;
  
    doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
  
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
