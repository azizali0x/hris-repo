/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indizes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
import { Model } from 'mongoose';
import { Goal, Review } from './schemas/goals.schemat';
import { Employee, Manager } from './schemas/user.schema';
export declare class AppService {
    employeeModel: Model<Employee>;
    managerModel: Model<Manager>;
    goalModel: Model<Goal>;
    reviewModel: Model<Review>;
    constructor(employeeModel: Model<Employee>, managerModel: Model<Manager>, goalModel: Model<Goal>, reviewModel: Model<Review>);
    createEmployee(data: any): Promise<import("mongoose").Document<unknown, any, Employee> & Employee & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createManager(data: any): Promise<import("mongoose").Document<unknown, any, Manager> & Manager & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getEmployees(): Promise<void>;
    getManagers(): Promise<(import("mongoose").Document<unknown, any, Manager> & Manager & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createGoal(data: any): Promise<import("mongoose").Document<unknown, any, Goal> & Goal & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getGoals(user: any): Promise<(import("mongoose").Document<unknown, any, Goal> & Goal & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    createReview(data: any): Promise<import("mongoose").Document<unknown, any, Review> & Review & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
