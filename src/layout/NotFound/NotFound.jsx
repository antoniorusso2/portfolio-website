import Header from '../../components/Header/Header';
import style from './NotFound.module.css';

export default function NotFound() {
  return (
    <>
      <Header />
      <main>
        <div className={style.container}>
          <h1 className={style.title}>404</h1>
          <p className={style.text}>Ops! La pagina richiesta non risulta disponibile...</p>
        </div>
      </main>
    </>
  );
}
