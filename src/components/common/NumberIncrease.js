/** @format */

import React from "react";
import { animated, useSpring } from "@react-spring/web";
import kFormat from "utils/kFormat";

const NumberIncrease = ({ numberData }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: numberData,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return <animated.div>{number.to((n) => kFormat(n))}</animated.div>;
};

export default NumberIncrease;
