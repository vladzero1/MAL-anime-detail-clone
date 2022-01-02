import React from "react";
import IOLazyLoad from "../IOLazyLoad";
import { FeaturedArticlesProps } from "./index";
const FeaturedArticles = React.lazy(() => import("./index"));

const LazyFeaturedArticles: React.FC<FeaturedArticlesProps> = ({
  articles,
}: FeaturedArticlesProps) => (
  <IOLazyLoad Component={FeaturedArticles} articles={articles} Loader={null} />
);

export default LazyFeaturedArticles;
