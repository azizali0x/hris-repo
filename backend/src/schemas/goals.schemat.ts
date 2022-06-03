import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type GoalDocument = Goal & Document;
@Schema()
export class Goal {
  @Prop()
  goal: string;

  @Prop()
  goalType: string;

  @Prop()
  keyPerformance?: string;

  @Prop()
  goalActivity?: string;

  @Prop()
  managerSupport?: string;

  @Prop()
  jobComment: string;

  @Prop()
  score: string;

  @Prop()
  rating: string;

  @Prop({ default: false })
  completed?: boolean;

  @Prop()
  employee: string;
}

export const GoalSchema = SchemaFactory.createForClass(Goal);

export type ReviewDocument = Review & Document;

@Schema()
export class Review {
  @Prop()
  message: string;

  @Prop()
  employee: string;

  @Prop()
  manager: string;

  @Prop()
  goal: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);
