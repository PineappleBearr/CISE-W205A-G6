"use client";

import Navbar from "@/components/navbar";
import SearchResult from "@/components/searchresult";
import { fakeArticles } from "@/data/fakeArticles";
import { useState, useMemo } from "react";

export default function Search() {

    const [searchQuery, setSearchQuery] = useState("");
    const [sortFilter, setSortFilter] = useState("");
    const [sortDirection, setSortDirection] = useState("asc"); // 'asc' for ascending, 'desc' for descending

    const handleSort = (filter: string) => {
        if (sortFilter === filter) {
            // Toggle sort direction if the same filter is clicked
            setSortDirection(prevDirection => prevDirection === "asc" ? "desc" : "asc");
        } else {
            // Set new filter and default to ascending
            setSortFilter(filter);
            setSortDirection("asc");
        }
    };

    const filteredArticles = useMemo(() => {
        let articles = fakeArticles.filter(article =>
            article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.author.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // Sorting based on sortFilter and sortDirection
        if (sortFilter === "id") {
            articles = articles.sort((a, b) => sortDirection === "asc" ? a.id - b.id : b.id - a.id);
        } else if (sortFilter === "title") {
            articles = articles.sort((a, b) => sortDirection === "asc"
                ? a.title.localeCompare(b.title)
                : b.title.localeCompare(a.title));
        } else if (sortFilter === "author") {
            articles = articles.sort((a, b) => sortDirection === "asc"
                ? a.author.localeCompare(b.author)
                : b.author.localeCompare(a.author));
        } else if (sortFilter === "publish_date") {
            articles = articles.sort((a, b) => sortDirection === "asc"
                ? new Date(a.publish_date).getTime() - new Date(b.publish_date).getTime()
                : new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime());
        }

        return articles;
    }, [searchQuery, sortFilter, sortDirection]);

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
                                <th>
                                    <button className="btn btn-primary" onClick={() => handleSort("id")}>
                                        Id {sortFilter === "id" && (sortDirection === "asc" ? "↑" : "↓")}
                                    </button>
                                </th>
                                <th>
                                    <button className="btn btn-primary" onClick={() => handleSort("title")}>
                                        Title {sortFilter === "title" && (sortDirection === "asc" ? "↑" : "↓")}
                                    </button>
                                </th>
                                <th>
                                    <button className="btn btn-primary" onClick={() => handleSort("author")}>
                                        Author {sortFilter === "author" && (sortDirection === "asc" ? "↑" : "↓")}
                                    </button>
                                </th>
                                <th>
                                    <button className="btn btn-primary" onClick={() => handleSort("publish_date")}>
                                        Publish Date {sortFilter === "publish_date" && (sortDirection === "asc" ? "↑" : "↓")}
                                    </button>
                                </th>
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
                                ))
                            ) : (
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
