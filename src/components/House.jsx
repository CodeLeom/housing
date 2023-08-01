

function House({ house }) {
  return (
    <div>
      <div className="grid grid-cols-2 m-4">
        <h5 className="row-span-12">{house.country}</h5>
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
        </div>
      </div>
        
    </div>
  )
}

export default House
