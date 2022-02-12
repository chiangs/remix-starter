// React
import React from 'react';
// Extended Button
import { Button, ButtonProps } from '../Button';

export interface ButtonPrimaryProps extends ButtonProps {
    disabled?: false;
    name?: string | undefined;
    type?: 'submit' | 'reset' | 'button' | undefined;
    value?: string | ReadonlyArray<string> | number | undefined;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = (props: ButtonPrimaryProps) => {
    const defaultProps: ButtonPrimaryProps = {
        ...props,
        disabled: false,
        type: 'button',
    };
    return <Button className="button" {...defaultProps} />;
};
