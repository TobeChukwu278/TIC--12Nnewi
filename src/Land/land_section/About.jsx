import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative">
                        <img
                            src="/image3.png"
                            alt="TIC Nnewi team working together"
                            className="w-full h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl font-bold mb-4 text-blue-700">About Our Centre</h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            The Technology Incubation Centre Nnewi is dedicated to nurturing the next generation of entrepreneurs and innovators. We provide a dynamic environment where groundbreaking ideas can flourish into sustainable businesses. Our comprehensive support system includes access to cutting-edge facilities, expert mentorship, and a network of industry leaders.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            By fostering a culture of collaboration and innovation, we aim to be a catalyst for economic growth in the region, empowering startups to overcome challenges and achieve long-term success.
                        </p>
                        <a
                            href="#contact"
                            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-bold shadow-lg hover:bg-blue-700 transition duration-300 self-start"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;