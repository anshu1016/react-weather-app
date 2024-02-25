import React, { useState } from 'react';

const TopButtons = ({ setQ }) => {
    const cities = [
        { id: 1, title: "Maldives" },
        { id: 2, title: "Japan" },
        { id: 3, title: "India" },
        { id: 4, title: "Australia" },
        { id: 5, title: "Spain" },
        { id: 6, title: "Korea" },
        { id: 7, title: "Orrisa" },
        { id: 8, title: "Jaipur" },
        { id: 9, title: "London" },
        { id: 10, title: "Bangladesh" }
    ];

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <div className="flex justify-center my-6">
            <div className="flex flex-row items-center">
                {cities.slice(0, 3).map((city) => (
                    <button
                        key={city.id}
                        className="text-white text-lg font-medium cursor-pointer mr-4 px-4 py-2 rounded-md  hover:bg-blue-600 transition duration-300"
                        onClick={() => setQ({ q: city.title })}
                    >
                        {city.title}
                    </button>
                ))}
                {cities.length > 3 && (
                    <div className="relative">
                        <button
                            className="text-white text-lg font-medium cursor-pointer px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 transition duration-300"
                            onClick={toggleDropdown}
                        >
                            More
                        </button>
                        {showDropdown && (
                            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md overflow-hidden">
                                {cities.slice(3).map((city) => (
                                    <button
                                        key={city.id}
                                        className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-200 transition duration-300"
                                        onClick={() => {
                                            setQ({ q: city.title });
                                            toggleDropdown();
                                        }}
                                    >
                                        {city.title}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TopButtons;
