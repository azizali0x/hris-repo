import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import {
  Employee,
  EmployeeSchema,
  Manager,
  ManagerSchema,
} from './schemas/user.schema';
import {
  Goal,
  GoalSchema,
  Review,
  ReviewSchema,
} from './schemas/goals.schemat';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/hris'),
    MongooseModule.forFeature([
      { name: Employee.name, schema: EmployeeSchema },
      { name: Manager.name, schema: ManagerSchema },
      { name: Goal.name, schema: GoalSchema },
      { name: Review.name, schema: ReviewSchema },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
