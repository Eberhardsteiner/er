import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variante = 'primaer' | 'sekundaer' | 'gefaehrlich' | 'dezent';

const stile: Record<Variante, string> = {
  primaer:
    'bg-petrol-700 text-white hover:bg-petrol-500 disabled:bg-gray-300 disabled:text-gray-500',
  sekundaer:
    'bg-white text-petrol-700 border border-petrol-500 hover:bg-petrol-100 disabled:border-gray-300 disabled:text-gray-400',
  gefaehrlich: 'bg-fehler text-white hover:opacity-90 disabled:bg-gray-300 disabled:text-gray-500',
  dezent: 'bg-transparent text-petrol-700 hover:bg-petrol-100 disabled:text-gray-400',
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: Variante;
  children: ReactNode;
}

export function Button({ variante = 'primaer', children, className = '', ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed ${stile[variante]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
