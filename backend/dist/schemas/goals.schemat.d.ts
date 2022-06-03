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
/// <reference types="mongoose" />
export declare type GoalDocument = Goal & Document;
export declare class Goal {
    goal: string;
    goalType: string;
    keyPerformance?: string;
    goalActivity?: string;
    managerSupport?: string;
    jobComment: string;
    score: string;
    rating: string;
    completed?: boolean;
    employee: string;
}
export declare const GoalSchema: import("mongoose").Schema<Goal, import("mongoose").Model<Goal, any, any, any>, {}, {}, any>;
export declare type ReviewDocument = Review & Document;
export declare class Review {
    message: string;
    employee: string;
    manager: string;
    goal: string;
}
export declare const ReviewSchema: import("mongoose").Schema<Review, import("mongoose").Model<Review, any, any, any>, {}, {}, any>;
