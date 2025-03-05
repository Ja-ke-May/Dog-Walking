const Intro = ({ images }) => {
    return (
      <div className="relative flex max-w-lg bg-white/0 rounded p-4  items-center">
         <div className="flex flex-col max-w-[30%]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className={image.className}
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
    );
  };
  
  export default Intro;
  