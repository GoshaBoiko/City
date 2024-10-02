import HeaderMain from '../../components/header-main/header-main.tsx';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../types/app-route.enum.ts';
import cls from './not-found-page.module.scss';

export default function NotFoundPage(): JSX.Element {
  return (
    <div>
      <HeaderMain/>
      <main className={`page__error ${cls.mainPage}`}>
        <p className={cls.title} onClick={(evt) => console.log(evt)}>
          404 Not Found
        </p>
        <Link to={AppRoute.Main} className={cls.link}>
          <button className={cls.link}>
            Go to main page
          </button>
        </Link>
      </main>
    </div>
  );
}
