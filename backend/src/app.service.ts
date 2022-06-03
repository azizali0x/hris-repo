import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Goal, Review } from './schemas/goals.schemat';
import { Employee, Manager } from './schemas/user.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Employee.name) public employeeModel: Model<Employee>,
    @InjectModel(Manager.name) public managerModel: Model<Manager>,
    @InjectModel(Goal.name) public goalModel: Model<Goal>,
    @InjectModel(Review.name) public reviewModel: Model<Review>,
  ) {}

  async createEmployee(data: any) {
    const user = await this.employeeModel.create(data);
    user.save();
    return user;
  }

  async createManager(data: any) {
    const user = await this.managerModel.create(data);
    user.save();
    return user;
  }

  async getEmployees() {}

  async getManagers() {
    const manager = await this.managerModel.find({});
    return manager;
  }

  // NOTE: END of User
  async createGoal(data: any) {
    const goal = await this.goalModel.create(data);
    goal.save();
    return goal;
  }

  async getGoals(user: any) {
    const goals = await this.goalModel.find({ employee: user });
    return goals;
  }

  // create review
  async createReview(data: any) {
    const review = await this.reviewModel.create(data);
    review.save();
    return review;
  }
}
