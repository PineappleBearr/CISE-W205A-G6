import React from "react"

interface SearchResultProps {
    id: number;
    title: string;
    author: string;
    publish_date: Date;
}

export default function SearchResult({ id, title, author, publish_date } : SearchResultProps)
{
    return (
        <tr>
            <td>
                {id}
            </td>
            <td>
                {title}
            </td>
            <td>
                {author}
            </td>
            <td>
                {publish_date.toDateString()}
            </td>
        </tr>
    )
}