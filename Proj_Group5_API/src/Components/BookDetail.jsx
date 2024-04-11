import { React, useState, useEffect } from "react";

const BookDetail = ({ labelField, valueField }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        height: "2rem",
      }}
    >
      <p
        style={{
          fontWeight: "bold",
          textTransform: "capitalize",
          paddingRight: "1rem",
        }}
      >
        {labelField}
      </p>
      <p>{valueField}</p>
    </div>
  );
};

export default BookDetail;
