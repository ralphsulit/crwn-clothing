import { Fragment, useContext } from "react";

import { ProductsContext } from "../../contexts/products.context";
import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <Fragment>
      <section className="products-container">
        {products.map((product) => {
          return (
            <ProductCard key={product.id} product={product} />
          )
        })}
      </section>
    </Fragment>
  ); 
};

export default Shop;