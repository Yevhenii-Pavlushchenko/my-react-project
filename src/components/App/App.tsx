// src/components/App.tsx

import Book from '../Book/Book';
import Mailbox from '../MailBox/MailBox';
import Product from '../Product/Product';
import Alert from '../Alert/Alert'
import  './App.css'
import Button from '../Button/Button';

export default function App() {
  return (
    <>
      {/* <h1>Best selling(Product)</h1>
      <Product name="Tacos With Lime" imgUrl="/cookey.jpg" price={120} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={125} /> */}
     {/* <h1 className='title'>Best selling(MailBox)</h1>
      <Mailbox username='Ivan' messages={["1", "2"]} />
      <Mailbox username='Ivan' messages={["11","Galya","1","3"]} />
      <h1 style={{color:"red"}}>Best selling(Books)</h1>
      <Book /> */}
      {/* <h1>Alert</h1>
        <>
      <Alert />
      <Alert type="success"  />
      <Alert type="error" />
      </> */}
      {/* <h1>Button</h1>
       <Button variant="primary" text="Login" />
      <Button variant="secondary" text="Follow" /> */}
      

    </>
  );
}


