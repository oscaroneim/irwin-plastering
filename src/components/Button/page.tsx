import { useRouter } from 'next/navigation';
import clsx from 'clsx';
import { useSelection } from '@/utils/SelectionContext';
import React from 'react';

type ButtonProp = {
  className?: string;
  type: 'HOME OWNER' | 'PRIVATE HOUSE' | 'COMMERCIAL PROPERTY' | '';
  children: React.ReactNode;
};

const Button = ({ className, type, children }: ButtonProp) => {
  const { setSelected } = useSelection();
  const router = useRouter();

  const handleButtonClick = () => {
    setSelected(type || '');
    router.push('/contact');
  };

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleButtonClick();
      }}
      className={clsx(
        'bg-lightblue text-white font-bold px-6 py-4 rounded-sm hover:bg-darkblue',
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
