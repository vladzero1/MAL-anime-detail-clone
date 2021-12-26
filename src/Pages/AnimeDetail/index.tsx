import React, { Suspense } from "react";
import { Button } from "../../components/Button";
import { ContentHeader } from "../../components/ContentHeader";
import { ImageCard } from "../../components/ImageCard";
import { InformationList } from "../../components/informationList";
import { Layout } from "../../components/Layout";
import {
  breadcrumbsNavList,
  buttonList,
  cardContent,
  characterList,
  infos,
  score,
  alternativesTitles,
  information,
  statistics,
  staffList,
  openingThemeList,
  endingThemeList,
  reviewsList,
  recommendationList,
  recentNewsList,
  forumDiscussionsList,
  featuredArticlesList,
} from "../../constant";
import styles from "./index.module.css";
import { AnimeBackground } from "../../components/Background";
import { Synopsis } from "../../components/Synopsis";
import { RelatedAnime } from "../../components/RelatedAnime";
import { SNSSection } from "../../components/SNSSection";
import { ExternalLinks } from "../../components/ExternalLinks";
import { BreadcrumbsNav } from "../../components/BreadcrumbsNav";
import { CharactersAndVASection } from "../../components/CharactersAndVASection";
import { StaffSection } from "../../components/StaffSection";
import { ReviewsSection } from "../../components/ReviewsSection";
import RecentForum from "../../components/RecentForum";
interface AnimeDetailProps {
  title: string;
}

const RecommendationsSections = React.lazy(
  () => import("../../components/RecommendationSections")
);
const OPEDSection = React.lazy(() => import("../../components/OPEDSection"));
const RecentNews = React.lazy(() => import("../../components/RecentNews"));
const FeaturedArticles = React.lazy(
  () => import("../../components/FeaturedArticles")
);

export const AnimeDetail: React.FC<AnimeDetailProps> = ({ title }) => (
  <Layout>
    <div className={styles["content-container"]}>
      <div className={`${styles.titleContainer} ${styles.spaceBetweenFlex}`}>
        <h1 className={styles.title}>{title}</h1>
        <Button>Edit</Button>
      </div>
      <div className={styles["detail-container"]}>
        <div className={styles["information-container"]}>
          <img style={{ width: "225px", height: "316px" }} alt="Anime Icon" />
          <div className={styles.animeProfileButtonContainer}>
            <Button>Add to My List</Button>
          </div>
          <div className={styles.animeProfileButtonContainer}>
            <Button>Add to Favorites</Button>
          </div>
          <SNSSection />
          <InformationList
            headerDescription={"Alternative Titles"}
            content={alternativesTitles}
          />
          <InformationList
            headerDescription={"Information"}
            content={information}
          />
          <InformationList
            headerDescription={"Statistics"}
            content={statistics}
          />
          <ExternalLinks />
        </div>
        <div className={styles["anime-related-container"]}>
          <div className={`${styles.flex} ${styles.underlineDiv}`}>
            {buttonList.map((text) => (
              <Button key={text} className={styles["nav-button"]}>
                {text}
              </Button>
            ))}
          </div>
          <BreadcrumbsNav navList={breadcrumbsNavList} />
          <div style={{ display: "flex" }}>
            <div style={{ width: "75%" }}>
              <div className={styles["all-scores-container"]}>
                <div className={styles.leftScoreContainer}>
                  <div className={styles["scores-container"]}>
                    <div className={styles.scoreLabelContainer}>
                      <label className={styles.scoreLabel}>SCORE</label>
                    </div>
                    <div className={styles.overall}>{score.overall}</div>
                    <div className={styles.users}>{score.users} users</div>
                  </div>
                </div>
                <div className={styles.rightScoreContainer}>
                  <div className={styles.otherScoresContainer}>
                    <label className={styles.rank}>
                      Ranked <b>#{score.rank}</b>
                    </label>
                    <label className={styles.popularity}>
                      Popularity <b>#{score.popularity}</b>
                    </label>
                    <label className={styles.members}>
                      members <b>#{score.members}</b>
                    </label>
                  </div>
                  <div className={styles.infoContainer}>
                    <Button
                      className={styles.infoButton}
                      style={{ borderRight: "1px solid #bebebe" }}
                    >
                      {infos?.season?.text}
                    </Button>
                    <Button
                      className={styles.infoButton}
                      style={{ borderRight: "1px solid #bebebe" }}
                    >
                      {infos?.category?.text}
                    </Button>
                    <Button className={styles.infoButton}>
                      {infos?.studio?.text}
                    </Button>
                  </div>
                </div>
              </div>
              <div className={styles.userFavoriteContainer}>
                <div></div>
                <Button style={{ margin: "0px 5px" }}>Add to List</Button>
                <select
                  className={styles.selectFavorite}
                  role="combobox"
                  aria-label="select Favorite"
                  aria-haspopup="grid"
                  style={{ margin: "0px 5px" }}
                >
                  <option
                    aria-label="lorem"
                    aria-selected="false"
                    aria-controls="lorem"
                  >
                    lorem
                  </option>
                </select>
                <div
                  className={styles.formUserEpisode}
                  style={{ margin: "0px 5px" }}
                >
                  Episode:
                  <div className={styles.selectedEpisode}>
                    0/12
                    <Button className={styles.circleButton}>+</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.iframeTeaserContainer}>
              <iframe className={styles.iframeTeaser} title="Anime Teaser" />
            </div>
          </div>
          <div className={styles.spaceBetweenFlex}>
            <span
              style={{
                color: "#b25959",
                fontFamily: "Verdana, Arial",
                fontSize: "10px",
              }}
            >
              * Your list is public by default.
            </span>
            <Button>More Videos</Button>
          </div>

          <Synopsis />
          <AnimeBackground />

          <ContentHeader
            text={"Visit MALxJapan -More than just anime-"}
            buttonText={"Visit MALxJapan"}
          ></ContentHeader>
          <ImageCard contents={cardContent} />

          <RelatedAnime />

          <CharactersAndVASection charactersList={characterList} />

          <StaffSection staff={staffList} />

          <ReviewsSection reviews={reviewsList} totalEpisode={12} />
          <Suspense fallback={<>loading...</>}>
            <div className={styles.flex}>
              <div style={{ width: "50%", paddingRight: "5px" }}>
                <OPEDSection type={"Opening"} songsList={openingThemeList} />
              </div>
              <div style={{ width: "50%", paddingLeft: "5px" }}>
                <OPEDSection type={"Ending"} songsList={endingThemeList} />
              </div>
            </div>

            <RecentNews news={recentNewsList} />
            <RecommendationsSections recommendationList={recommendationList} />
            <RecentForum dataList={forumDiscussionsList} />
            <FeaturedArticles articles={featuredArticlesList} />
          </Suspense>
        </div>
      </div>
    </div>
  </Layout>
);
