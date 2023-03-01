import React, { useMemo } from "react";
import cx from "classnames";

import { AUTHORS_TABLE } from "../../constants/authorsTable";

import Author1 from "../../assets/icons/author-1.png";
import Author2 from "../../assets/icons/author-2.png";
import Author3 from "../../assets/icons/author-3.png";
import Author4 from "../../assets/icons/author-4.png";
import Author5 from "../../assets/icons/author-5.png";
import Author6 from "../../assets/icons/author-6.png";

import "./index.scss";

const AuthorsTable = () => {
  const authorImages = useMemo(() => {
    return [Author1, Author2, Author3, Author4, Author5, Author6];
  }, []);
  return (
    <div className="authors-table">
      <h5 className="authors-table__heading">Authors Table</h5>
      <div className="authors-table__header">
        <span>Author</span>
        <span>Function</span>
        <span>Status</span>
        <span>Employed</span>
        <span></span>
      </div>
      {AUTHORS_TABLE.map((item, i) => (
        <div
          key={i}
          className={cx("authors-table__row", {
            "authors-table__row--last": AUTHORS_TABLE.length === i + 1,
          })}
        >
          <div className="authors-table__author-details">
            <img
              src={authorImages[i]}
              alt={item.author.name}
              className="authors-table__author-details__image"
            />
            <div className="authors-table__author-details__name">
              <strong>{item.author.name}</strong>
              <span>{item.author.email}</span>
            </div>
          </div>

          <div className="authors-table__function">
            <strong>{item.function.role}</strong>
            <span>{item.function.subText}</span>
          </div>

          <span
            className={cx("authors-table__status", {
              "authors-table__status--offline": !item.isOnline,
            })}
          >
            {item.isOnline ? "Online" : "Offline"}
          </span>

          <strong className="authors-table__date">{item.date}</strong>

          <span className="authors-table__edit">Edit</span>
        </div>
      ))}
    </div>
  );
};

export default AuthorsTable;
