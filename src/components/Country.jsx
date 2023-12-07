import React from "react";

const Country = (props) => {
  const { name, population, region, flag, flags } = props.country;
  const handleAddCountry = props.handleAddCountry;
  return (
    <>
      <div
        style={{
          border: "3px dashed #109161",
          marginBottom: "1rem",
          padding: "1rem",
        }}
      >
        <h4 style={{ margin: "0", padding: "20px 0px" }}>
          This is {name.common}
        </h4>
        <div>
          <img
            src={flags.png}
            alt=""
            style={{ height: "100px", width: "150px" }}
          />
        </div>
        <p style={{ margin: "0", padding: "15px 0px" }}>
          population : {population}
        </p>
        <p style={{ margin: "0", padding: "15px 0px" }}>
          <small>Region: {region} </small>
        </p>
        <button onClick={() => handleAddCountry(props.country)}>
          {" "}
          Add Country
        </button>
      </div>
    </>
  );
};

export default Country;
