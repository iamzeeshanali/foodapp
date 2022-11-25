import { useState } from "react";
import backButton from "./images/back.png";
import cartIcon from "./images/cart.png";

function Navbar(props: any) {
  return (
    <div className="flex fixed z-50 px-5 top-0 bg-white w-screen justify-between shadow-sm h-14 items-center">
      <div>
        <div className="flex text-slate-500 font-semibold ml-2 gap-2">
          {props.showRestaurant ? (
            <>
              <img
                className="cursor-pointer"
                onClick={() => {
                  props.displayRestaurant("nav");
                }}
                style={{ height: "25px", width: "25px" }}
                src={backButton}
                alt=""
              />
              <p className="">UNI Resto Cafe</p>
            </>
          ) : (
            "FoodApp"
          )}
        </div>
      </div>
      <div className=" flex mr-2 gap-2">
        <p className="text-slate-500 font-semibold">My Orders</p>
        <div className="flex">
          <img
            style={{ height: "25px", width: "25px" }}
            src={cartIcon}
            alt=""
          />
          <sup>
            <p className="bg-red-500 text-white text-center text-xs rounded-full w-4 h-4">
              {props.cartItemQuantity.length}
            </p>
          </sup>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
