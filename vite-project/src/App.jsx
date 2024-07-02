import React, { useState } from 'react';
import './App.css';

const imageUrls = [
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
  "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
]


const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  const imagesToShow = showAll ? imageUrls : imageUrls.slice(0, 4);

  return (
    <div className="portfolio" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'lightblue' }}>
      <h1 className="">Portfolio</h1>
      <div style={{ display: 'flex', flexDirection: 'row', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {imagesToShow.map((url, index) => (
          <div key={index} className="portfolio-item" style={{ padding: '10px' }}>
            <img src={url} alt={`Portfolio item ${index + 1}`} style={{ width: '500px', height: '500px' }} />
          </div>
        ))}
      </div>
      <button className="show-more" onClick={handleShowMore} style={{ backgroundColor: 'blue', padding: '10px', borderRadius: '5px', border: 'none', cursor: 'pointer', marginBottom: '10px'ç }}>
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'lightblue' }}>
      <Portfolio />
    </div>
  );
}

export default App;
