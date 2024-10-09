import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../utils/ThemeContext";

const UserProfile = () => {
  // Mock data for user details
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    dob: "January 1, 1990",
    location: "New York, USA",
    memberSince: "March 15, 2022",
  });

  const [dummyUser, setDummyUser] = useState({
    name: "Dummy User",
    email: "dummyuser@example.com",
    dob: "January 1, 1990",
    location: "New York, USA",
    memberSince: "March 15, 2022",
  });
  // Mock data for user's todos
  const [todos, setTodos] = useState([]);
  const themeCtx = useContext(ThemeContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDetails = await axios.get(
          `http://localhost:5000/api/auth/me`,
          {
            headers: {
              "x-auth-token": localStorage.getItem("token"), //the token is a variable which holds the token
            },
          }
        );

        setUser(userDetails.data.user);

        const response = await axios.get(`http://localhost:5000/api/todos/`, {
          headers: {
            "x-auth-token": localStorage.getItem("token"), //the token is a variable which holds the token
          },
        });
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the async function
    fetchData();
  }, []);

  return (
    <div
      className={`flex flex-col items-center min-h-screen  p-6 transition-all duration-300 ease-in-out ${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"}`}
    >
      {/* User Details Section */}
      <div
        className={` p-6 rounded-lg shadow-lg w-full max-w-lg mb-8 transition-all duration-300 ease-in-out ${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"}`}
      >
        {/* Profile Header */}
        <div className="flex justify-center mb-6">
          <img
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-md"
            src="https://via.placeholder.com/150" // Placeholder for profile image
            alt="User Profile"
          />
        </div>

        {/* User Info */}
        <h2
          className={`${themeCtx.theme === "light" ? " text-customGray" : " text-customWhite"} text-center text-2xl font-semibold mb-2`}
        >
          {user.name}
        </h2>
        <p
          className={`${themeCtx.theme === "light" ? " text-customGray" : " text-customWhite"} text-center  mb-4`}
        >
          {user.email}
        </p>

        {/* Additional Info */}
        <div
          className={`${themeCtx.theme === "light" ? " text-customGray" : " text-customWhite"} space-y-4 `}
        >
          <div className="flex justify-between">
            <span className="font-medium">Date of Birth:</span>
            <span>{dummyUser.dob}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Location:</span>
            <span>{dummyUser.location}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-medium">Member Since:</span>
            <span>{dummyUser.memberSince}</span>
          </div>
        </div>

        {/* Edit Profile Button */}
        <div className="mt-6 flex justify-center">
          <button className="bg-indigo-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-indigo-600 transition duration-300">
            Edit Profile
          </button>
        </div>
      </div>

      {/* User Todos Section */}
      <div
        className={`transition-all duration-300 ease-in-out ${themeCtx.theme === "light" ? "bg-customWhite text-customGray" : "bg-customGray text-customWhite"}  p-6 rounded-lg shadow-lg w-full max-w-lg`}
      >
        <h2
          className={`${themeCtx.theme === "light" ? " text-customGray" : " text-customWhite"} text-xl font-semibold  mb-4`}
        >
          Your Todos
        </h2>
        <ul className="space-y-4">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <li
                key={todo.id}
                className={`p-4 rounded-lg shadow-sm  ${
                  todo.completed
                    ? "bg-green-600 text-gray-100"
                    : "bg-gray-700 text-gray-300"
                } `}
              >
                <div className="flex justify-between items-center">
                  <span>{todo.title}</span>
                  <span
                    className={`px-2 py-1 rounded text-sm ${
                      todo.completed
                        ? "bg-green-800 text-white"
                        : "bg-red-600 text-white"
                    }`}
                  >
                    {todo.completed ? "Completed" : "Pending"}
                  </span>
                </div>
              </li>
            ))
          ) : (
            <p
              className={`${themeCtx.theme === "light" ? " text-customGray" : " text-customWhite"}`}
            >
              You have no todos.
            </p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
