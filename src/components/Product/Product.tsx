// src/components/Product.tsx

const imageWidth= "350"
const imageHeight= "200"

interface ProductProps{
    name: string;
    imgUrl: string
    price: number
}

export default function Product({ name, imgUrl, price}:ProductProps) {
  return (
    <div>
          <h2>{name}</h2>
          <p>Price: {price} credits</p>
          <img src={imgUrl} alt="coockey" width={imageWidth} height={imageHeight} />
    </div>
  );
}
