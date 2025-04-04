"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Paws from "../components/paws";

export default function AccountPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  const [visibleWalks, setVisibleWalks] = useState(4);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-5D6MRB0W10';
    script.async = true;
    document.body.appendChild(script);
  
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
  
    gtag('config', 'G-5D6MRB0W10');
  
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setUser(storedUser); 
    }
    setLoading(false);
  
    const fetchUpdatedData = async () => {
      try {
        const response = await fetch('/one/reports/accountInfo/account.json', { cache: "no-store" });
        if (!response.ok) throw new Error("Failed to fetch updated account data.");
  
        const accounts = await response.json();
  
        const updatedUser = accounts.find(
          (account) => account.username.toLowerCase() === storedUser.username.toLowerCase()
        );
  
        if (updatedUser) {
          setUser(updatedUser); 
          localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
        }
      } catch (err) {
        console.error("Error refreshing account data:", err);
      }
    };
  
    
    fetchUpdatedData();

    const interval = setInterval(fetchUpdatedData, 60000);
  
    return () => clearInterval(interval);
  }, []);
  

  const handleLogout = () => {
    
    localStorage.removeItem('loggedInUser');
    window.location.href = "/"; 
  };

  if (loading) {
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <p className="text-white text-lg">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="account-page">
        <h1>No user logged in.</h1>
      </div>
    );
  }

  const handleLoadMore = () => {
    setVisibleWalks((prev) => prev + 4); 
  };

  return (
    <>
     <Paws />
    <div className="account-page p-6">
      {/* Log Out Button */}
      <button
        onClick={handleLogout}
        className="fixed top-4 right-4 px-4 py-2 bg-red-700 text-white rounded-full shadow-md hover:bg-red-700 transition z-50 cursor-pointer"
      >
        Log Out
      </button>

     

      <img
        src="../BIG_WALKS_green_brown_bg-removebg.png"
        alt="Paw Print"
        className="fixed top-2 left-0 min-h-[5%] max-h-[10%] md:min-h-[15%] md:max-h-[20%] cursor-pointer"
        onClick={() => { window.location.href = '/'; }}
      />

      {/* Centered Dog Information */}
      <div className="flex flex-col items-center justify-center mt-4 space-y-6">
        <div className="text-center">
          <img
            src={`../../${user.dog.profileImage}`}
            alt={user.dog.name}
            className="w-40 h-40 object-cover rounded-full mb-2 border-4 border-black-80"
          />
          <p className="text-4xl font-bold">{user.dog.name}</p>
          <p className="text-xl">{user.dog.breed}</p>
        </div>
      </div>

      {/* Walk History Section */}
      <div className="mt-4 p-2 flex flex-col items-center justify-center md:text-lg ">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-4">Walk History</h2>

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {user.walkHistory.length > 0 ? (
              user.walkHistory.slice(0, visibleWalks).map((walk, index) => (
                <div 
                key={index}
                >
                <h4 className="text-xl md:text-2xl lg:text-3xl mb-2">{walk.title}</h4>
                <div
                  className="md:max-w-[100%] flex flex-col md:flex-row  items-center justify-center bg-black/80 pl-4 pr-4 md:pl-10 md:pr-10 text-[#B5A888] text-lg rounded "
                >
                  
                 
                    <img
                     src={`../../${user.userID}/${walk.walkImage}`}
                      alt={`Walk on ${walk.date}`}
                      className="inline max-w-[60%] max-h-40 lg:max-h-60 rounded-lg m-2"
                    />
                  

                  
                  <div className="w-full  mb-2 md:mr-2 md:ml-4 text-center md:text-right md:text-xl lg:text-2xl">
                  
                    <p><strong>Date:</strong> {walk.date}</p>
                    <p><strong>Walk Type:</strong> {walk.walkType}</p>
                    <p><strong>Duration:</strong> {walk.duration}</p>

                    {/* Report Link */}
                    <a
                      href={`../../${user.userID}/reports/${walk.report}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-100 hover:underline hover:text-blue-500 mt-2 md:mt-4 block"
                    >
                     Walk Report
                    </a>

                    {/* YouTube Video Link */}
                    {walk.videoUrl && (
                      <div className="mt-2 mb-2">
                        <a
                          href={walk.videoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-100 hover:underline hover:text-red-500"
                        >
                        Walk Video
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                </div>
              ))
            ) : (
              <p>No walk history available.</p>
            )}
          </motion.div>
        </AnimatePresence>

        {visibleWalks < user.walkHistory.length && ( 
            <button
              onClick={handleLoadMore}
              className="mt-6 px-6 py-3 bg-green-700 text-white rounded-full shadow-md hover:bg-green-800 transition"
            >
              Load More...
            </button>
          )}

      </div>
    </div> 
    </>
  );
}
