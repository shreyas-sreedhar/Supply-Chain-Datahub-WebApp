    // pages/swagger.tsx
import React from 'react';
import SwaggerUIComponent from '../../components/ui/swaggerUI';

const SwaggerPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">API Documentation</h1>
      <SwaggerUIComponent />
    </div>
  );
};

export default SwaggerPage;
