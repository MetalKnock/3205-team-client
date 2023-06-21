import { ReactNode } from 'react';
import './InputContainer.scss';

interface InputContainerProps {
  className?: string;
  label: string;
  error: string | undefined;
  children: ReactNode;
}
export default function InputContainer({ className, label, error, children }: InputContainerProps) {
  return (
    <label className={`input-container ${className}`} htmlFor={label}>
      <p className='input-container__label'>{label}</p>
      {children}
      {error && <div className='input-container__error'>{error}</div>}
    </label>
  );
}

InputContainer.defaultProps = {
  className: '',
};
