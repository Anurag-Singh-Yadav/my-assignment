"use client";
import Image from "next/image";
const CartItem = ({
  title,
  quantity,
  image: imageUrl,
  price,
}) => {
  

  return (
    <div className="flex flex-col md:flex-row justify-between border p-6 rounded-lg">
      <li
        li
        key={"name"}
        className="flex flex-col py-6 sm:flex-row sm:justify-between"
      >
        <div className="flex w-full space-x-2 sm:space-x-4 items-center gap-8">
          <Image
            width={150}
            height={150}
            className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-32 sm:w-32"
            src={imageUrl}
            alt={title}
          />
          <div className="flex w-full flex-col m-auto  ">
            <div className="flex w-full justify-between space-x-2 pb-2 mb-4">
              <div className="space-y-1 align-middle flex items-center">
                <p className="text-gray-900 font-bold line-clamp-2 text-lg dark:text-white">{title}</p>
              </div>
            </div>
            <div className="flex w-full justify-between items-center">
              <div className="text-right">
                <p className="font-semibold text-primary">${price}</p>
              </div>
              <div className="flex items-center space-x-2 px-2 py-1 pl-0 text-sm text-gray-500">
                <span>Quantity - {quantity}</span>
              </div>
            </div>
            <div className="flex divide-x text-sm">
             
            </div>
          </div>
        </div>
      </li>
    </div>
  );
};

export default CartItem;
