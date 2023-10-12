import { Button, Grid } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";

const TodoInput = () => {
  return (
    <>
      <Grid container spacing={2} style={{ marginTop: "20px" }}>
        <Grid xs={8}>
          <TextField
            id="outlined-basic"
            label="عنوان المهمة"
            variant="outlined"
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid xs={4}>
          <Button
            variant="contained"
            style={{
              width: "80%",
              height: "100%",
            }}
          >
            إضافة
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default TodoInput;
