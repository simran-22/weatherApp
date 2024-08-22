import React from "react";

const arr = {
  USD: { price: 1111 },
  GBP: { price: 3222 },
  INR: { price: 4444 },
};

const Test = () => {
  const data = Object.values(arr);
  console.log(data);

  return (
    <div>
      {/* {data.map((item) => (
        <p>{item.price}</p>
      ))} */}
    </div>
  );
};

export default Test;
