import React from 'react';
import Card from './Card';
import './Card.css';
import staffList from './staffList';

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
          {row.map((staff, index) => (
            <Card
              key={index}
              avatar={staff.avatar}
              position={staff.position}
              name={staff.name}
              // Add a condition to set the title in the second column
              title={index === 1 ? 'Featured Tutorials' : ''}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default CardList;
