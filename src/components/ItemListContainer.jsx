import React from 'react';

function ItemListContainer(props) {
  const containerStyle = {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px',
  };

  const greetingStyle = {
    fontFamily: 'Roboto',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#8A817C',
  };

  return (
    <div style={containerStyle}>
      <p style={greetingStyle}>{props.greeting}</p>
    </div>
  );
}

export default ItemListContainer;
