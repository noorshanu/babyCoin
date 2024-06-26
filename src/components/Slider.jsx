import React, { useState } from 'react';


const Slider = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: 'Step 1',
      pretitle:"CHOOSE A CRYPTO-CURRENCY EXCHANGE:",
      content: 'Select a reputable exchange known for its security measures, user-friendly interface, and support for your specific cryptocurrency. Consider factors such as trading fees, available trading pairs, and customer support options to ensure the exchange meets your needs.'
    },
    {
      title: 'Step 2',
      content: 'This is the content for step 2.'
    },
    {
      title: 'Step 3',
      content: 'This is the content for step 3.'
    },
    {
      title: 'Step 4',
      content: 'This is the content for step 4.'
    }
  ];

  const handleNext = () => {
    setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
  };

  return (
    <div className="slider ">
      <div className="slider-content">
        <div className="slide" key={currentStep}>
          <h2 className=' font-bold font-dream text-2xl py-2'>{steps[currentStep].title}</h2>
          <h2 className=' font-bold font-dream text-3xl py-2'>{steps[currentStep].pretitle}</h2>
          <p>{steps[currentStep].content}</p>
        </div>
        <button onClick={handleNext}>Next</button>
      </div>
      <div className="indicator-container">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`indicator ${index === currentStep ? 'active' : ''}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
