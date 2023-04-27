const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="py-6 text-center text-sm text-gray-500">
      <span className="mr-2 text-lg font-bold text-gray-900 dark:text-gray-100">
        ChungNYCU
      </span>
      &copy;{year} All Rights Reversed
    </footer>
  );
};
export default Footer;
