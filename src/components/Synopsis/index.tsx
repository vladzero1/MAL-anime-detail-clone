import React, { useState } from "react";
import { synopsis } from "../../constant";
import { parseStringToHaveNewLine } from "../../helper/stringParser";
import { Wrapper } from "../Wrapper";
import styles from "./index.module.css";

interface SynopsisProps {}

export const Synopsis: React.FC<SynopsisProps> = () => {
  const [synopsisData] = useState(synopsis);
  return (
    <Wrapper header={{ text: "Synopsis", buttonText: "Edit" }}>
      <div className={styles.container}>
        {parseStringToHaveNewLine(synopsisData)}
      </div>
    </Wrapper>
  );
};
