import React from "react";
import { Link } from "react-router-dom";


export function NoMatch() {
  return (
    <div>
      <h2>No matching country could be found!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
