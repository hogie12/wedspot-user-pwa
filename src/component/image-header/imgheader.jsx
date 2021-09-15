import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    color: "white",
  },
  size: {
    color: "white",
    height: "500px",
  },
  tittle: {
    height: "75%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    position: "absolute",
    zIndex: "-1",
    width: "100vw",
    height: "500px",
    filter: "brightness(50%)",
  },
}));

export function ImageHeader({ type, name, header }) {
  const classes = useStyles();
  return (
    <div className={classes.size}>
      <img src={header} alt="header" className={classes.img} />
      <Container className="pt-3">
        <Breadcrumbs
          aria-label="breadcrumb"
          className={classes.bread}
          classes={{
            root: classes.root,
          }}
        >
          <Link color="inherit" href="/">
            <p>search result</p>
          </Link>
          <Link color="inherit" href={`/searchdetail/${type}`}>
            {type}
          </Link>
          <Typography color="white" className={classes.cormorant}>
            {name}
          </Typography>
        </Breadcrumbs>
      </Container>
      <div className={classes.tittle}>
        <Typography variant="h1" component="h2">
          {name}
        </Typography>
      </div>
    </div>
  );
}

export default ImageHeader;
