import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "Can I watch the pooja live?",
      answer: "Yes, you will receive a link to watch it live or receive a video recording."
    },
    {
      question: "How do I pay?",
      answer: "After the consultation, we'll share a secure international payment link."
    },
    {
      question: "Can you send Prasadam to my country?",
      answer: "Yes, to USA, Canada, Russia, UK, UAE, Australia & Singapore (depends on customs)."
    },
    {
      question: "What types of poojas can you perform?",
      answer: "Ganesha Pooja, Navagraha Homa, Rudra Homa, Sudarshana Homa, and more."
    },
    {
      question: "How much does it cost?",
      answer: "Prices start at $121 depending on the ritual and number of Pandits."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-600 mb-12">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-6 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <div className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-semibold text-gray-800 flex items-center">
                <span className="text-amber-500 mr-3">Q.</span>
                {faq.question}
              </h3>
              <div className="mt-4 pl-8 border-l-4 border-amber-200">
                <p className="text-gray-600 text-lg md:text-xl">
                  <span className="text-amber-500 font-medium">A.</span> {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <p className="text-gray-600 mb-6">
          Still have questions? We're happy to help!
        </p>
        <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105 shadow-lg"   onClick={() => window.open("https://forms.gle/BnreXbJHP2C4bE2W9", "_blank")}>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default FAQ;