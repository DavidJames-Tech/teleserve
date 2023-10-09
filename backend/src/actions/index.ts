import Actions from "./ORM";
import UserModel from "../models/user";
import ServiceModel from "../models/service";

export const User = new Actions<UserModel>({tableName: "Users"});
export const Service = new Actions<ServiceModel>({tableName: "Services"});