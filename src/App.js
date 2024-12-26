import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc");
        setUser(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div className="w-[700px] h-470 flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen ">
    <div className="flex items-center justify-center h-screen bg-white w-[730px] h-[409px] shadow-2xl">
      {/* Card container */}
      <div className="w-[645px] h-[340px] border-4 border-black bg-white rounded-lg shadow-lg flex items-center pl-3 pb-4 pr-3 pt-4 shadow-4xl">
        {/* Image Section */}
        <div className="flex-none w-[180px] h-[190px] ml-6 mt-6 mb-6 ">
          <img
            className="w-full h-full object-cover rounded-md shadow-md border border-gray-200"
            src={user.picture.large}
            alt={`${user.name.first} ${user.name.last}`}
          />
        </div>
        {/* Text Section */}
        <div className="ml-16 mb-11 mt--16">
        <div className="flex text-lg font-semibold mb-2">
    <p className="mr-2">{`First Name: ${user.name.first}`}</p> 
    <p className="mr-20">{`Last Name: ${user.name.last}`}</p>
  </div>
  <p className="flex items-center text-base text-lg font-semibold mb-2">
  <FontAwesomeIcon icon={faUser} className="text-lg font-semibold mr-2" />
  {`Gender: ${user.gender}`}
</p>
<p className="flex items-center text-base text-lg font-semibold">
  <FontAwesomeIcon icon={faPhone} className="text-lg font-semibold mr-2" />
  {`Phone Number: ${user.phone}`}
</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default App;
