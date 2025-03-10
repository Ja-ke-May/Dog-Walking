const WhatYouGetTwo = ({ images }) => {
    return (
        <div className="flex flex-col">
            <h3 className="text-center font-bold text-lg md:text-xl">What You Get</h3>
       
      <div className="relative flex max-w-lg bg-white/0 rounded p-2 items-center"> 
      
     
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
       
            
        <p className="line-spacing-2">
        <b>Healthy treats</b> – Natural options like dried fish, chicken, or beef, based on your dog’s diet.<br />
        <b>Online Account</b> – View previous walks and keep track of your dogs journey.<br />
        <b>Updates & pictures</b> – You’ll receive a walk report plus a video of the best bits, view our walks on <a href="https://www.youtube.com/@BIG_WALKS" target="_blank" rel="noopener noreferrer" className="text-[#B5A888] hover:text-red-600 underline" >YouTube.</a><br /> 
          </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhatYouGetTwo;
  