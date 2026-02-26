// components/Hero.js
import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1600&q=80"
                    alt="Living Room"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Glassmorphism Search Bar */}
            <div className="relative z-10 w-full max-w-4xl px-10">
                <h1 className="text-white text-5xl font-bold mb-8 text-left drop-shadow-lg">
                    Your next home is just <br /> a click away
                </h1>

                <div className="bg-white/20 backdrop-blur-md border border-white/30 p-6 rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-4 gap-10">
                    <div className="flex flex-col gap-4">
                        <label className="text-black text-xs text-center font-semibold mb-1">Location 📍</label>
                        <input type="text" placeholder="London, UK" className="bg-red-200 rounded-xl text-black px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500" />
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className="text-black text-xs font-semibold mb-1">Room Type</label>
                        <select className="bg-white text-black rounded-xl px-4 py-2 outline-none">
                            <option>1BHK</option>
                            <option>2BHK</option>
                            <option>PG</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-4">
                        <label className="text-black text-xs font-semibold mb-1">Budget 💰</label>
                        <input type="text" placeholder="Max ₹20k" className="bg-white text-black rounded-xl px-4 py-2 outline-none" />
                    </div>
                    <div className="flex items-end">
                        <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 rounded-xl transition">
                            Search
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;