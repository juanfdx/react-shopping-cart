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
    ]
  }

  render() { 
    return(
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Productos 
            agregarAlCarro={ () => console.log('agregar al carro') }
            productos={ this.state.productos }
          />
        </Layout>
      </div>
    ) 
  }
}
 
export default App;

