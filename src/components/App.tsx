// src/components/App.tsx

import Product from './Product';

export default function App() {
  return (
    <>
      <h1>Best selling</h1>
      <Product name="Tacos With Lime" imgUrl="/cookey.jpg" price={120} />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={125} />
    </>
  );
}


