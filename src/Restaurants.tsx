import React, { useState } from "react";
import Restaurant from "./Restaurant";

function Restaurants(props: any) {
  return (
    <div>
      {props.showRestaurant ? (
        <Restaurant
          changeCartItemQuantity={props.changeCartItemQuantity}
          menuList={props.menuList}
        />
      ) : (
        <div className="relative">
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
            className="h-full w-screen absolute flex justify-center items-center"
          >
            <p
              className="text-white font-bold text-xl hover:text-2xl cursor-pointer"
              onClick={() => {
                props.displayRestaurant("");
              }}
            >
              {props?.name}
            </p>
          </div>
          <img
            style={{
              objectFit: `${window.innerWidth < 640 ? "contain" : "fill"}`,
            }}
            src={props?.image}
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default Restaurants;
