import { MobileToggleProvider } from "@/contexts/MobileToggleContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <MobileToggleProvider>
      <Component {...pageProps} />
    </MobileToggleProvider>
  );
}
