import { Injectable } from '@nestjs/common';
import { ConatctSchema, Contact } from './schema/contact.schema';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
import { CreateContactDto } from './dto/create-contact.dto';

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name) private ContactModel: Model<ConatctSchema>,
  ){}
  
  public async findall(): Promise<Contact[]>{
    return this.ContactModel.find().exec();
  }

  public async create(createContactDto: CreateContactDto): Promise<Contact>{
    const contact = new this.ContactModel(createContactDto);
    return contact.save();
  }

}
