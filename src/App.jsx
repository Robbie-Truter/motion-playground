import IntroSection from "./sections/IntroSection";
import HoverSection from "./sections/HoverSection";
import ButtonSection from "./sections/ButtonSection";
import ReorderSection from "./sections/ReorderSection";
import "./App.css";

const App = () => {
  return (
    <>
      <main>
        <section>
          <IntroSection />
        </section>
        <section className="bg-[#9bb8cd]">
          <HoverSection />
        </section>

        <section className="space-y-5 bg-[#fff7d4] text-black">
          <ButtonSection />
        </section>

        <section className="space-y-5 bg-[#FFA4A4] text-black">
          <ReorderSection />
        </section>
      </main>
    </>
  );
};

export default App;
