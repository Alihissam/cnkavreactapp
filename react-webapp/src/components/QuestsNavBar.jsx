import { dropDownIcon, cnkavLogo, userLogedIn } from "../images";
import { Link } from "react-router-dom";

export default function QuestsNavBar() {
  return (
    <>
      <div className="fixed w-full z-10 shadow-md px-10 py-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-12 items-center">
            <img src={cnkavLogo} alt="Logo" className="h-20" />
            <nav className="hidden md:flex space-x-10 text-[17px] ml-20 items-baseline">
              <Link className="text-white font-bold" to="/dashboard">
                Home
              </Link>
              <div className="relative group flex items-center">
                <Link
                  className="hover:text-white text-gray-400"
                  to="#"
                  id="influewave-link"
                >
                  Quest
                </Link>
                <img
                  src={dropDownIcon}
                  className="h-6 bg-white rounded-full ml-2"
                  alt="Dropdown Icon"
                />
                <div className="absolute hidden group-hover:block w-[200px] bg-white text-black mt-[110px]  shadow-lg">
                  <Link
                    to="/dashboard/questsdashboard"
                    className="block px-4 py-2 hover:bg-black hover:text-white"
                  >
                    Quest Dashboard
                  </Link>
                  <Link
                    to="/dashboard/deployquests"
                    className="block px-4 py-2 hover:bg-black hover:text-white"
                  >
                    Deploy Quest
                  </Link>
                </div>
              </div>

              <div className="relative group flex items-center">
                <Link
                  className="hover:text-white text-gray-400"
                  to="/dashboard/community"
                  id="influewave-link"
                >
                  Community
                </Link>
                <img
                  src={dropDownIcon}
                  className="h-6 bg-white rounded-full ml-2"
                  alt="Dropdown Icon"
                />
              </div>
              <div className="relative group flex items-center">
                <Link
                  className="hover:text-white text-gray-400"
                  to="#"
                  id="influewave-link"
                >
                  Chat
                </Link>
                <img
                  src={dropDownIcon}
                  className="h-6 bg-white rounded-full ml-2"
                  alt="Dropdown Icon"
                />
              </div>
              <div className="relative group flex items-center">
                <Link
                  className="hover:text-white text-gray-400"
                  to="/dashboard/affiliatedtools"
                  id="influewave-link"
                >
                  Affiliate tools
                </Link>
                <img
                  src={dropDownIcon}
                  className="h-6 bg-white rounded-full ml-2"
                  alt="Dropdown Icon"
                />
              </div>
              <Link
                className="hover:text-white text-gray-400"
                to="#"
                // onClick={() => setCardVisible(true)}
              >
                Pricing
              </Link>
              <Link className="hover:text-white text-gray-400" to="#">
                Contact Us
              </Link>
            </nav>
          </div>
          <button
            // onClick={() => setModal(!isModal)}
            className="hidden cursor-pointer md:flex items-center border border-white px-4 py-2 rounded-md text-white"
          >
            <img
              src={userLogedIn}
              className="bg-white rounded-full h-6  mr-4"
              alt=""
            />
            <span>Username</span>
            <img
              src={dropDownIcon}
              className="h-6 bg-white rounded-full ml-2"
              alt="Dropdown Icon"
            />
          </button>
        </div>
      </div>
      {/* {isCardVisible && <PricingModal setCardVisible={setCardVisible} />}  */}
    </>
  );
}
