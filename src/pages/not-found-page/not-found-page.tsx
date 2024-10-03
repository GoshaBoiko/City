import cn from 'classnames';
import HeaderMain from '../../components/header-main/header-main.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../types/app-route.enum.ts';
import cls from './not-found-page.module.scss';

export default function NotFoundPage(): JSX.Element {
  return (
    <div>
      <HeaderMain/>
      <main className={cn('page__error', [cls.mainPage])}>
        <p className={cls.title}>
          404 Not Found
        </p>
        <Link to={AppRoute.Main} className={cls.link}>
            Go to main page
        </Link>
      </main>
    </div>
  );
}
