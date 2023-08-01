import FeaturedHouse from "../components/FeaturedHouse"

function Home({house}) {
  return (
    <>
      <h1 className="ml-10 text-3xl font-bold">
           Home Page
      </h1>
      <FeaturedHouse house={house} />
    </>
  )
}

export default Home
