import React from "react";

function SharedTitle({ heading, subheading }) {
  return (
    <div className="py-10 w-[80%] lg:w-[40%] mx-auto">
      <h5 className="text-center italic text-xl text-gray-600">{subheading}</h5>
      <h2 className="text-center uppercase text-4xl font-semibold py-3 border-y-2">
        {heading}
      </h2>
    </div>
  );
}

export default SharedTitle;
