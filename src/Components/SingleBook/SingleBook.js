import React from "react";
import './SingleBook.css';

const SingleBook = ({ book }) => {
  return (
    <main className="single-book-page">
      <img src={book.book_image} alt={`${book.title} Cover Image`}></img>
      <section className="sbook-info">
        <h2 className="sbook-title">{book.title}</h2>
        <h3 className="sbook-author">{book.contributor}</h3>
        <div className="line-break"></div>
        <section className="sbook-ranking">
          <h3>Currently #{book.rank}</h3>
          <h3>Previously #{book.rank_last_week}</h3>
        </section>
        <div className="line-break"></div>
        <p className="sbook-desc">{book.description}</p>
        <section className="sbook-buy-buttons">
          <a target="_blank" href={book.amazon_product_url} className="sbook-amazon fa-brands fa-amazon"></a>
          <a target="_blank" href={book.buy_links[1].url} className="sbook-apple fa-brands fa-apple"></a>
        </section>
      </section>
    </main>
  );
};

export default SingleBook;