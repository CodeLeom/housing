import { useParams } from "react-router-dom";
import SearchResultRow from "./SearchResultRow";
import { useContext } from "react"
import HouseContext from "../../context/houseContext"

function SearchResult() {
    const {city} = useParams()
    const houses = useContext(HouseContext)
    const filteredHouses = houses.filter((h) => h.city === city)

  return (
    <div className="ml-10">
        <h4>Results for {city}: </h4>
        <table className="border-separate [border-spacing:0.75rem] table">
            <tbody>
                {filteredHouses.map((h) => (
                    <SearchResultRow key={h.id} house={h}/>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default SearchResult
