import React from "react";
import { Button } from "../Button";
import styles from "./index.module.css";

type cardContent = {
  image: string | undefined; //assume image from link
  description: string;
};

interface ImageCardProps {
  contents: cardContent[];
}

export const ImageCard: React.FC<ImageCardProps> = ({ contents }) => {
  return (
    <div className={styles.cardContainer}>
      {contents.map(({ description, image }, index) => {
        return (
          <Button className={styles.card} key={`image${index}`}>
            <img alt="Thumbnail" src={image} className={styles.cardImage}></img>
            <span>{description}</span>
          </Button>
        );
      })}
    </div>
  );
};
