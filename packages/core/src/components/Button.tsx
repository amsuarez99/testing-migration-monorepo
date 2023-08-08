import { PropsWithChildren } from "react";
type ButtonProps = PropsWithChildren<{
  /**
   * What happens when you click the button
   * @returns {void}
   */
  onClick: () => void;
}>;
export function Button(props: ButtonProps) {
  return (
    <button style={{ borderRadius: "3px 3px 3px 3px" }} onClick={props.onClick}>
      Other button
    </button>
  );
}
