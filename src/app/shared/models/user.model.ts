import {
  AreaType,
  GenderType,
  UserType
} from '../types';

export class UserModel {

  public UID: string;
  public lastName: string;
  public phoneNumber?: string;
  public areas: AreaType[];
  public birthdate?: Date;
  public documentId?: string;
  public email: string;
  public emailVerified: boolean;
  public gender?: GenderType;
  public isApproved: boolean;
  public isPublic: boolean;
  public lawyerId?: string;
  public lawyerIdPicture?: string;
  public name: string;
  public photoURL: string;
  public type: UserType;

  constructor(data) {
    this.UID = data.uid;
    this.lastName = data.lastName || '';
    this.areas = data.areas || [];
    this.email = data.email;
    this.emailVerified = data.emailVerified;
    this.isApproved = data.isApproved || false;
    this.isPublic = data.isPublic || false;
    this.name = data.name || data.displayName;
    this.photoURL = data.photoURL;
    this.type = data.type  || UserType.COMMON;
    if (data.phoneNumber) { this.phoneNumber = data.phoneNumber; }
    if (data.birthdate) { this.birthdate = data.birthdate; }
    if (data.documentId) { this.documentId = data.documentId; }
    if (data.gender) { this.gender = data.gender; }
    if (data.lawyerId) { this.lawyerId = data.lawyerId; }
    if (data.lawyerIdPicture) { this.lawyerIdPicture = data.lawyerIdPicture; }
  }
}
