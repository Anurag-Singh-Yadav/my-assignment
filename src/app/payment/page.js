"use client";
import { MdKeyboardArrowLeft } from "react-icons/md";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { PiCirclesFourLight } from "react-icons/pi";
import PaymentComponent from "../../components/PaymentComponent";
import { paymentMethods } from "../constants/index";
import { useSelector } from "react-redux";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

function Page() {
  const [selected, setSelected] = useState(null);
  const payment = useSelector((state) => {
    return state.GlobalState.paymentMethods;
  });
  const totalPayment = useSelector((state) => {
    return state.GlobalState.totalPayment;
  });
  const [paymentMethodsAvailable, setPaymentMethodsAvailable] = useState(null);

  useEffect(() => {
    setPaymentMethodsAvailable(payment);
  }, []);
  return (
    <div className="flex  flex-col pt-10 px-5 min-h-screen">
      <div className="flex items-center w-full">
        <Link href="/">
          <MdKeyboardArrowLeft size={25} color="gray" />
        </Link>
        <div className="text-3xl font-bold w-full text-center">Payment</div>
      </div>
      <h2 className="text-center mb-10  mt-2 text-slate-400">
        Choose payment method
      </h2>
      <div className="flex flex-col w-full h-full items-center">
        {paymentMethods.map((method) => {
          const isClickable = paymentMethodsAvailable?.includes(method.id);
          return (
            <div
              key={method.id}
              onClick={() => {
                isClickable && setSelected(method.id);
              }}
              className={`rounded-md border px-4 py-3 flex max-w-xl w-full gap-8 my-2 items-center  ${
                isClickable
                  ? "dark:hover:bg-slate-200 hover:bg-slate-200 dark:bg-[#101012] cursor-pointer "
                  : "dark:bg-[#1E1E1E] bg-slate-50 "
              }`}
            >
              {method.icon}
              <div className="flex justify-between gap-8 w-full items-center">
                <div className="flex flex-col gap-2 flex-1">
                  <h5 className="truncate overflow-hidden max-w-full">
                    {method.title}
                  </h5>
                  <p className="text-slate-600 font-sm">{method.subtitle}</p>
                </div>

                {method.id === selected ? (
                  <div className="text-green-500">
                    <IoCheckmarkCircleSharp size={25} />
                  </div>
                ) : (
                  <PiCirclesFourLight />
                )}
              </div>
            </div>
          );
        })}
        <PaymentComponent totalAmount={totalPayment} selected = {selected} />
      </div>
    </div>
  );
}

export default Page;
