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
import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createUser(id: string, body: any): Promise<import("mongoose").Document<unknown, any, import("./schemas/user.schema").Employee> & import("./schemas/user.schema").Employee & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createGoal(body: any): Promise<import("mongoose").Document<unknown, any, import("./schemas/goals.schemat").Goal> & import("./schemas/goals.schemat").Goal & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAll(user: any): {
        goals: Promise<(import("mongoose").Document<unknown, any, import("./schemas/goals.schemat").Goal> & import("./schemas/goals.schemat").Goal & {
            _id: import("mongoose").Types.ObjectId;
        })[]>;
        managers: Promise<(import("mongoose").Document<unknown, any, import("./schemas/user.schema").Manager> & import("./schemas/user.schema").Manager & {
            _id: import("mongoose").Types.ObjectId;
        })[]>;
    };
    reviews(body: string): Promise<import("mongoose").Document<unknown, any, import("./schemas/goals.schemat").Review> & import("./schemas/goals.schemat").Review & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getReviews(user: any): any;
}
