"use client";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { formatPrice } from "./PriceTag";
import { useRouter } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";
import { setTotalPayment } from "../app/GlobalRedux/Features/GlobalStateSlice";
import Link from "next/link";

const OrderSummaryItem = ({ label, value, children }) => {
  return (
    <div className="flex justify-between text-sm">
      <span className="font-medium text-gray-500">{label}</span>
      {value ? <span className="font-medium">{value}</span> : children}
    </div>
  );
};

const OrderSummary = ({ subTotal, isCartEmpty }) => {
  const router = useRouter();
  const [appliedCoupon, setAppliedCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponCode, setCouponCode] = useState("");
  const [isCouponCodeVisible, setIsCouponCodeVisible] = useState(false);
  const dispatch = useDispatch();
  const applyCoupon = (code) => {
    let appliedDiscount = 0;
    switch (code) {
      case "GROWW20":
        appliedDiscount = 20;
        setAppliedCoupon("GROWW20");
        break;
      case "GROWW50":
        appliedDiscount = 50;
        setAppliedCoupon("GROWW50");
        break;
      default:
        setAppliedCoupon("");
        setDiscount(0);
        break;
    }

    if (appliedDiscount > 0) {
      const totalValue = subTotal;
      const calculatedDiscount = (appliedDiscount / 100) * totalValue;
      setDiscount(Math.min(calculatedDiscount, 1000));
    }
  };

  const handleShowCouponCode = () => {
    setIsCouponCodeVisible(!isCouponCodeVisible);
  };

  const handleCheckout = () => {
    router.push("/payment");
  };

  let grandTotal = subTotal - discount;
  if (subTotal < 499) {
    grandTotal += 199;
  }
  dispatch(setTotalPayment(grandTotal));

  return (
    <div className="space-y-8 border rounded-lg p-8 w-full">
      <h2 className="text-xl font-bold md:text-2xl">Order Summary</h2>
      <div className="space-y-6">
        <OrderSummaryItem label="Subtotal" value={formatPrice(subTotal)} />
        <OrderSummaryItem label="Shipping Charges">
          {isCartEmpty ? (
            <span className="text-green-500 font-bold">FREE</span>
          ) : subTotal < 499 ? (
            <>
              <span>{formatPrice(199)}</span>
            </>
          ) : (
            <span className="text-green-500 font-bold">FREE</span>
          )}
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <a
            onClick={!isCartEmpty ? handleShowCouponCode : undefined}
            className="underline cursor-pointer"
          >
            Add coupon code
          </a>
        </OrderSummaryItem>
        {isCouponCodeVisible && (
          <>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Enter Coupon Code"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                className="border px-2 py-1 rounded"
              />
              <button
                onClick={() => applyCoupon(couponCode)}
                className="bg-blue-500 text-white px-4 py-1 rounded"
              >
                Apply
              </button>
            </div>
            {appliedCoupon && (
              <p className="text-green-500">
                Coupon {appliedCoupon} applied successfully. You have saved{" "}
                {formatPrice(discount)}
              </p>
            )}
            {appliedCoupon === "" && discount === 0 && (
              <p className="text-red-500">Please enter a valid coupon.</p>
            )}
          </>
        )}
        <div className="flex justify-between">
          <p className="font-semibold">Total</p>
          {isCartEmpty ? (
            <p className="font-bold text-red-500">Cart is Empty</p>
          ) : (
            <p>{formatPrice(grandTotal)}</p>
          )}
        </div>
      </div>
      <div  className=" text-right">
        <Link
          href={"/address"}
          className=" underline cursor-pointer pb-1 text-primary w-fit"
        >
          Edit Address
        </Link>
      </div>
      <button
        onClick={handleCheckout}
        className={`bg-primary w-full text-white px-6 py-3 rounded-lg font-semibold ${
          isCartEmpty && "cursor-not-allowed opacity-50"
        }`}
        disabled={isCartEmpty}
      >
        Checkout <FaArrowRight className="inline-block ml-2" />
      </button>
    </div>
  );
};

export default OrderSummary;
