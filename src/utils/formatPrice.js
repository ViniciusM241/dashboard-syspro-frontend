import { currency } from "./masks";

export default function formatPrice(price) {
  if (isNaN(price)) return 'R$ 00,00';

  return `R$ ${currency(price)}`;
}
