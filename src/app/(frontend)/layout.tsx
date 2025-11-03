import Footer from "./componets/Footer";
import Navbar from "./componets/Navbar";
import TopBar from "./componets/TopBar";
export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TopBar />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
