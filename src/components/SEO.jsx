import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Progetto Ponte Futuristico | Ingegneria Innovativa",
  description = "Un ponte rivoluzionario che combina design futuristico, sostenibilità e tecnologia avanzata.",
  image = "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&h=630&fit=crop",
  url = "https://tuo-sito.com",
  type = "website"
}) => {
  return (
    <Helmet>
      {/* Meta tags base */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="ponte futuristico, ingegneria civile, tecnologia avanzata, design innovativo" />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;