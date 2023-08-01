
import logo from '../assets/logo.jpg'

function Header() {
    
  return (
    <header className="bg-white w-full">
      <div className="container mx-auto">
        <div className="flex items-center justify-between p-3">
          <div>
            <img src={logo} alt="site Logo" className='logo'/>
          </div>
          <nav className=" p-4">
            <ul className="flex text-gray-500 ">
                <li className="md:ml-6 mt-6">
                  Home
                </li>
              <li className="md:ml-6 mt-6">
                About
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
