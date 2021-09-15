/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import "bootstrap/dist/css/bootstrap.min.css";
import { CircularProgress, Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { makeStyles, TextField } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import Package from "../../component/card/Package";
import Venue from "../../component/card/Venue";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../../store/action/search";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown } from "react-bootstrap";
import { Person, AttachMoney, Layers, Room } from "@material-ui/icons";
import FormControl from "@material-ui/core/FormControl";
// import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { getLocation } from "../../store/action/config";
import ButtonSecondary from "../../component/buttons/ButtonSecondary";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "10px",
  },
  filter: {
    paddingTop: "10px",
    paddingBottom: "10px",
    borderTop: "#E1E1E1 2px solid",
    borderBottom: "#E1E1E1 2px solid",
    display: "flex",
    margin: "10px",
  },
  input: {
    width: "50px",
    marginLeft: "10px",
    marginRight: "10px",
  },
  inputPrice: {
    width: "80px",
    marginLeft: "10px",
    marginRight: "10px",
  },
  toggle: {
    width: "314px",
    textAlign: "start",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  togglepax: {
    width: "256px",
    textAlign: "start",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  form: {
    display: "flex",
    alignItems: "first baseline",
  },
}));

function SearchPage() {
  const { id } = useParams();
  const classes = useStyles();
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [minPax, setminPax] = useState("0");
  const [maxPax, setmaxPax] = useState("5000");
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("1000000000");
  const tipe = id === "packages" ? "packages" : "vendors";
  const [limit, setLimit] = useState(18);

  const loadMore = () => {
    setLimit(limit + items?.count);
  };
  // console.log("location", location);

  const { items, searchLoading } = useSelector(
    (state) => state?.search?.allSearchList
  );
  const { citys } = useSelector((state) => state?.config?.allLocationList);

  useEffect(() => {
    dispatch(
      getSearch(
        tipe,
        location,
        category,
        minPax,
        maxPax,
        minPrice,
        maxPrice,
        limit
      )
    );
  }, [
    dispatch,
    tipe,
    location,
    category,
    minPax,
    maxPax,
    minPrice,
    maxPrice,
    limit,
  ]);

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);
  console.log("items", items);

  return (
    <div id="searchpage">
      <Container className="pb-5 pt-5">
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" href={`/searchdetail/${id}`}>
            <p>search result</p>
          </Link>
          <Typography color="white">{id}</Typography>
        </Breadcrumbs>
        <h1
          className="pt-3 pb-3"
          style={{
            textTransform: "capitalize",
            fontFamily: "Cormorant",
            fontWeight: "700",
          }}
        >
          {id}
        </h1>
        <div className={classes.filter}>
          <div>
            {/* <DropdownType /> */}
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <Layers className="me-2" />
                All Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Container>
                  <FormControl component="fieldset">
                    <RadioGroup>
                      <FormControlLabel
                        control={
                          <Radio
                            color="primary"
                            value="venue"
                            onChange={(e) => {
                              {
                                e.target.checked
                                  ? setCategory(e.target.value)
                                  : setCategory("");
                              }
                            }}
                          />
                        }
                        label="Venue"
                      />
                      <FormControlLabel
                        control={
                          <Radio
                            color="primary"
                            value="organizer"
                            onChange={(e) => {
                              {
                                e.target.checked
                                  ? setCategory(e.target.value)
                                  : setCategory("");
                              }
                            }}
                          />
                        }
                        label="Wedding Organizer"
                      />
                    </RadioGroup>
                  </FormControl>
                </Container>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="ms-3">
            {/* <DropdownCity /> */}
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <Room className="me-2" />
                All Cities
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Container>
                  <FormControl component="fieldset">
                    <RadioGroup>
                      {citys?.locations?.map((data) => (
                        <FormControlLabel
                          style={{ textTransform: "capitalize" }}
                          control={
                            <Radio
                              color="primary"
                              value={data}
                              onChange={(e) => {
                                {
                                  e.target.checked
                                    ? setLocation(e.target.value)
                                    : setLocation("");
                                }
                              }}
                            />
                          }
                          label={data}
                        />
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <div className="d-flex flex-column"></div>
                </Container>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="ms-3">
            {/* <DropdownPax /> */}
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <Person className="me-2" />
                {minPax} - {maxPax} pax
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Container>
                  <form className="d-flex flex-column mt-2 mb-3">
                    <div className={classes.form}>
                      <TextField
                        id="standard-search"
                        type="number"
                        value={minPax}
                        onChange={(e) => {
                          setminPax(e.target.value);
                        }}
                        className={classes.input}
                      />
                      <p>pax</p>

                      <p className="ms-3 me-1">-</p>
                      <TextField
                        id="standard-search"
                        type="search"
                        value={maxPax}
                        onChange={(e) => {
                          setmaxPax(e.target.value);
                        }}
                        className={classes.input}
                      />
                      <p>pax</p>
                    </div>
                  </form>
                </Container>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="ms-3">
            {/* <DropdownPrice /> */}
            <Dropdown>
              <Dropdown.Toggle variant="light">
                <AttachMoney className="me-2" />
                {minPrice} - {maxPrice} pax
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Container>
                  <form className="d-flex flex-column mt-2 mb-3">
                    <div className={classes.form}>
                      <p>Rp.</p>
                      <TextField
                        id="standard-search"
                        type="search"
                        value={minPrice}
                        onChange={(e) => {
                          setMinPrice(e.target.value);
                        }}
                        className={classes.inputPrice}
                      />
                      <p className="ms-3 me-3">-</p>
                      <p>Rp.</p>
                      <TextField
                        id="standard-search"
                        type="search"
                        value={maxPrice}
                        onChange={(e) => {
                          setMaxPrice(e.target.value);
                        }}
                        className={classes.inputPrice}
                      />
                    </div>
                  </form>
                </Container>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="pt-5 pb-3">
          <h3>Showing All {items?.count} packages</h3>
        </div>
        {searchLoading ? (
          <div
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "center",
            }}
          >
            <CircularProgress color="secondary" />
          </div>
        ) : (
          <Grid container spacing={3}>
            {/* {tipe === "vendors"
            ? items?.data?.map((data, index) => (
                <Grid key={index} item xs={4}>
                  <Venue
                    image={data?.vendor_header}
                    title={data?.vendor_name}
                    location={data?.vendor_location}
                    rating={data?.vendor_rating}
                  />
                </Grid>
              ))
            : items?.data?.map((data, index) => (
                <Grid key={index} item xs={4}>
                  <Package
                    image={data?.package_album[1]}
                    title={data?.package_name}
                    price={data?.package_price}
                    data={data}
                    height="330px"
                  />
                </Grid>
              ))} */}

            {/* {tipe === "vendors"
            ? items?.data?.map((data, index) => (
                <Grid key={index} item xs={4}>
                  <Link
                    key={index}
                    to={`/vendor/${data.vendor_id}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <Venue
                      image={data?.vendor_header}
                      title={data?.vendor_name}
                      location={data?.vendor_location}
                      rating={data?.vendor_rating}
                    />
                  </Link>
                </Grid>
              ))
            : items?.data?.map((data, index) => (
                <Grid key={index} item xs={4}>
                  <Link
                    key={index}
                    to={`/package/${data.package_id}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                    }}
                  >
                    <Package
                      image={data?.package_album[1]}
                      title={data?.package_name}
                      price={data?.package_price}
                      data={data}
                      height="330px"
                    />
                  </Link>
                </Grid>
              ))} */}

            {items?.data?.map((data, index) => (
              <Grid key={index} item xs={4}>
                {tipe === "vendors" ? (
                  <Venue
                    link={`/vendor/${data.vendor_id}`}
                    image={data?.vendor_header}
                    title={data?.vendor_name}
                    location={data?.vendor_location}
                    rating={data?.vendor_rating}
                  />
                ) : (
                  <Package
                    link={`/package/${data.package_id}`}
                    image={data?.package_album[1]}
                    title={data?.package_name}
                    price={data?.package_price}
                    data={data}
                    height="330px"
                  />
                )}
              </Grid>
            ))}
          </Grid>
        )}
        {limit < items?.count ? (
          <div style={{ width: "100%", textAlign: "center", margin: "2rem" }}>
            <ButtonSecondary
              onClick={loadMore}
              width="18.714rem"
              content="See All"
            />
          </div>
        ) : (
          limit > items?.count && (
            <a href="#">
              <div
                style={{ width: "100%", textAlign: "center", margin: "2rem" }}
              >
                <ButtonSecondary width="18.714rem" content="Back to " />
              </div>
            </a>
          )
        )}
      </Container>
    </div>
  );
}

export default SearchPage;
