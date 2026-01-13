import "./globals.css";

export const metadata = {
  title: "Brian Next",
  description: "Starter layout for the Brian Next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}
