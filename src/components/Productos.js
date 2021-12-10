import React from 'react'
import Producto from '../components/Producto'

const styles = {
  productos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}

class Productos extends React.Component {
  render() { 
    //recive los props desde App.js
    const { productos, agregarAlCarro } = this.props;

    return(
      <div style={ styles.productos }>
        { productos.map( producto =>  {

          return(
            <Producto 
              agregarAlCarro={agregarAlCarro}
              key={ producto.name }
              producto={ producto }
            />
          )

        }) }
      </div>
    )
    
  }
}
 
export default Productos;