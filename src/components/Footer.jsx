import '../estilos/footer.css';

function Footer() {

  return (

    <footer>

      <p>
        <strong>Ljubav</strong> · El amor se sirve en taza
        &nbsp;·&nbsp;
        Arcos 3805, Núñez, CABA
        &nbsp;
        <span className="footer-heart">
          ♥
        </span>
      </p>


      <p>
        · Desarrollado por{" "}
        <a 
          href="https://www.linkedin.com/in/dante-finci-5058b7216/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dante Finci
        </a>
      </p>

    </footer>

  );

}


export default Footer;