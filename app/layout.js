import './globals.css';

export const metadata = {
  title: 'By Meg Wright | Growth Marketing & Creative Writing',
  description: 'Freelance marketing specialist with a Master\'s in Psycholinguistics. I design messaging systems that turn curiosity into action, and write poetry that turns noise into stillness.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Libre+Franklin:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
