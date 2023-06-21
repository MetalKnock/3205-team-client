import { ReactNode } from 'react';

interface InputContainerProps {
  label: string;
  error: string | undefined;
  children: ReactNode;
}
export default function InputContainer({ label, error, children }: InputContainerProps) {
  return (
    <label htmlFor={label}>
      <p>{label}</p>
      {children}
      {error && <div>{error}</div>}
    </label>
  );
}
