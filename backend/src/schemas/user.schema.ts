import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);

export type ManagerDocument = Manager & Document;

@Schema()
export class Manager {
  @Prop()
  email: string;

  @Prop()
  password: string;
}

export const ManagerSchema = SchemaFactory.createForClass(Manager);
