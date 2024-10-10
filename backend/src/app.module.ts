import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ArticleModule } from './api/articles/article.module'

// @Module({
//   imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.DB_URI)],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}



@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}),
     MongooseModule.forRoot(process.env.DB_URI),
      ArticleModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
