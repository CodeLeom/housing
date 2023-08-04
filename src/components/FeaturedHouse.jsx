import House from './house/House'

function FeaturedHouse({ house }) {
  if (house)
    return (
        <div>
          <div className="container m-6">
              <h3 className="bg-yellow-400 text-white text-center p-2 mt-4">Featured House</h3>
          </div>
          <House house={house} />
        </div>
  )
  return <div className="bg-yellow-400 text-black font-bold text-center p-2 mt-16">No featured house yet!...</div>
}

export default FeaturedHouse
