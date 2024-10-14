import { Date } from 'mongoose';

//Jacob's
export class CreateArticleDto {
  title: string;
  authors: string;
  yearPub: number;
  claim: string;
  doi: string;
  summary: string;
  source: string;
  status: string;
  submitDate: Date;
  processDate: Date;
  sumRating: number;
  numRating: number;
}

//Nathan's
// export class CreateArticleDto {
//   title: string;
//   authors: string;
//   yearPub: number;
//   claim: string;
//   doi: string;
//   source: string;
//   status: string;
//   submitDate: Date;
//   processDate: Date;
//   sumRating: number;
//   numRating: number;
// }
