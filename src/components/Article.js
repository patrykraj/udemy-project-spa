import React from "react";

const styles = {
  margin: "2rem 0"
};

const Article = ({ title, author, text }) => (
  <article style={styles}>
    <h3
      style={{
        marginBottom: 0
      }}
    >
      {title.toUpperCase()}
    </h3>
    <span
      style={{
        fontStyle: "italic",
        fontSize: 12
      }}
    >
      {author}
    </span>
    <p
      style={{
        margin: "5px 0"
      }}
    >
      {text}
    </p>
  </article>
);

export default Article;
