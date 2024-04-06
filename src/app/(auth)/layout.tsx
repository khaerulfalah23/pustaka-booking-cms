import '../globals.css';
import { Epilogue } from 'next/font/google';
import { Toaster } from 'sonner';

const epilogue = Epilogue({ subsets: ['latin'] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <main>{children}</main>
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
