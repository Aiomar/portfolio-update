import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { env } from 'process';
import { ContactModule } from './contact/contact.module';

@Module({
  imports: [MongooseModule.forRoot(String(env.MONGO_DB_URI)), ContactModule],
  controllers: [AppController],
  providers: [AppService, ContactModule],
})
export class AppModule {}
