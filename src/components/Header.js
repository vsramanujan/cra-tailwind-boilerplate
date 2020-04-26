import React, { useState } from 'react';

export default function Header() {

  const [hover, setHover] = useState(false);

  function toggleHover() {
    setHover(!hover);
  }

  return (
    <header className="text-gray-800 bg-gray-100 text-center pt-4 items-center flex justify-center">
      <div className="flex-grow">
        <a
          href="https://github.com/vsramanujan/cra-tailwind-boilerplate/issues/new"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-hairline inline-flex"
          onMouseEnter={toggleHover}
          onMouseLeave={toggleHover}
        >
          <img
            src={hover ? "github-hover.svg" : "github-icon.svg"}
            alt="github icon"
            height="25px"
            width="25px"
          />
        </a>
      </div>
    </header>
  );
}
