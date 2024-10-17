import { Date } from 'mongoose';
export declare class CreateArticleDto {
    title: string;
    authors: string[];
    yearPub: number;
    claim: string;
    doi: string;
    source: string;
    status: string;
    submitDate: Date;
    processDate: Date;
    sumRating: number;
    numRating: number;
}
