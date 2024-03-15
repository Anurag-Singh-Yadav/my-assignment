"use client";

import CartItem from "@/components/CartItem";
import EmptyCart from "@/components/EmptyCart";
import Loader from "@/components/Loader";
import OrderSummary from "@/components/OrderSummary";
import { useEffect, useState } from "react";
import { checkout } from "@/fetchFunctions/checkout";
import { useDispatch, useSelector } from "react-redux";
import {setPaymentMethods, setCart} from "./GlobalRedux/Features/GlobalStateSlice";
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [subTotal, setSubTotal] = useState(0);
  const [cartItemsText, setCartItemsText] = useState("Item");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.GlobalState.cart);
  const getCartItems = async () => {
    const res = await checkout();
    setSubTotal(calculateTotalValue(res?.products));
    console.log("res", res);
    dispatch(setCart(res?.products));    
    dispatch(setPaymentMethods(res?.paymentMethods));
    setLoading(false);
  };
  useEffect(() => {
    getCartItems();
  }, []);

  const calculateTotalValue = (cart) => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const reloadCart = () => {
    localStorage.removeItem("cart");
    window.location.reload();
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-stretch gap-8 md:gap-16">
            <div className="flex-2 rounded-lg p-2 md:p-4 lg:p-8 min-w-full">
              <div className="relative grid grid-cols-5 gap-10 w-full">
                <div className="space-y-6 col-span-3">
                  {cart.length < 1 && <EmptyCart />}
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-bold md:text-2xl">
                      Shopping Cart
                    </h2>
                    <p className="text-gray-500">
                      ({cart.length} {cartItemsText})
                    </p>
                  </div>
                  {cart.map((product, index) => (
                    <CartItem
                      key={product.id}
                      onClickDelete={() => {
                        hookCart.removeItemFromCart(index);
                      }}
                      {...product}
                      onChangeQuantity={(productId, quantity) => {
                        let existingCart = cart.map((item) =>
                          item.id === productId
                            ? { ...item, quantity: quantity }
                            : item
                        );
                        setCart(existingCart);
                      }}
                    />
                  ))}
                </div>

                <div className="col-span-2 sticky top-0">
                  <OrderSummary
                    subTotal={subTotal}
                    isCartEmpty={cart.length > 0 ? false : true}
                  />
                  <div className="flex-1 flex flex-col items-center min-w-full lg:min-w-96">
                    <div className="mt-6 font-semibold text-center space-y-4">
                      <p className="text-sm text-gray-500">or</p>
                      <button className="text-blue-500" onClick={reloadCart}>
                        Continue shopping
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
