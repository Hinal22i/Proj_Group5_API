import { React, useState, useEffect } from "react";

const BookDetail = ({ labelField, valueField }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "start",
        alignItems: "center",
        height: "2.2rem",
      }}
    >
      <p
        style={{
          fontWeight: "bold",
          textTransform: "capitalize",
          paddingRight: "1rem",
          fontSize: "1.3rem",
        }}
      >
        {labelField}
      </p>
      <p style={{ fontSize: "1.3rem" }}>{valueField}</p>
    </div>
  );
};

export default BookDetail;
