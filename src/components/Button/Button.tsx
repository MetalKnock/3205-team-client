import { ReactNode } from 'react';
import './Button.scss';

interface ButtonProps {
  isSubmit?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
}

export default function Button({ isSubmit, className, onClick, disabled, children }: ButtonProps) {
  return (
    <button
      className={`button ${className}`}
      type={isSubmit ? 'submit' : 'button'}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  isSubmit: false,
  className: '',
  disabled: false,
  onClick: () => {},
};
