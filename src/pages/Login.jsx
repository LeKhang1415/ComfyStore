import { Form, Link, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { useDispatch } from "react-redux";
import { customFetch } from "../utils";
import { loginUser } from "../features/user/userSlice";
import { toast } from "react-toastify";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loginAsGuestUser = async () => {
        try {
            const response = await customFetch.post("/auth/local", {
                identifier: "test@test.com",
                password: "secret",
            });
            dispatch(loginUser(response.data));
            toast.success("welcome guest user");
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("guest user login error.please try later.");
        }
    };
    return (
        <section className="h-screen grid place-items-center">
            <Form
                method="post"
                className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
            >
                <h4 className="text-center text-3xl font-bold">Login</h4>
                <FormInput
                    type="email"
                    label="email"
                    name="identifier"
                    defaultValue="test@test.com"
                />
                <FormInput
                    type="password"
                    label="password"
                    name="password"
                    defaultValue="secret"
                />
                <div className="mt-4">
                    <SubmitBtn text="login" />
                </div>
                <button
                    type="button"
                    className="btn btn-secondary btn-block"
                    onClick={loginAsGuestUser}
                >
                    guest user
                </button>
                <p className="text-center">
                    Not a member yet?
                    <Link
                        to="/register"
                        className="ml-2 link link-hover link-primary capitalize"
                    >
                        register
                    </Link>
                </p>
            </Form>
        </section>
    );
}

export default Login;
