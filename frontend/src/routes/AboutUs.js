
import React from 'react';

const people = [
  {
    name: 'Sandesh Kankriya',
    prn: '240340320087',
    img: 'https://res.cloudinary.com/btechproject2023/image/upload/v1716186095/Music/fo0l2j5bssu8hexjfxei.jpg'
  },
  {
    name: 'Hrishikesh Sapkal',
    prn: '240340520036',
    img: 'https://res.cloudinary.com/btechproject2023/image/upload/v1716186434/Music/io95pg6ftcl3hfsrgrmw.png'
  },
  {
    name: 'Shivani Kamerkar',
    prn: '240340320097',
    img: 'https://res.cloudinary.com/btechproject2023/image/upload/v1716186801/Music/mlsyhgbngtrqe5iesc8o.jpg'
  }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-10">
      <h1 className="text-4xl font-bold text-center mb-10">About Us</h1>
      <div className="flex flex-col items-center space-y-8">
        {people.map((person, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center w-80">
            <img src={person.img} alt={person.name} className="w-32 h-32 rounded-full mx-auto mb-4"/>
            <h2 className="text-2xl font-semibold mb-2">{person.name}</h2>
            <p className="text-gray-400">PRN: {person.prn}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutUs;

