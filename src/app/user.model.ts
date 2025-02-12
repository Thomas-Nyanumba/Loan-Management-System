// src/app/user.model.ts
export class User {
    constructor(
      public id: number,
      public name: string,
      public email: string,
      public role: string, // Admin or Manager
      public contact: string
    ) {}
  }
  