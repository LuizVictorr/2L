
import { FaFacebook, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-20 flex flex-col items-center text-center justify-center mt-5">
      <div className="flex mb-8">
        <a href="https://wa.me/3496450291" target="_blank" rel="noopener noreferrer" className="text-white mr-4">
          <FaWhatsapp className="text-2xl" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61556964015593" target="_blank" rel="noopener noreferrer" className="text-white mr-4">
          <FaFacebook className="text-2xl" />
        </a>
        <a href="https://www.instagram.com/dynamicmight?igsh=ZmF2Z2M0cTZ1ZG90" target="_blank" rel="noopener noreferrer" className="text-white mr-4">
          <FaInstagram className="text-2xl" />
        </a>
      </div>
      <div className="text-sm">
        <p className="mb-2">Double L © 2024. Todos os direitos reservados.</p>
        <p>
          <a href="/termos" className="text-white underline">Termos de Uso</a> |{' '}
          <a href="/politicas" className="text-white underline">Políticas de Privacidade</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;