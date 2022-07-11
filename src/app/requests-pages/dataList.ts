
export class DataList {
  constructor(
      public id : number,
      public purposeOfReq : String,
      public typeOfReq : StreamPipeOptions,
      public environment : String,
      public artifact : String,
      public requestUser : String,
      public approvedUser : String,
      public deployTime : Date,

  ){}
}
