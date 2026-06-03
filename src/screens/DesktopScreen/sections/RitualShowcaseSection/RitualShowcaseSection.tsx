const showcasePhones = [
  {
    id: "left-outer",
    src: "https://c.animaapp.com/UtFPsluo/img/iphone-16---7.svg",
    alt: "Ritual app screen preview",
    className: "top-[153px] left-0 w-[314px] h-[558px]",
  },
  {
    id: "left-inner",
    src: "https://c.animaapp.com/UtFPsluo/img/iphone-16---5.svg",
    alt: "Ritual app screen preview",
    className: "top-[77px] left-[346px] w-[314px] h-[558px]",
  },
  {
    id: "center",
    src: "https://c.animaapp.com/UtFPsluo/img/iphone-16---4.svg",
    alt: "Ritual app main dashboard preview",
    className: "top-0 left-[692px] w-[314px] h-[558px]",
  },
  {
    id: "right-inner",
    src: "https://c.animaapp.com/UtFPsluo/img/iphone-16---2.png",
    alt: "Ritual app screen preview",
    className: "top-[77px] left-[1038px] w-[314px] h-[558px]",
  },
  {
    id: "right-outer",
    src: "https://c.animaapp.com/UtFPsluo/img/iphone-16---6.svg",
    alt: "Ritual app screen preview",
    className: "top-[153px] left-[1384px] w-[314px] h-[558px]",
  },
];

export const RitualShowcaseSection = (): JSX.Element => {
  return (
    <section
      aria-labelledby="ritual-showcase-heading"
      className="absolute top-0 left-0 flex h-[1024px] w-[1440px] flex-col gap-[100px] overflow-hidden bg-[color:var(--brand-colors-brand-neutral-50)]"
    >
      <header className="relative mt-[138px] ml-px inline-flex h-[134px] w-[476px] self-center flex-col items-center gap-4">
        <div className="relative inline-flex flex-[0_0_auto] flex-col items-start gap-2">
          <h2
            id="ritual-showcase-heading"
            className="relative mt-[-1.00px] w-[476px] text-center [font-family:'Montserrat',Helvetica] text-[56px] font-bold leading-[67px] tracking-[-0.56px] text-[#2d3142]"
          >
            Your rituals in one place
          </h2>
        </div>
      </header>
      <div
        className="relative ml-[-129px] h-[711px] w-[1698px]"
        aria-label="Ritual app preview gallery"
      >
        {showcasePhones.map((phone) => (
          <img
            key={phone.id}
            src={phone.src}
            alt={phone.alt}
            className={`absolute rounded-[30px] border border-solid border-[#0000000d] bg-cover bg-[50%_50%] shadow-[0px_2px_40px_#e6e6e6] ${phone.className}`}
            loading="lazy"
            decoding="async"
          />
        ))}

        <div className="absolute top-[243px] left-[calc(50.00%_-_243px)] flex w-[489px] items-center gap-6 overflow-hidden rounded-[30px] bg-[#ffffff99] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.30),inset_1px_0_0_rgba(255,255,255,0.24),inset_0_-1px_16px_rgba(0,0,0,0.13),inset_-1px_0_16px_rgba(0,0,0,0.11)] backdrop-blur-[25.0px] backdrop-brightness-[92.0%] backdrop-saturate-[95.0%] [-webkit-backdrop-filter:blur(25.0px)_brightness(92.0%)_saturate(95.0%)]">
          <p className="relative flex-1 [font-family:'Montserrat',Helvetica] text-xl font-medium leading-7 tracking-[0] text-black">
            A little nook for daily small wins!
          </p>
          <img
            className="relative h-12 w-12"
            alt=""
            aria-hidden="true"
            src="https://c.animaapp.com/UtFPsluo/img/frame-39.svg"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
};
