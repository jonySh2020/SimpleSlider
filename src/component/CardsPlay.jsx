import React, { useEffect, useState } from "react";
import "./CardsPlay.css";

const images = [
  "https://images.unsplash.com/photo-1546173159-315724a31696?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGp1aWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1497534446932-c925b458314e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGp1aWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",

  "https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGp1aWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
];

function move(arr, direction) {
  if (arr.length === 0) return arr;

  const newArr = [...arr]; // Create a copy of the array

  if (direction === "left") {
    newArr.push(newArr[0]);
    newArr.shift();
  }
  if (direction === "right") {
    newArr.unshift(newArr.pop());
  }

  return newArr;
}

const CardsPlay = () => {
  const [imageStore, setImageStore] = useState(images);

  useEffect(() => {
    console.log("Image Store Updated:", imageStore);
  }, [imageStore]);

  function handleClick(arg) {
    const newStore = move(imageStore, arg);
    setImageStore((prevStore) => newStore);
  }

  return (
    <div className="CardsPlay">
      <button onClick={() => handleClick("left")} className="btn">
        ◀
      </button>
      <div className="card left">
        <img src={imageStore[0]} alt="image1" />
      </div>
      <div className="card active">
        <img src={imageStore[1]} alt="image2" />
      </div>
      <div className="card right">
        <img src={imageStore[2]} alt="image3" />
      </div>
      <button onClick={() => handleClick("right")} className="btn">
        ▶
      </button>
    </div>
  );
};

export default CardsPlay;
