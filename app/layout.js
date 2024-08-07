import { Cairo } from "next/font/google";
import "./globals.css";
import "./css/all.min.css"

const cairo = Cairo({ subsets: ["arabic"] });

export const metadata = {
  title: "Beyond Reach",
  description: "حلول تسويقية مبتكرة تعتمد على البيانات الضخمة لتحقيق أفضل النتائج يوند ريتش هي وكالة تسويق تعمل على تحويل تحديات التسويق الرقمي إلى فرص نمو ونجاح ونتائج موثوقة اعتمادا على تسويقنا الأدائي.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cairo.className}>{children}</body>
    </html>
  );
}
