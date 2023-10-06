import React from 'react';
import Card from './Card';
import './Card.css';
import staffList from './staffList';
import './CardList.css';

function CardList() {
  const chunkedStaff = [];
  const chunkSize = 3;

  for (let i = 0; i < staffList.length; i += chunkSize) {
    chunkedStaff.push(staffList.slice(i, i + chunkSize));
  }

  return (
    <div>
      {chunkedStaff.map((row, rowIndex) => (
        <div key={rowIndex} className='row'>
          {row.map((staff, index) => {
            const isFeatured = index === 1 && rowIndex === 0;
            return (
              <Card
                title={isFeatured ? 'Featured Tutorials' : ''}
                key={index}
                avatar={staff.avatar}
                position={staff.position}
                name={staff.name}
                desc={isFeatured ? '' : staff.description} 
                showButton={!isFeatured}
              />
            );
          })}
          {rowIndex === 0 && (
            <div key="seeArticlesButton" className="column">
              <button >See all articles</button>
              
            </div>
          )}
        </div>
      ))}
      {chunkedStaff.length > 1 && (
        <div className='row'>
          <div className="column">
            <button>See all tutorials</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardList;
