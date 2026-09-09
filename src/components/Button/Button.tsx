import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  disabled?: boolean;
}

export function Button({ children, disabled }: ButtonProps) {
  return (
    <button
      disabled={disabled}
      className="h-12 w-full rounded-lg bg-[#F9C681] px-4 text-center text-base font-medium text-[#004587] transition hover:opacity-90 disabled:opacity-50"
    >
      {children}
    </button>
  );
}
