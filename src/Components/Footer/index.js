import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='icons'>
        <a href='https://google.com'>
          <img src='/images/fb.png' alt='Facebook Organo'></img>
        </a>
        <a href='https://google.com'>
          <img src='/images/tw.png' alt='Twitter Organo'></img>
        </a>
        <a href='https://google.com'>
          <img src='/images/ig.png' alt='Instagram Organo'></img>
        </a>
      </section>
      <img
        src='/images/logo.png'
        alt='O rodapé principal da página do Organo'
      ></img>
      <p>Desenvolvido por Julio Neto.</p>
    </footer>
  );
};

export default Footer;
