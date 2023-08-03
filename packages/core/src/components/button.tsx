import { PropsWithChildren } from "react";
type ButtonProps = PropsWithChildren<{
  /**
   * What happens when you click the button
   * @returns {void}
   */
  onClick: () => void;
}>;
export function Button(props: ButtonProps) {
  return <button onClick={props.onClick}>Some button</button>;
}
