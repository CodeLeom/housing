import { useState } from "react";


function Inquiry() {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        message: '',
    })

    const onChange = (e) => {
        setContact({
            ...contact,
            [e.target.id]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(contact)
    }
  return (
    <>
        <form className="mt-2">
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
                    Full Name
                </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400" id="name" type="text" value={contact.name} onChange={onChange} placeholder="full name" />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
                    Email
                </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400" id="email" type="email" value={contact.email} placeholder="******************" onChange={onChange} />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="message">
                    Message
                </label>
                </div>
                <div className="md:w-2/3">
                <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-yellow-400" id="message" type="email" value={contact.message} placeholder="your message" onChange={onChange} />
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                <button class="shadow bg-yellow-400 hover:bg-yellow-300 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={onSubmit} disabled={!contact.name || !contact.email}>
                    Submit
                </button>
                </div>
            </div>
        </form>
    </>
  )
}

export default Inquiry
