import { Schema } from 'mongoose';

/* Article attributes:
    Entered by submitter:
    - title: article title/name
    - authors: authors/writers of the article
    - claim: article's claim about Software Engineering practices
    - doi: article DOI
    - pubDate: date the article was published (eg 30/12/2010)
    - summary: short summary of the article's information

    Set by default by the backend
    - accepted*: status of the moderator. true/false - only accepted articles are displayed on the website
    - numRatings: number of ratings (from 1-5) submitted by other users 
    - sumRatings: sum of all ratings. Used to generate and display an average rating for each article
        e.g. numRatings = 7; sumRatings = 30; therefore average rating = 30/7 = 4.3/5.0 
    
    note: "accepted" is required but not included in the form because it is set to FALSE (in
    page.tsx) by default. Each article is initially NOT accepted until a moderator decides to accept it
*/
export const articleSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: String, required: true },
    claim: { type: String, required: true },
    doi: { type: String, required: true },
    pubDate: {type: Date},
    summary: { type: String, required: true },
    accepted: { type: Boolean, required: true },
    numRatings: { type: Number, required: true },
    sumRatings: { type: Number, required: true },
});

export interface article {
    title: string;
    authors: string;
    claim: string;
    doi: string;
    pubDate: Date;
    summary: string;
    accepted: boolean;
    numRatings: number;
    sumRatings: number;
}
