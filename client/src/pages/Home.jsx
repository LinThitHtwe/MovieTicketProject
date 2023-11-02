import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-950 h-screen">
      <div className="flex justify-between p-3">
        <h1 className="text-white text-2xl ml-3">HomePage</h1>
        <input type="text" className="h-4 p-4 rounded-md mt-1" />
      </div>
      <div className="flex justify-center mt-5">
        <div className="bg-white min-w-[80vw] max-h-[350px]">
          <img
            className="rounded-lg object-cover min-w-full max-h-[350px] "
            src="https://media.istockphoto.com/id/1179771730/photo/vintage-film-projector-and-film-screening.jpg?s=612x612&w=0&k=20&c=HAAymRP8Y_AyLSngoH8xIkIopRf3hCF11mYvGWgVIE4="
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
