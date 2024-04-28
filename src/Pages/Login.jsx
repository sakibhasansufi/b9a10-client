import { Helmet } from "react-helmet-async";
import { VscGithubInverted } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa6";
import { FaRegEyeSlash } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContext } from "../firebase/FireBaseProvider";


const Login = () => {

    const {
        googleLogIn,
        signInUser
    } = useContext(AuthContext);


    const [thisPassword, setThisPassword] = useState(false);

    const location = useLocation();
    console.log('location is here', location);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    //for email log in
    const onSubmit = (data) => {
        console.log(data);
        const { email, password } = data;
        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }


    //for social log in
    const handleSocialLogin = socialProvider => {
        socialProvider()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
            })
    }
    return (

        <div className="max-w-[800px] mx-auto my-12 p-6 bg-white shadow-xl sm:px-8 sm:py-10 lg:px-12 lg:py-16">
            <Helmet>
                <title>Log in</title>
            </Helmet>
            <div className="flex flex-col sm:flex-row justify-between space-x-0 sm:space-x-12">
                <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                    {/* Left side form */}
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col space-y-2 mb-4">
                            <label htmlFor="username" className="block ">
                                Email
                            </label>
                            <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none" placeholder="Email" type="text" name="email" {...register("email", { required: true })} />
                            {errors.email && <span className="text-red-600">This field is required</span>}



                            <label htmlFor="username" className="block ">
                                Password
                            </label>
                            <div className="flex items-center">
                                <input className="flex h-10 w-full rounded-md border px-3 py-2 text-sm focus:outline-none"
                                    placeholder="Password"
                                    type={thisPassword ? "text" : "password"}
                                    name="password"  {...register("password", { required: true })} />
                                <span onClick={() => setThisPassword(!thisPassword)} className="-ml-5">
                                    {
                                        thisPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>
                                    }
                                </span>
                            </div>
                            {errors.password && <span className="text-red-600">This field is required</span>}

                        </div>

                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full bg-red-600 text-white">
                            LOG IN
                        </button>
                    </form>

                </div>
                {/* Right side content */}
                <div className="w-full sm:w-1/2">
                    <p className="text-sm mb-3">
                        If you don&apos;t already have an account click the button below to create your account.
                    </p>
                    <Link to='/register'>
                        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium  h-10 px-4 py-2 w-full mb-2 bg-black text-white">
                            CREATE ACCOUNT
                        </button>
                    </Link>
                    <p className="text-center ">OR</p>
                    <button onClick={()=>handleSocialLogin(googleLogIn)}
                        type="button" className="py-2 px-5  mt-4 mx-auto block shadow-lg border rounded-md border-black"><svg viewBox="-0.5 0 48 48" version="1.1" className="w-6 inline-block mr-3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000000"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><title>Google-color</title> <desc>Created with Sketch.</desc><defs></defs><g id="Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd"><g id="Color-" transform="translate(-401.000000, -860.000000)"><g id="Google" transform="translate(401.000000, 860.000000)"><path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05"></path><path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335"></path><path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853"></path><path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4"></path></g></g></g></g></svg>Continue with Google</button>

                    <button type="button" className="py-2 flex gap-5 items-center px-5  mt-4 mx-auto  shadow-lg border rounded-md border-black"> <p className="text-lg"><VscGithubInverted /></p>Continue With GitHub</button>


                </div>
            </div>
        </div>

    );
};

export default Login;