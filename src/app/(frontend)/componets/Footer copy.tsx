"use client";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-slate-900 text-white py-10 mt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-semibold mb-3">About Us</h3>
          <p className="text-sm text-slate-300">
            We empower traders worldwide with transparent pricing and top-tier
            analytics.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact</h3>
          <p className="text-sm text-slate-300">Email: support@brand.com</p>
          <p className="text-sm text-slate-300">Phone: +1 234 567 890</p>
        </div>
      </div>
      <div className="text-center text-slate-500 text-sm mt-8">
        © {new Date().getFullYear()} Brand. All Rights Reserved.
      </div>
    </motion.footer>
  );
}
