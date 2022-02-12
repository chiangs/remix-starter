// React
import React, { ButtonHTMLAttributes } from 'react';

/**
 * Should be extended by a common component.
 * Not to be exposed to routes as a standalone component.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    clickHandler: () => any;
}
export const Button: React.FC<ButtonProps> = ({ clickHandler, ...props }: ButtonProps) => (
    <button className="button" data-button type={props.type} {...props} onClick={clickHandler}>
        {props.children}
    </button>
);
