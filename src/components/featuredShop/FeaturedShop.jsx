import { useQuery } from "@tanstack/react-query";

import ShopCard from "../../pages/shop/ShopCard";

const FeaturedShop = () => {
  const fetchProducts = async () => {
    try {
      // Assuming the shop.json file is in the public directory
      const response = await fetch(
        "https://dream-craft-server.vercel.app/products"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      return response.json();
    } catch (error) {
      console.error("Error fetching events:", error);
      throw error;
    }
  };

  const { data: allProducts = [] } = useQuery({
    queryKey: ["allProducts"],
    queryFn: fetchProducts,
  });
  console.log(allProducts);
  return (
    <div className=" my-10 md:my-12 gap-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {allProducts?.slice(0, 6)?.map((event) => (
          <ShopCard key={event.id} event={event}></ShopCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturedShop;
