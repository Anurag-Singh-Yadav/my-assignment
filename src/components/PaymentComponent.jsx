import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setSelectedMethod} from '../app/GlobalRedux/Features/GlobalStateSlice.js'
const PaymentComponent = ({totalAmount, selected}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const clickHandler = ()=>{
    if(selected){
      router.push("/order-confirmation");
      dispatch(setSelectedMethod(selected));
    }
  }
  return (
    <div className="gap-3 my-4 flex flex-col w-full max-w-xl ">
      <div className="flex justify-between">
        <h3 className="font-semibold">Total</h3>
        <p className="font-bold text-lg ">${totalAmount.toPrecision()}</p>
      </div>
      <div
        onClick={()=>{clickHandler()}}
        className={`bg-primary flex capitalize py-4 items-center self-center w-full justify-center h-10   rounded-md text-white ${
          !selected ? " cursor-not-allowed" :"cursor-pointer"
        } `}
      >
        Pay Now
      </div>
    </div>
  );
};

export default PaymentComponent;
