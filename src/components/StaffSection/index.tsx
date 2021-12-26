import React from "react";
import { staffData } from "../../types";
import { BackgroundColor, ColoredWrapper } from "../ColoredWrapper";
import { ContentHeader } from "../ContentHeader";
import styles from "./index.module.css";
interface StaffSectionProps {
  staff: staffData[];
}

export const StaffSection: React.FC<StaffSectionProps> = ({ staff }) => {
  return (
    <>
      <ContentHeader text={"Staff"} buttonText={"More staff"}></ContentHeader>
      <div style={{ display: "flex", paddingTop: "5px" }}>
        <div
          className={styles.staffList}
          style={{ width: `50%`, borderLeft: "1px solid #ebebeb" }}
        >
          {staff.map(
            ({ firstName, lastName, contributions, link, image }, index) => {
              const bgColor: BackgroundColor =
                index % 2 === 1 ? "Gray" : "White";
              return index >= Math.min(staff.length / 2, 5) ? null : (
                <ColoredWrapper bgColor={bgColor} key={`firstname${index}`}>
                  <div className={styles.rowContainer}>
                    <img src={image} alt={"x"} />
                    <div>
                      <h3 className={styles.h3}>
                        <a href={link}>
                          {lastName ? `${lastName}, ${firstName}` : firstName}
                        </a>
                      </h3>
                      <span>
                        {contributions.reduce((prevVal, currVal) => {
                          return prevVal.concat(`, ${currVal}`);
                        })}
                      </span>
                    </div>
                  </div>
                </ColoredWrapper>
              );
            }
          )}
        </div>
        <div className={styles.staffList} style={{ width: `50%` }}>
          {staff.map(
            ({ firstName, lastName, contributions, link, image }, index) => {
              const bgColor: BackgroundColor =
                index % 2 === 1 ? "Gray" : "White";
              return index < Math.min(staff.length / 2, 5) ||
                index > Math.min(staff.length / 2, 5) * 2 ? null : (
                //can be moved to a new component but need proper naming
                <ColoredWrapper bgColor={bgColor} key={`firstname${index}`}>
                  <div className={styles.rowContainer}>
                    <img src={image} alt={"x"} />
                    <div>
                      <h3 className={styles.h3}>
                        <a href={link}>
                          {lastName ? `${lastName}, ${firstName}` : firstName}
                        </a>
                      </h3>
                      <span>
                        {contributions.reduce((prevVal, currVal) => {
                          return prevVal.concat(`, ${currVal}`);
                        })}
                      </span>
                    </div>
                  </div>
                </ColoredWrapper>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};
