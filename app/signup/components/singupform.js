import { useState } from "react";
import emailjs from "emailjs-com";

const SignUpForm = () => {
    const [showTerms, setShowTerms] = useState(false);
    const [dogAge, setDogAge] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        dogName: "",
        breed: "",
        healthConditions: "",
        email: "",
        phone: "",
        terms: false,
    });

    const handleAgeChange = (event) => {
        setDogAge(event.target.value);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: type === "checkbox" ? checked : value, 
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!formData.terms) {
            alert("You must accept the terms and conditions to proceed.");
            return;
        }

        const templateParams = {
            to_name: "Jake",
            name: formData.name,
            dogName: formData.dogName,
            dogAge: dogAge,
            breed: formData.breed,
            healthConditions: formData.healthConditions,
            email: formData.email,
            phone: formData.phone,
            terms: formData.terms ? "Accepted" : "Not Accepted", 
        };

        emailjs
            .send(
                "service_e1ghwi9",
                "template_hjhdo2y",
                templateParams,
                "wS6m3H08qSoTmsjN8"
            )
            .then(
                (response) => {
                    alert("Message sent successfully!");
                    setFormData({
                        name: "",
                        dogName: "",
                        breed: "",
                        healthConditions: "",
                        email: "",
                        phone: "",
                        terms: false, 
                    });
                },
                (error) => {
                    alert("Failed to send the message. Please try again.");
                }
            );
    };

    return (
        <div className="relative flex max-w-lg bg-white/0 rounded p-4 flex-col items-center mt-20 md:mt-40">
            <div className="p-2 bg-black/80 text-[#B5A888] md:text-lg lg:text-xl brightness-125 rounded w-full">
                <h3 className="text-center font-bold text-lg md:text-xl mb-1 md:mb-2">Sign Up</h3>

                <p className="mb-3 md:mb-4">Join the BIG WALKS pack! Fill out this form and I'll be in touch to schedule your dog's next adventure.</p>

                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="p-2 rounded bg-white text-black placeholder-gray-700"
                        required
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        placeholder="Dog's Name"
                        className="p-2 rounded bg-white text-black placeholder-gray-700"
                        required
                        name="dogName"
                        value={formData.dogName}
                        onChange={handleChange}
                    />

                    <select
                        className="p-2 rounded bg-white text-black placeholder-gray-700"
                        required
                        aria-label="Dog's Age"
                        value={dogAge}
                        onChange={handleAgeChange}
                    >
                        <option value="" disabled>
                            Dog's Age
                        </option>
                        <option value="0 - 6 months">0 - 6 months</option>
                        <option value="6 - 2 years">6 - 2 years</option>
                        <option value="2+">2+ years</option>
                    </select>

                    <input
                        type="text"
                        placeholder="Breed"
                        className="p-2 rounded bg-white text-black placeholder-gray-700"
                        required
                        name="breed"
                        value={formData.breed}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        placeholder="Dog Health Conditions"
                        className="p-2 rounded bg-white text-black placeholder-gray-700"
                        name="healthConditions"
                        value={formData.healthConditions}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="p-2 rounded bg-white text-black placeholder-gray-700"
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <input
                        type="tel"
                        placeholder="Phone"
                        className="p-2 rounded bg-white text-black placeholder-gray-700"
                        required
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <div className="flex items-center gap-2">
                        <input 
                        type="checkbox"
                            id="terms"
                            className="w-4 h-4"
                            name="terms"
                            checked={formData.terms}
                            onChange={handleChange}
                            required 
                            />
                        <label htmlFor="terms" className="text-sm text-[#B5A888]">
                            I agree to the{" "}
                            <span
                                className="underline cursor-pointer"
                                onClick={() => setShowTerms(true)}
                            >
                                Terms and Conditions
                            </span>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="mt-2 p-2 bg-[#B5A888] text-black font-bold rounded hover:bg-[#a49376]"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
            
            {showTerms && (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4">
        <div className="bg-white text-black p-6 rounded max-w-md max-h-[80vh] overflow-y-auto">
            <h3 className="font-bold text-lg mb-2 text-center">Terms and Conditions</h3>

            <p className="text-sm mb-4">
                By signing up, you confirm that you have read and agree to the following terms and conditions of BIG WALKS.
            </p>

            <h4 className="font-bold text-md mt-3">1. Dog Walking Services</h4>
            <p className="text-sm">
                - BIG WALKS provides personalised dog walking services. Only your dog(s) and my dog, Jack, will be walked together—no large group walks.<br />
            </p>

            <h4 className="font-bold text-md mt-3">2. Walk Timings</h4>
            <p className="text-sm">
                - Walks are offered in the following durations:<br />
                - **Big Walks**: 45 minutes<br />
                - **Huge Walks**: 90 minutes<br />
                - **Hikes**: 4-hour sessions<br />
                - **10-Minute Visits**: Quick breaks for letting your dog out or other short visits.<br />
                - I will aim to stick to the agreed walk duration as closely as possible, but timing may vary depending on the dog’s needs or unexpected circumstances.<br />
                - Pick-up and drop-off times will be arranged with each client in advance.<br />
                - If I am driving to a specific location for the walk, the driving time will **not** be included in the walk time.
            </p>

            <h4 className="font-bold text-md mt-3">3. Transport</h4>
            <p className="text-sm">
                - I usually choose unique and interesting routes locally for walks.<br />
                - However, if driving to a different location is more beneficial, I will arrange transportation accordingly.<br />
                - Dogs will be transported safely by car or van, in the correct crates or with car hammocks.<br />
                - Dogs will be secured in harnesses during transport to comply with legal requirements for animal safety.
            </p>


            <h4 className="font-bold text-md mt-3">2. Health & Safety</h4>
            <p className="text-sm">
                - I am canine and human first-aid trained.<br />
                - Your dog must be healthy and fit for walking. Any health conditions must be disclosed in advance.<br />
                - I hold an Enhanced DBS Check for your peace of mind.
            </p>

            <h4 className="font-bold text-md mt-3">3. Challenging Dogs & Large Breeds</h4>
            <p className="text-sm">
                - I have experience handling large and strong breeds.<br />
                - I am happy to work with challenging dogs, but I require a 10-minute intro visit before our first walk to assess whether I can safely handle your dog.
            </p>

            <h4 className="font-bold text-md mt-3">4. Liability</h4>
            <p className="text-sm">
                - While I take every precaution for your dog’s safety, BIG WALKS is not responsible for any unforeseen incidents, injuries, or illnesses.<br />
                - Your dog must have up-to-date vaccinations, flea, and worm treatments.
            </p>

            <h4 className="font-bold text-md mt-3">5. Photos & Videos</h4>
            <p className="text-sm">
                - I may take photos and videos of your dog during walks for promotional purposes (e.g., YouTube, social media).<br />
                - If you do not wish for public sharing, we can discuss private video-sharing options instead.
            </p>

            <h4 className="font-bold text-md mt-3">6. Cancellations & Fees</h4>
            <p className="text-sm">
                - Cancellations must be made at least 24 hours in advance. Late cancellations may be subject to a fee.
            </p>

            <h4 className="font-bold text-md mt-3">7. UK Dog Walking Laws & Compliance</h4>
            <p className="text-sm">
                - I comply with all UK dog walking laws, including:<br />
                - Animal Welfare Act 2006 – Ensuring your dog’s needs are met.<br />
                - Control of Dogs Order 1992 – Your dog must wear an ID tag with your details.<br />
                - Dog Fouling Laws – I always clean up after your dog.
            </p>

            <h4 className="font-bold text-md mt-3">8. Contact Information</h4>
            <p className="text-sm">
                **Address:** 259 Meltham Road, Netherton, Huddersfield HD4 7HL<br />
                **Phone:** 07780 685832<br />
                **Email:** Big_Walks@outlook.co.uk
            </p>

            <button onClick={() => setShowTerms(false)} className="mt-4 p-2 w-full bg-[#B5A888] text-black font-bold rounded hover:bg-[#a49376]">
                Close
            </button>
        </div>
    </div>
)}

        </div>
    );
};

export default SignUpForm;