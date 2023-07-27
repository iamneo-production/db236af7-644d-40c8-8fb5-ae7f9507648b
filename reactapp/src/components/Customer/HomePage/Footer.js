import { Grid, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      {/* <FooterLinks /> */}
      <Grid
        container
        spacing={0}
        sx={{
          backgroundColor: "#03001C",
          color: "#F4D3D3",
          borderTopStyle: "solid",
          borderTopColor: "#b0a4a4",
          borderWidth: "1px",
        }}
      >
        <Grid item xs={8}>
          <Typography variant="h5" sx={{ margin: "15px 15px 0px 15px" }}>
            Gift Shop
          </Typography>
          <Typography variant="caption" gutterBottom sx={{ margin: "15px" }}>
            Copyright © 2023 All Rights Reserved
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default Footer;
