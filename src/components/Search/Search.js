"use client";
import React from "react";
import styles from "./search.module.css";
import SearchIcon from "../Icons/SearchIcon";
import CancelIcon from "../Icons/CancelIcon";

const cancelIconStyles = {
  position: "absolute",
  top: "50%",
  right: 36,
  zIndex: 9999,
  transform: "translateY(-50%)",
  cursor: "pointer",
};
function Search() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [isShownInput, setIsShownInput] = React.useState(false);

  const toggleIsShownInput = () => {
    setIsShownInput(!isShownInput);
  };
  const searchHandler = (event) => {
    event.preventDefault();
    console.log({ searchTerm });
  };
  return (
    <form
      id="search-form"
      className={styles.searchForm}
      onSubmit={searchHandler}
    >
      {isShownInput ? (
        <div className={styles.flex}>
          <input
            id="search"
            className={styles.searchInput}
            placeholder="Search here...."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <CancelIcon onClick={toggleIsShownInput} style={cancelIconStyles} />
          <button type="submit" className={styles.submitBtn}>
            {" "}
            <SearchIcon />
          </button>
        </div>
      ) : (
        <div className={styles.flex}>
          <span className={styles.seacrhText} onClick={toggleIsShownInput}>
            SEARCH
          </span>
          <button
            type="button"
            className={styles.searchBtn}
            onClick={toggleIsShownInput}
          >
            <SearchIcon fill={true} />
          </button>
        </div>
      )}
    </form>
  );
}

export default Search;
