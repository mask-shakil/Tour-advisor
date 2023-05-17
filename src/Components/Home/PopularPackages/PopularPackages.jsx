import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const PopularPackages = () => {
  const navigate = useNavigate();
  const showPopularPackageDetails = () => {
    const path = `popularSinglePackage${id}`;
    navigate(path);
  };
  const [popularPackages, setPackages] = useState([]);
  useEffect(() => {
    fetch("PopularPackageData.json")
      .then((Response) => Response.json())
      .then((data) => setPackages(data));
  }, []);
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center">Popular Packages</h1>
        <div className="row">
          {popularPackages.map((popularPackage) => (
            <div key={popularPackage.id} className="col-4 mt-5 text-center">
              <div class="card mt-3 shadow">
                <img
                  style={{ height: "250px" }}
                  src={popularPackage.img}
                  class="card-img-top"
                  alt="Image"
                />
                <div class="card-body">
                  <h5 class="card-title">{popularPackage.title}</h5>
                  <p class="card-text">{popularPackage.day}</p>
                  <p class="card-text">{popularPackage.price}</p>
                  <button
                    onClick={showPopularPackageDetails()}
                    className="btn btn-primary"
                  >
                    See details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularPackages;
