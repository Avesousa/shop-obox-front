import { Product } from './product.interface';
import { User } from './user.interface';

export interface Orden {
  id: number | null;
  pricezone: number;
  date: string;
  state: number;
  products: Product[] | [];
  user: User | null;
  total: number;
}
