import { Date } from 'mongoose';

export class CreateArticleDto {
  title: string;
  authors: string[];
  yearPub: number;
  claim: string;
  doi: string;
  source: string;
  status: string;
  submitDate: Date;
  processDate: Date;
}
