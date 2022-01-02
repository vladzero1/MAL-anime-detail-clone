import React from "react";
import IOLazyLoad from "../IOLazyLoad";
import { RecentForumProps } from "./index";
const RecentForum = React.lazy(() => import("./index"));

const LazyRecentForum: React.FC<RecentForumProps> = ({
  dataList,
}: RecentForumProps) => (
  <IOLazyLoad Component={RecentForum} dataList={dataList} Loader={null} />
);

export default LazyRecentForum;
