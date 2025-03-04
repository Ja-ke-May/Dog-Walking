const Contact = () => {
    return (
      <div className="relative flex max-w-lg bg-white/0 font-bold rounded p-4 shadow-md items-center text-center">
        <div className="ml-2 p-2 bg-black/90 text-[#B5A888] brightness-125 rounded md:text-xl">
          <p className="m-2">Please contact me to discuss your needs.</p>
          <p className="m-2">Jacob May</p>
          <p className="brightness-125 m-2">
            <a href="tel:+447780685832" className="text-[#B5A888] hover:text-[#9A9A7B]">
              07780685832
            </a>
          </p>
          <p className="brightness-125 m-2">
            <a href="mailto:jacob-may@outlook.com" className="text-[#B5A888] hover:text-[#9A9A7B]">
              jacob-may@outlook.com
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default Contact;
  