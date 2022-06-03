import { Model } from 'mongoose';
import { EmployeeDocument } from 'src/schemas/user.schema';
export declare class AuthService {
    private readonly Model;
    constructor(Model: Model<EmployeeDocument>);
    create(data: any): Promise<EmployeeDocument>;
}
