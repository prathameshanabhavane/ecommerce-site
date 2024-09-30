import { useState, useEffect } from "react";
import './Search.scss';
import { Link } from "react-router-dom";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [products, setProducts] = useState([])
  const [ProductSuggestions, setProductSuggestions] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(data=>setProducts(data))
  },[])

  const handleChange = (e) => {
    let value = e.target.value;
    if (value != "") {
      const filterProducts = products.filter(p => {
        if(p.title.toLowerCase().includes(value.toLocaleLowerCase())) {
            return p
        }
      }); 
      setProductSuggestions(filterProducts);
      setIsTyping(true);
      setInputValue(value);
    //   console.log(filterProducts)
    } else {
        setProductSuggestions(products);
        setIsTyping(false);
        setInputValue("");
    }
  };

  const handleText = (e) => {
    let clickedText = e.target.innerText;
    setInputValue(clickedText);
    setIsTyping(false);
  };

  return (
    <div className="search">
      <input
        type="search"
        onChange={handleChange}
        value={inputValue}
        placeholder="What are you looking for?."
      />
      <ul>
        {isTyping &&
          ProductSuggestions.map((product) => {
            return (
              <li onClick={handleText} key={product.id}>
                <Link to={`/product/${product.id}`}>
                    {product.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Search;