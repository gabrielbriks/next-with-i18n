import { i18n, type Locale } from "../../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: {
    pt: "Título em Português",
    en: "Title in English",
    ja: "日本語のタイトル",
  },
  description: {
    pt: "Descrição em Português",
    en: "Description in English",
    ja: "日本語の説明",
  },
};
