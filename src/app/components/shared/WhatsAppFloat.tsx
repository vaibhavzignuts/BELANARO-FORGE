'use client';

import { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

interface WhatsAppFloatProps {
  phoneNumber: string;
  message?: string;
}

const WhatsAppFloat = ({
  phoneNumber,
  message = "Hello! I'm interested in your forging products.",
}: WhatsAppFloatProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after a delay
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Show tooltip for first-time visitors
      const hasSeenTooltip = localStorage.getItem('whatsapp-tooltip-seen');
      if (!hasSeenTooltip) {
        setShowTooltip(true);
        localStorage.setItem('whatsapp-tooltip-seen', 'true');
        // Auto-hide tooltip after 5 seconds
        setTimeout(() => setShowTooltip(false), 5000);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    const formattedNumber = phoneNumber.replace(/[^0-9]/g, '');
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${formattedNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-4 animate-fade-in-up">
          <div className="relative bg-white text-steel-900 px-4 py-3 rounded-lg shadow-xl max-w-xs">
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute -top-2 -right-2 p-1 bg-steel-800 text-white rounded-full hover:bg-steel-700 transition-colors"
            >
              <X size={14} />
            </button>
            <p className="text-sm font-medium pr-4">
              Need help? Chat with us on WhatsApp! 💬
            </p>
            {/* Arrow */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleClick}
        className="group relative flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl hover:shadow-[#25D366]/50 transition-all duration-300 hover:scale-110 animate-float"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>

        {/* Icon */}
        <MessageCircle size={28} className="relative z-10" />

        {/* Notification Badge */}
        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold animate-pulse">
          1
        </span>
      </button>

      {/* Hover Text */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-steel-900 text-white px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
          Chat with us
        </div>
      </div>
    </div>
  );
};

export default WhatsAppFloat;
