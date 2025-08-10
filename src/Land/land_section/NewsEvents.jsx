import React from 'react';
import { FaCalendarAlt, FaBullhorn } from 'react-icons/fa'; // Importing icons for date and announcement

const news = [
    {
        title: "Startup Pitch Day: Future Innovators Showcase",
        date: "August 15, 2025",
        description: "Join us to witness groundbreaking ideas from our incubatees. Investors and industry leaders welcome!",
        type: "event", // Added a type to differentiate news vs. events
        link: "#", // Placeholder for a link to a full article/event page
    },
    {
        title: "Innovation Workshop: Mastering Digital Marketing",
        date: "September 10, 2025",
        description: "A hands-on workshop designed to equip startups with essential digital marketing strategies.",
        type: "event",
        link: "#",
    },
    {
        title: "TIC Nnewi Secures New Partnership for Seed Funding",
        date: "July 28, 2025",
        description: "Exciting news! Our centre has partnered with [Partner Name] to provide enhanced seed funding opportunities for startups.",
        type: "news",
        link: "#",
    },
    {
        title: "Success Story: Local Startup Graduates from Incubation Program",
        date: "July 20, 2025",
        description: "We celebrate [Startup Name]'s successful graduation, marking a significant milestone in their journey.",
        type: "news",
        link: "#",
    },
];

const NewsEvents = () => {
    return (
        <section id="news" className="py-16 bg-blue-50"> {/* Changed background to blue-50 for contrast */}
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-10 text-blue-700">Latest News & Upcoming Events</h2> {/* Changed h3 to h2, improved text */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Adjusted grid for two columns */}
                    {news.map((item, idx) => (
                        <a
                            key={idx}
                            href={item.link} // Make the entire card clickable
                            className="block bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-left"
                        >
                            <div className="flex items-center mb-3">
                                {item.type === "event" ? (
                                    <FaCalendarAlt className="w-6 h-6 text-blue-500 mr-3" />
                                ) : (
                                    <FaBullhorn className="w-6 h-6 text-green-500 mr-3" />
                                )}
                                <p className="text-sm text-gray-500 font-semibold">{item.date}</p>
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3> {/* Changed h4 to h3 */}
                            <p className="text-gray-700 text-base">{item.description}</p>
                        </a>
                    ))}
                </div>
                {/* Optional: Add a 'View All' button if there are more news/events */}
                <div className="mt-12">
                    <a
                        href="/all-news-events"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md font-bold shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                    >
                        View All Updates
                    </a>
                </div>
            </div>
        </section>
    );
};

export default NewsEvents;