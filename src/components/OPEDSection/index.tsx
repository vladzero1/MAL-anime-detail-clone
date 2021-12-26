import React from "react";
import { SongData } from "../../types";
import { ContentHeader } from "../ContentHeader";
import styles from "./index.module.css";

interface OPEDSectionProps {
  type: "Opening" | "Ending";
  songsList: SongData[];
}

const OPEDSection: React.FC<OPEDSectionProps> = ({ type, songsList }) => {
  return (
    <div>
      <ContentHeader text={`${type} Theme`} buttonText={"Edit"}></ContentHeader>
      <div className={styles.songsContainer}>
        {songsList.map(({ episode, singer, title }) => {
          const episodeDesc = episode ? `( eps ${episode})` : "";
          return (
            <div className={styles.songDescriptionContainer} key={episode}>
              <button>
                <img alt="play" style={{ width: "100%", height: "100%" }} />
              </button>
              <span>{`"${title}" by ${singer} ${episodeDesc}`}</span>
              <button>
                <img alt="play2" style={{ width: "100%", height: "100%" }} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OPEDSection;
