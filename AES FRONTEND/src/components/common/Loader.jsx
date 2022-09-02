import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import { DotLoader } from "react-spinners";

export default function Loader() {

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff",  }}
        open={true}
      >
        <DotLoader color="#263743"/>
      </Backdrop>
    </div>
  );
}