// src/components/App.tsx

import Book from '../Book/Book';
import Mailbox from '../MailBox/MailBox';
import Product from '../Product/Product';

export default function App() {
  return (
    <>
      <h1>Best selling(Product)</h1>
      {/* <Product name="Tacos With Lime" imgUrl="/cookey.jpg" price={120} /> */}
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={125} />
     <h1>Best selling(MailBox)</h1>
      {/* <Mailbox username='Ivan' messages={["1", "2"]} /> */}
      <Mailbox username='Ivan' messages={[]} />
      <h1>Best selling(Books)</h1>
      <Book/>
    </>
  );
}


