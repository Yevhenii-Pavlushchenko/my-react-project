// src/App.tsx


const CoockeyUrl = "../public/cookey.jpg"
const CoockeyWidth = "150"
const CoockeyHeight = "200"

function Product() {
  return (
    <div>
      <img src="" alt="" />
      <h2>Cookies</h2>
      <p>Price: 999 credits</p>
      <img src={CoockeyUrl} alt="coockey" width={CoockeyWidth} height={CoockeyHeight} />
    </div>
  );
}

export default function App() {
  return (
    <>
      <h1>Products</h1>

      <Product />
      <Product />
      <Product />
    </>
  );
}
