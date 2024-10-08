import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, HydratedDocument } from 'mongoose';

export type BookDocument = HydratedDocument<Article>;

export enum ARTICLE_STATUS  {
  submited = 'submited',
  accepted = 'accepted',
  rejected = 'rejected',
}

@Schema()
export class Article {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  authors: string[];

  @Prop({ required: true })
  source: string;

  @Prop({type: Number})
  yearPub: Number;

  @Prop()
  doi: string;

  @Prop()
  claim: string;

  @Prop({type: String, enum: ARTICLE_STATUS, default: ARTICLE_STATUS.submited})
  status: ARTICLE_STATUS;

  @Prop({type: Date})
  submitDate: Date;

  @Prop({type: Date})
  processDate: Date

}

export const ArticleSchema = SchemaFactory.createForClass(Article);
