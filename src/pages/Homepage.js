/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ExploreBanner from "../component/banner/ExploreBanner";
import PackageBanner from "../component/banner/PackageBanner";
import MobileDownloadBanner from "../component/banner/MobileDownloadBanner";
import HomeHeaderBanner from "../component/banner/HomeHeaderBanner";
import HomeVenueBanner from "../component/banner/HomeVenueBanner";
import HomeVendorBanner from "../component/banner/HomeVendorBanner";
import VendorListBanner from "../component/banner/VendorListBanner";
import WebContentInfo from "../component/WebContentInfo";

const Homepage = () => {
  return (
    <div>
      <HomeHeaderBanner />
      <HomeVenueBanner />
      <ExploreBanner />
      <HomeVendorBanner />
      <VendorListBanner />
      <WebContentInfo />
      <PackageBanner />
      <MobileDownloadBanner />
    </div>
  );
};

export default Homepage;
