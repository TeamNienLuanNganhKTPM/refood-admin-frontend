/** @format */

export default function nextState(state) {
  switch (state) {
    case 0:
      return "Xác nhận đơn hàng";
    case 1:
      return "Xác nhận hoàn thành";
    default:
      break;
  }
}
