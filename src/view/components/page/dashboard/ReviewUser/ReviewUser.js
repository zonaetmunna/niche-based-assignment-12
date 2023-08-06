import { Typography } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../../../hooks/useAuth";

const ReviewUser = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const url = "http://localhost:5000/review";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("comment add successfully");
          reset();
        }
        console.log(data);
      });
  };

  return (
    <div>
      <Typography variant="h5">Please review our service</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          defaultValue={user.displayName}
          {...register("displayName")}
          placeholder={user.displayName}
        />
        <br />
        <input
          defaultValue={user.email}
          {...register("email")}
          placeholder={user.email}
        />
        <br />
        <input {...register("productName")} placeholder="products name" />
        <br />
        <input {...register("comment")} placeholder="comments" />
        <br />
        <input
          type="number"
          {...register("star", { min: 0, max: 5 })}
          placeholder="rating"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default ReviewUser;
