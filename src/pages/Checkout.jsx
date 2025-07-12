import { useSelector } from "react-redux";
import { CheckoutForm, SectionTitle, CartTotals } from "../components";

const Checkout = () => {
    const numItems = useSelector((state) => state.cartState.numItemsInCart);
    if (numItems === 0) {
        return <SectionTitle text="Your cart is empty" />;
    }

    return (
        <>
            <SectionTitle text="Place your order" />
            <div className="mt-8 grid gap-8  md:grid-cols-2 items-start">
                <CheckoutForm />
                <CartTotals />
            </div>
        </>
    );
};
export default Checkout;
