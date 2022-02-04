// React
import React, { ButtonHTMLAttributes } from 'react';
// Styles
import styles from './styles.css';

export const links = () => [{ rel: 'stylesheet', href: styles }];

/**
 * Should be extended by a common component.
 * Not to be exposed to routes as a standalone component.
 */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    clickHandler: () => any;
}
export const Button: React.FC<ButtonProps> = ({ clickHandler, ...props }: ButtonProps) => (
    <button className="button" data-button {...props} onClick={clickHandler}>
        {props.children}
    </button>
);
