import { createClassName } from '@/utils/className';
import styles from './index.module.scss';

export function Header() {
  const cn = createClassName(styles, 'header');

  return (
    <div className={cn('')}>
      <div className={cn('wrapper')}>
        <a className={cn('logo')}>
          {/* <img src="/public/tmdb_header.svg" alt="" /> */}
        </a>
        <ul className={cn('list')}>
          <li className={cn('item')}>Фильмы</li>
          <li className={cn('item')}>Сериалы</li>
          <li className={cn('item')}>Люди</li>
          <li className={cn('item')}>Еще</li>
        </ul>
      </div>

      <div className={cn('wrapper')}>
        <div className={cn('language')}>RU</div>
        <div className={cn('user')}>L</div>
        <div className={cn('search')}></div>
      </div>
    </div>
  );
}
