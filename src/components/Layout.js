import React from 'react';

const styles = {
  layout: {
    backgroundColor: 'white',
    color: '#0A283E',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  container: {
    width: '1200px'
  }
}

class Layout extends React.Component {
  render() { 
    return <div style={ styles.layout }>
              <div style={ styles.container }>
                { this.props.children }
              </div>
           </div>;
  }
}
 
export default Layout;