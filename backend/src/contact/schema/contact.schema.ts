import { Prop,  Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ConatctSchema = Contact & Document;

@Schema()
export class Contact {
  @Prop({required: true})
  name: string;
  
  @Prop({required: true})
  phone: string;

  @Prop({required: true})
  email: string;

  @Prop({required: true})
  message: string;
}

export const ConatctSchema = SchemaFactory.createForClass(Contact)