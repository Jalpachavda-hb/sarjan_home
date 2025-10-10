import React from 'react';
import { useLoading } from '../../contexts/LoadingContext';
import './Loader.css';

const Loader = () => {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="loader-container">
      <div className="loader-overlay"></div>
      <div className="loader-spinner">
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default Loader;