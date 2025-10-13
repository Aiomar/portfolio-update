import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactModule } from './contact/contact.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    MongooseModule.forRoot(String(process.env.MONGO_DB_URI)), 
    ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService, ContactModule],
})
export class AppModule {}
