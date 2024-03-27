export interface ITour {
  name: string;
  price: number;
  priceDiscount: number;
  duration: number;
  maxGroupSize: number;
  difficulty: string;
  ratings: {
    average: number;
    count: number;
  };
  summary: string;
  description: string;
  imageCover: string;
  images: string[];
  startDates: Date[];
  createdAt: Date;
}

export interface IUser {
  name: string;
  email: string;
  password: string;
}
