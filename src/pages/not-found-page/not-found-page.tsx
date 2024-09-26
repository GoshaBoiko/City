import HeaderMain from '../../components/header-main/header-main.tsx';

export default function NotFoundPage(): JSX.Element {
  return (
    <div className="page">
      <HeaderMain/>
      <main className="page__error">
        <a href="">
          <p>
            «404 Not Found»
          </p>
        </a>
      </main>
    </div>
  );
}
