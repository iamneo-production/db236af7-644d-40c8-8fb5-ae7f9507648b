import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MainArea() {
  const navigate = useNavigate();

  const giftItems = [
    {
      id: 1,
      name: "Wooden Frame",
      url: "https://www.incrediblegifts.in/wp-content/uploads/2022/07/b-3.jpg",
      price: 300,
    },
    {
      id: 2,
      name: "Black Frame",
      url: "https://5.imimg.com/data5/RP/LW/XM/ANDROID-102425636/prod-20200307-0215254369841583106068954-jpg-500x500.jpg",
      price: 200,
    },
    {
      id: 3,
      name: "Wall Frame",
      url: "https://imgcdn.floweraura.com/abstract-superdad-wall-frame-ven-cpz-ex03-a-A_0.jpg",
      price: 500,
    },
    {
      id: 4,
      name: "Night Light Frame",
      url: "https://m.media-amazon.com/images/I/610M4F9RtkL.jpg",
      price: 800,
    },
    {
      id: 5,
      name: "Circle Stand Frame",
      url: "https://www.incrediblegifts.in/wp-content/uploads/2022/08/e-1.jpg",
      price: 1000,
    },
    {
      id: 6,
      name: "Magic Mug",
      url: "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-birthday-sprinkles-personalized-magic-mug-19292-m.jpg",
      price: 50,
    },
    {
      id: 7,
      name: "Goals Diary",
      url: "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-personalized-focus-on-your-goals-diary-240477-m.jpg",
      price: 400,
    },
    {
      id: 8,
      name: "Bottle Lamp",
      url: "https://cdn.igp.com/f_auto,q_auto,t_pnopt12prodlp/products/p-beautiful-memories-personalized-bottle-lamp-111967-m.jpg",
      price: 900,
    },
  ];

  const selectGiftHandler = (event, giftItem) => {
    navigate("/placeorder", {
      state: giftItem,
    });
  };

  return (
    <Grid
      container
      spacing={0}
      sx={{
        width: "100%",
        marginTop: "70px",
        justifyContent: "center",
      }}
    >
      {giftItems.map((giftItem) => {
        return (
          <Grid item sx={{ margin: "15px" }} key={giftItem.id}>
            <Card sx={{ width: 345 }} elevation={4}>
              <CardActionArea data-testid={`grid${giftItem.id}`}>
                <CardMedia
                  component="img"
                  height="200"
                  image={giftItem.url}
                  alt={giftItem.name}
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
                        {giftItem.name}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography
                        variant="h6"
                        component="div"
                        align="right"
                        data-testid="giftPrice"
                      >
                        ₹{giftItem.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}
