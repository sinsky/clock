import Clock from "@/components/Clock";
import { Noto_Sans_Javanese } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const noto = Noto_Sans_Javanese({ subsets: ["latin"] });
export default function Home() {
  return (
    <main
      className={`${noto.className} h-svh w-svw bg-slate-800 text-slate-400 flex items-center justify-center`}
    >
      <Clock />
    </main>
  );
}
