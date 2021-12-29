import React, { useEffect } from "react";

const Jobs = () => {
  useEffect(() => {
    const token = localStorage.getItem("user-info");
    const finalToken = JSON.parse(token).access;
    console.log(finalToken);
    fetch("https://tf-practical.herokuapp.com/api/job_post/?format=json", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${finalToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h2>This is jobs page</h2>
    </div>
  );
};

export default Jobs;
