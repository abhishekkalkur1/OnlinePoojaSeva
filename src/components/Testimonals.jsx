import React from 'react';

const Testimonials = () => {
  const testimonials = [
{
  "quote": "The pooja felt so real even though I was in Russia. Very peaceful and authentic!",
  "author": "Priya",
  "country": "🇷🇺 Russia",
  "faith": "Hindu"
},
    {
      quote: "As a Christian, I was deeply moved by the spiritual energy. Beautiful interfaith experience!",
      author: "Sarah",
      country: "🇺🇸 USA",
      faith: "Christian",
      highlight: true // Special highlight
    },
    {
      quote: "Received prasadam in UK within 10 days. The whole experience was divine.",
      author: "Meera",
      country: "🇬🇧 UK",
      faith: "Hindu"
    },
    {
      quote: "The pandit explained everything in English which helped me understand the rituals.",
      author: "Arjun",
      country: "🇦🇪 UAE",
      faith: "Hindu"
    }
  ];

  return (
    <div className="bg-amber-00 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

              <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-600 mb-12">
 Devotee Experiences
      </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Spiritual connections across faiths and borders
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                testimonial.highlight ? "ring-2 ring-blue-500" : ""
              }`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">{testimonial.country.split(' ')[0]}</span>
                    <span className="text-gray-600">{testimonial.country.split(' ')[1]}</span>
                  </div>
                  {testimonial.faith === "Christian" ? (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      ✝ Christian
                    </span>
                  ) : (
                    <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full">
                      🪭 Hindu
                    </span>
                  )}
                </div>
                
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center mt-4">
                  <div className={`rounded-full w-10 h-10 flex items-center justify-center mr-3 ${
                    testimonial.faith === "Christian" ? "bg-blue-100" : "bg-amber-100"
                  }`}>
                    <span className={`font-bold ${
                      testimonial.faith === "Christian" ? "text-blue-800" : "text-amber-800"
                    }`}>
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-xs text-gray-500">{testimonial.faith}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interfaith Highlight Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-amber-50 rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 bg-amber-600 p-8 flex flex-col justify-center">
              <div className="text-white text-center">
                <div className="text-4xl mb-2">✝</div>
                <h3 className="text-xl font-bold mb-2">Interfaith Harmony</h3>
                <p className="text-blue-100">We welcome devotees from all faiths</p>
              </div>
            </div>
            <div className="md:w-2/3 p-8">
              <blockquote className="text-xl italic text-gray-700 mb-6">
                "I attended the Ganesha Pooja at the suggestion of a friend, driven by curiosity and without giving much thought to money. What I experienced was profoundly moving. The universal spirituality of the event transcended religious boundaries, and the team was wonderfully respectful of my Christian background."
              </blockquote>
              <div className="flex items-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="text-amber-800 font-bold text-xl">M</span>
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-lg">Michael</p>
                  <div className="flex items-center">
                    <span className="text-gray-600 mr-2">🇦🇺 Australia</span>
                    <span className="bg-amber-100 text-amber-800 text-xs px-2 py-0.5 rounded-full">
                      ✝ Christian
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;