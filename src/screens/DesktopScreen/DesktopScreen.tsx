import { DailyWorldOverviewSection } from "./sections/DailyWorldOverviewSection";
import { RitualShowcaseSection } from "./sections/RitualShowcaseSection";

const navActions = [
  {
    label: "Join the Waitlist",
    type: "button" as const,
  },
];

export const DesktopScreen = (): JSX.Element => {
  return (
    <main
      className="relative w-[1440px] h-[4358px] bg-neutral-50 overflow-hidden"
      data-model-id="2312:1507"
      data-tokens-mode="light"
    >
      <div
        className="absolute top-0 left-0 w-[1440px] h-[305px] bg-[url(https://c.animaapp.com/UtFPsluo/img/frame-62.png)] bg-cover bg-[50%_50%]"
        aria-hidden="true"
      />
      <RitualShowcaseSection />
      <header className="flex w-[1440px] items-center justify-between px-10 py-[17px] absolute top-0 left-0">
        <img
          className="relative w-[118px] h-8"
          alt="Logo"
          src="https://c.animaapp.com/UtFPsluo/img/logo.svg"
        />
        <nav aria-label="Primary">
          {navActions.map((action) => (
            <button
              key={action.label}
              type={action.type}
              className="inline-flex h-14 items-center justify-center gap-2.5 px-6 py-4 relative bg-[#dcd4ff] rounded-[100px]"
              aria-label={action.label}
            >
              <span className="relative w-fit font-label-label-m font-[number:var(--label-label-m-font-weight)] text-neutral-950 text-[length:var(--label-label-m-font-size)] text-center tracking-[var(--label-label-m-letter-spacing)] leading-[var(--label-label-m-line-height)] whitespace-nowrap [font-style:var(--label-label-m-font-style)]">
                {action.label}
              </span>
            </button>
          ))}
        </nav>
      </header>
      <DailyWorldOverviewSection />
    </main>
  );
};
