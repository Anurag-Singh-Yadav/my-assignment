import Image from 'next/image';
import React from 'react';

function ShoppingCart({pic, heading, price, quantity, id}) {
  return (
    <div className='py-3 flex justify-around items-center'>
      <div>
        <Image src={pic} height={50} width={60} alt='photo'></Image>
      </div>
      <div>{heading}</div>
      <div>{quantity}</div>
      <div>{price}</div>
    </div>
  );
}

export default ShoppingCart;
