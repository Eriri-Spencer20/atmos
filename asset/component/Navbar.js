import {useState} from "reach"

function Navbar() {
const[ IsMobile, setIsMobile ] = useState(false)
  return (
    <div className="bg-gradient-to-br from-blue-700 to-skyblue-300 ">
      <div className="flex flex-col lg:flex-row px-4 py-4 lg:py-0">
        <div className="flex justify-between items-center px-4 border-b border-skyblue-400 lg:border-b-0">
          <div className="flex items-center">
            <img className="bg-auto px-2" src="img/logo.png" width="100px" alt="logo" />
          </div>
          <div>
            <button onclick={setIsMobile(true)} className="focus:outline-none text-white block lg:hidden">
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        <div className={"${IsMobile ? 'block' : 'hidden'} lg:flex flex-col lg:flex-row justify-end w-full py-4 lg:py-0 px-5 lg:0"}>
          <div className="flex flex-col lg:flex-row justify-between items-center ">
            <a href="#" className="block px-4 py-2 lg:py-4 text-skyblue-50 hover:text-white">
              About Us
            </a>
            <a href="#" className="block px-4 py-2 lg:py-4 text-skyblue-50 hover:text-white">
              Contact
            </a>
            <a href="#" className="block px-4 py-2 lg:py-4 text-skyblue-50 hover:text-white">
              Gallery
            </a>
          </div> 
        </div> 
      </div>
    </div>
  );
}
export default Navbar
