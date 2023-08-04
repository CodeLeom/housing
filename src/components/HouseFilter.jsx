import { useNavigate } from "react-router-dom"

function HouseFilter({houses}) {
    const navigate = useNavigate()
    const cities = houses ? Array.from(new Set(houses.map((h) => h.city))) : []

    cities.unshift(null)

    const onSearchChange = (e) => {
        const city = e.target.value
        navigate(`/searchresults/${city}`)
    }
  return (
    <div className="justify-items-center grid grid-cols-3 gap-4 mt-4">
        <div className="ml-10 font-bold">Look For your Dream House in Nigeria</div>
        <div className="mb-2">
            <select name="city" id="city" onChange={onSearchChange} className="border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                {cities.map((c) => (
                    <option key={c} value={c}>
                        {c}
                    </option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default HouseFilter
