import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxLoading, setLightboxLoading] = useState(false);

  const galleryItems = [
    { id: 1, src: './galleria/img-7.webp'},
    { id: 2, src: './galleria/img-1.webp'},
    { id: 3, src: './galleria/img-2.webp'},
    { id: 4, src: './galleria/img-4.webp'},
    { id: 5, src: './galleria/img-3.webp'},
    { id: 6, src: './galleria/img-6.webp'},
    { id: 7, src: './galleria/img-8.webp'},
    { id: 8, src: './galleria/img-5.webp'}
  ];

  const openLightbox = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
    setLightboxLoading(false);
  };

  const navigateImage = (direction) => {
    if (!selectedImage || lightboxLoading) return;
    
    setLightboxLoading(true);
    
    const currentIndex = galleryItems.findIndex(item => item.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryItems.length - 1;
    } else {
      newIndex = currentIndex < galleryItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    // Piccolo delay per evitare glitch visivi
    setTimeout(() => {
      setSelectedImage(galleryItems[newIndex]);
      setLightboxLoading(false);
    }, 100);
  };

  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title">Gallery</h2>
        
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div 
              key={item.id} 
              className="gallery-item"
              onClick={() => openLightbox(item)}
            >
              <div className="image-container">
                <img 
                  src={item.src} 
                  alt={item.title}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedImage && (
        <div className="lightbox">
          <div className="lightbox-backdrop" onClick={closeLightbox}></div>
          <div className="lightbox-content">
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            
            <button 
              className="lightbox-nav prev" 
              onClick={() => navigateImage('prev')}
              disabled={lightboxLoading}
            >
              ‹
            </button>
            
            <div className="lightbox-image-container">
              {lightboxLoading && (
                <div className="lightbox-loader">
                  <div className="loader-spinner"></div>
                </div>
              )}
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className={lightboxLoading ? 'loading' : ''}
              />
              <div className="lightbox-info">
                <h3>{selectedImage.title}</h3>
                <div className="image-counter">
                  {galleryItems.findIndex(item => item.id === selectedImage.id) + 1} / {galleryItems.length}
                </div>
              </div>
            </div>
            
            <button 
              className="lightbox-nav next" 
              onClick={() => navigateImage('next')}
              disabled={lightboxLoading}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;