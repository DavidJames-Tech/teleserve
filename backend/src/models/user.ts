export default interface User {
    __id: PrimaryKey<string>;
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    job_title: string;
}
