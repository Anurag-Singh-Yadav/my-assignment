"use client";
import React, { useEffect, useState } from "react";
import { checkout } from "@/fetchFunctions/checkout";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import ShoppingCart from "./ShoppingCard";
function Checkout() {
  const [checkoutData, setCheckoutData] = useState(null);
  const [productDetails, setProductDetails] = useState(null);
  const fetchCheckout = async () => {
    const data = await checkout();
    setCheckoutData(data);
    setProductDetails(data?.products);
    console.log(data);
  };
  useEffect(() => {
    fetchCheckout();
  }, []);
  return (
    <div>
      <div className="flex py-4 justify-center items-center">
        <div>Checkout</div>
      </div>
      <div>
        {productDetails && (
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              <div className="my-4">
                <div>Select Address</div>
                <div>
                  
                </div>
              </div>
              {productDetails.map((item) => {
                return (
                  <ShoppingCart
                    pic={item.image}
                    heading={item.heading}
                    price={item.price}
                    quantity={item.quantity}
                    key={item.id}
                  />
                );
              })}
            </div>
            <div className="bg-red-500">prices details</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
