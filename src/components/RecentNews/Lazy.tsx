import React from "react";
import IOLazyLoad from "../IOLazyLoad";
import { RecentNewsProps } from "./index";
const RecentNews = React.lazy(() => import("./index"));

const LazyRecentNews: React.FC<RecentNewsProps> = ({
  news,
}: RecentNewsProps) => (
  <IOLazyLoad Component={RecentNews} news={news} Loader={null} />
);

export default LazyRecentNews;
