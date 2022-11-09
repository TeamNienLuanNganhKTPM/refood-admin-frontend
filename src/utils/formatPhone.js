/** @format */

export default function formatPhone(phone) {
  const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const result = phone.match(regex);
  return result[1] + "-" + result[2] + "-" + result[3];
}
