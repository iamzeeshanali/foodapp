import React, { useEffect, useState } from "react";
import { stringAdjustment } from "./utils";

function Dish(props?: any) {
  const [itemQuantity, setItemQuantity] = useState(0);
  const [dishId, setDishId] = useState<number | null>(null);
  function changeItemQuantity(size: string) {
    if (size === "inc") {
      setItemQuantity((previousCount: number) => previousCount + 1);
      return;
    }
    if (itemQuantity < 1) {
      return;
    }
    setItemQuantity((previousCount: number) => previousCount - 1);
  }
  useEffect(() => {
    props.changeCartItemQuantity(dishId, itemQuantity);
  }, [itemQuantity]);

  return (
    <div className="flex xs:relative border-b-gray-300 border-b-2 p-3">
      <div className="w-screen">
        <p className="font-semibold text-lg">
          {stringAdjustment(props.dish.dish_name)}
        </p>
        <div className="flex justify-between font-semibold ">
          <div className="flex">
            <p>{props.dish.dish_currency}</p>
            <p>&nbsp;{props.dish.dish_price}</p>
          </div>
          <p className="mr-2 text-base xs:absolute xs:top-12 xs:right-32">
            {props.dish.dish_calories} Calories
          </p>
        </div>
        <p className="mt-2">{stringAdjustment(props.dish?.dish_description)}</p>
        <div className="flex my-2 justify-between px-3 items-center font-medium text-lg bg-green-500 text-white rounded-2xl w-24">
          <p
            onClick={() => {
              changeItemQuantity("dec");
              setDishId(props.dish.dish_id);
            }}
            className="cursor-pointer"
          >
            -
          </p>
          <p className="cursor-default">{itemQuantity}</p>
          <p
            onClick={() => {
              changeItemQuantity("inc");
              setDishId(props.dish.dish_id);
            }}
            className="cursor-pointer"
          >
            +
          </p>
        </div>
        {props.dish.addonCat ? (
          <p className="text-red-500">Customizations available</p>
        ) : null}
      </div>
      <div className="pt-1 flex items-start justify-end xs:w-full">
        <img
          className="rounded-md"
          style={{
            objectFit: "contain",
            width: 100,
          }}
          src={props.dish.dish_image}
          alt=""
        />
      </div>
    </div>
  );
}

export default Dish;
