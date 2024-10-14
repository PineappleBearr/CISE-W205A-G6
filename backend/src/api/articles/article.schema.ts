import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Article>;

export enum ARTICLE_STATUS  {
  submitted = 'submitted',
  accepted = 'accepted',
  rejected = 'rejected',
}

@Schema()
export class Article {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  authors: string;

  @Prop({ required: true })
  source: string;

  @Prop({type: Number})
  yearPub: Number;

  @Prop()
  doi: string;

  @Prop()
  claim: string;

  @Prop({type: String, enum: ARTICLE_STATUS, default: ARTICLE_STATUS.submitted})
  status: ARTICLE_STATUS.submitted;

  @Prop({type: Date})
  submitDate: Date;

  @Prop({type: Date})
  processDate: Date

  @Prop()
  sumRating: Number

  @Prop()
  numRating: Number

  @Prop()
  summary: string;
}

export const ArticleSchema = SchemaFactory.createForClass(Article);
