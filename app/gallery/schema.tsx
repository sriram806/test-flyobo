import React, { FC } from 'react';

const GallerySchema: FC = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "FlyOBO Customer Memories Gallery",
        "description": "Browse through heartwarming customer memories from their incredible journeys with FlyOBO. See photos from various travel adventures.",
        "url": "https://flyobo.com/gallery",
        "image": [
            {
                "@type": "ImageObject",
                "url": "https://flyobo.com/images/gallery-banner.jpg",
                "width": "1200",
                "height": "630"
            }
        ],
        "publisher": {
            "@type": "Organization",
            "name": "FlyOBO",
            "logo": {
                "@type": "ImageObject",
                "url": "https://flyobo.com/images/icon.png"
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://flyobo.com/gallery"
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default GallerySchema; 