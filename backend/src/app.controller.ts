import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // creating user
  @Post('/:id')
  createUser(@Param('id') id: string, @Body() body: any) {
    if (id == 'Employee') {
      const user = this.appService.createEmployee(body);
      return user;
    } else {
      const user = this.appService.createManager(body);
      return user;
    }
  }

  // add-goals
  @Post('employee/add-goal')
  createGoal(@Body() body: any) {
    const goal = this.appService.createGoal(body);
    return goal;
  }

  // get all goal for user
  @Get('employee/goals/:user')
  getAll(@Param('user') user: any) {
    const goals = this.appService.getGoals(user);
    const managers = this.appService.getManagers();
    return {
      goals,
      managers,
    };
  }

  @Post('manager/reviews')
  reviews(@Body() body: string) {
    const review = this.appService.createReview(body);
    return review;
  }

  @Get('employee/reviews/:user')
  getReviews(@Param('user') user: any) {
    return this.appService.getReview(user);
  }
}
