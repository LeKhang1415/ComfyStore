import { toast } from "react-toastify";
import { customFetch } from "../utils";
import { redirect } from "react-router-dom";

export const registerAction = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        const response = await customFetch.post("/auth/local/register", data);
        toast.success("account created successfully");
        return redirect("/login");
    } catch (error) {
        const errorMessage =
            error?.response?.data?.error?.message ||
            "please double check your credentials";

        toast.error(errorMessage);
        return null;
    }
};
