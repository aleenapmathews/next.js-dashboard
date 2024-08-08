import '@/app/ui/global.css';
import { rye } from './ui/fonts';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rye.className} antialiased`}>
        <h3>Root Layout</h3>
        {children}</body>
    </html>
  );
}
