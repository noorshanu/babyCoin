import React, { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between w-full p-4 text-left text-lg font-medium text-green-900 bg-green-100 focus:outline-none"
        onClick={toggleOpen}
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 text-gray-700 bg-white">
          {content}
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 bg-green-900 p-4 rounded-lg">
      <AccordionItem
        title="What is the point of $DANNY?"
        content="The treasury is basically our 'bank' we will use this for marketing costs, listing on CEX's and burning / giving away to holders."
      />
      <AccordionItem
        title="Is $DANNY a good investment?"
        content="Investing in $DANNY depends on various factors including market trends, project developments, and individual risk tolerance."
      />
      <AccordionItem
        title="What is the future of $DANNY?"
        content="$DANNY aims to achieve long-term growth through strategic partnerships, community engagement, and continuous development."
      />
    </div>
  );
};

export default Accordion;
