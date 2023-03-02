// react router dom imports
import { redirect } from "react-router-dom"

// toastify library imports
import { toast } from "react-toastify"

// helpers function
import { deleteItem } from "../helpers"

export const logoutAction = async () => {
    // delete the user's account
    deleteItem({
        key: "userName"
    })
    toast.success("You.ve deleted your account")
    // return a redirect
    return redirect("/")
}