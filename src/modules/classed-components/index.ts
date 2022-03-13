import { elements } from "./html-elements";
import elementFactory from "./element-factory";
import { Classed } from "./types";

//@ts-ignore
const classed: Classed = {};

elements.forEach((element) => {
  Object.defineProperty(classed, element, { value: elementFactory(element) });
});

export default classed;
