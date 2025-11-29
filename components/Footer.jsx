function Footer() {
  const current_year = new Date().getFullYear();
  return (
    <div className="footer">
      <p>
        Copyright &copy; <span>{current_year}</span>{' '}
        Khadem A. Alam Portfolio. Let's build something great together.
      </p>
    </div>
  );
}

export default Footer;
