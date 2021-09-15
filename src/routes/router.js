import { Switch, Route, useLocation } from "react-router-dom";
import Footer from "../component/footer/footer";
import Header from "../component/header/header";
import Homepage from "../pages/Homepage";
import HomeSearch from "../pages/search/search1";
import DetailPage from "../pages/vendor/detail";
import PackageDetail from "../pages/vendor/package";
import Sidebar from "../pages/profile/sidebar";
import SearchPage from "../pages/search/search2";
import ProfileHeader from "../pages/profile/header";
import Oauth from "../component/Oauth";
import NoresultPhone from "../component/noresult/NoresultPhone";

const Routers = () => {
  const location = useLocation();
  // const token = localStorage.getItem("token");
  // console.log("token", token);
  return (
    <>
      {location.pathname !== "/" &&
        location.pathname !== "/account" &&
        location.pathname !== "/account/notification" &&
        location.pathname !== "/account/quotation" &&
        location.pathname !== "/account/download" && <Header />}
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/search/:keyword/:location">
          <HomeSearch />
        </Route>
        <Route path="/search/:keyword">
          <HomeSearch />
        </Route>
        <Route path="/search">
          <HomeSearch />
        </Route>
        <Route path="/searchdetail/:id">
          <SearchPage />
        </Route>
        <Route path="/vendor/:id">
          <DetailPage />
        </Route>
        <Route path="/package/:id">
          <PackageDetail />
        </Route>
        <Route path="/account">
          <ProfileHeader />
          <Sidebar />
          {/* < SimpleTabs/> */}
          {/* <VerticalTabs /> */}
        </Route>
        <Route path="/signin">
          <Oauth />
        </Route>
        <Route path="*">
          <NoresultPhone
            title="404"
            description="the page you requested could not be found"
            titleButton="Back To Home"
            marginButton="1rem"
            margin="2rem 0"
            link="/"
          />
        </Route>
      </Switch>
      <Footer />
      {/* {location.pathname !== "/" ? <Footer /> : null} */}
    </>
  );
};

export default Routers;
