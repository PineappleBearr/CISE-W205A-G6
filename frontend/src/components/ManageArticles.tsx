import React, { useState, useEffect } from "react";
import {  useRouter } from 'next/navigation';
import Link from "next/link";
import { Article } from "./Article";

interface IProp {
  article?: Article;
  index: Number;
}

function ManageArticles() {
  const [articles, setArticles] = useState<[Article?]>([]);

  const navigate = useRouter();

  useEffect(() => {
    fetch("http://localhost:8082/api/articles/pending")
      .then((res) => {
        return res.json();
      })
      .then((articles) => {
        setArticles(articles);
      })
      .catch((err) => {
        console.log("Error from manageArticles: " + err);
      });
  }, []);

  const ArticleItem = ({ article, index }: IProp) => {
    if (article == undefined) {
      return null;
    }

    const [art, setArticle] = useState<Article>(article);

    const authorList = art.authors.map((author) => <span>{author + ","}</span>);

    const Action = (status: string) => {
      art["status"] = status;
      art["processDate"] = new Date();
      fetch(`http://localhost:8082/api/articles/${art._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(art),
      })
        .then((res) => {
          setArticle(art);
          window.location.reload()
        })
        .catch((err) => {
          console.log("Error from  Article Item");
        });
    };

    return (
      <tr>
        <th>{index + ""}</th>
        <th>{art.title} </th>
        <th>{authorList}</th>
        <th>{art.yearPub + ''}</th>
        <th>
          <button
            className="btn btn-success mx-2"
            onClick={() => Action("ACCEPTED")}
          >
            Accept
          </button>
          <button
            className="btn btn-danger mx-2"
            onClick={() => Action("REJECTED")}
          >
            Reject
          </button>
        </th>
      </tr>
    );
  };

  const ArticleItemList = articles.map((article, key) => (
    <ArticleItem article={article} index={key} key={key}></ArticleItem>
  ));
  return (
    <div className="container">
      <h1 className="text-center mt-5">SPEED App</h1>
      <div className="d-flex justify-content-between align-items-center">
        <h2>Articles to Review</h2>
        <Link href="/history">
          <button className="btn btn-primary mx-2">View History</button>
        </Link>
      </div>
      <hr></hr>
      <nav className="navbar">
        <div className="container d-flex justify-content-start m-5">
          <table className="table table-bordered table-striped m-5">
            <thead className="thead-light">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Publish Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{ArticleItemList}</tbody>
          </table>
        </div>
      </nav>
    </div>
  );
}

export default ManageArticles;
