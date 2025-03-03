import "./globals.css";

export const metadata = {
  title: "Catalog",
  description: "Catalog by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
