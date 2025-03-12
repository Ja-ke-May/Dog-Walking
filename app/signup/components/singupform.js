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
    const [buttonText, setButtonText] = useState("Sign Up");

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
            setButtonText("You must accept the terms");
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

        setButtonText("Sending...");

        emailjs
            .send(
                "service_e1ghwi9",
                "template_hjhdo2y",
                templateParams,
                "wS6m3H08qSoTmsjN8"
            )
            .then(
                (response) => {
                    setButtonText("Thank you, I'll be in touch shortly.");
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
                    setButtonText("Sorry, there was a problem.");
                }
            );
    };

    return (
        <div className="relative flex max-w-lg bg-white/0 rounded p-4 flex-col items-center mt-20 md:mt-50">
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
                         {buttonText}
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
                - **Hikes**: 3/4-hour sessions<br />
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
                - Your dog must have up-to-date vaccinations, flea, and worm treatments.<br />
                - BIG WALKS holds up to £5 million in public liability insurance to cover any accidents or incidents that may occur during walks.
            </p>

            <h4 className="font-bold text-md mt-3">7. Photos, Videos, & Online Account</h4>
<p className="text-sm">
    - I may take photos and videos of your dog during walks for promotional purposes (e.g., YouTube, social media).<br />
    - If you do not wish for public sharing, we can discuss private video sharing options instead.<br />
    - As part of our service, you will be given access to an online account where you can log in to view your dog’s walk history, including links to walk reports, photos, and videos.<br />
    - This account is for you to monitor your dog’s walks and receive walk related updates. The content shared will only include your dog's name, date, time of walks, comments on the walk and images of your dog. No personal details about you or your dog’s location will be shared or made public.<br />
    - You are responsible for keeping your login credentials secure. If you believe someone else has access to your account, please inform me immediately to have your password changed.
</p>

<h4 className="font-bold text-md mt-3">6. Payments, Cancellations & Fees</h4>
<p className="text-sm">
    - **Payments**: 
    <br />
    - Payment for services is due after the walk has been completed, unless otherwise agreed.
    <br />
    - I accept payments via [bank transfer, credit card, PayPal, etc.]. Payment details will be provided after the walk.
    <br />
    - Payment for recurring bookings (e.g., weekly or monthly) will be collected on a regular basis as agreed upon at the time of booking.
    <br />
    - Any late payments will incur a late fee of 50%. Services may be paused or canceled if payments are not received within 4 weeks of the due date.
    <br />
    - Refunds will only be issued for cancellations made at least 24 hours before the scheduled pick-up time. No refunds will be provided for cancellations within 24 hours.
    <br />
    <br />
    - **Cancellations**: 
    <br />
    - Cancellations must be made at least 24 hours before the scheduled pick-up time to avoid any charges.
    <br />
    - Cancellations made less than 24 hours before the scheduled pick-up time will incur a cancellation fee of 50% of the total cost of the service.
    <br />
    - If I arrive to collect your dog and you have not informed me of a cancellation, you will be charged the full amount for the walk.
    <br />
    - In the event of an emergency, please contact me as soon as possible. I will consider each case individually, but cancellation fees may still apply.
    <br />
    - You may reschedule walks within the 24-hour notice period, subject to availability. If rescheduling is not possible, the cancellation policy will apply.
    <br />
    <br />
    - **Late Arrivals & Pick-Up Delays**: 
    <br />
    - If I arrive to collect your dog and you are unavailable or delayed, I will do my best to accommodate, but please note that the walk duration may be shortened to stay on schedule.
    <br />
    - Late arrivals may still be charged in full. I kindly ask that you ensure your dog is ready for the scheduled pick-up time to avoid delays and extra charges.
</p>

            <h4 className="font-bold text-md mt-3">7. UK Dog Walking Laws & Compliance</h4>
            <p className="text-sm">
                - I comply with all UK dog walking laws, including:<br />
                - Animal Welfare Act 2006 – Ensuring your dog’s needs are met.<br />
                - Control of Dogs Order 1992 – Your dog must wear an ID tag with your details.<br />
                - Dog Fouling Laws – I always clean up after your dog.
            </p>

            <h4 className="font-bold text-md mt-3">8. Data Protection and Privacy</h4>
            <p className="text-sm"> - BIG WALKS is committed to protecting your privacy and complying with the General Data Protection Regulation (GDPR).<br /> - By signing up, you consent to the collection and processing of your personal data (such as your name, contact details, and your dog's name and walk history) for the purpose of providing the dog walking services.<br /> - Your data will only be used for operational purposes, including managing your dog’s walks, communication, and account access.<br /> - No personal details, such as your home address, phone number, or other sensitive information, will be shared publicly or with third parties, except where required by law.<br /> - Any images or videos of your dog will be shared only with your consent. These will be used for walk reports and promotional purposes, unless you opt out.<br /> - You have the right to access, correct, or request the deletion of your personal data at any time. Please contact us at Big_Walks@outlook.co.uk for any data-related requests.<br /> - We will ensure that your data is kept secure and will not be stored longer than necessary for the provision of services. Your online account will be protected with a secure login, and it is your responsibility to keep your credentials safe.<br /> - For further details on how your personal data is handled, please refer to our Privacy Policy, which you can request at any time. </p>

            <h4 className="font-bold text-md mt-3">9. Contact Information</h4>
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