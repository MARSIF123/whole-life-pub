import React from "react";

function page({ params }) {
  return (
    <div>
      Sub Category Page {params.category} / {params.subCategory}
    </div>
  );
}

export default page;
