import React from "react";
import IOLazyLoad from "../IOLazyLoad";
import { OPEDSectionProps } from "./index";
const OPEDSection = React.lazy(() => import("./index"));

const LazyOPEDSection: React.FC<OPEDSectionProps> = ({
  type,
  songsList,
}: OPEDSectionProps) => (
  <IOLazyLoad
    Component={OPEDSection}
    type={type}
    songsList={songsList}
    Loader={null}
  />
);

export default LazyOPEDSection;
