import React from "react";
import { Link } from "react-router-dom";

const ReactCard = ({
  imgSrc,
  cardImgClass,
  mainCardDiv,
  description,
  title,
  location,
  cardTitleDiv,
  cardLocationDiv,
  readMore,
  cardBodyDiv,
  pagePath,
  cardMainBody,
  cardActionTitle,
  cardActionBtn,
  cardPlaceDiv,
  place,
  cardDateDiv,
  date,
  cardTimeDiv,
  time,
  knowMoreBtnClass,
  cardDescription,
}) => {
  return (
    <div className={`card ${mainCardDiv}`}>
      <img
        src={imgSrc}
        className={`${cardImgClass} card-img-top cardImage`}
        alt="img"
      />

      <div className={`${cardMainBody}`}>
        <div className={`card-body ${cardBodyDiv}`}>
          {title && <h5 className={`card-title ${cardTitleDiv}`}>{title}</h5>}
          {place && <p className={`card-text ${cardPlaceDiv}`}>{place}</p>}
          {time && <p className={`card-text ${cardTimeDiv}`}>{time}</p>}
          {date && <p className={`card-text ${cardDateDiv}`}>{date}</p>}
          {location && (
            <p className={`card-text ${cardLocationDiv}`}>{location}</p>
          )}
          {description && (
            <p className={`card-text ${cardDescription}`}>{description}</p>
          )}

          {readMore && (
            <Link
              to={pagePath}
              className={`text-center d-flex justify-content-center ${knowMoreBtnClass}`}
            >
              Click to know more
            </Link>
          )}
        </div>
        <div className={`${cardActionBtn}`}>
          {cardActionTitle && (
            <div className={`card-body`} role="button">
              {cardActionTitle}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReactCard;
