import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

const AdminThemesForm = (props) => {
  return (
    <Box sx={{ minWidth: 275, marginRight: "2%" }}>
      <Card variant="outlined">
        <CardContent sx={{ display: "grid", padding: "20px 140px" }}>
          <Typography
            variant="h6"
            sx={{ textAlign: "center" }}
            color="text.primary"
            gutterBottom
          >
            {props.editing ? "Edit" : "Add"} Theme
          </Typography>
          <form onSubmit={props.themeSubmitHandler} style={{ display: "grid" }}>
            <TextField
              required
              id="theme-name"
              label="Theme Name"
              variant="standard"
              value={props.enteredThemeName}
              onChange={props.themeNameChangeHandler}
            />
            <TextField
              id="theme-price"
              label="Theme Price"
              variant="standard"
              type="number"
              value={props.enteredThemePrice}
              onChange={props.themePriceChangeHandler}
              required
            />
            <TextField
              id="theme-description"
              label="Description"
              variant="standard"
              value={props.enteredThemeDesc}
              onChange={props.themeDescChangeHandler}
              required
            />

            <CardActions sx={{ margin: "0% 40%" }}>
              {props.editing ? (
                <>
                  {props.isFormTouched && (
                    <Button
                      type="submit"
                      style={{ backgroundColor: "#03001C" }}
                    >
                      UPDATE
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#03001C", padding: "13% 0px" }}
                    onClick={props.cancelEditing}
                  >
                    CANCEL
                  </Button>
                </>
              ) : (
                <Button type="submit" style={{ backgroundColor: "#03001C" }}>
                  ADD
                </Button>
              )}
            </CardActions>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
};

export default AdminThemesForm;
