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
    <div className="">
      <div className="flex py-4 justify-center items-center">
        <div>Checkout</div>
      </div>
      <div className="relative">
        <div className="border-2 w-[35vw] bg-red-300 h-[75vh] fixed right-0 border-black">
          <div className="text-center capitalize font-medium text-xl border-b-2 py-2">
            prices details
          </div>
          {productDetails &&
            productDetails.map((item, i) => {
              return (
                <div
                  key={i}
                  className="grid grid-cols-3 items-center py-2 px-4"
                >
                  <div>{i+1}{"."}</div>
                  <div>{"$"}{item.quantity}x{item.price}</div>
                  <div>{"$"}{item.quantity*item.price}</div>
                </div>
              );
            })}
        </div>

        <div className="">
          {productDetails && (
            <div className="grid grid-cols-3">
              <div className="col-span-2">
                <div className="my-4">
                  <div>Select Address</div>
                  <div></div>
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
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
