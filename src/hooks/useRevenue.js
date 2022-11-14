/** @format */

import { useEffect } from "react";
import { useState } from "react";

export default function useRevenue() {
  const [data, setData] = useState([]);
  const [day, setDay] = useState([]);
  const [max, setMax] = useState(31);

  const [value, setValue] = useState([]);

  data.forEach((item, index) => {
    day.push(item?.NGAY);
    value.push(item?.TIEN_NGAY);
  });

  useEffect(() => {
    if (data.length > 0) {
      setMax(data[data.length - 1].NGAY);
    }
  }, [data]);

  return {
    setData,
    day,
    value,
    max,
  };
}
