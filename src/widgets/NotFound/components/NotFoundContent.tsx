"use client"
import React from 'react';
import { FaSadTear } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function NotFoundContent() {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 px-[5vw]">
      <div className="text-center">
        <FaSadTear className="text-6xl text-primary-600 mb-6" />
        <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          We can't seem to find the page you're looking for.
        </p>
        <button
          onClick={handleGoHome}
          className="px-6 py-3 text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-lg focus:outline-none"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}
