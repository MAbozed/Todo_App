import {
  Card,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
// import React, { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CheckIcon from "@mui/icons-material/Check";
import { ModeEditOutlineOutlined } from "@mui/icons-material";

// Dialog
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";

const Todo = ({ todo, handleCheck, handleDel, handleEdit }) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [selectTodo, setSelectTodo] = useState(todo);

  const handleDeleteDialogOpen = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };
  const handleEditDialogOpen = () => {
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  function handleCheckClick() {
    handleCheck(todo.id);
  }

  function handleDelClick() {
    handleDel(todo.id);
  }
  function handleEditClick() {
    // setSelectTodo({ ...selectTodo, title: "new title", details: "new" });
    handleEdit(todo.id, selectTodo.title, selectTodo.details);
    setEditDialogOpen(false);
  }
  return (
    <>
      {/* Delete Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={handleDeleteDialogClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{ direction: "rtl" }}
      >
        <DialogTitle id="alert-dialog-title">
          هل تريد حذف هذه المهمة
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            لا يمكنك التراجع عن الحذف
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteDialogClose}>إغلاق</Button>
          <Button onClick={handleDelClick} autoFocus>
            نعم، قم بالحذف
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog
        open={editDialogOpen}
        onClose={handleEditDialogClose}
        style={{ direction: "rtl" }}
      >
        <DialogTitle>تعديل المهمة</DialogTitle>
        <DialogContent>
          <DialogContentText>تعديل عنوان وتفاصيل المهمة</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="عنوان المهمة"
            type="text"
            fullWidth
            variant="standard"
            value={selectTodo.title}
            onChange={(e) => {
              setSelectTodo({ ...selectTodo, title: e.target.value });
            }}
            onClick={(e) => {
              e.target.value = "";
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="تفاصيل المهمة"
            type="text"
            fullWidth
            variant="standard"
            value={selectTodo.details}
            onChange={(e) => {
              setSelectTodo({ ...selectTodo, details: e.target.value });
            }}
            onClick={(e) => {
              e.target.value = "";
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose}>إغلاق</Button>
          <Button onClick={handleEditClick}>تعديل</Button>
        </DialogActions>
      </Dialog>

      <Card
        sx={{ minWidth: 275 }}
        style={{ background: "#262F89", marginTop: "25px", color: "white" }}
      >
        <CardContent className="todoCard" style={{ padding: "30px" }}>
          <Grid container spacing={2}>
            <Grid
              xs={8}
              style={{
                textAlign: "right",
                alignItems: "center",
              }}
            >
              <Typography variant="h6">{todo.title}</Typography>
              <Typography variant="p">{todo.details}</Typography>
            </Grid>
            <Grid
              xs={4}
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              {/* Check Btn */}
              <IconButton
                onClick={() => {
                  handleCheckClick();
                }}
                className="iconBtnCheck"
                aria-label="check"
                style={{
                  color: todo.isCompleted ? "#fff" : "#8bc34a",
                  backgroundColor: todo.isCompleted ? "#8bc34a" : "#fff",
                  border: "2px solid #8bc34a",
                  borderRadius: "50%",
                }}
              >
                <CheckIcon />
              </IconButton>

              {/* Edit Btn */}

              <IconButton
                onClick={handleEditDialogOpen}
                className="iconBtnEdit"
                aria-label="edit"
                style={{
                  color: "#1769aa",
                  backgroundColor: "#fff",
                  border: "2px solid #1769aa",
                  borderRadius: "50%",
                }}
              >
                <ModeEditOutlineOutlined />
              </IconButton>

              {/* Delete Btn */}
              <IconButton
                onClick={handleDeleteDialogOpen}
                className="iconBtnDel"
                aria-label="delete"
                style={{
                  color: "#b23c17",
                  backgroundColor: "#fff",
                  border: "2px solid #b23c17",
                  borderRadius: "50%",
                }}
              >
                <DeleteOutlineIcon />
              </IconButton>

              {/* Delete Btn */}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Todo;
