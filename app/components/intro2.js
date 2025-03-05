const Intro2 = ({ images }) => {
  return (
    <div className="relative flex max-w-lg bg-white/0 rounded p-4 items-center text-center">
      <div className="ml-2 p-2 bg-black/80 text-[#B5A888] brightness-125 rounded md:text-lg lg:text-xl">
        <p>
          My focus is your best friend, they will receive my full attention and care.
          <span className="brightness-125"><strong> BIG WALKS</strong></span> aren't just long walks, they are full of enrichment, adventure, and enjoyment.
        </p>

        {/* Render the image dynamically */}
        {images.map((image, index) => (
          <div className="w-full flex justify-center mt-2 mb-2" key={index}>
            <img
              src={image.src}
              alt={image.alt}
              className={image.className}
            />
          </div>
        ))}

        <p>
          It will only ever be me and Jack with your dog or dogs to ensure they have the most beneficial time. I will come for a short visit initially, 10 minutes or so, to confirm we are good to go.
        </p>
      </div>
    </div>
  );
};

export default Intro2;
