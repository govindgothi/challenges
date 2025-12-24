import React, { useEffect, useState } from "react";
import "./RecipeFilterApp.css";
import data from "./recipesData.js";

const RecipeCard = ({ datas }) => {
  const { name, cuisine, image, rating, reviewCount } = datas;

  return (
    <div className="recipe-card">
      <img src={image} alt={name} className="recipe-image" />

      <div className="recipe-content">
        <h2 className="recipe-title">{name}</h2>
        <p className="recipe-cuisine">Cuisine: {cuisine}</p>

        <div className="recipe-footer">
          <span className="recipe-rating">⭐ {rating ? rating : 2}</span>
          <span className="recipe-reviews">{reviewCount} reviews</span>
        </div>
      </div>
    </div>
  );
};

const RecipeFilterApp = () => {
  const [selectedRating, setSelectedRating] = useState(1.0);
  const [avgRating, setAvgRating] = useState(0);
  const handleChange = (e) => {
  const newRating = Number(e.target.value);

  if (data.length > 0) {
    const filteredData = data.filter(
      (item) => item.rating >= newRating
    );

    const totalRating = filteredData.reduce(
      (acc, curr) => acc + Number(curr.rating),
      0
    );

    const avgRate =
      filteredData.length === 0
        ? 0
        : totalRating / filteredData.length;

    setAvgRating(avgRate.toFixed(2));
  }

  setSelectedRating(newRating);
};


  console.log(avgRating)
  useEffect(()=>{

  },[avgRating])
  return (
    <div>
      <h1>🍽️ Recipe Explorer</h1>
      
      <div>
        {" "}
        Filter by Rating :
        <select value={selectedRating} onChange={handleChange}>
          <option value={1.0}>1.0</option>
          <option value={2.0}>2.0</option>
          <option value={3.0}>3.0</option>
          <option value={4.0}>4.0</option>
          <option value={5.0}>5.0</option>
        </select>
      </div>
      <div><h3>{avgRating}</h3></div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "40px",
        }}
      >
        {data?.length > 0 &&
          data
            ?.filter((data) => data.rating >= selectedRating)
            .map((data) => <RecipeCard key={data.id} datas={data} />)}
      </div>
    </div>
  );
};

export default RecipeFilterApp;
