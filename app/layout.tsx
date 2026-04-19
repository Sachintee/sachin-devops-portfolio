import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import ParticleBackground from "@/components/ParticleBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sachin Teenwal | DevOps intern",
  description: "DevOps Engineer specializing in AWS, Kubernetes, Docker, Terraform, and CI/CD automation. Building scalable cloud infrastructure with 99.9% uptime.",
  keywords: ["DevOps Engineer", "Cloud Architect", "AWS", "Kubernetes", "Docker", "Terraform", "CI/CD", "GitHub Actions", "Infrastructure as Code", "Bangalore"],
  authors: [{ name: "Sachin Teenwal" }],
  creator: "Sachin Teenwal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sachin-devops-portfolio.vercel.app/",
    title: "Sachin Teenwal | DevOps Intern",
    description: "Building scalable cloud infrastructure and automating deployment pipelines with AWS, Docker, Kubernetes, and modern CI/CD practices.",
    siteName: "Sachin Teenwal Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin Teenwal | DevOps Intern",
    description: "DevOps Engineer specializing in cloud infrastructure and automation",
    creator: "@Sachinteenwal",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'light') {
                  document.documentElement.classList.add('light');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ParticleBackground />
        {children}
      </body>
    </html>
  );
}
