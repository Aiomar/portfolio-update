import { Body, Controller, Get, Post } from '@nestjs/common';
import { ContactService } from './contact.service';
import { CreateContactDto } from './dto/create-contact.dto';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService:ContactService){}

  @Get()
  public async findall(){
    return this.contactService.findall();
  }

  @Post()
  public async create(@Body() createContactDto:CreateContactDto){
    return this.contactService.create(createContactDto);
  } 

}
