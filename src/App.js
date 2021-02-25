import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [parson2, setParson2] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setParson2(data))
  }, [])

  // const parson2 = ['salman', 'malek', 'mokles', 'salam', 'jobbar', 'kamran']
  const product = [
    { name: 'PhotoShop', price: '$90.99' },
    { name: 'PhotoEditor', price: '$60.99' },
    { name: 'PDF Reader', price: '$6.99' },
    { name: 'PDF Editor', price: '$10.99' },
    { name: 'PDF Ei', price: '$15.99' }
  ]
  //  const userName = parson2.map(parson => parson);
  //  console.log(userName)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done<code>src/App.js</code> and save to reload.
        </p>
        <Counter></Counter>
        <ul>
          {
            parson2.map(parson => <li style={{border:'2px solid green',margin:'5px',padding:'5px',backgroundColor:'black'}}>{parson.name}</li>)
          }
        </ul>

        {
          product.map(pd => <Product product={pd}></Product>)
        }

        {/* <Product product={product[0]} ></Product>    */}
        {/* name={product[0].name} price={product[0].price} */}
        {/* <Product product={product[1]} ></Product>
        <Product product={product[2]} ></Product> */}


        <Parson name="Maruf khan" job="student"></Parson>
        <Parson name="kalam khan" job="bekar"></Parson>
        <Parson name="Mokless korim" job="teacher"></Parson>


      </header>
    </div>
  );
}


function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h2>Count : {count}</h2>
      <button onClick={() => setCount(count - 1)} >Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}


function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    backgroundColor: 'gray',
    margin: '5px',
    borderRadius: '5px',
    hight: '200px',
    width: '200px',
    float: 'left',
    padding: '10px'
  }

  const { name, price } = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h4>{price}</h4>
      <button>Buy Now</button>
    </div>
  )
}

function Parson(props) {
  return (
    <div style={{ border: '2px solid tomato', margin: '5px', width: '400px' }}>
      <h1>Name :{props.name} </h1>
      <h2>job : {props.job}</h2>
    </div>
  )
}

export default App;
