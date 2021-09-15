import { all } from "@redux-saga/core/effects";
import {
  watchGetOrganizerHome,
  watchGetVenueHome,
  watchGetPackagesHome,
  watchGetVenueSearch,
  watchGetOrganizerSearch,
  watchGetPackageSearch,
} from "./package";
import {
  watchGetQuotationInbox,
  watchGetQuotationInboxDetail,
  watchGetQuotationSent,
  watchGetQuotationSentDetail,
} from "./quotation";
import { watchGetSearch } from "./search";
import { watchGetAllVendor, watchGetVendorHome } from "./vendor";
import {
  watchLogin,
  watchRegister,
  watchGetUser,
  watchUpdateProfile,
  watchOauthWithGoogle,
} from "./user";
import { watchPackageId, watchVendorId } from "./detail";
import { watchGetLocation } from "./config";
import { watchPostRequest } from "./request";
import { watchGetUserNotification, watchuserUpdateNotif } from "./notification";

export default function* rootSaga() {
  // function generator
  yield all([
    watchLogin(),
    watchRegister(),
    watchUpdateProfile(),
    watchGetVenueHome(),
    watchGetOrganizerHome(),
    watchGetPackagesHome(),
    watchGetVenueSearch(),
    watchGetOrganizerSearch(),
    watchGetPackageSearch(),
    watchGetAllVendor(),
    watchGetSearch(),
    watchGetUser(),
    watchPackageId(),
    watchVendorId(),
    watchGetQuotationInbox(),
    watchGetQuotationSent(),
    watchGetLocation(),
    watchPostRequest(),
    watchGetQuotationSentDetail(),
    watchGetVendorHome(),
    watchGetQuotationInboxDetail(),
    watchOauthWithGoogle(),
    watchGetUserNotification(),
    watchuserUpdateNotif(),
  ]);
}
