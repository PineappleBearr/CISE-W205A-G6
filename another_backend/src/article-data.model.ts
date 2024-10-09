import { Schema } from 'mongoose';

export const articleSchema = new Schema({
    title: { type: String, required: true },
    authors: { type: String, required: true },
    claim: { type: String, required: true },
    doi: { type: String, required: true },
    pubDate: {type: Date},
    summary: { type: String, required: true },
});

export interface article {
    title: string;
    authors: string;
    claim: string;
    doi: string;
    pubDate: Date;
    summary: string;
}
