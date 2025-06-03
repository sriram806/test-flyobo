"use client";

import { Button } from '@/components/ui/button';
import { Image, X, ChevronLeft, ChevronRight, ZoomIn, Camera, Share2, Heart } from 'lucide-react';
import { galleryImages } from '@/data/gallery-images';
import Masonry from 'react-masonry-css';
import { useState } from 'react';
import Link from 'next/link';
import GallerySchema from './schema';

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [isZoomed, setIsZoomed] = useState(false);

    const breakpointColumns = {
        default: 4,
        1280: 3,
        1024: 3,
        768: 2,
        640: 1
    };

    const handleImageClick = (id: number) => {
        setSelectedImage(id);
        setIsZoomed(false);
    };

    const handleClose = () => {
        setSelectedImage(null);
        setIsZoomed(false);
    };

    const handlePrev = () => {
        if (selectedImage === null) return;
        setSelectedImage(prev => (prev === 1 ? galleryImages.length : prev! - 1));
        setIsZoomed(false);
    };

    const handleNext = () => {
        if (selectedImage === null) return;
        setSelectedImage(prev => (prev === galleryImages.length ? 1 : prev! + 1));
        setIsZoomed(false);
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (selectedImage === null) return;
        switch (e.key) {
            case 'Escape':
                handleClose();
                break;
            case 'ArrowLeft':
                handlePrev();
                break;
            case 'ArrowRight':
                handleNext();
                break;
        }
    };

    return (
        <>
            <GallerySchema />
            <div className="min-h-screen bg-white dark:bg-gray-900">
                {/* Hero Section */}
                <div className="relative bg-sky-500 dark:bg-black text-gray-900 dark:text-white py-20 overflow-hidden">
                    {/* Background Image Layer */}
                    <div className="absolute inset-0 bg-[url('/images/travel-bg.jpg')] bg-cover bg-center opacity-25"></div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-sky-100/80 dark:from-black/90 dark:to-black/70"></div>

                    {/* Content */}
                    <div className="relative z-10 container mx-auto px-4 text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-600 to-sky-900 animate-fade-in drop-shadow-md">
                            Customer Memories 📸
                        </h1>
                        <div className="flex justify-center">
                            <span className="h-1 w-28 bg-gradient-to-r from-sky-300 to-sky-600 rounded-full shadow-md"></span>
                        </div>
                        <p className="max-w-2xl mx-auto text-lg text-gray-800 dark:text-white/90 leading-relaxed animate-fade-in delay-200">
                            Take a look at the wonderful moments our customers have shared
                            <br />from their amazing journeys with us.
                        </p>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="container mx-auto px-4 py-16">
                    {/* Image Grid */}
                    <Masonry
                        breakpointCols={breakpointColumns}
                        className="flex -ml-4 w-auto"
                        columnClassName="pl-4 bg-clip-padding"
                    >
                        {galleryImages.map((image) => (
                            <div
                                key={image.id}
                                className="mb-4 group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
                                onClick={() => handleImageClick(image.id)}
                            >
                                <div className="relative">
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <p className="text-sm font-medium">{image.alt}</p>
                                        </div>
                                    </div>
                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <ZoomIn className="w-6 h-6 text-white drop-shadow-lg" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Masonry>

                    {/* Lightbox */}
                    {selectedImage !== null && (
                        <div
                            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center"
                            onClick={handleClose}
                            onKeyDown={handleKeyDown}
                            tabIndex={0}
                        >
                            <button
                                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                                onClick={handleClose}
                            >
                                <X className="w-8 h-8" />
                            </button>
                            <button
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrev();
                                }}
                            >
                                <ChevronLeft className="w-8 h-8" />
                            </button>
                            <button
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNext();
                                }}
                            >
                                <ChevronRight className="w-8 h-8" />
                            </button>
                            <div
                                className="relative max-w-7xl max-h-[90vh] mx-4"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={galleryImages[selectedImage - 1].src}
                                    alt={galleryImages[selectedImage - 1].alt}
                                    className={`max-w-full max-h-[90vh] object-contain transition-transform duration-300 ${isZoomed ? 'scale-150' : 'scale-100'
                                        }`}
                                    onClick={() => setIsZoomed(!isZoomed)}
                                />
                                <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                                    <p className="text-sm font-medium bg-black/50 inline-block px-4 py-2 rounded-full">
                                        {galleryImages[selectedImage - 1].alt}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* Bottom Section */}
                    <div className="mt-20 space-y-16">
                        {/* Share Your Memories Section */}
                        <div className="text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                                <Camera className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4">Share Your Memories</h2>
                            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                                Have amazing travel photos you'd like to share? Join our community and showcase your adventures with fellow travelers.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Button
                                    variant="default"
                                    size="lg"
                                    className="rounded-full"
                                    onClick={() => window.location.href = 'mailto:wecare@flyobo.com'}
                                >
                                    <Camera className="w-5 h-5 mr-2" />
                                    Share Your Photos
                                </Button>
                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="rounded-full"
                                    asChild
                                >
                                    <Link href="/contact">
                                        Contact Us
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Social Share Section */}
                        <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 md:p-12">
                            <div className="max-w-4xl mx-auto">
                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold mb-4">Follow Our Journey</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Stay connected with us on social media for more travel inspiration and updates.
                                    </p>
                                </div>
                                <div className="flex justify-center gap-6">
                                    <a
                                        href="https://www.facebook.com/flyobo/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                                    >
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.instagram.com/flyobo/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                                    >
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="#"
                                        className="w-12 h-12 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                                    >
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
} 