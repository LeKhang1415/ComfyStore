import { customFetch } from "../utils";

export const loader = async ({ params }) => {
    const response = await customFetch(`/products/${params.id}`);
    return { product: response.data.data };
};
