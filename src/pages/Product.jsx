import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams, Link } from "react-router-dom";
import ProductHd from "../components/ProductHd";
import ProductDisplay from "../components/ProductDisplay";
import ProductDescription from "../components/ProductDescription";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { all_products } = useContext(ShopContext);
  const { productId } = useParams();

  const product = all_products?.find((e) => e.id === Number(productId));

  if (!product) {
    return (
      <div>
        <h2>Product not Found!</h2>
        <p>Sorry, the product you're looking for doesn't exist.</p>
        <Link to="/products">Go Back to Products</Link>
      </div>
    );
  }

  return (
    <section className="max_padd_container py-28">
      <div>
        <ProductHd product={product} />
        <ProductDisplay product={product} />
        <ProductDescription />
        <RelatedProducts />
      </div>
    </section>
  );
};

export default Product;
