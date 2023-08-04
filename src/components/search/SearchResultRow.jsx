import { useNavigate } from "react-router-dom"


function SearchResultRow({house}) {
    const navigate = useNavigate()
    const setActive = () => {
        navigate(`/house/${house.id}`)
    }

  return (
    <tr onClick={setActive} className="bg-gray-200 cursor-pointer">
      <td>{house.address}</td>
      <td>$ {house.price}</td>
      <td className="hidden">{house.likes}</td>
    </tr>
  )
}

export default SearchResultRow
