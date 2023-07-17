import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import { useState } from "react";

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
              <>
                <ListItem key={theme.id}>
                  <ListItemText
                    primary={
                      <>
                        {`Theme Name: ${theme.name}`}
                        <br></br>
                        {`Theme Price: ₹${theme.price}`}
                        <br></br>
                        {`Theme Description: ${theme.description}`}
                      </>
                    }
                  />
                  <IconButton
                    aria-label="edit"
                    onClick={() => props.onEditTheme(theme)}
                  >
                    <EditIcon sx={{ color: "#03001C" }} />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => props.onDeleteTheme(theme)}
                  >
                    <DeleteIcon sx={{ color: "#03001C" }} />
                  </IconButton>
                </ListItem>
                {index < props.themesList.length - 1 && (
                  <Divider sx={{ marginLeft: "3%" }} />
                )}
              </>
            );
          })}
        </List>
      </nav>
    </Box>
  );
}
