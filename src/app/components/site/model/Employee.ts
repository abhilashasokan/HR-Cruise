export type Employee = {
  id?: string;
  employeeId: string;
  joiningDate: Date;
  name: Name;
  address: Address;
  employmentDetails: employmentDetails;
  personalDetails: personalDetails;
  leaveDetails: leaveDetails;
};

type Name = {
  firstName: string;
  lastName: string;
  salutation: string;
};

type Address = {
  streetAddress1: string;
  streetAddress2: string;
  city: string;
  state: string;
  country: string;
  pinCode: string;
};

type employmentDetails = {
  designation: string;
  dateOfJoining: Date;
  dateOfReleaving: Date;
  compensationDetails: compensationDetails;
};

type compensationDetails = {
  pan: string;
  bankName: string;
  accountNumber: number;
  payDate: Date;
  basicPay: number;
  hra: number;
  conveyance: number;
  specialAllowance: number;
  grossSalary: number;
  tds: number;
  totalDeduction: number;
  grossSalaryInWords: number;
};

type personalDetails = {
  dob: Date;
  pan: string;
  nameOfFather: Name;
};

type leaveDetails = {
  leaveBalance: number;
  leaveTaken: number;
};

// {
//     "id" : "5c9370af6851415a84d58bc3",
//     "name" : {
//       "firstName" : "Abhilash",
//       "lastName" : "Asokan",
//       "salutation" : "Mr",
//       "content" : [ ],
//       "links" : [ ]
//     },
//     "employeeId" : "1002",
//     "joiningDate" : null,
//     "address" : {
//       "streetAddress1" : "Street address 1",
//       "streetAddress2" : "Street address 2",
//       "city" : "City",
//       "state" : null,
//       "country" : null,
//       "pinCode" : "680671",
//       "content" : [ ],
//       "links" : [ ]
//     },
//     "employmentDetails" : {
//       "designation" : null,
//       "dateOfJoining" : "03/01/2019",
//       "dateOfReleaving" : null,
//       "compensationDetails" : {
//         "pan" : "SAWE6465",
//         "bankName" : "Bank name",
//         "accountNumber" : 113123213,
//         "payDate" : "03/29/2019",
//         "basicPay" : 20000,
//         "hra" : 2000,
//         "conveyance" : 1000,
//         "specialAllowance" : 1000,
//         "grossSalary" : 24000,
//         "tds" : 1500,
//         "totalDeduction" : 1500,
//         "grossSalaryInWords" : "twenty-four thousand ",
//         "content" : [ ],
//         "links" : [ ]
//       },
//       "content" : [ ],
//       "links" : [ ]
//     },
//     "personalDetails" : {
//       "dob" : "03/28/2019",
//       "nameOfFather" : {
//         "firstName" : "Asokan",
//         "lastName" : null,
//         "salutation" : "Mr",
//         "content" : [ ],
//         "links" : [ ]
//       },
//       "pan" : null,
//       "content" : [ ],
//       "links" : [ ]
//     },
//     "leaveDetails" : {
//       "leaveBalance" : 14,
//       "leaveTaken" : 2,
//       "content" : [ ],
//       "links" : [ ]
//     }
//   }
