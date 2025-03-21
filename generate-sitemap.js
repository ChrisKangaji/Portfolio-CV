import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

// Define your website's base URL
const BASE_URL = 'https://chriskangaji.dev'; // Replace with your actual domain

// Define the routes for your website
const routes = [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/#home', changefreq: 'daily', priority: 1.0 },
    { url: '/#about', changefreq: 'daily', priority: 0.8 },
    { url: '/#skills', changefreq: 'daily', priority: 0.5 },
    { url: '/#services', changefreq: 'daily', priority: 0.5 },
    { url: '/#qualification', changefreq: 'daily', priority: 0.5 },
    { url: '/#contact', changefreq: 'daily', priority: 0.8 }
];

// Create a writable stream to save the sitemap.xml file
const writeStream = createWriteStream('./public/sitemap.xml');

// Create a SitemapStream instance
const sitemap = new SitemapStream({ hostname: BASE_URL });

// Pipe the sitemap stream to the writable stream
sitemap.pipe(writeStream);

// Add each route to the sitemap
routes.forEach((route) => {
    sitemap.write(route);
});

// End the sitemap stream
sitemap.end();

// Log success message
streamToPromise(sitemap)
    .then(() => {
        console.log('Sitemap successfully generated at ./public/sitemap.xml');
    })
    .catch((error) => {
        console.error('Error generating sitemap:', error);
    });