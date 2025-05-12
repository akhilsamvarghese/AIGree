import React, { useState } from 'react';
import { figmaClasses } from '@/lib/figma-classes';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Mock API call - replace with actual endpoint
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className={`${figmaClasses.card} relative w-full max-w-lg mx-4 p-8 bg-gradient-to-br from-purple-500/15 via-purple-400/5 to-transparent border border-purple-500/20 rounded-2xl shadow-xl backdrop-blur-xl animate-in fade-in duration-300`}>
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="text-center space-y-4">
          <h2 className={figmaClasses.headingCard}>
            Get Early Access to AIgree
          </h2>
          <p className={`${figmaClasses.paragraph} text-gray-400`}>
            Be among the first to experience the future of contract review. Sign up now and we'll notify you when we launch.
          </p>
        </div>

        {isSuccess ? (
          <div className="mt-8 text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className={`${figmaClasses.headingCard} text-green-400`}>
              Thank you for signing up!
            </h3>
            <p className={`${figmaClasses.paragraph} text-gray-400`}>
              We'll keep you updated on our launch.
            </p>
            <button
              onClick={onClose}
              className={`${figmaClasses.buttonSecondary} mt-4 w-full`}
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="w-full px-4 py-3 bg-white/5 border border-purple-500/20 rounded-xl focus:outline-none focus:border-purple-500/40 transition-colors duration-200 placeholder-gray-400 text-white"
              />
              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className={`${figmaClasses.buttonPrimary} w-full relative`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span className="ml-2">Signing up...</span>
                </div>
              ) : (
                'Sign up for Early Access'
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUpModal;