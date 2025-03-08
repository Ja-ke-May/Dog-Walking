const SignUpForm = () => {
    return (
        <div className="relative flex max-w-lg bg-white/0 rounded p-4 flex-col items-center mt-20 md:mt-40 lg:mt-50"> 
            <div className="p-2 bg-black/80 text-[#B5A888] md:text-lg lg:text-xl brightness-125 rounded w-full">
                <h3 className="text-center font-bold text-lg md:text-xl mb-1 md:mb-2">Sign Up</h3>

                <p className="mb-3 md:mb-4">Join the BIG WALKS pack! Fill out this form and I'll be in touch to schedule your dog's next adventure.</p>
                
                <form className="flex flex-col gap-3">
                    <input type="text" placeholder="Your Name" className="p-2 rounded bg-white text-black placeholder-gray-700" required />
                    <label className="text-sm text-[#B5A888]">Your Date of Birth</label>
                    <input type="date" placeholder="Your DOB" className="p-2 rounded bg-white text-black placeholder-gray-700" required />
                    <input type="text" placeholder="Dog's Name" className="p-2 rounded bg-white text-black placeholder-gray-700" required />
                    <label className="text-sm text-[#B5A888]">Dog's Date of Birth</label>
                    <input type="date" placeholder="Dog's DOB" className="p-2 rounded bg-white text-black placeholder-gray-700" required />
                    <input type="text" placeholder="Breed" className="p-2 rounded bg-white text-black placeholder-gray-700" required />
                    <input type="text" placeholder="Dog Health Conditions" className="p-2 rounded bg-white text-black placeholder-gray-700" />
                    <input type="text" placeholder="Phone or Email" className="p-2 rounded bg-white text-black placeholder-gray-700" required />
                    
                    <button type="submit" className="mt-2 p-2 bg-[#B5A888] text-black font-bold rounded hover:bg-[#a49376]">Sign Up</button>
                </form>
            </div>
        </div>
    );
};

export default SignUpForm;
