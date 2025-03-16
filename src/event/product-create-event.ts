export class ProductCreateEvent {
  constructor(
    public readonly title: string,
    public readonly price: number,
    public readonly user: string,
    public readonly category: string,
    public readonly description: string,
  ) {}
}
