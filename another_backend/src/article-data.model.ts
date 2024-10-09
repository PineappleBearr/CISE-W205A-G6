import { Schema } from 'mongoose';

/*note: "accepted" is required but not included in the form because it is set to FALSE (in
page.tsx) by default. Each article is initially NOT accepted until a moderator decides to accept it*/
export const articleSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: String, required: true },
    claim: { type: String, required: true },
    doi: { type: String, required: true },
    pubDate: {type: Date},
    summary: { type: String, required: true },
    accepted: { type: Boolean, required: true },
});

export interface article {
    title: string;
    authors: string;
    claim: string;
    doi: string;
    pubDate: Date;
    summary: string;
    accepted: boolean;
}
