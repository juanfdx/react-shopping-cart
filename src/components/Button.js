import React from 'react';

const styles = {
  button: {
    backgroundColor: '#0A283E',
    color: 'white',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  }
}

class Button extends React.Component {
  render() { 
    return <button style={ styles.button } { ... this.props }>

           </button>;
  }
}
 
export default Button;