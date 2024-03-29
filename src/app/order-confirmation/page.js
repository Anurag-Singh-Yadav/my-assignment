"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { getRandomStatus } from "../constants/index";
import {
  Table,
  TableBody,
  TableCaption,
  TableFooter,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { useSelector } from "react-redux";
function Page() {
  const [orderDetails, setOrderDetails] = useState(null);
  const totalAmount = useSelector((state) => state.GlobalState.totalPayment);
  const cart = useSelector((state) => state.GlobalState.cart);
  const selectedMethod = useSelector((state) => state.GlobalState.selectedMethod);
  console.log("orderDetails", orderDetails);
  useEffect(() => {
    setOrderDetails(cart);
  }, []);
 

  return (
    <div className="invert-colors px-5 mt-10 flex flex-col justify-center items-center overflow-auto">
      <Table>
        <TableCaption className="text-3xl font-bold mb-10">
          Success
        </TableCaption>
        <TableHeader className="w-full">
          <TableRow className="w-full">
            <TableHead className="sm:w-2/6 3/6 text-center">Product</TableHead>
            <TableHead className="w-1/6 text-center">
              Quantity
            </TableHead>
            <TableHead className="w-1/6 text-center">
              Price
            </TableHead>
            <TableHead className="sm:w-1/6 w-1/4 text-center">Amount</TableHead>
            <TableHead className="sm:w-1/6 w-1/4 text-center">
              Payment Method
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orderDetails?.map((product, index) => (
            <TableRow
              key={index}
              className="border-b border-black/20 dark:border-white/20 h-20"
            >
              <TableCell>
                <div className="flex items-center gap-6">
                  <Image
                    src={product.image}
                    width={50}
                    height={50}
                    alt={product.title}
                    className=""
                  />
                  <span className="overflow-hidden hidden sm:flex">{product.title}</span>
                </div>
              </TableCell>
              <TableCell className="text-center ">
                {product.quantity}
              </TableCell>
              <TableCell className="text-center">
                {product.price}
              </TableCell>
              <TableCell className="text-center">
                ${product.price * product.quantity}
              </TableCell>
              <TableCell
                rowSpan={orderDetails?.length}
                className={`${index !== 0 && "hidden"} text-center`}
              >
                {selectedMethod}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow className="h-[4rem] bg-gray-100 dark:text-gray-900 font-bold">
            <TableCell colSpan={4} className="px-4 ">
              Total
            </TableCell>
            <TableCell className="text-center min-w-sm">
              ${totalAmount}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

export default Page;
