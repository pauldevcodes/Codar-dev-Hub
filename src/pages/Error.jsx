// rrd imports
import { Link, useNavigate, useRouteError } from "react-router-dom"

// library imports
import { ArrowUturnLeftIcon, HomeIcon } from "@heroicons/react/24/solid"


const Error = () => {
    const error = useRouteError();
    const navigate = useNavigate()

  return (
    <div className=" h-screen flex flex-col justify-center items-center px-8">
        <div className=" flex flex-col items-center gap-y-5">
            <h1 className=" text-5xl font-bold text-slate-700 text-center">
                Uh oh! We've got a problem
            </h1>
            <p className=" text-center">
                {error.message || error.statusText}
            </p>
            <div className=" flex items-center gap-x-8">
                <button 
                className=" text-lg text-white bg-black border-solid p-2 rounded flex items-center gap-x-2 duration-100 hover:opacity-75"
                onClick={() => navigate(-1)}
                >
                    <ArrowUturnLeftIcon width={20} />
                    <span>Go Back</span>
                </button>
                <Link
                to="/"
                className=" text-lg text-white bg-black border-solid p-2 rounded flex items-center gap-x-2 duration-100 hover:opacity-75"
                >
                    <HomeIcon width={20} />
                    <span>Go to Homepage</span>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Error