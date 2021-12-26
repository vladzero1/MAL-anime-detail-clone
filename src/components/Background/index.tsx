import React, { useState } from "react";
import { background } from "../../constant";
import { parseStringToHaveNewLine } from "../../helper/stringParser";
import { Wrapper } from "../Wrapper";
import styles from "./index.module.css";

interface AnimeBackgroundProps {}

export const AnimeBackground: React.FC<AnimeBackgroundProps> = () => {
  const [bgDescription] = useState(background);

  return (
    <Wrapper header={{ text: "Background", buttonText: "Edit" }}>
      <div className={styles.container}>
        {bgDescription ? (
          parseStringToHaveNewLine(bgDescription)
        ) : (
          <span>
            No background information has been added to this title. Help improve
            our database by adding background information here.
          </span>
        )}
      </div>
    </Wrapper>
  );
};
