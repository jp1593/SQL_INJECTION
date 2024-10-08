import axios from "axios";
import React from "react";
import { useState } from "react";

function App() {
  const [data, setData] = useState(null);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const fetchData = async () => {
    const body = {
      name: inputValue,
    };
    try {
      const response = await axios.post("http://localhost:3001/secure", body); // Replace with your API endpoint
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="min-w-screen min-h-screen bg-black flex flex-col items-center justify-center px-5 pt-5 pb-24">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512.337"
        className="h-40 mt-10"
      >
        <path
          fill="#194794"
          d="M318.647 319.401c17.395 38.715 58.464 45.55 93.095 52.245C462.398 381.432 512 429.266 512 483.478v22.094c0 3.725-3.04 6.765-6.775 6.765H6.775c-3.735 0-6.775-3.04-6.775-6.765v-19.988c0-65.14 52.682-103.616 105.911-110.739 38.724-5.175 70.951-10.431 84.581-57.241 3.527 3.089 7.233 6.208 11.008 9.566 35.277 31.363 75.025 32.724 109.01-.049 2.792-2.703 5.524-5.246 8.137-7.72z"
        />
        <path
          fill="#D2A75F"
          d="M318.647 319.411c9.1 20.247 24.677 31.781 42.409 39.122-59.984 44.01-142.797 41.466-204.49 3.855 18.687-10.064 28.045-24.638 33.907-44.795 3.526 3.09 7.242 6.21 11.027 9.577 35.277 31.363 75.025 32.724 109.01-.049 2.792-2.703 5.524-5.246 8.137-7.71z"
        />
        <path
          fill="#DBB26F"
          d="M259.328 391.058c-35.873.159-71.955-9.895-102.762-28.67 18.617-10.024 28.214-24.826 33.916-44.795 3.537 3.09 7.233 6.21 11.018 9.577 18.528 16.472 38.307 24.667 57.828 23.992v39.896z"
        />
        <path
          fill="#E9BE79"
          d="M134.739 212.161c4.655-13.324 15.482-9.04 30.904-3.412l-.142-.666.142.075c11.004-115.475 85.398-49.193 141.122-109.957 29.279 14.418 48.212 43.104 43.366 107.067l.156-.124a280.937 280.937 0 01-1.534 10.001c14.023-10.621 34.241-9.633 27.882 13.905l-8.687 24.605c-2.077 5.889-3.466 8.027-10.91 7.627-3.288-.175-6.595-1.443-9.894-3.622 3.046 36.31-14.579 48.157-36.64 69.449-33.977 32.787-73.728 31.433-108.995.059-20.658-18.375-39.004-29.534-39.92-67.307-5.356 1.641-10.42 1.939-14.842-.575-8.814-5.016-12.024-19.614-12.505-28.962-.193-3.759-.032-14.335.497-18.163z"
        />
        <path
          fill="#F2CD8C"
          d="M134.741 212.161c4.66-13.326 15.477-9.036 30.903-3.411l-.138-.665.138.075c8.039-84.405 49.947-71.713 93.68-82.493V351.16c-19.515.683-39.287-7.506-57.817-23.992-20.657-18.374-39.005-29.529-39.914-67.305-5.356 1.637-10.422 1.937-14.843-.577-12.837-7.306-13.871-33.724-12.009-47.125z"
        />
        <path
          fill="#333231"
          d="M108.075 92.791C176.124 8.703 254.558-37.032 313.452 37.772c72.174 3.79 97.211 121.553 36.678 167.497 4.849-63.963-14.086-92.651-43.364-107.067-55.725 60.764-130.12-5.52-141.122 109.955l-26.707-13.909c-2.652-33.119 5.106-90.577-30.862-101.457z"
        />
      </svg>
      <h1 className="text-white text-2xl mt-5 mb-10">
        USER INFORMATION SEARCH
      </h1>
      <input
        type="text"
        placeholder="Insert your name here"
        value={inputValue}
        onChange={handleInputChange}
        className="px-3 py-4 text-blueGray-600 relative bg-white rounded-2xl border-2 border-green-500 focus:border-blue-500 outline-none focus:outline-none focus:ring w-1/2"
      />
      <svg
        version="1.1"
        viewBox="0 0 76.26506224066391 116.94"
        id="svg2"
        xmlns="http://www.w3.org/2000/svg"
        className="h-32 mt-10"
      >
        <g transform="translate(-303.88 -476.85)" id="layer1">
          <path
            fill="#60df33"
            d="m308.69 519.19s-1.5413-42.129 31.854-42.129 31.34 42.129 31.34 42.129h-8.7341s-0.25689-31.854-22.606-32.624c-22.349-0.77066-21.065 32.624-21.065 32.624h-10.789z"
            id="path2858"
          />
          <path
            fill="#60df33"
            d="m377.72 577.11 0.0707-55.306h-73.47l-0.44306 54.73c0.0707 20.328 16.569 17.261 36.921 17.261s36.921 3.666 36.921-16.686z"
            id="path2865"
          />
          <path
            fill="#287f09"
            d="m340.79 538.92c-4.0128 0-7.2476 3.2348-7.2476 7.2476 0 2.9243 1.7057 5.4595 4.196 6.6119l-2.6854 18.087h12.461l-2.8772-18.532c2.0532-1.2839 3.4331-3.5668 3.4331-6.1668 0-4.0128-3.2666-7.2476-7.2794-7.2476z"
            id="path2860"
          />
          <path
            fill="#dd2727"
            d="m466.18 518.98s-1.5413-42.129 31.854-42.129 31.34 42.129 31.34 42.129h-8.7341s-0.25689-31.854-22.606-32.624c-22.349-0.77066-21.065 32.624-21.065 32.624h-10.789z"
            id="path3743"
          />
          <path
            fill="#dd2727"
            d="m482.9 577.1 0.0707-55.306h-73.47l-0.44306 54.73c0.0707 20.328 16.569 17.261 36.921 17.261s36.921 3.666 36.921-16.686z"
            id="path2865-1"
          />
          <path
            fill="#920312"
            d="m445.97 538.92c-4.0128 0-7.2476 3.2348-7.2476 7.2476 0 2.9243 1.7057 5.4595 4.196 6.6119l-2.6854 18.087h12.461l-2.8772-18.532c2.0532-1.2839 3.4331-3.5668 3.4331-6.1668 0-4.0128-3.2666-7.2476-7.2794-7.2476z"
            id="path2860-7"
          />
        </g>
      </svg>
      <button
        onClick={fetchData}
        className="rounded text-black h-12 mt-10 px-5  text-2xl bg-green-600 hover:bg-green-400"
      >
        Search
      </button>
      {data && (
        <div className=" text-white mt-10">
          {data.map((item) => (
            <p key={item.id}>
              Name: {item.name} Salary: {item.salary} Role: {item.position} Age:{" "}
              {item.age}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
