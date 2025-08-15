import {socialLinks} from '../data/data';
import {linkGroups} from '../data/data';
const Footer = () => {
  return (
    <div>
            <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className="text-2xl font-bold gradient-text">Nova</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              We build digital systems that work for you — even when you sleep.
              Turn your website into a money-making machine.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer"
                >
                  <span>{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link Groups */}
          {linkGroups.map((group, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{group.title}</h4>
              <ul className="space-y-2 text-gray-400">
                {group.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.url}
                      className="hover:text-orange-400 transition-colors"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2023 Nova Agency. All rights reserved.{" "}
            <span className="text-orange-400">Built to make you money.</span>
          </p>
        </div>
      </div>
            </footer>

    </div>
  )
}
export default Footer