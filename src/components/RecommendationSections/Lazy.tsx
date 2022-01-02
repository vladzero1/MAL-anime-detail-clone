import React from "react";
import IOLazyLoad from "../IOLazyLoad";
import { RecommendationSectionsProps } from "./index";
const RecommendationSections = React.lazy(() => import("./index"));

const LazyRecommendationSections: React.FC<RecommendationSectionsProps> = ({
  recommendationList,
}: RecommendationSectionsProps) => (
  <IOLazyLoad
    Component={RecommendationSections}
    recommendationList={recommendationList}
    Loader={null}
  />
);

export default LazyRecommendationSections;
