import { Injectable } from '@nestjs/common';
import { ConatctSchema, Contact } from './schema/contact.schema';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'

@Injectable()
export class ContactService {
  constructor(
    @InjectModel(Contact.name) private ContactModel: Model<ConatctSchema>,
  ){}
  
  public async findall(): Promise<Contact[]>{
    return this.ContactModel.find().exec();
  }

  public async create(): Promise<Contact>{
    const contact = new this.ContactModel();
    return contact.save();
  }

}
