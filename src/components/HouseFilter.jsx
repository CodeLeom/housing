

function HouseFilter({allHouses}) {
    const countries = allHouses 
    ? Array.from(new Set(allHouses.map((h) => h.country))) 
    : []

    countries.unshift(null)
  return (
    <div className="mt-4">
        <div className="offset-md-2">Look For your Dream House in Abuja</div>
        <div className="mb-2">
            <select name="state" id="state">
                {countries.map((c) => (
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
