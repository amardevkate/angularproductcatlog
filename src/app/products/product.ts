
export interface IProduct {
  productId: number;
  productName: string;
  productCode: string;
  releaseDate: string;
  price: number;
  description: string;
  starRating: number;
  imageUrl: string;
  category: string;
  size: number;
  largePhoto: any;
  thumbNailPhoto: any;

  // calculateDiscount(percent: number): number;
}

export class product implements IProduct {
  constructor(public productId: number,
    public productName: string,
    public productCode: string,
    public releaseDate: string,
    public price: number,
    public description: string,
    public starRating: number,
    public imageUrl: string,
    public category: string,
    public size: number,
    public largePhoto: any,
    public thumbNailPhoto: any,
  ) { }
  calculateDiscount(percent: number): number {
    return this.price - (this.price * percent / 100);
  }

}
