import React, { useState, useRef, useEffect } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');
  const contentRef = useRef(null);

  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
  }, [isOpen]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="my-2 rounded-xl border-black border-4 h-full">
      <button
        className="flex justify-between w-full p-4 text-left text-lg font-medium text-black focus:outline-none"
        onClick={toggleOpen}
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}` }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        <div className="p-4 text-gray-700 bg-white">
          {content}
        </div>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <div className="mx-auto mt-10 p-4 rounded-lg flex flex-col sm:flex-row justify-center items-center gap-3">
      <div className="w-full sm:w-1/2">
        <AccordionItem
          title="What is the point of $baby?"
          content="The treasury is basically our 'bank' we will use this for marketing costs, listing on CEX's and burning / giving away to holders."
        />
        <AccordionItem
          title="Is $baby a good investment?"
          content="Investing in $baby depends on various factors including market trends, project developments, and individual risk tolerance."
        />
        <AccordionItem
          title="What is the future of $baby?"
          content="$baby aims to achieve long-term growth through strategic partnerships, community engagement, and continuous development."
        />
      </div>
      <div className="sm:w-1/2 w-full">
        <AccordionItem
          title="What is the point of $baby?"
          content="The treasury is basically our 'bank' we will use this for marketing costs, listing on CEX's and burning / giving away to holders."
        />
        <AccordionItem
          title="Is $baby a good investment?"
          content="Investing in $baby depends on various factors including market trends, project developments, and individual risk tolerance."
        />
        <AccordionItem
          title="What is the future of $baby?"
          content="$baby aims to achieve long-term growth through strategic partnerships, community engagement, and continuous development."
        />
      </div>
    </div>
  );
};

export default Accordion;
