interface IServiceItem {
  name: string;
  price: number;
}

export interface IPrice {
  id: number;
  title: string;
  services: IServiceItem[];
}
