const Intro = ({ images }) => {
    return (
      <div className="flex flex-col">
        <h3 className="text-center font-bold text-lg md:text-xl mb-2">Hello!</h3>
      <div className="relative flex max-w-lg bg-white/0 rounded ml-2 mr-2 items-center">
         <div className="flex flex-col max-w-[30%]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={image.className}
            priority="true"
          />
        ))}
      </div>
        <div className="ml-2 p-2 bg-black/80 text-[#B5A888] md:text-lg lg:text-xl brightness-125 rounded">
          <p className="">
            Hi! I'm <strong>Jake</strong>, and this is my boy, <strong>Jack</strong>. We love exploring the outdoors and bringing new friends on adventures. 
            <br /> 
            Based in HD4, I offer professional dog walking services throughout 
          Huddersfield and West Yorkshire.
          </p>
        </div>
      </div>
      </div>
    );
  };
  
  export default Intro;
  