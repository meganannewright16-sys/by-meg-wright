import './globals.css';

export const metadata = {
  title: 'By Meg Wright | Growth Marketing & Creative Writing',
  description: 'Freelance marketing specialist with a Master\'s in Psycholinguistics. I design messaging systems that turn curiosity into action, built on the science of how language actually moves people.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&family=Raleway:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
