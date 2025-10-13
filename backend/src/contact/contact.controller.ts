import { Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService:ContactService){}

  @Get()
  async findall(){
    return this.contactService.findall();
  }

  @Post()
  async create(){
    return this.contactService.create();
  } 

}
