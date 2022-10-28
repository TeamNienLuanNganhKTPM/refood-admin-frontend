/** @format */

export default function formatPrice(price) {
  const priceVN = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(price);
  return priceVN;
}
