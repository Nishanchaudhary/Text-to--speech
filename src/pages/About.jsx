import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">About Us</h1>
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="./text-to-speech-too.jpg"
            alt="Text-to-Speech Technology"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <p className="text-lg text-gray-700">
            Welcome to our <span className="font-bold text-blue-600">Text-to-Speech</span> converter application! 
            This tool is designed to make your life easier by converting written text into spoken words. 
            Whether you're learning a new language, proofreading, or just prefer listening over reading, 
            our app has got you covered.
          </p>
          <p className="text-lg text-gray-700">
            Built with <span className="font-bold text-blue-600">React</span> and styled using 
            <span className="font-bold text-blue-600"> TailwindCSS</span>, this application is fast, 
            responsive, and user-friendly. You can customize the voice, pitch, and speed to suit your preferences.
          </p>
          <p className="text-lg text-gray-700">
            Our mission is to provide a seamless and accessible experience for everyone. 
            Feel free to explore the app and let us know your feedback!
          </p>
        </div>
      </div>

      {/* Additional Features Section */}
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Multiple Voices</h3>
            <p className="text-gray-700">
              Choose from a variety of voices to personalize your listening experience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Customizable Settings</h3>
            <p className="text-gray-700">
              Adjust pitch and speed to match your preferences.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
            <p className="text-gray-700">
              Intuitive interface designed for all users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;