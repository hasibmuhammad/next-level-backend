export interface IGuardianInfo {
    fatherName: string;
    occupation: string;
    contactNo: string
}

export interface IStudentInfo {
    username: string;
    email: string;
    age: number;
    gender: "Male" | "Female";
    bloodGroup: "A+" | "B+" | "O+" | "AB+" | "AB-";
    presentAddress: string;
    permanentAddress: string;
    guaridanInfo: IGuardianInfo;
    contactNo: string;
    isActive: "active" | "inactive";
}