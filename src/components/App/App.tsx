// src/components/App.tsx
import { useState } from "react";
import Book from '../Book/Book';
import Mailbox from '../MailBox/MailBox';
import Product from '../Product/Product';
import Alert from '../Alert/Alert'
import  './App.css'
import Button from '../Button/Button';
import UserMenu from '../UserMenu/UserMenu';
import ClickCounter from '../ClickCounter/ClickCounter'
import StateClickCounter from '../StateClickCounter/StateClickCounter'

export default function App() {
  
  const [clicks, setClicks] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    setClicks(clicks + 1);
  };
  
  const toggleMessage = () => {
    setIsOpen(!isOpen)
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
      <StateClickCounter/>
    </>
  );
}


