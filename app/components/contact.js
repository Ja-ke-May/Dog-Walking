const Contact = ({ images }) => {
    return (
      <div className="flex flex-col">
        <h3 className="text-center font-bold text-lg md:text-xl mb-2">Contact</h3>
      <div className="relative flex flex-col max-w-lg bg-white/0 rounded items-center text-center">
        <div className="ml-2 mr-2 p-2 bg-black/80 text-[#B5A888] brightness-125 rounded  md:text-lg lg:text-xl">
          <p className="text-lg">Please get in touch to discuss your requirements.</p>
          <p className="text-lg mt-1">For prices press Previous.</p>
          </div>
          <div className="w-full flex justify-center mt-1 mb-1">
          {/* Use images prop for the profile picture */}
          <img 
            src={images[0].src} 
            alt={images[0].alt} 
            className={images[0].className} 
            priority="true"
          />
          </div>
        <div className="ml-2 p-2 bg-black/80 text-[#B5A888] brightness-125 rounded  md:text-lg lg:text-xl">
         
          <p className="brightness-125">
            <a href="tel:+447780685832" className="text-[#B5A888] hover:text-[#9A9A7B] text-lg">
              07780685832
            </a>
          </p>
          <p className="brightness-125 m-1">
            <a href="mailto:Big_Walks@outlook.com" className="text-[#B5A888] hover:text-[#9A9A7B] text-lg">
              Big_Walks@outlook.com
            </a>
          </p>
          <p className="brightness-125 m-2">
            <a href="https://www.youtube.com/@BIG_WALKS" target="_blank" rel="noopener noreferrer" className="text-[#B5A888] hover:text-red-600 text-lg">
              BIG WALKS YouTube
            </a>
          </p>
        </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  