import React from 'react';
import './App.css';
import Productos from './components/Productos';
import Navbar from './components/Navbar'
import Layout from './components/Layout';
import Title from './components/Title';


class App extends React.Component {

  state = {
    productos: [
      { name: 'Tomate', price: '1500', img: '/productos/tomate.jpg' },
      { name: 'Arvejas', price: '2500', img: '/productos/arvejas.jpg' },
      { name: 'Lechuga', price: '500', img: '/productos/lechuga.jpg' }
    ],
    carro: [
      // { name: 'Tomate', price: '1500', img: '/productos/tomate.jpg', quantity: 1 },
    ],
    esCarroVisible: false
  }


  agregarAlCarro = (producto) => {
    const { carro } = this.state;

    //verificamos si ya existe ese producto en el carrito
    if (carro.find( x => x.name === producto.name)) {

      //ternario: si existe le sumamos 1 a su propiedad cantidad, sino agregamos el producto entero
      const newCarro = carro.map( x => x.name === producto.name 
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x )
        
      return this.setState({ carro: newCarro });
    }

    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1
      })
    });
  }


  mostrarCarro = () => {
    //cuando no tenga items dentro del carro que no haga nada
    if (!this.state.carro.length) {
      return;
    }
    //colocamos el valor opuesto al que ya tenia
    this.setState({ esCarroVisible: !this.state.esCarroVisible });
  }


  render() {

    const { esCarroVisible } = this.state;

    return(
      <div>
        <Navbar 
            carro={ this.state.carro } 
            esCarroVisible={ esCarroVisible } 
            mostrarCarro={ this.mostrarCarro } 
        />
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro={ this.agregarAlCarro }
            productos={ this.state.productos }
          />
        </Layout>
      </div>
    ) 
  }
}
 
export default App;

