import { useEffect } from "react";

const GA_ID = "G-10D5NJCXLG";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export default function GoogleAnalytics() {
  useEffect(() => {
    if (document.querySelector(`script[data-ga-id="${GA_ID}"]`)) return;

    const dataLayer = (window.dataLayer ??= []);

    window.gtag = function gtag(...args: unknown[]) {
      dataLayer.push(args);
    };

    window.gtag("js", new Date());
    window.gtag("config", GA_ID);

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    script.dataset.gaId = GA_ID;
    document.head.appendChild(script);
  }, []);

  return null;
}
