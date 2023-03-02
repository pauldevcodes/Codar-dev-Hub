// REACT ROUTER DOM IMPORTS
import { useLoaderData } from "react-router-dom";

// library imports
import { toast } from "react-toastify";

// components
import Intro from "../components/Intro";

// helper function
import { fetchdata } from "../helpers"

// loader function
export const dashboardLoader = () => {
    const userName = fetchdata('userName')

    return { userName }
}

// action function
export const dashboardAction = async ({ request }) => {
    const data = await request.formData();
    const formData = Object.fromEntries(data);
    try {
        localStorage.setItem("userName", JSON.stringify(formData.userName))
        return toast.success(`Welcome ${formData.userName}`)
    } catch (error) {
        throw new Error("There was an error creating your account")
    }
}

const Dashboard = () => {

    // userLoaderData() enables me use the data I want to be rendered with this component
    const { userName } = useLoaderData()

    return (
        <>
            {userName
                ?
                (
                    <h1 className=" text-4xl">
                        Welcome, <span>{userName}</span>
                    </h1>
                )
                :
                (<Intro />)
            }
        </>
    )
}

export default Dashboard