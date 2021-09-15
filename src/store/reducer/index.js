import { combineReducers } from "redux";
import userData from "./user";
import packages from "./package";
import quotation from "./quotation";
import vendors from "./vendor";
import search from "./search";
import vendorDetail from "./vendordetail";
import packageDetail from "./packagedetail";
import config from "./config";
import requestData from "./request";
import notification from "./notification";

export default combineReducers({
  userData,
  packages,
  quotation,
  vendors,
  search,
  vendorDetail,
  packageDetail,
  config,
  requestData,
  notification,
});
