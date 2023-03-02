// react router dom imports
import { Form, NavLink } from 'react-router-dom';

// assests
import logo from '../assets/logomark.svg';

// HEROICONS LIBRARY IMPORTS
import { TrashIcon } from '@heroicons/react/24/solid'

const Nav = ({ userName }) => {
    return (
        <nav className=' flex justify-between items-end'>
            <NavLink
                to="/"
                aria-label='Go to Home'
            >
                <div
                    className=' flex items-center gap-x-1 p-2 duration-200 hover:outline-blue-600 hover:outline hover:rounded-md'
                >
                    {/* logo */}
                    <img
                        src={logo}
                        alt="logo" />
                    <span
                        className=' font-extrabold text-slate-600 text-2xl'
                    >
                        CodarDev Hub
                    </span>
                </div>
            </NavLink>

            {/* delete button */}
            {
                userName && (
                    <Form
                        method='post'
                        action='/logout'
                        onSubmit={(e) => {
                            if(!confirm("Delete account and all data?")) {
                                e.preventDefault();
                            }
                        }}
                    >
                        <button
                            className=' text-lg text-red-400 bg-rose-50 border-solid border-red-400 border-2 p-2 rounded flex items-center gap-x-2 duration-200 hover:text-white hover:bg-red-400'
                        >
                            <span>
                                Delete Account
                            </span>
                            <TrashIcon width={20} />
                        </button>
                    </Form>
                )
            }
        </nav>
    )
}

export default Nav