import React from "react";
import { CharacterData, VAData } from "../../types";
import { BackgroundColor, ColoredWrapper } from "../ColoredWrapper";
import { ContentHeader } from "../ContentHeader";
import styles from "./index.module.css";
interface CharactersAndVASectionProps {
  charactersList: [CharacterData, VAData][];
}

export const CharactersAndVASection: React.FC<CharactersAndVASectionProps> = ({
  charactersList,
}) => {
  return (
    <>
      <ContentHeader
        text={"Characters & Voice Actors"}
        buttonText={"More characters"}
      ></ContentHeader>
      <div style={{ display: "flex", paddingTop: "5px" }}>
        <div className={styles.characterList} style={{ width: `50%` }}>
          {charactersList.map((character, index) => {
            const { firstName, lastName, type, link, image } = character[0];
            const {
              firstName: VAFirstName,
              lastName: VALastName,
              nationality: VANationality,
              link: VALink,
              image: VAImage,
            } = character[1];
            const backgroundStyle: BackgroundColor =
              index % 2 === 1 ? "Gray" : "White";
            return index >= Math.min(charactersList.length / 2, 5) ? null : (
              <ColoredWrapper
                bgColor={backgroundStyle}
                key={`firstname${index}`}
              >
                <div className={styles.leftContainer}>
                  <img
                    src={image}
                    alt={"x"}
                    style={{ width: "20%", maxWidth: "20%" }}
                  />
                  <div className={styles.verticalFlex}>
                    <h3 className={styles.h3Character}>
                      <a href={link} className="a">
                        {lastName ? `${lastName}, ${firstName}` : firstName}
                      </a>
                    </h3>
                    <span>{type}</span>
                  </div>
                </div>

                <div className={styles.rightContainer}>
                  <div
                    className={styles.verticalFlex}
                    style={{ width: "80%", textAlign: "right" }}
                  >
                    <a href={VALink} className="a">
                      {VALastName
                        ? `${VALastName}, ${VAFirstName}`
                        : VAFirstName}
                    </a>
                    <span>{VANationality}</span>
                  </div>
                  <img
                    src={VAImage}
                    alt={"x"}
                    style={{ width: "20%", maxWidth: "20%" }}
                  />
                </div>
              </ColoredWrapper>
            );
          })}
        </div>
        <div className={styles.characterList} style={{ width: `50%` }}>
          {charactersList.map((character, index) => {
            const { firstName, lastName, type, link, image } = character[0];
            const {
              firstName: VAFirstName,
              lastName: VALastName,
              nationality: VANationality,
              link: VALink,
              image: VAImage,
            } = character[1];
            const backgroundColor: BackgroundColor =
              index % 2 === 0 ? "Gray" : "White";
            return index < Math.min(charactersList.length / 2, 5) ||
              index > Math.min(charactersList.length / 2, 5) * 2 ? null : (
              <ColoredWrapper
                bgColor={backgroundColor}
                key={`firstname${index}`}
              >
                <div className={styles.leftContainer}>
                  <img src={image} alt={"x"} />
                  <div className={styles.verticalFlex}>
                    <h3 className={styles.h3Character}>
                      <a href={link} className="a">
                        {lastName ? `${lastName}, ${firstName}` : firstName}
                      </a>
                    </h3>
                    <span>{type}</span>
                  </div>
                </div>

                <div className={styles.rightContainer}>
                  <div
                    className={styles.verticalFlex}
                    style={{ width: "100%", textAlign: "right" }}
                  >
                    <a href={VALink} className="a">
                      {VALastName
                        ? `${VALastName}, ${VAFirstName}`
                        : VAFirstName}
                    </a>
                    <span>{VANationality}</span>
                  </div>
                  <img src={VAImage} alt={"x"} />
                </div>
              </ColoredWrapper>
            );
          })}
        </div>
      </div>
    </>
  );
};
