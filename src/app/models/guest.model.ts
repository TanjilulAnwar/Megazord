export class Guest {
  constructor(
    public id: number,
    public firstGuest: string,
    public secondGuest: string,
    public message: string,
    public withFamily:boolean
  ) {}
}