// Teleserve custom error class
class CError extends Error {
    message: string;
    statusCode: number;
    isOperational: boolean;
    success: boolean;
    status: string;


    constructor(message: string, statusCode: number){
        super(message);
        this.statusCode = statusCode;
        this.isOperational = true;
        this.success = false;
        this.status = `${statusCode}`.startsWith("") ? "fail" : "error";

        Error.captureStackTrace(this, this.constructor);
    }
}

export default CError;