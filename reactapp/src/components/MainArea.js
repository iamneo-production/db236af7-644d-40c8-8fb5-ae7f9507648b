import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import Gift1 from "../assets/gift-1.jpg";

export default function MainArea() {
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
      <Grid item sx={{ margin: "15px" }}>
        <Card sx={{ width: 345 }} elevation="4">
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={Gift1}
              alt="green iguana"
            />
            <CardContent>
              <Grid container>
                <Grid item xs={8}>
                  <Typography variant="h6" component="div">
                    Gift
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" component="div" align="right">
                    ₹300
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sx={{ margin: "15px" }}>
        <Card sx={{ width: 345 }} elevation="4">
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={Gift1}
              alt="green iguana"
            />
            <CardContent>
              <Grid container>
                <Grid item xs={8}>
                  <Typography variant="h6" component="div">
                    Gift
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" component="div" align="right">
                    ₹300
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sx={{ margin: "15px" }}>
        <Card sx={{ width: 345 }} elevation="4">
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={Gift1}
              alt="green iguana"
            />
            <CardContent>
              <Grid container>
                <Grid item xs={8}>
                  <Typography variant="h6" component="div">
                    Gift
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" component="div" align="right">
                    ₹300
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sx={{ margin: "15px" }}>
        <Card sx={{ width: 345 }} elevation="4">
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={Gift1}
              alt="green iguana"
            />
            <CardContent>
              <Grid container>
                <Grid item xs={8}>
                  <Typography variant="h6" component="div">
                    Gift
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" component="div" align="right">
                    ₹300
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sx={{ margin: "15px" }}>
        <Card sx={{ width: 345 }} elevation="4">
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={Gift1}
              alt="green iguana"
            />
            <CardContent>
              <Grid container>
                <Grid item xs={8}>
                  <Typography variant="h6" component="div">
                    Gift
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" component="div" align="right">
                    ₹300
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sx={{ margin: "15px" }}>
        <Card sx={{ width: 345 }} elevation="4">
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={Gift1}
              alt="green iguana"
            />
            <CardContent>
              <Grid container>
                <Grid item xs={8}>
                  <Typography variant="h6" component="div">
                    Gift
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" component="div" align="right">
                    ₹300
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sx={{ margin: "15px" }}>
        <Card sx={{ width: 345 }} elevation="4">
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={Gift1}
              alt="green iguana"
            />
            <CardContent>
              <Grid container>
                <Grid item xs={8}>
                  <Typography variant="h6" component="div">
                    Gift
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" component="div" align="right">
                    ₹300
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item sx={{ margin: "15px" }}>
        <Card sx={{ width: 345 }} elevation="4">
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={Gift1}
              alt="green iguana"
            />
            <CardContent>
              <Grid container>
                <Grid item xs={8}>
                  <Typography variant="h6" component="div">
                    Gift
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="h6" component="div" align="right">
                    ₹300
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      {/* <Card sx={{ maxWidth: 345 }} elevation="4">
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card> */}
    </Grid>
  );
}
