import { useState, memo, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FiChevronLeft, FiChevronRight, FiX, FiMaximize2 } from 'react-icons/fi';
import './ImageGallery.css';

// Animation variants moved outside component
const lightboxVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
};

const contentVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    exit: { scale: 0.8, opacity: 0 }
};

function ImageGallery({ images, language }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openLightbox = useCallback((index) => {
        setSelectedIndex(index);
    }, []);

    const closeLightbox = useCallback(() => {
        setSelectedIndex(null);
    }, []);

    const goToPrevious = useCallback((e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, [images.length]);

    const goToNext = useCallback((e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, [images.length]);

    const handleDotClick = useCallback((e, index) => {
        e.stopPropagation();
        setSelectedIndex(index);
    }, []);

    if (!images || images.length === 0) {
        return (
            <div className="image-gallery--empty">
                <span>{language === 'tr' ? 'Görsel bulunmuyor' : 'No images available'}</span>
            </div>
        );
    }

    return (
        <>
            {/* Thumbnail Grid */}
            <div className="image-gallery">
                <div className="image-gallery__grid">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="image-gallery__item"
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
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedIndex !== null && (
                    <motion.div
                        className="lightbox"
                        variants={lightboxVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={closeLightbox}
                    >
                        <motion.div
                            className="lightbox__content"
                            variants={contentVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
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
                                            onClick={(e) => handleDotClick(e, index)}
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

export default memo(ImageGallery);
