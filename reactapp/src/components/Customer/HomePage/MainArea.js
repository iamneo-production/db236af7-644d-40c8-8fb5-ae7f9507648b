import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function MainArea() {
  const navigate = useNavigate();
  const [giftFromDb, setGiftFromDb] = useState([]);

  useEffect(() => {
    axios.get("/user/gift").then((res) => {
      setGiftFromDb(res.data);
    });
  }, [giftFromDb]);

  const selectGiftHandler = (event, giftItem) => {
    navigate("/user/placeorder", {
      state: giftItem,
    });
  };

  return (
    //Edited this return according to the GiftData from DB
    <Grid
      container
      spacing={0}
      sx={{
        width: "100%",
        marginTop: "70px",
        justifyContent: "center",
      }}
    >
      {giftFromDb.map((giftItem) => {
        return (
          <Grid item sx={{ margin: "15px" }} key={giftItem.giftId}>
            <Card sx={{ width: 345 }} elevation={4}>
              <CardActionArea data-testid={`grid${giftItem.giftId}`}>
                <CardMedia
                  component="img"
                  height="200"
                  image={giftItem.giftImageUrl}
                  alt={giftItem.giftName}
                  onClick={(event) => selectGiftHandler(event, giftItem)}
                />
                <CardContent>
                  <Grid container>
                    <Grid item xs={8}>
                      <Typography
                        variant="h6"
                        component="div"
                        data-testid="giftName"
                      >
                        {giftItem.giftName}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h6"
                        component="div"
                        align="right"
                        data-testid="giftPrice"
                      >
                        ₹{giftItem.giftPrice}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2" color="text.secondary">
                    {giftItem.giftDetails}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
