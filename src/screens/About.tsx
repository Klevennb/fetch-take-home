import React from 'react';

const About: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">About The Technology and Process</h1>
            <p className="text-lg text-center max-w-2xl">
                Here I will explain the technology and processes used to create this application.
            </p>
        </div>
    );
};

export default About;