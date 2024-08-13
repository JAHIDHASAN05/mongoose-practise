export interface IGuardian {
  fatherName: string;
  fatherOcupation: string;
  fatherContackNo: string;
  motherName: string;
  motherOcupation: string;
  motherContackNo: string;
}

export interface IUserName {
  firstName: string;
  midlleName: string;
  lastName: string;
}

export interface ILocalGuardian {
  name: string;
  address: string;
  contackNo: string;
  ocupation: string;
}

export interface IStudent {
  id: string;
  name: IUserName;
  email: string;
  gender: "male" | "female";
  dateOfBirth?: string;
  bloodGroup?: string;
  contackNo: string;
  emergencyContack: string;
  presentAddress: string;
  permanentAddress: string;
  guardian: IGuardian;
  localGuardian: ILocalGuardian;
  profileImg?: string;
  isActive: "active" | "inactive";
}
