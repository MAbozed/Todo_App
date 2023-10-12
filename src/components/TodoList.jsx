import Container from "@mui/material/Container";

// ? Card

import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// ? Toggle

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Divider, Grid, TextField } from "@mui/material";
import Todo from "./Todo";
// import TodoInput from "./TodoInput";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
const initTodo = [
  {
    id: uuidv4(),
    title: "fsfzdfsdf",
    details: "sdfzfsfsdszfgd",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "fsfzdfsdf",
    details: "sdfzfsfsdszfgd",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    title: "fsfzdfsdf",
    details: "sdfzfsfsdszfgd",
    isCompleted: false,
  },
];
export default function TodoList() {
  const [todo, setTodo] = useState(initTodo);
  const [inpValue, setInpValue] = useState("");
  const [displayedTodoType, setDisplayedTodoType] = useState("all");

  const completedTodo = todo.filter((t) => t.isCompleted);
  const notCompletedTodo = todo.filter((t) => !t.isCompleted);

  let renderTodo = todo;
  if (displayedTodoType === "completed") {
    renderTodo = completedTodo;
  } else if (displayedTodoType === "notCompleted") {
    renderTodo = notCompletedTodo;
  } else {
    renderTodo = todo;
  }
  const todoDom = renderTodo.map((t) => {
    return (
      <Todo
        key={t.id}
        todo={t}
        handleCheck={handleCheck}
        handleDel={handleDelClick}
        handleEdit={handleEditClick}
      />
    );
  });

  function handleCheck(todoId) {
    const updateTodo = todo.map((t) => {
      if (t.id == todoId) {
        t.isCompleted = !t.isCompleted;
      }
      return t;
    });
    setTodo(updateTodo);
    localStorage.setItem("todos", JSON.stringify(updateTodo));
  }

  function handleDelClick(todoId) {
    const updateTodo = todo.filter((t) => {
      return t.id != todoId;
    });
    setTodo(updateTodo);
    localStorage.setItem("todos", JSON.stringify(updateTodo));
  }

  function handleEditClick(todoId, EditTitle, EditDetails) {
    const updateTodo = todo.map((t) => {
      if (t.id == todoId) {
        return { ...t, title: EditTitle, details: EditDetails };
      } else {
        return t;
      }
    });
    setTodo(updateTodo);
    localStorage.setItem("todos", JSON.stringify(updateTodo));
  }

  function handleAdd() {
    const newTodo = {
      id: uuidv4(),
      title: inpValue,
      details: "",
      isCompleted: false,
    };
    const updateTodo = [...todo, newTodo];
    setTodo(updateTodo);

    localStorage.setItem("todos", JSON.stringify(updateTodo));
    setInpValue("");
  }

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem("todos")) ?? []);
  }, []);

  function handleDisplayTodoType(e) {
    setDisplayedTodoType(e.target.value);
  }

  return (
    <>
      <Container maxWidth="sm" style={{ textAlign: "center" }}>
        <Card
          sx={{ minWidth: 275 }}
          style={{ maxHeight: "80vh", overflow: "scroll" }}
        >
          <CardContent>
            <Typography variant="h2" style={{ fontWeight: "bold" }}>
              مهامي
            </Typography>
            <Divider />
            <ToggleButtonGroup
              style={{ marginTop: "25px", direction: "ltr" }}
              value={displayedTodoType}
              exclusive
              onChange={handleDisplayTodoType}
              aria-label="text alignment"
              color="primary"
            >
              <ToggleButton value="notCompleted" aria-label="left aligned">
                غير المنجز
              </ToggleButton>
              <ToggleButton value="completed" aria-label="centered">
                المنجز
              </ToggleButton>
              <ToggleButton value="all" aria-label="right aligned">
                الكل
              </ToggleButton>
            </ToggleButtonGroup>
            {todoDom}
            {/* <TodoInput /> */}
            <Grid container spacing={2} style={{ marginTop: "20px" }}>
              <Grid xs={8}>
                <TextField
                  id="outlined-basic"
                  label="عنوان المهمة"
                  variant="outlined"
                  style={{ width: "100%", height: "100%" }}
                  value={inpValue}
                  onChange={(e) => {
                    setInpValue(e.target.value);
                  }}
                />
              </Grid>
              <Grid xs={4}>
                <Button
                  variant="contained"
                  style={{
                    width: "80%",
                    height: "100%",
                  }}
                  onClick={handleAdd}
                  disabled={!inpValue.length}
                >
                  إضافة
                </Button>
              </Grid>
            </Grid>
          </CardContent>
          {/* <CardActions>
            
          </CardActions> */}
        </Card>
      </Container>
    </>
  );
}
