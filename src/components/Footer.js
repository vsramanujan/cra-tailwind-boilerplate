import React, { useState } from 'react';

export default function Footer() {

  const [hover, setHover] = useState(false);

  function toggleHover() {
    setHover(!hover);
  }

  return (
    <footer className="text-gray-800 bg-gray-100 text-center py-3 items-center flex justify-center">
      <a
        href="https://twitter.com/rama1809"
        target="_blank"
        rel="noopener noreferrer"
        className="text-lg font-hairline inline-flex"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <img
          src={hover ? "twitter-hover.svg" : "twitter-icon.png"}
          alt="twitter icon"
          height="25px"
          width="25px"
        />
        <span className="pl-1">vsramanujan</span>
      </a>
    </footer>
  );
}
