import React from 'react';

const styles = {
  bubbleAlert: {
    backgroundColor: '#E9725A',
    color: 'white',
    borderRadius: '15px',
    padding: '2px 10px',
    fontSize: '0.9rem',
    width: '20px'
  }
}

class BubbleAlert extends React.Component {
  render() { 
    return <span style={ styles.bubbleAlert }>
      5
    </span>;
  }
}
 
export default BubbleAlert;