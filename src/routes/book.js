import React from 'react';
import { Link } from 'react-router-dom';
import './BookStyles.css'; // Import the CSS file

const Book = () => {
  return (
    <div className="cards" style={{ paddingTop: '80px' }}>
      <h1>React Context API</h1>

      <div className="image-container">
        <img src="https://inetrnnexusbetas.s3.ap-south-1.amazonaws.com/img_1690225943238_).png" alt="Book" />
        <div className="text-container">
          <p>The React Context API is a built-in feature in React that allows you to manage global state and share data between components..</p>
        </div>
      </div>
    </div>
  );
};

export default Book;
