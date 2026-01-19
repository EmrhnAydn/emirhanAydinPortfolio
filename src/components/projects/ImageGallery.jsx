import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiChevronLeft, FiChevronRight, FiX, FiMaximize2 } from 'react-icons/fi';
import './ImageGallery.css';

export default function ImageGallery({ images, language }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    if (!images || images.length === 0) {
        return (
            <div className="image-gallery--empty">
                <span>{language === 'tr' ? 'Görsel bulunmuyor' : 'No images available'}</span>
            </div>
        );
    }

    const openLightbox = (index) => {
        setSelectedIndex(index);
    };

    const closeLightbox = () => {
        setSelectedIndex(null);
    };

    const goToPrevious = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <>
            {/* Thumbnail Grid */}
            <div className="image-gallery">
                <div className="image-gallery__grid">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className="image-gallery__item"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => openLightbox(index)}
                        >
                            <img
                                src={image}
                                alt={`Project screenshot ${index + 1}`}
                                loading="lazy"
                            />
                            <div className="image-gallery__overlay">
                                <FiMaximize2 />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        className="lightbox"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeLightbox}
                    >
                        <motion.div
                            className="lightbox__content"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="lightbox__close"
                                onClick={closeLightbox}
                                aria-label="Close"
                            >
                                <FiX />
                            </button>

                            {images.length > 1 && (
                                <>
                                    <button
                                        className="lightbox__nav lightbox__nav--prev"
                                        onClick={goToPrevious}
                                        aria-label="Previous"
                                    >
                                        <FiChevronLeft />
                                    </button>
                                    <button
                                        className="lightbox__nav lightbox__nav--next"
                                        onClick={goToNext}
                                        aria-label="Next"
                                    >
                                        <FiChevronRight />
                                    </button>
                                </>
                            )}

                            <img
                                src={images[selectedIndex]}
                                alt={`Project screenshot ${selectedIndex + 1}`}
                                className="lightbox__image"
                            />

                            {images.length > 1 && (
                                <div className="lightbox__dots">
                                    {images.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`lightbox__dot ${index === selectedIndex ? 'active' : ''}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedIndex(index);
                                            }}
                                            aria-label={`Go to image ${index + 1}`}
                                        />
                                    ))}
                                </div>
                            )}

                            <div className="lightbox__counter">
                                {selectedIndex + 1} / {images.length}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
