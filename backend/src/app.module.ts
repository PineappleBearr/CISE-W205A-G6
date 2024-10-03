import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

// @Module({
//   imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.DB_URI)],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}

// remember to replace the <username> and <password> with your credentials
const DB_URI = 
'mongodb+srv://tyn6768:kJLpKFQHKVtmOyEz@cluster0.ic2irq9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// 'mongodb+srv://jacob0512:hunao512@cluster0.z77u7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
// DB_URI = 'mongodb+srv://tyn6768:kJLpKFQHKVtmOyEz@cluster0.ic2irq9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

// const DB_URI =
  // 'mongodb+srv://<username>:<password>@cluster0.ktxx5bo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

@Module({
  imports: [MongooseModule.forRoot(DB_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
