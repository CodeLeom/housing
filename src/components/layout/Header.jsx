import {Link} from 'react-router-dom'
import logo from '../../assets/logo.jpg'

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
                <li className="ml-6 mt-6">
                  <Link to='/'>Home</Link>
                </li>
              <li className="ml-6 mt-6">
                <Link to='/about'>About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
