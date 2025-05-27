import { Link } from "react-router-dom";
import Container from "../../components/container/Container";
import FeaturedShop from "../../components/featuredShop/FeaturedShop";

const FeaturedShopPage = () => {
  return (
    <Container>
      <h2 className="text-2xl md:text-3xl font-semibold text-center mt-10">
        Available Event Accessories for sell.
      </h2>
      <hr />
      <FeaturedShop></FeaturedShop>

      <Link
        className="flex justify-center items-center  text-white w-1/2 mx-auto mt-2 p-2 rounded-lg bg-gradient-to-r from-rose-700 to-pink-600  hover:bg-slate-800"
        to="/shop"
      >
        Explore All Products
      </Link>
    </Container>
  );
};

export default FeaturedShopPage;
