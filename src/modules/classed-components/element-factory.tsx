/* global JSX HTMLElement */
import clsx from "clsx";
import React, { PropsWithChildren } from "react";

type TWClassNameCallback<P> = (props: PropsWithChildren<P>) => string;

export default function elementFactory<
  T extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
>(element: keyof JSX.IntrinsicElements) {
  return function <P = {}>(
    twClassName: string | TWClassNameCallback<P>
  ): React.FC<T> {
    if (typeof twClassName === "string") {
      return ({ children, className, ...props }) =>
        React.createElement(
          element,
          { className: clsx([twClassName, className]), ...props },
          children
        );
    }
    if (typeof twClassName === "function") {
      return ({ children, className, ...props }) => {
        //@ts-ignore
        const classNameFromProps = twClassName({ children, ...props });
        return React.createElement(
          element,
          {
            className: clsx([classNameFromProps, className]),
            ...props,
          },
          children
        );
      };
    }
    throw new TypeError(`Invalid type of twClassName : ${typeof twClassName}`);
  };
}

export type ElementFactory<
  T extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> = (
  element: keyof JSX.IntrinsicElements
) => <P = {}>(twClassName: string | TWClassNameCallback<P>) => React.FC<T>;
