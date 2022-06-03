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
export declare type EmployeeDocument = Employee & Document;
export declare class Employee {
    email: string;
    password: string;
}
export declare const EmployeeSchema: import("mongoose").Schema<Employee, import("mongoose").Model<Employee, any, any, any>, {}, {}, any>;
export declare type ManagerDocument = Manager & Document;
export declare class Manager {
    email: string;
    password: string;
}
export declare const ManagerSchema: import("mongoose").Schema<Manager, import("mongoose").Model<Manager, any, any, any>, {}, {}, any>;
