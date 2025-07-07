import { Filters, PaginationContainer, ProductsContainer } from "../components";

function Products() {
    return (
        <div>
            <Filters />
            <ProductsContainer />
            <PaginationContainer />
        </div>
    );
}

export default Products;
