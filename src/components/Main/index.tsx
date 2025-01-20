import { ReactNode } from 'react';
import { createClassName } from '@utils/className';

import styles from './index.module.scss';
import { Header } from '@components/Header';

interface MainProps {
  children: ReactNode;
}

export function Main({ children }: MainProps) {
  const cn = createClassName(styles, 'main');

  return (
    <div className={cn('')}>
      <Header />
      {children}
    </div>
  );
}
