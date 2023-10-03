enum JobStatus {
    "Failed",
    "Pending",
    "Success"
}

interface Job {
    id: string;
    status: JobStatus;
    
}