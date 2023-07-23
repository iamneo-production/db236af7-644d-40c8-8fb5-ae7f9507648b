import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DeleteIcon from "../../../assets/android-delete.png";
import EditIcon from "../../../assets/android-edit.svg";
import { IconButton } from "@mui/material";

export default function AdminThemesList(props) {
  return (
    <Box
      sx={{
        width: "max-content",
        bgcolor: "background.paper",
      }}
    >
      <nav>
        <List>
          {props.themesList.map((theme, index) => {
            return (
              <div key={theme.themeId}>
                <ListItem>
                  <ListItemText
                    primary={
                      <>
                        {`Theme Name: ${theme.themeName}`}
                        <br></br>
                        {`Theme Price: ₹${theme.themePrice}`}
                        <br></br>
                        {`Theme Description: ${theme.themeDetails}`}
                      </>
                    }
                  />
                  <IconButton
                    aria-label="edit"
                    onClick={() => props.onEditTheme(theme)}
                  >
                    <img
                      src={EditIcon}
                      style={{ color: "#03001C" }}
                      alt="edit-icon"
                    />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => props.onDeleteTheme(theme)}
                  >
                    <img src={DeleteIcon} alt="delete-icon" />
                  </IconButton>
                </ListItem>
                {index < props.themesList.length - 1 && (
                  <Divider sx={{ marginLeft: "3%" }} />
                )}
              </div>
            );
          })}
        </List>
      </nav>
    </Box>
  );
}
