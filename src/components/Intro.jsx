// react roouter dom imports
import { Form } from 'react-router-dom';

// hero icons library import
import { UserPlusIcon } from '@heroicons/react/24/solid';

// assests
import illustration from '../assets/illustration.jpg';

const Intro = () => {
    return (
        <div className=' flex lg:flex-col lg:justify-center lg:h-[80vh]'>
            <div className=" flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20">
                {/* hero content & sign up form */}
                <div className=' basis-1/2 flex flex-col items-center gap-y-4 lg:items-start'>
                    <h1 className=" text-5xl font-semibold text-center lg:text-start">
                        Find
                        <span className=' text-blue-600'> answers</span>,
                        share
                        <span className=' text-blue-600'> knowledge</span>,
                        build your
                        <span className=' text-blue-600'> skills</span>
                    </h1>
                    <p className=' text-center lg:text-start'>
                        Join our thriving community of developers to learn, share, and grow together.
                    </p>
                    <Form method='post'>
                        <input
                            type="text"
                            name='userName'
                            placeholder='What is your name?'
                            aria-label='Your Name'
                            autoComplete='given-name'
                            className=' bg-transparent border-gray-500 border-solid border-2 px-2 py-1 rounded focus:outline-blue-600'
                        />
                        <button
                            type='submit'
                            className=' text-lg text-white bg-black border-solid p-2 mt-4 rounded flex items-center gap-x-2 duration-100 hover:opacity-75'
                        >
                            <span>Create Account</span>
                            <UserPlusIcon width={20} />
                        </button>
                    </Form>
                </div>

                {/* hero image */}
                <div className=' basis-1/2'>
                    <img src={illustration} alt="group of people" />
                </div>
            </div>
        </div>
    )
}

export default Intro