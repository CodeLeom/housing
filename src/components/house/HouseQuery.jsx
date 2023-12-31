import { useParams } from "react-router-dom";
import House from "./House";
import { useContext } from "react"
import HouseContext from "../../context/houseContext"

function HouseQuery() {
    const {id} = useParams()
    const houses = useContext(HouseContext)
    const house = houses.find((h) => h.id === parseInt(id))

    if(!house) return <div><h3 className="bg-yellow-400 text-white text-center p-2 mt-4">House not found</h3></div>
  return (
    <House house={house} />
  )
}

export default HouseQuery
