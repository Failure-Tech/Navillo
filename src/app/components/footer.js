import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#1E1E1E] to-[#0f0f0f] text-white px-6 py-16 mt-0">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-5">
                      <div className="flex items-center space-x-2">
                        <Image 
                          src="/1_final_logo_white_w_square.svg"
                          alt="navillo logo"
                          width={100}
                          height={100}
                        />
                      </div>
                      <p className="font-inter text-sm text-gray-400 leading-relaxed">
                        Building the future of assistive technology, one step at a time.
                      </p>
                    </div>
        
                    <div>
                      <h3 className="font-inter font-medium mb-5 text-lg">Product</h3>
                      <ul className="space-y-3 font-inter text-sm">
                        <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">navillo</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Features</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Pricing</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Documentation</a></li>
                      </ul>
                    </div>
        
                    <div>
                      <h3 className="font-inter font-semibold mb-5 text-lg">Company</h3>
                      <ul className="space-y-3 font-inter text-sm">
                        <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">About</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Vision</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Blog</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Careers</a></li>
                      </ul>
                    </div>
        
                    <div>
                      <h3 className="font-inter font-semibold mb-5 text-lg">Legal</h3>
                      <ul className="space-y-3 font-inter text-sm">
                        <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Privacy Policy</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Terms of Service</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Security</a></li>
                        <li><a href="#" className="text-gray-400 hover:text-[#C45816] transition-colors duration-300">Contact</a></li>
                      </ul>
                    </div>
                  </div>
        
                  <div className="border-t border-gray-800 mt-12 pt-10 text-center">
                    <p className="font-inter text-sm text-gray-500">
                      © 2026 navillo Labs. All rights reserved.
                    </p>
                  </div>
                </div>
              </footer>
    )
}

export default Footer;