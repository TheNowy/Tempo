import scss from './Footer.module.scss'

export const Footer = () => {
  return (
    <div>
      <footer>
        <div className={scss.footer_cont}>
          <h1>© 2023 CVA</h1>
        </div>
      </footer>
    </div>
  );
};
