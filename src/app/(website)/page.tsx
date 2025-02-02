// import WelcomePopUp from "@/components/popups/welcome-pop";
import About from "@/components/home/about";
import Landing from "@/components/home/landing";
import Subjects from "@/components/home/subjects";

export default function Home() {
  return (
    <main className="bg-slate-50">
      {/* <WelcomePopUp /> */}
      <Landing />
      <Subjects />
      <About />
    </main>
  );
}
