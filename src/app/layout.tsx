import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { client } from '../sanity/lib/client';
import { urlFor } from '../sanity/lib/image';

const inter = Inter({ subsets: ["latin"] });

// Fetch logo URL for metadata (this runs at build time)
async function getLogoUrl() {
  try {
    const settings = await client.fetch(`*[_type == "settings"][0] {
      logo
    }`);
    if (settings?.logo) {
      return urlFor(settings.logo).url();
    }
  } catch (error) {
    console.error('Error fetching logo for favicon:', error);
  }
  return null;
}

export async function generateMetadata(): Promise<Metadata> {
  const logoUrl = await getLogoUrl();
  
  return {
    title: "BVOGI - Believers Voice for Global Impact",
    description: "A youth movement focused on authentic worship, leadership development, systems building, community transformation, and spiritual growth.",
    icons: {
      icon: logoUrl || '/favicon.ico',
      apple: logoUrl || '/apple-touch-icon.png',
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
