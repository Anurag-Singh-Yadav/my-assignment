import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const EmptyCart = () => {
  const reloadCart = () => {
    localStorage.removeItem("cart");
    window.location.reload();
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        width={150}
        height={150}
        src="/empty-cart.webp"
        alt="empty_cart"
        className="w-40 h-40"
      />
      <h2 className="font-bold text-xl mt-2">Your Cart is Empty</h2>
      <div className="text-gray-500 mt-2">
        Looks like you have not added any products to your cart yet
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded-lg text-sm flex items-center mt-6"
        onClick={reloadCart}
      >
        Reload Cart <FaArrowRight className="ml-1" />
      </button>
    </div>
  );
};

export default EmptyCart;
