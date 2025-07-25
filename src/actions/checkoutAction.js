import { redirect } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { customFetch, formatPrice } from "../utils";
import { toast } from "react-toastify";

export const checkoutAction =
    (store) =>
    async ({ request }) => {
        const formData = await request.formData();
        const { name, address } = Object.fromEntries(formData);
        const user = store.getState().userState.user;
        const { cartItems, orderTotal, numItemsInCart } =
            store.getState().cartState;

        const info = {
            name,
            address,
            chargeTotal: orderTotal,
            orderTotal: formatPrice(orderTotal),
            cartItems,
            numItemsInCart,
        };
        try {
            const response = await customFetch.post(
                "/orders",
                { data: info },
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                }
            );
            store.dispatch(clearCart());
            toast.success("order placed successfully");
            return redirect("/orders");
        } catch (error) {
            console.log(error);
            const errorMessage =
                error?.response?.data?.error?.message ||
                "there was an error placing your order";
            toast.error(errorMessage);
            if (
                error?.response?.status === 401 ||
                error?.response?.status === 403
            )
                return redirect("/login");

            return null;
        }
    };
