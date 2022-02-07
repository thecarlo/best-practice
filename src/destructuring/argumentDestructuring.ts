import { Product } from '@interfaces/Product';

export const argumentDestructuring = ({ key }: Product): string => {
  return key;
};
