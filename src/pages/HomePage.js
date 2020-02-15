import React from "react";

import Article from "../components/Article";

const articles = [
  {
    id: 0,
    title: "Czym jest teoria strun?",
    author: "Jan Nowak",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis vestibulum leo. Etiam efficitur dolor ac justo malesuada pulvinar. Suspendisse dapibus sapien in efficitur faucibus. Mauris blandit risus sit amet sem iaculis, a vulputate erat placerat. Integer eget consequat elit. Ut sed auctor augue. Vestibulum interdum consectetur facilisis. Proin augue elit, sollicitudin vitae nibh vitae, gravida lacinia tortor."
  },
  {
    id: 1,
    title: "Czym jest paradoks Fermiego?",
    author: "Janina Nowakowska",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis vestibulum leo. Etiam efficitur dolor ac justo malesuada pulvinar. Suspendisse dapibus sapien in efficitur faucibus. Mauris blandit risus sit amet sem iaculis, a vulputate erat placerat. Integer eget consequat elit. Ut sed auctor augue. Vestibulum interdum consectetur facilisis. Proin augue elit, sollicitudin vitae nibh vitae, gravida lacinia tortor."
  },
  {
    id: 2,
    title: "Ciemna materia i ciemna energia?",
    author: "Jan Kowalski",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis vestibulum leo. Etiam efficitur dolor ac justo malesuada pulvinar. Suspendisse dapibus sapien in efficitur faucibus. Mauris blandit risus sit amet sem iaculis, a vulputate erat placerat. Integer eget consequat elit. Ut sed auctor augue. Vestibulum interdum consectetur facilisis. Proin augue elit, sollicitudin vitae nibh vitae, gravida lacinia tortor."
  }
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));

  return (
    <div className="site-articles">
      <h1
        style={{
          marginTop: "1rem"
        }}
      >
        Dzień dobry! Najnowsze artykuły:
      </h1>
      {artList}
    </div>
  );
};

export default HomePage;
