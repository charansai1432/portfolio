import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import SocialLinks from './SocialLinks';

const ContactInfo = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold text-accent-500">Contact Information</h3>
      <div className="space-y-4">
        <motion.a 
          href="mailto:charansaichintala890@gmail.com"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 text-gray-400 hover:text-accent-500 transition-colors duration-200"
        >
          <Mail className="w-5 h-5" />
          <span>charansaichintala890@gmail.com</span>
        </motion.a>
        <motion.a 
          href="tel:+91832865705"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 text-gray-400 hover:text-accent-500 transition-colors duration-200"
        >
          <Phone className="w-5 h-5" />
          <span>+91 8328657095</span>
        </motion.a>
        <motion.div 
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-3 text-gray-400"
        >
          <MapPin className="w-5 h-5" />
          <span>Tirupati, India</span>
        </motion.div>
      </div>
      <SocialLinks />
    </div>
  );
};

export default ContactInfo;