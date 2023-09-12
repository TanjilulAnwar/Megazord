export class Guest {
  constructor(
    public id: string,
    public firstGuest: string,
    public secondGuest: string,
    public message: string,
    public withFamily:boolean
  ) {}
}