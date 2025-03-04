const Intro = () => {
    return (
      <div className="relative flex max-w-lg bg-white/0 rounded p-4 shadow-md items-center">
        <img
          src="../on-log.jpeg"
          alt="Jake and Jack - Dog Walking Services"
          className="w-32 h-32 md:w-60 md:h-60 rounded object-cover border-2 border-black/90"
        />
        <div className="ml-2 p-2 bg-black/90 text-[#B5A888] brightness-125 rounded">
          <p className="">
            Hello! I'm Jake, and this is my boy, Jack. We love exploring the outdoors and bringing new friends out on adventures. 
            <br /> 
            Based in HD4, I offer professional dog walking services throughout 
          Huddersfield and West Yorkshire.
          </p>
        </div>
      </div>
    );
  };
  
  export default Intro;
  