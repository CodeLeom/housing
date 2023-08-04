

function HouseFilter({allHouses}) {
    const cities = allHouses 
    ? Array.from(new Set(allHouses.map((h) => h.city))) 
    : []

    cities.unshift(null)
  return (
    <div className="mt-4">
        <div className="offset-md-2">Look For your Dream House in Abuja</div>
        <div className="mb-2">
            <select name="state" id="state">
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
