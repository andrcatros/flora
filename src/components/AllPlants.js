import React from "react";
import PlantCard from "./PlantCard";

const AllPlants = ({ data }) => {
  return (
    <div className="all-plants">
      <PlantCard plant={data[0]} />
    </div>
  );
};

export default AllPlants;
