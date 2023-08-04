import { useState } from "react"
import email from "../../assets/email.png"
import Inquiry from "./Inquiry"

function House({ house }) {
  const [inquiry, setInquiry] = useState(false)
  const inquiryClick = () => {
    setInquiry(!inquiry)
  }

  return (
    <div>
      <div className="grid grid-cols-2 m-4">
        <h5 className="row-span-12">{house.city}</h5>
      </div>
      <div className="grid grid-cols-2 m-4">
        <h5 className="row-span-12">{house.address}</h5>
      </div>
      <div className="grid grid-cols-2 m-4">
        <div className="row-span-7">
            <img src={`/assets/${house.photo}.jpg`} alt="featured house" />
        </div>
        <div className="row-span-5 p-6">
            <p className="text-yellow-400 text-lg">${house.price}</p>
            <p>{house.description}</p>

            <img src={email} alt="inquiry icon" onClick={inquiryClick} width={25} height={25} className="mt-5" />
            {inquiry && <Inquiry house={house} />}
        </div>
      </div>
        
    </div>
  )
}

export default House
