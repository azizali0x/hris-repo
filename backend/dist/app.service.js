"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const goals_schemat_1 = require("./schemas/goals.schemat");
const user_schema_1 = require("./schemas/user.schema");
let AppService = class AppService {
    constructor(employeeModel, managerModel, goalModel, reviewModel) {
        this.employeeModel = employeeModel;
        this.managerModel = managerModel;
        this.goalModel = goalModel;
        this.reviewModel = reviewModel;
    }
    async createEmployee(data) {
        const user = await this.employeeModel.create(data);
        user.save();
        return user;
    }
    async createManager(data) {
        const user = await this.managerModel.create(data);
        user.save();
        return user;
    }
    async getEmployees() { }
    async getManagers() {
        const manager = await this.managerModel.find({});
        return manager;
    }
    async createGoal(data) {
        const goal = await this.goalModel.create(data);
        goal.save();
        return goal;
    }
    async getGoals(user) {
        const goals = await this.goalModel.find({ employee: user });
        return goals;
    }
    async createReview(data) {
        const review = await this.reviewModel.create(data);
        review.save();
        return review;
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.Employee.name)),
    __param(1, (0, mongoose_1.InjectModel)(user_schema_1.Manager.name)),
    __param(2, (0, mongoose_1.InjectModel)(goals_schemat_1.Goal.name)),
    __param(3, (0, mongoose_1.InjectModel)(goals_schemat_1.Review.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model,
        mongoose_2.Model])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map