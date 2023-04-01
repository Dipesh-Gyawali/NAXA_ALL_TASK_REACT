import { useEffect, useState } from "react"
import './API.css';


export const API = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        fetch("https://admin.naxa.com.np/api/services")
        .then(response => response.json())
        .then(data => setProducts(data));
    }, []);

  return (
    <section>
        { products.map((product) => (
            <div className="card" key={product.id}>


      <img className="toplogo" src={product.icon} alt={product.title} />
      
          <div className="container">
            <img src={product.photo} alt={product.title} className="image" />
                <div className="content">
                  <h1 dangerouslySetInnerHTML={{__html : product.title }} ></h1>
                  <p dangerouslySetInnerHTML={{__html : product.description1 }}></p>
                  <p dangerouslySetInnerHTML={{__html : product.description2 }} className="blue-background"></p>
              </div>
          </div>

            </div>             
        )) }
    </section>
  )
}