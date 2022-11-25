import { useEffect, useState } from "react";
import Dish from "./Dish";
import "./Restaurant.css";

function Restaurant(props: any) {
  function scrollFunction(index: any) {
    document.getElementById(`${index}-0`)?.scrollIntoView({
      behavior: "smooth",
    });
  }
  function highlightCategoryText(categoryIndex: number) {
    props.menuList.forEach((item: any, forEachIndex: number) => {
      let element = document.querySelector(`#category-${categoryIndex}`);
      if (forEachIndex === categoryIndex) {
        element?.classList.add("text-pink-600");
        document
          .querySelector(`#category-${categoryIndex}`)
          ?.classList.remove("text-gray-600");
        document
          .querySelector(`#category-${categoryIndex}`)
          ?.classList.add("border-b-4");
        document
          .querySelector(`#category-${categoryIndex}`)
          ?.classList.add("border-pink-600");
        return;
      }
      document
        .querySelector(`#category-${forEachIndex}`)
        ?.classList.add("text-gray-600");
      document
        .querySelector(`#category-${forEachIndex}`)
        ?.classList.remove("text-pink-600");
      document
        .querySelector(`#category-${forEachIndex}`)
        ?.classList.remove("border-b-4");
      document
        .querySelector(`#category-${forEachIndex}`)
        ?.classList.remove("border-pink-600");
    });
  }
  useEffect(() => {
    document.querySelector(`#category-0`)?.classList.add("text-pink-600");
    document.querySelector(`#category-0`)?.classList.remove("text-gray-600");
    document.querySelector(`#category-0`)?.classList.add("border-b-4");
    document.querySelector(`#category-0`)?.classList.add("border-pink-600");
  }, []);

  return (
    <div>
      {/* table_menu_list */}
      <div
        id="category-parent"
        className="fixed w-full z-50 top-14 bg-white flex items-center row-item shadow-md gap-4 h-14 snap-mandatory scroll-smooth snap-x overflow-x-auto"
      >
        {props.menuList.map((category: any, index: number) => {
          return (
            <div
              id={`category-${index}`}
              onClick={() => {
                highlightCategoryText(index);
                scrollFunction(index);
              }}
              className={`shrink-0 h-full flex items-center font-semibold mx-3 cursor-pointer text-gray-600`}
              key={category.menu_category_id}
            >
              <p>{category?.menu_category}</p>
            </div>
          );
        })}
      </div>
      {/* Category Dishes */}
      <div className="relative top-14 row-item">
        {props.menuList.map((menuItem: any, parentIndex: any) => {
          return (
            <div className="">
              {menuItem.category_dishes.map((dish: any, childIndex: number) => {
                return (
                  <div id={`${parentIndex}-${childIndex}`} key={dish.dish_id}>
                    <Dish
                      changeCartItemQuantity={props.changeCartItemQuantity}
                      dish={dish}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Restaurant;
