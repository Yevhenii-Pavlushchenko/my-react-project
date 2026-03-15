// src/components/App.tsx
import { useEffect, useState } from "react";
import Book from '../Book/Book';
import Mailbox from '../MailBox/MailBox';
import Product from '../Product/Product';
import Alert from '../Alert/Alert'
import  './App.css'
import Button from '../Button/Button';
import UserMenu from '../UserMenu/UserMenu';
import ClickCounter from '../ClickCounter/ClickCounter'
import StateClickCounter from '../StateClickCounter/StateClickCounter'
import OrderForm from "../OrderForm/OrderForm";
import axios from "axios";
import SearchForm from "../SearchForm/SearchForm";
import {type Article} from '../../types/Article'
import ArticleList from "../ArticleList/ArticleList";


interface ArticlesHttpResponce{
  hits:Article[]
}

export default function App() {
  
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(false)
  
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  
  const toggleMessage = () => {
    setIsOpen(!isOpen)
  }
  const handleOrder = (data: string) => {
    console.log("Order received from:", data);
  }
  const [person, setPerson] = useState(null);
   
  useEffect(() => {
	  console.log('Effect ran!');
    axios
      .get('https://swapi.info/api/people/1')
      .then((response) => setPerson(response.data));
  }, []);
  console.log('App rendred!');
  
  const handleSearch = async (topic: string) => {
   
    setIsLoading(true)

    const response =
      await axios.get<ArticlesHttpResponce>(`https://hn.algolia.com/api/v1/search?query=${topic}`)
      
    setArticles(response.data.hits)
    setIsLoading(false)
    console.log(response.data);
  }



  return (
    <>
      <h1>Best selling(Product)</h1>
      <Product name="Tacos With Lime" imgUrl="/cookey.jpg" price={120} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={125} />
     <h1 className='title'>Best selling(MailBox)</h1>
      <Mailbox username='Sara' messages={["1", "2"]} />
      <Mailbox username='Ivan' messages={["11","Galya","1","3"]} />
      <h1 style={{color:"red"}}>Best selling(Books)</h1>
      <Book />
      <h1>Alert</h1>
        <>
      <Alert />
      <Alert type="success"  />
      <Alert type="error" />
      </>
      <h1>Button</h1>
      <div className="buttonWrapper">
      <Button variant="primary" text="Login"  />
      <Button variant="secondary" text="Follow" />
      </div>
       
      <h1>Icons</h1>
      <UserMenu name='' />

      <h1>ClickCounter</h1>
      <div className="buttonWrapper">
        <ClickCounter variant="primary"value={clicks} onUpdate={handleClick} />
        <ClickCounter variant="secondary" value={clicks} onUpdate={handleClick} />
        <div className="wrpperBtnToggle">
          <button className="btnShow" onClick={toggleMessage}>
            {isOpen ? "Hide message" : "Show message"}
          </button>
              {isOpen && <p className="toggleNextMessage">🎉 Surprise! MotherFucker .</p>}
        </div>
      </div>

      <h1>StateClickCounter</h1>
      <StateClickCounter />

       <h1>Place your order</h1>
      <OrderForm onSubmit={handleOrder} />
      <pre>{JSON.stringify(person, null, 2)}</pre>


      <h1>SEarch Form</h1>
      <div>
        <SearchForm onSubmit={handleSearch} />
        {isLoading && <p>Loading data, please wait...</p>}
      {articles.length > 0 && <ArticleList items={articles}/>}
      </div>
      
    </>
  );
}


