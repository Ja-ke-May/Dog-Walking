const Safety = ({ images }) => {
    return (
      <div className="flex flex-col">
          <h3 className="text-center font-bold text-lg md:text-xl mb-2">Safety</h3>
      <div className="relative flex flex-col max-w-lg bg-white/0 rounded items-center text-center">
      <div className="ml-2 mr-2 p-2 bg-black/80 text-[#B5A888] md:text-lg lg:text-xl brightness-125 rounded">
       
            
       <p className='mb-2'>
       <b>First Aid Trained</b><br />Canine and human.
       </p>
       
       <p className='mb-2'>
       <b>Public liability Insured</b><br />Fully insured up to 5 million.
       </p>
       
       <p>
       <b>DBS</b><br />Enhanced DBS checked. 
         </p>
         </div>

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
      </div>
    );
  };
  
  export default Safety;
  