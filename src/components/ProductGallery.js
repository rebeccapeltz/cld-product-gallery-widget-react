import React, {useEffect, useState } from 'react';

export default function ProductGallery({ cloudName, media, display, video }) {
  const [cldName] = useState(cloudName);
  const [mediaAssets] = useState(media);
  const [videoProps] = useState(video);
  const [displayProps, ] = useState(display);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = 'https://product-gallery.cloudinary.com/all.js';
    scriptTag.addEventListener('load', () => setLoaded(true));
    document.body.appendChild(scriptTag);
  }, []);

  useEffect(() => {
    if (!loaded) return;

    const productGallery = window.cloudinary.galleryWidget({
      container: '#product-gallery',
      cloudName: cldName,
      placeholderImage: true,
      viewportBreakpoints: [
        {
          breakpoint: 600,
          carouselStyle: 'thumbnails',
          carouselLocation: 'bottom',
        },
        {
          breakpoint: 300,
          carouselStyle: 'indicators',
          carouselLocation: 'bottom',
          navigation: 'always',
        },
      ],
      imageBreakpoint: 300, // keep to 3 sizes
      displayProps: displayProps,
      mediaAssets: mediaAssets,
      videoProps: videoProps,
      navigationButtonProps: {
        iconColor: 'white',
        color: 'black',
        shape: 'square',
        size: 40,
      },
    });
    productGallery.render();
  }, [loaded,cldName, mediaAssets, displayProps, videoProps ]);

  return (
    <>
      <div id='product-gallery' className='pg-gallery'></div>
    </>
  );
}
