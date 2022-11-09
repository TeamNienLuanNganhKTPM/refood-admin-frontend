/** @format */

export default function formatStateUser(state) {
  switch (state) {
    case 0:
      return "Bị khóa";
    case 1:
      return "Đã duyệt";
    default:
      break;
  }
}
