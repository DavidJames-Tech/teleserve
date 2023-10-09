import User from "./user";

export default interface Service {
    __id: string;
    provider: User;
    posted_by: User;
    status: ServiceJobStatus;
    description: string;
    credit: number;
}