import { Grid, Typography } from "@mui/material";
// import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <>
      {/* <FooterLinks /> */}
      <Grid
      position="absolute"
      bottom="0"
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
            {/* <img src={GiftShopLogo} /> */}
            Gift Shop
          </Typography>
          <Typography variant="caption" gutterBottom sx={{ margin: "15px" }}>
            Copyright © 2023 All Rights Reserved
          </Typography>
        </Grid>
        <Grid item xs={4}>
          {/* <img
            src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg"
            className={classes["payment-methods-image"]}
            alt="payment-methods"
          /> */}
        </Grid>
      </Grid>
    </>
    // </Container>
  );
};
export default Footer;
