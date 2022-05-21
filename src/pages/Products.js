import {useState, useEffect, React} from 'react';
import './products.css';
import pic from '../images/tech.jpg';
const Products = ({ setPageNumber }) => {
  setPageNumber(2);
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [topProducts, setTopProducts] = useState();
  const [allProducts, setAllProducts] = useState();
  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/products?_quantity=3')
    .then(response=>response.json())
    .then(data=>setTopProducts(data.data))
  }, [])
  
  useEffect(() => {
    fetch('https://fakerapi.it/api/v1/products?_quantity=10')
    .then(response=>response.json())
    .then(data=>setAllProducts(data.data))
  }, [])

  const handleClick = ()=>{
    let form = document.getElementById('form');
    var progress = document.getElementById('progress');
    form.style.display = 'none';
    
    // Animation for progress bar
    setTimeout(() => {
      progress.style.display = 'block';
    }, 1000);
    setTimeout(() => {
      setInterval(()=>{setValue(prev=>prev!==95?prev+5:prev)}, 125);
      setInterval(()=>{setValue2(prev=>prev!==75?prev+5:prev)}, 125);
    }, 1500);
    
    
  }
  
  
  return (
    <div className='products'>
      <h1 id='welcome'>Welcome Dominic</h1>
      <h2>Let's take a look at the top selling products</h2>
      <hr id="short"/>
      <div className="card">
        <img src={pic} alt="#"/>
        <div className="container">
          <p><strong>Name: item.name</strong></p>
          <p><strong>Net_price: item.net_price</strong></p>
          <p><strong>Tax: item.taxes</strong></p>
          <p><strong>Price: item.price</strong></p>
        </div>
      </div>
      <div className="card">
        <img src={pic} alt="#"/>
        <div className="container">
          <p><strong>Name: item.name</strong></p>
          <p><strong>Net_price: item.net_price</strong></p>
          <p><strong>Tax: item.taxes</strong></p>
          <p><strong>Price: item.price</strong></p>
        </div>
      </div>
      <div className="card">
        <img src={pic} alt="#"/>
        <div className="container">
          <p><strong>Name: item.name</strong></p>
          <p><strong>Net_price: item.net_price</strong></p>
          <p><strong>Tax: item.taxes</strong></p>
          <p><strong>Price: item.price</strong></p>
        </div>
      </div>
      <div className="card">
        <img src={pic} alt="#"/>
        <div className="container">
          <p><strong>Name: item.name</strong></p>
          <p><strong>Net_price: item.net_price</strong></p>
          <p><strong>Tax: item.taxes</strong></p>
          <p><strong>Price: item.price</strong></p>
        </div>
      </div>
      <div className="card">
        <img src={pic} alt="#"/>
        <div className="container">
          <p><strong>Name: item.name</strong></p>
          <p><strong>Net_price: item.net_price</strong></p>
          <p><strong>Tax: item.taxes</strong></p>
          <p><strong>Price: item.price</strong></p>
        </div>
      </div>
      {/* {topProducts?topProducts?.map((item)=>(
        <div className="card">
        <img src={pic} alt="#"/>
        <div className="container">
          <p><strong>Name: {item.name}</strong></p>
          <p><strong>Net_price: {item.net_price}</strong></p>
          <p><strong>Tax: {item.taxes}</strong></p>
          <p><strong>Price: {item.price}</strong></p>
        </div>
      </div> )):null
      } */}
      
      <br/>
      <br/>
      <form id="form">
        <h3>What do you think we should do?</h3>
        <input type='radio' onClick={handleClick}/><p>Continue selling these Products.</p><br/>
        <input type='radio'onClick={handleClick}/><p>Lock don't sell for a while.</p>
      </form>
      <div id='progress'>
      <h3>Weekly Poll Results</h3>
      <span id="circle">{value}%</span>
      <progress id="determinate" value={value} min="0" max="100">95%</progress><br/>
      <span id="circle">{value2}%</span>
      <progress id="determinate" value={value2} min="0" max="100">75%</progress>
      </div>
        
      <hr id='long'/>
      <h2 id="allP">All Products</h2>
      <div className="card">
        <img src={pic} alt="#"/>
        <div className="container">
          <p><strong>Name: item.name</strong></p>
          <p><strong>Net_price: item.net_price</strong></p>
          <p><strong>Tax: item.taxes</strong></p>
          <p><strong>Price: item.price</strong></p>
        </div>
      </div>
      <div className="card">
        <img src={pic} alt="#"/>
        <div className="container">
          <p><strong>Name: item.name</strong></p>
          <p><strong>Net_price: item.net_price</strong></p>
          <p><strong>Tax: item.taxes</strong></p>
          <p><strong>Price: item.price</strong></p>
        </div>
      </div>
      <div className="card">
        <img src={pic} alt="#"/>
        <div className="container">
          <p><strong>Name: item.name</strong></p>
          <p><strong>Net_price: item.net_price</strong></p>
          <p><strong>Tax: item.taxes</strong></p>
          <p><strong>Price: item.price</strong></p>
        </div>
      </div>
      <div className="card">
        <img src={pic} alt="#"/>
        <div className="container">
          <p><strong>Name: item.name</strong></p>
          <p><strong>Net_price: item.net_price</strong></p>
          <p><strong>Tax: item.taxes</strong></p>
          <p><strong>Price: item.price</strong></p>
        </div>
      </div>
      <div className="card">
        <img src={pic} alt="#"/>
        <div className="container">
          <p><strong>Name: item.name</strong></p>
          <p><strong>Net_price: item.net_price</strong></p>
          <p><strong>Tax: item.taxes</strong></p>
          <p><strong>Price: item.price</strong></p>
        </div>
      </div>
      <div className="card">
        <img src={pic} alt="#"/>
        <div className="container">
          <p><strong>Name: item.name</strong></p>
          <p><strong>Net_price: item.net_price</strong></p>
          <p><strong>Tax: item.taxes</strong></p>
          <p><strong>Price: item.price</strong></p>
        </div>
      </div>
      <div className="card">
        <img src={pic} alt="#"/>
        <div className="container">
          <p><strong>Name: item.name</strong></p>
          <p><strong>Net_price: item.net_price</strong></p>
          <p><strong>Tax: item.taxes</strong></p>
          <p><strong>Price: item.price</strong></p>
        </div>
      </div>
      <div className="card">
        <img src={pic} alt="#"/>
        <div className="container">
          <p><strong>Name: item.name</strong></p>
          <p><strong>Net_price: item.net_price</strong></p>
          <p><strong>Tax: item.taxes</strong></p>
          <p><strong>Price: item.price</strong></p>
        </div>
      </div>
      {/* {allProducts?allProducts?.map((item)=>(
        <div className="card">
        <img src={pic} alt="#"/>
        <div className="container">
          <p><strong>Name: {item.name}</strong></p>
          <p><strong>Net_price: {item.net_price}</strong></p>
          <p><strong>Tax: {item.taxes}</strong></p>
          <p><strong>Price: {item.price}</strong></p>
        </div>
      </div> )):null
      } */}
     </div>
    //     {/* product name */}
    //     {/* product image */}
    //     {/* net_price */}
    //     {/* taxes */}
    //     {/* price */}
  );
}

export default Products;