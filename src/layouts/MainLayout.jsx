// REACT ROUTER DOM IMPORTS
import { Outlet, useLoaderData } from "react-router-dom";

// HELPER FUNCTION
import { fetchdata } from "../helpers"

// LOADER FUNCTION
export const mainLoader = () => {
    const userName = fetchdata('userName')

    return { userName }
}

// COMPONENTS
import Nav from "../components/Nav";

const MainLayout = () => {

    // userLoaderData() enables me use the data I want to be rendered with this component
    const { userName } = useLoaderData()

    return (
        <div className=" max-w-screen-xl mx-auto pt-5 px-8 xl:px-0">
            <Nav userName={userName} />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default MainLayout