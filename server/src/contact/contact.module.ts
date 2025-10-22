import { Module } from '@nestjs/common';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { Contact, ConatctSchema } from './schema/contact.schema';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Contact.name, schema: ConatctSchema}])
  ],
  controllers: [ContactController],
  providers: [ContactService],
})
export class ContactModule {}
