import React, { useState } from 'react';

const PortfolioBlock = function({ image, link, title, description }) {
  const [hovering, setHovering] = useState(false);
  const handleMouseEnter = () => {
    setHovering(true);
  };
  const handleMouseLeave = () => {
    setHovering(false);
  };
  return (
    <article
      className="item"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href={link} target="_blank" className="image fit">
        <img src={image} alt="" opacity={hovering ? 0.2 : 1} />
        <p
          style={{
            fontSize: '1rem',
            lineHeight: '1.5rem',
            marginTop: '5px',
          }}
        >
          {description}
        </p>
      </a>
      <header>
        <h3>{title}</h3>
      </header>
    </article>
  );
};
export default PortfolioBlock;
