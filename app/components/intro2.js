const Intro2 = ({ images }) => {
  return (
    <div className="flex flex-col">
        <h3 className="text-center font-bold text-lg md:text-xl mb-2">My Focus</h3>
    <div className="relative flex flex-col max-w-lg bg-white/0 rounded items-center text-center">
      <div className="ml-2 mr-2 p-2 bg-black/80 text-[#B5A888] brightness-125 rounded md:text-lg lg:text-xl">
        <p>
          My focus is your best friend, they will receive my full attention and care.
          <span className="brightness-125"><strong> BIG WALKS</strong></span> aren't just long walks, they are full of enrichment, adventure, and enjoyment.
        </p>
        </div>
        {/* Render the image dynamically */}
        {images.map((image, index) => (
          <div className="w-full flex justify-center" key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className={image.className}
              priority="true"
            />
          </div>
        ))}
<div className="ml-2 mr-2 p-2 bg-black/80 text-[#B5A888] brightness-125 rounded md:text-lg lg:text-xl">
        <p>
          It will only ever be me and Jack with your dog or dogs to ensure they have the most beneficial time.
        </p>
        </div>
     </div>
    </div>
  );
};

export default Intro2;
