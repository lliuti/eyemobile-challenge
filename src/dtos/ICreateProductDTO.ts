interface ICreateProductDTO {
  registered_by: string;
  name: string;
  price: number;
  amount?: number;
  image?: string;
}

export { ICreateProductDTO };
