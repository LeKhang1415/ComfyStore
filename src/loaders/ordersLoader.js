import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";

export const ordersLoader =
    (store) =>
    async ({ request }) => {
        const user = store.getState().userState.user;

        if (!user) {
            toast.warn("You must be logged in to view orders");
            return redirect("/login");
        }
        const params = Object.fromEntries([
            ...new URL(request.url).searchParams.entries(),
        ]);
        try {
            const response = await customFetch.get("/orders", {
                params,
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });

            return { orders: response.data.data, meta: response.data.meta };
        } catch (error) {
            console.log(error);
            const errorMessage =
                error?.response?.data?.error?.message ||
                "there was an error accessing your orders";

            toast.error(errorMessage);
            if (
                error?.response?.status === 401 ||
                error?.response?.status === 403
            )
                return redirect("/login");

            return null;
        }
    };
