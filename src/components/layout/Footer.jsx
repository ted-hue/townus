const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="section-container">
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold">타운어스</h3>
          
          <div className="space-y-2 text-gray-300">
            <p>02-XXXX-XXXX</p>
            <p>info@townus.com</p>
            <p>평일 9:00~18:00</p>
          </div>

          <div className="pt-8 border-t border-gray-700 text-gray-400 text-sm">
            <p>© 2024 타운어스. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;