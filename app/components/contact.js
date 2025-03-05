const Contact = () => {
    return (
      <div className="relative flex max-w-lg bg-white/0 rounded p-4 items-center text-center">
        <div className="ml-2 p-2 bg-black/80 text-[#B5A888] brightness-125 rounded  md:text-lg lg:text-xl">
          <p className="m-2">Please contact me to discuss your requirements.</p>
          
          <div className="w-full flex justify-center mt-2 mb-2">
          <img 
            src="Jacob May.jpg" 
            alt="Jacob May" 
            className="rounded max-w-16 md:max-w-32"
          />
          </div>
          <p className="brightness-125 mt-4">
            <a href="tel:+447780685832" className="text-[#B5A888] hover:text-[#9A9A7B] text-lg">
              07780685832
            </a>
          </p>
          <p className="brightness-125 m-2">
            <a href="mailto:jacob-may@outlook.com" className="text-[#B5A888] hover:text-[#9A9A7B] text-lg">
              Jacob-May@outlook.com
            </a>
          </p>
          <p className="brightness-125 m-2">
            <a href="https://www.youtube.com/@BIG_WALKS" target="_blank" rel="noopener noreferrer" className="text-[#B5A888] hover:text-red-600 text-lg">
              BIG WALKS YouTube
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default Contact;
  