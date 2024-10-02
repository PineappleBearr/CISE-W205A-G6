"use client";

import Navbar from "@/components/navbar";
import SearchResult from "@/components/searchresult";
import { fakeArticles } from "@/data/fakeArticles";
import { useState } from "react";

export default function Search() {

    const [searchQuery, setSearchQuery] = useState("");

    const filteredArticles = fakeArticles.filter(article =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.author.toLowerCase().includes(searchQuery.toLocaleLowerCase())
    );

    return (
        <div className="container">
            <h1 className="text-center mt-5">SPEED App</h1>
            <Navbar />
            <nav className="navbar">
                <div className="container d-flex justify-content-start m-5">
                    <h2 className="text-center mx-2">Search:</h2>
                    <input
                        placeholder="enter..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn btn-primary mx-2">Search</button>
                    <table className="table table-bordered table-striped m-5">
                        <thead className="thead-light">
                            <tr>
                                <th>ID:</th>
                                <th>Title:</th>
                                <th>Author:</th>
                                <th>Publish Date:</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredArticles.length > 0 ? (
                                filteredArticles.map((article) => (
                                    <SearchResult 
                                        key={article.id}
                                        id={article.id}
                                        title={article.title}
                                        author={article.author}
                                        publish_date={article.publish_date}
                                        />
                                )))
                                :
                                (
                                    <tr>
                                        <td colSpan={4}>No results found</td>
                                    </tr>
                                )}
                        </tbody>
                    </table>
                </div>
            </nav>
        </div>
    );
}