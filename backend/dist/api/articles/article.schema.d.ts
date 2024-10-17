import { Date, HydratedDocument } from 'mongoose';
export type BookDocument = HydratedDocument<Article>;
export declare enum ARTICLE_STATUS {
    submited = "submited",
    accepted = "accepted",
    rejected = "rejected"
}
export declare class Article {
    title: string;
    authors: string[];
    source: string;
    yearPub: Number;
    doi: string;
    claim: string;
    status: ARTICLE_STATUS;
    submitDate: Date;
    processDate: Date;
    sumRating: Number;
    numRating: Number;
}
export declare const ArticleSchema: import("mongoose").Schema<Article, import("mongoose").Model<Article, any, any, any, import("mongoose").Document<unknown, any, Article> & Article & {
    _id: import("mongoose").Types.ObjectId;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Article, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Article>> & import("mongoose").FlatRecord<Article> & {
    _id: import("mongoose").Types.ObjectId;
}>;
