import { Grid, Link, Typography } from "@mui/material";
import classes from "./Footer.module.css";

const FooterLinks = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        backgroundColor: "#03001C",
        padding: "30px 50px",
        color: "#F4D3D3",
      }}
    >
      <Grid item lg={2}>
        <Typography
          variant="body2"
          gutterBottom
          className={classes["footer-typography-heading"]}
          sx={{ margin: "15px 15px 15px 15px" }}
        >
          ABOUT
        </Typography>
        <Typography variant="caption" gutterBottom sx={{ margin: "15px" }}>
          <Link href="#" underline="hover" color="inherit">
            Contact Us
          </Link>
        </Typography>
        <br />
        <Typography variant="caption" gutterBottom sx={{ margin: "15px" }}>
          <Link href="#" underline="hover" color="inherit">
            About Us
          </Link>
        </Typography>
        <br />
        <Typography variant="caption" gutterBottom sx={{ margin: "15px" }}>
          <Link href="#" underline="hover" color="inherit">
            Careers
          </Link>
        </Typography>
        <br />
        <Typography variant="caption" gutterBottom sx={{ margin: "15px" }}>
          <Link href="#" underline="hover" color="inherit">
            Corporate Information
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <Typography
          variant="body2"
          className={classes["footer-typography-heading"]}
          gutterBottom
          sx={{ margin: "15px" }}
        >
          HELP
        </Typography>
        <Typography variant="caption" gutterBottom sx={{ margin: "15px" }}>
          <Link href="#" underline="hover" color="inherit">
            Payments
          </Link>
        </Typography>
        <br />
        <Typography variant="caption" gutterBottom sx={{ margin: "15px" }}>
          <Link href="#" underline="hover" color="inherit">
            Shipping
          </Link>
        </Typography>
        <br />
        <Typography variant="caption" gutterBottom sx={{ margin: "15px" }}>
          <Link href="#" underline="hover" color="inherit">
            Cancellation & Returns
          </Link>
        </Typography>
        <br />
        <Typography variant="caption" gutterBottom sx={{ margin: "15px" }}>
          <Link href="#" underline="hover" color="inherit">
            FAQ
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <Typography
          variant="body2"
          className={classes["footer-typography-heading"]}
          gutterBottom
          sx={{ margin: "15px" }}
        >
          CONSUMER POLICY
        </Typography>
        <Typography variant="caption" gutterBottom sx={{ margin: "15px" }}>
          <Link href="#" underline="hover" color="inherit">
            Return Policy
          </Link>
        </Typography>
        <br />
        <Typography variant="caption" gutterBottom sx={{ margin: "15px" }}>
          <Link href="#" underline="hover" color="inherit">
            Terms of Use
          </Link>
        </Typography>
        <br />
        <Typography variant="caption" gutterBottom sx={{ margin: "15px" }}>
          <Link href="#" underline="hover" color="inherit">
            Security
          </Link>
        </Typography>
        <br />
        <Typography variant="caption" gutterBottom sx={{ margin: "15px" }}>
          <Link href="#" underline="hover" color="inherit">
            Privacy
          </Link>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <Typography
          variant="body2"
          className={classes["footer-typography-heading"]}
          gutterBottom
          sx={{ margin: "15px" }}
        >
          SOCIAL
        </Typography>
        <Typography variant="caption" gutterBottom sx={{ margin: "15px" }}>
          <Link href="#" underline="hover" color="inherit">
            Facebook
          </Link>
        </Typography>
        <br />
        <Typography variant="caption" gutterBottom sx={{ margin: "15px" }}>
          <Link href="#" underline="hover" color="inherit">
            Twitter
          </Link>
        </Typography>
        <br />
        <Typography variant="caption" gutterBottom sx={{ margin: "15px" }}>
          <Link href="#" underline="hover" color="inherit">
            YouTube
          </Link>
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={2}
        sx={{ borderLeftStyle: "solid", borderWidth: "1px" }}
      >
        <Typography
          variant="body2"
          className={classes["footer-typography-heading"]}
          gutterBottom
          sx={{ margin: "15px" }}
        >
          Mail Us:
        </Typography>
        <Typography
          variant="caption"
          display="block"
          gutterBottom
          sx={{ margin: "15px" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
          tempus iaculis urna id. Nulla facilisi morbi tempus iaculis urna.
          Vestibulum mattis ullamcorper.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={2}>
        <Typography
          variant="body2"
          className={classes["footer-typography-heading"]}
          gutterBottom
          sx={{ margin: "15px" }}
        >
          Registered Office Address:
        </Typography>
        <Typography
          variant="caption"
          gutterBottom
          sx={{ margin: "15px" }}
          display="block"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
          tempus iaculis urna id. Nulla facilisi morbi tempus iaculis urna.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FooterLinks;
