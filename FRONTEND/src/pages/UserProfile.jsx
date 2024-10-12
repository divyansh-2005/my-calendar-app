import axios from "axios";
import React, { useState, useEffect } from "react";

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
    <div className="flex flex-col items-center min-h-screen bg-gray-900 p-6">
      {/* User Details Section */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg mb-8">
        {/* Profile Header */}
        <div className="flex justify-center mb-6">
          <img
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500 shadow-md"
            src="https://via.placeholder.com/150" // Placeholder for profile image
            alt="User Profile"
          />
        </div>

        {/* User Info */}
        <h2 className="text-center text-2xl font-semibold text-gray-100 mb-2">
          {user.name}
        </h2>
        <p className="text-center text-gray-400 mb-4">{user.email}</p>

        {/* Additional Info */}
        <div className="space-y-4 text-gray-400">
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
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Your Todos</h2>
        <ul className="space-y-4">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <li
                key={todo.id}
                className={`p-4 rounded-lg shadow-sm ${
                  todo.completed
                    ? "bg-green-600 text-gray-100"
                    : "bg-gray-700 text-gray-300"
                }`}
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
            <p className="text-gray-400">You have no todos.</p>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
