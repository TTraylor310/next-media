import {FaBed, FaBath, FaRulerCombined, FaTimes, FaCheck, FaMapMarker} from 'react-icons/fa'

const PropertyDetails = ({propertyInfo}) => {

  
  return (
    <main>
            <div
              className="p-6 text-center bg-white rounded-lg shadow-md md:text-left"
            >
              <div className="mb-4 text-gray-500">Apartment</div>
              <h1 className="mb-4 text-3xl font-bold">Boston Commons Retreat</h1>
              <div
                className="flex justify-center mb-4 text-gray-500 align-middle md:justify-start"
              >
                <FaMapMarker className='mr-2 text-lg text-orange-700' />
                <p className="text-orange-700">
                  120 Tremont Street Boston, MA 02111
                </p>
              </div>

              <h3 className="p-2 my-6 text-lg font-bold text-white bg-gray-800">
                Rates & Options
              </h3>
              <div className="flex flex-col justify-around md:flex-row">
                <div
                  className="flex items-center justify-center pb-4 mb-4 border-b border-gray-200 md:border-b-0 md:pb-0"
                >
                  <div className="mr-2 font-bold text-gray-500">Nightly</div>
                  <div className="text-2xl font-bold">
                    <i className="text-red-700 fa fa-xmark"></i>
                  </div>
                </div>
                <div
                  className="flex items-center justify-center pb-4 mb-4 border-b border-gray-200 md:border-b-0 md:pb-0"
                >
                  <div className="mr-2 font-bold text-gray-500">Weekly</div>
                  <div className="text-2xl font-bold text-blue-500">$1,100</div>
                </div>
                <div className="flex items-center justify-center pb-4 mb-4 md:pb-0">
                  <div className="mr-2 font-bold text-gray-500">Monthly</div>
                  <div className="text-2xl font-bold text-blue-500">$4,200</div>
                </div>
              </div>
            </div>

            <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-6 text-lg font-bold">Description & Details</h3>
              <div
                className="flex justify-center gap-4 mb-4 text-xl text-blue-500 space-x-9"
              >
                <p>
                  <i className="fa-solid fa-bed"></i> 3
                  <span className="hidden sm:inline">Beds</span>
                </p>
                <p>
                  <i className="fa-solid fa-bath"></i> 2
                  <span className="hidden sm:inline">Baths</span>
                </p>
                <p>
                  <i className="fa-solid fa-ruler-combined"></i>
                  1,500 <span className="hidden sm:inline">sqft</span>
                </p>
              </div>
              <p className="mb-4 text-gray-500">
                This is a beautiful apartment located near the commons
              </p>
              <p className="mb-4 text-gray-500">
                We have a beautiful apartment located near the commons. It is a
                2 bedroom apartment with a full kitchen and bathroom. It is
                available for weekly or monthly rentals.
              </p>
            </div>

            <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
              <h3 className="mb-6 text-lg font-bold">Amenities</h3>

              <ul
                className="grid grid-cols-1 list-none md:grid-cols-2 lg:grid-cols-3"
              >
                <li>
                  <i className="mt-3 mr-2 text-green-600 fas fa-check"></i> Wifi
                </li>
                <li>
                  <i className="mt-3 mr-2 text-green-600 fas fa-check"></i>Full
                  kitchen
                </li>
                <li>
                  <i className="mt-3 mr-2 text-green-600 fas fa-check"></i>Washer &
                  Dryer
                </li>
                <li>
                  <i className="mt-3 mr-2 text-green-600 fas fa-check"></i>Free
                  Parking
                </li>
                <li>
                  <i className="mt-3 mr-2 text-green-600 fas fa-check"></i>Hot Tub
                </li>
                <li>
                  <i className="mt-3 mr-2 text-green-600 fas fa-check"></i>24/7
                  Security
                </li>
                <li>
                  <i className="mt-3 mr-2 text-green-600 fas fa-check"></i
                  >Wheelchair Accessible
                </li>
                <li>
                  <i className="mt-3 mr-2 text-green-600 fas fa-check"></i>Elevator
                  Access
                </li>
                <li>
                  <i className="mt-3 mr-2 text-green-600 fas fa-check"></i
                  >Dishwasher
                </li>
                <li>
                  <i className="mt-3 mr-2 text-green-600 fas fa-check"></i
                  >Gym/Fitness Center
                </li>
                <li>
                  <i className="mt-3 mr-2 text-green-600 fas fa-check"></i>Air
                  Conditioning
                </li>
                <li>
                  <i className="mt-3 mr-2 text-green-600 fas fa-check"></i
                  >Balcony/Patio
                </li>
                <li>
                  <i className="mt-3 mr-2 text-green-600 fas fa-check"></i>Smart TV
                </li>
                <li>
                  <i className="mt-3 mr-2 text-green-600 fas fa-check"></i>Coffee
                  Maker
                </li>
              </ul>
            </div>
            <div className="p-6 mt-6 bg-white rounded-lg shadow-md">
              <div id="map"></div>
            </div>
          </main>
  )
}

export default PropertyDetails