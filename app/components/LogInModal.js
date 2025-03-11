import { useState } from "react";

export default function LoginModal({ isOpen, onClose, onSuccess }) {
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value.trim().toLowerCase();
    const password = e.target.password.value;

    let accounts = [];

    try {
      const response = await fetch('/one/reports/accountInfo/account.json'); 
      if (!response.ok) {
        throw new Error("Failed to fetch account data.");
      }

      accounts = await response.json(); // Parse JSON from the server response
    } catch (err) {
      console.error("Error fetching or parsing JSON:", err);
      setError("There was an issue with the login data.");
      return;
    }

    const user = accounts.find(
      (account) => account.email.toLowerCase() === email && account.password === password
    );

    if (user) {
      console.log("Login successful!");
      setError("");
      onSuccess(user);
      onClose();
    } else {
      console.log("Invalid login");
      setError("Invalid email or password");
    }
  };


  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Log In</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            name="email"  
            type="text"
            placeholder="Email or Phone Number"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#B5A888]"
          />
          <input
            name="password"  
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#B5A888]"
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-[#B5A888] text-white font-bold rounded-md hover:bg-[#9c8a6d] transition cursor-pointer"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
