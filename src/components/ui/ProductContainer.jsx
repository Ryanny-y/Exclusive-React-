import WishlistBtn from "./buttons/WishlistBtn";
import ViewProductBtn from "./buttons/ViewProductBtn";
import AddToCartBtn from "./buttons/AddToCartBtn.jsx";
import DeleteBtn from "./buttons/DeleteBtn.jsx";
import { getDiscountedPrice } from '../../utils/currency.js'
import { useState } from "react";

export default function ProductContainer({productDetails, isWishlist = false, isJfy}) {
  const ratingImgSrc = `images/ratings/rating-${productDetails.ratings.stars * 10}.png`

  const [ hovered, setHovered ] = useState(false);

  return (
    <div className="product-container flex flex-col gap-4 rounded-sm">
      <div className="product-image p-10 bg-secondaryLight rounded-sm flex justify-center relative overflow-hidden"
      onMouseEnter={() => setHovered(c => !c)} onMouseLeave={() => setHovered(c => !c)}>
        <WishlistBtn productId={productDetails._id} isWishlist={isWishlist}/>
        <ViewProductBtn isWishlist={isWishlist}/>
        {!productDetails.discount || productDetails.discount > 0 && 
          <p className="bg-primaryRed text-white font-semibold absolute top-2 left-3 py-1 px-3 rounded-md text-xs">-{productDetails.discount * 100}%</p>
        }
        <DeleteBtn productId={productDetails._id} isWishlist={isWishlist} isJfy={isJfy}/>

        <img 
          src={`http://localhost:3500/image/${productDetails.images[0]}`} 
          alt="product image" 
          style={{
            width: '100%',
            maxWidth: '172px',
            height: '152px'
          }}
        />

        <AddToCartBtn hovered={hovered} productId={productDetails._id} />
      </div>
      <div className="product-details flex flex-col gap-2 font-semibold">
        <h1>{productDetails.name}</h1>

        <span className="product-prices flex items-center gap-3">
          <p className="discounted-price text-primaryRed">${getDiscountedPrice(productDetails.price, productDetails.discount)}</p>
          <p className="discounted-price text-secondaryGray">${productDetails.price}</p>
        </span>

        <span className="product-rating flex items-center gap-2">
          <img src={ratingImgSrc} alt="Rating img" className="h-5"/>
          <p>({productDetails.ratings.count})</p>
        </span>
      </div>
    </div>
  )

};