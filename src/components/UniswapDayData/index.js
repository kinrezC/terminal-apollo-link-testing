import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_UNISWAPS } from "./query";
import { Typography } from "@material-ui/core";

const Swaps = () => {
  const first = 1;
  const { loading, error, data } = useQuery(GET_UNISWAPS, {
    variables: {
      first
    }
  });

  if (loading) return null;
  if (error) return <Typography variant="h2">RIP</Typography>;

  console.log(data);

  return (
    <div>
      <Typography variant="h2">{data.uniswaps[0].exchangeCount}</Typography>
    </div>
  );
};

export default Swaps;
