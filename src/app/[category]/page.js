import React from "react";

function page({ params }) {
  return <div>Category Page {params.category}</div>;
}

export default page;
