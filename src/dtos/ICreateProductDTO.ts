interface ICreateProductDTO {
  registered_by: string;
  name: string;
  price: number;
  amount?: number;
}

export { ICreateProductDTO };
