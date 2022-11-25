import { useEffect, useState } from "react";
import Restaurants from "./Restaurants";

function HomeScreen(props: any) {
  const [restaurants, setRestaurants] = useState<any>();
  const fetchRestaurents = async () => {
    const response = await fetch(
      "https://run.mocky.io/v3/a67edc87-49c7-4822-9cb4-e2ef94cb3099"
    );
    const data = await response.json();
    setRestaurants(data);
  };
  useEffect(() => {
    fetchRestaurents();
  }, []);
  return (
    <div>
      {restaurants?.map((restaurant: any) => {
        return (
          <div key={restaurant?.restaurant_id}>
            <Restaurants
              changeCartItemQuantity={props.changeCartItemQuantity}
              name={restaurant?.restaurant_name}
              image={restaurant?.restaurant_image}
              menuList={restaurant?.table_menu_list}
            />
          </div>
        );
      })}
    </div>
  );
}

export default HomeScreen;
