import { FormEvent, useId, useState } from "react";

type ChipItem =
  | {
      type: "div";
      label: string;
      wrapperClassName: string;
      textClassName: string;
    }
  | {
      type: "img";
      alt: string;
      src: string;
      className: string;
    };

type FeatureCard = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWrapperClassName: string;
  imageClassName: string;
  cardClassName: string;
  contentClassName: string;
};

type HighlightCard =
  | {
      type: "wide";
      title: string;
      description: string;
      imageSrc: string;
      imageAlt: string;
      cardClassName: string;
      imageClassName: string;
      contentClassName: string;
    }
  | {
      type: "image";
      cardClassName: string;
      innerClassName: string;
      imageSrc: string;
      imageAlt: string;
      imageClassName: string;
    }
  | {
      type: "row";
      left: {
        title: string;
        description: string;
        imageSrc: string;
        imageAlt: string;
      };
      right: {
        title: string;
        description: string;
      };
    };

type TestimonialCard = {
  text: JSX.Element;
  author: string;
  className: string;
  textClassName?: string;
  authorClassName?: string;
};

const chips: ChipItem[] = [
  {
    type: "div",
    label: "Trackers",
    wrapperClassName:
      "relative w-40 h-[60px] rounded-[25px] overflow-hidden bg-[url(https://c.animaapp.com/UtFPsluo/img/frame-40@2x.png)] bg-cover bg-[50%_50%] bg-[color:var(--brand-colors-electric-violet-100)]",
    textClassName:
      "absolute top-[calc(50.00%_-_14px)] left-[45px] [font-family:'Montserrat',Helvetica] font-medium text-[#2d3142] text-lg tracking-[0] leading-7 whitespace-nowrap",
  },
  {
    type: "div",
    label: "Reminders",
    wrapperClassName: "relative w-40 h-[60px] bg-lavender-100",
    textClassName:
      "absolute top-[calc(50.00%_-_14px)] left-[calc(50.00%_-_49px)] [font-family:'Montserrat',Helvetica] font-medium text-[#2d3142] text-lg tracking-[0] leading-7 whitespace-nowrap",
  },
  {
    type: "div",
    label: "Trips",
    wrapperClassName:
      "relative w-40 h-[60px] bg-[url(https://c.animaapp.com/UtFPsluo/img/ellipse-2.svg)] bg-cover bg-[50%_50%]",
    textClassName:
      "absolute top-[calc(50.00%_-_14px)] left-[calc(50.00%_-_22px)] [font-family:'Montserrat',Helvetica] font-medium text-[#2d3142] text-lg text-center tracking-[0] leading-7 whitespace-nowrap",
  },
  {
    type: "img",
    alt: "Wishlists",
    src: "https://c.animaapp.com/UtFPsluo/img/frame-42.svg",
    className: "relative w-40 h-[60px] object-cover",
  },
  {
    type: "div",
    label: "Shared goals",
    wrapperClassName:
      "relative w-40 h-[60px] bg-fern-100 rounded-[25px] overflow-hidden",
    textClassName:
      "absolute top-[calc(50.00%_-_14px)] left-[calc(50.00%_-_59px)] [font-family:'Montserrat',Helvetica] font-medium text-[#2d3142] text-lg text-center tracking-[0] leading-7 whitespace-nowrap",
  },
  {
    type: "img",
    alt: "Meal plans",
    src: "https://c.animaapp.com/UtFPsluo/img/frame-45.svg",
    className: "relative w-40 h-[60px] object-cover",
  },
  {
    type: "div",
    label: "Meds tracker",
    wrapperClassName:
      "relative w-40 h-[60px] bg-lavender-100 rounded-[80px/30px] overflow-hidden",
    textClassName:
      "absolute top-[calc(50.00%_-_14px)] left-[calc(50.00%_-_59px)] [font-family:'Montserrat',Helvetica] font-medium text-[#2d3142] text-lg text-center tracking-[0] leading-7 whitespace-nowrap",
  },
  {
    type: "img",
    alt: "Pet care",
    src: "https://c.animaapp.com/UtFPsluo/img/frame-46.svg",
    className: "relative w-40 h-[60px] object-cover",
  },
  {
    type: "div",
    label: "Tiktok saves",
    wrapperClassName: "relative w-40 h-[60px] bg-[#ede8ff]",
    textClassName:
      "absolute top-[calc(50.00%_-_14px)] left-[calc(50.00%_-_49px)] [font-family:'Montserrat',Helvetica] font-medium text-[#2d3142] text-lg tracking-[0] leading-7 whitespace-nowrap",
  },
];

const featureCards: FeatureCard[] = [
  {
    title: "Shape a nook",
    description:
      "Pick a template or describe what you need in plain words. Mash instantly shapes a digital nook.",
    imageSrc: "https://c.animaapp.com/UtFPsluo/img/1-2@2x.png",
    imageAlt: "Shape a nook preview",
    imageWrapperClassName: "relative w-[438px] h-[432px] mr-[-0.67px]",
    imageClassName:
      "absolute top-0 left-[calc(50.00%_-_158px)] w-[317px] h-[432px] aspect-[0.52] object-cover",
    cardClassName:
      "flex flex-col items-start gap-5 relative flex-1 self-stretch grow bg-[#ffffff] rounded-[45px] overflow-hidden",
    contentClassName:
      "flex flex-col items-start gap-4 pt-10 pb-0 px-8 relative self-stretch w-full flex-[0_0_auto]",
  },
  {
    title: "Fill your shelf",
    description:
      "Keep your spaces cleanly organized in one place, right on your phone.",
    imageSrc: "https://c.animaapp.com/UtFPsluo/img/1-2-1@2x.png",
    imageAlt: "Fill your shelf preview",
    imageWrapperClassName:
      "relative w-[438px] h-[432px] ml-[-0.33px] mr-[-0.33px]",
    imageClassName:
      "absolute top-0 left-[calc(50.00%_-_158px)] w-[317px] h-[432px] aspect-[0.52] object-cover",
    cardClassName:
      "flex flex-col items-center gap-5 pt-10 pb-0 px-0 relative flex-1 self-stretch grow bg-[#ffffff] rounded-[45px] overflow-hidden",
    contentClassName:
      "flex flex-col items-start gap-4 px-8 py-0 relative self-stretch w-full flex-[0_0_auto]",
  },
  {
    title: "Share the ritual",
    description:
      "Keep a group chat's favorite habit alive in a shared space built for your circle.",
    imageSrc: "https://c.animaapp.com/UtFPsluo/img/3-1@2x.png",
    imageAlt: "Share the ritual preview",
    imageWrapperClassName:
      "relative w-[438px] h-[432px] ml-[-0.33px] mr-[-0.33px]",
    imageClassName:
      "absolute top-0 left-[calc(50.00%_-_158px)] w-[317px] h-[432px] aspect-[0.51] object-cover",
    cardClassName:
      "flex flex-col items-center gap-5 pt-10 pb-0 px-0 relative flex-1 self-stretch grow bg-[#ffffff] rounded-[45px] overflow-hidden",
    contentClassName:
      "flex flex-col items-start gap-4 px-8 py-0 relative self-stretch w-full flex-[0_0_auto]",
  },
];

const highlightCards: HighlightCard[] = [
  {
    type: "wide",
    title: "Watch it happen live",
    description:
      "👀 See updates as people add, check off, respond, or change plans.",
    imageSrc:
      "https://c.animaapp.com/UtFPsluo/img/chatgpt-image-may-11--2026--05-06-43-pm-1@2x.png",
    imageAlt: "Live activity preview",
    cardClassName:
      "flex flex-col w-[763px] items-start gap-2.5 p-6 relative bg-neutral-50 rounded-[45px] overflow-hidden",
    imageClassName:
      "relative w-[425px] h-[291px] mt-[-21.00px] mb-[-24.00px] ml-[-24.00px] aspect-[1.53]",
    contentClassName: "flex-col w-[297px] items-start gap-5 flex relative",
  },
  {
    type: "image",
    cardClassName:
      "w-[297px] h-[297px] bg-[#f6f6f9] rounded-[45px] relative overflow-hidden",
    innerClassName:
      "top-[73px] left-[22px] w-[251px] h-[152px] flex items-center bg-[#fbfbfb] rounded-[25px] border border-solid border-[#f8f8f8] shadow-[0px_4px_25px_#2123301f] relative overflow-hidden",
    imageSrc: "https://c.animaapp.com/UtFPsluo/img/image-14@2x.png",
    imageAlt: "Shared cards preview",
    imageClassName: "mt-[0.6px] h-[136.62px] w-[251px] aspect-[2.85]",
  },
  {
    type: "row",
    left: {
      title: "Never forget the plan!",
      description:
        " ⏰ For plans, habits, check-ins, and the little routines people mean to come back to.",
      imageSrc:
        "https://c.animaapp.com/UtFPsluo/img/chatgpt-image-may-11--2026--06-46-23-pm-1@2x.png",
      imageAlt: "Plan reminders preview",
    },
    right: {
      title: 'No more "where\'s the link?"',
      description:
        "💬 The whole group shares the same view, so your rituals keep going!",
    },
  },
];

const testimonials: TestimonialCard[] = [
  {
    text: (
      <>
        This is so cool! <br />I made a tabletop game manager for D&amp;D!
      </>
    ),
    author: "Jamie, 31",
    className:
      "flex flex-col w-[239px] h-[183px] items-start justify-between p-6 absolute top-[162px] left-[1054px] bg-[#fff3c6] rounded-[15px] rotate-[-8.60deg]",
  },
  {
    text: (
      <>
        This is so cool! <br />I made a tabletop game manager for D&amp;D!
      </>
    ),
    author: "Matt, 24",
    className:
      "flex flex-col w-[255.79px] h-[183px] items-start justify-between p-6 absolute top-[252px] left-12 bg-[#fff3c6] rounded-[15px] rotate-[-8.60deg]",
  },
  {
    text: (
      <>
        &quot;I spent two days trying to build a chore tracker
        <br /> in Claude. This was so much easier.&quot;
      </>
    ),
    author: "Matt, 24",
    className:
      "flex flex-col w-[317px] items-start gap-10 p-6 absolute top-[576px] left-[69px] bg-lavender-50 rounded-[15px] rotate-[-4.65deg]",
    textClassName:
      "relative self-stretch mt-[-1.00px] font-body-body-s font-[number:var(--body-body-s-font-weight)] text-neutral-950 text-[length:var(--body-body-s-font-size)] tracking-[var(--body-body-s-letter-spacing)] leading-[var(--body-body-s-line-height)] [font-style:var(--body-body-s-font-style)]",
    authorClassName:
      "relative w-fit font-body-body-s font-[number:var(--body-body-s-font-weight)] text-neutral-950 text-[length:var(--body-body-s-font-size)] tracking-[var(--body-body-s-letter-spacing)] leading-[var(--body-body-s-line-height)] whitespace-nowrap [font-style:var(--body-body-s-font-style)]",
  },
  {
    text: (
      <>
        This is so cool! <br />I made a tabletop game manager for D&amp;D!
      </>
    ),
    author: "Matt, 24",
    className:
      "flex flex-col w-[207px] items-start gap-10 p-6 absolute top-[382px] left-[131px] bg-[#dbf0dc] rounded-[15px] rotate-[1.75deg]",
  },
  {
    text: (
      <>
        This is so cool! <br />I made a tabletop game manager for D&amp;D!
      </>
    ),
    author: "River, 19",
    className:
      "flex w-[355px] h-[183px] items-center gap-6 absolute top-[370px] left-[calc(50.00%_+_347px)]",
  },
  {
    text: (
      <>
        I made an app to track my gut symptoms. <br />
        It was so much easier than Apple Notes.
      </>
    ),
    author: "Dakota, 24",
    className:
      "flex flex-col w-[255px] items-start gap-10 p-6 absolute top-[546px] left-[1162px] bg-fern-100 rounded-[15px] rotate-[5.49deg]",
  },
];

const footerLinks = ["FAQs", "Contact", "Linkedin"];

export const DailyWorldOverviewSection = (): JSX.Element => {
  const mashId = useId();
  const emailId = useId();
  const [mashIdea, setMashIdea] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section
      className="flex flex-col w-[1440px] items-start absolute top-[1024px] left-0"
      aria-labelledby="daily-world-overview-title"
    >
      <div className="flex flex-col items-center gap-[100px] pt-[150px] pb-[100px] px-10 relative self-stretch w-full flex-[0_0_auto] overflow-hidden">
        <div
          className="inline-flex items-center gap-6 relative flex-[0_0_auto] ml-[-136.00px] mr-[-136.00px]"
          aria-label="Examples of digital nooks"
        >
          {chips.map((chip, index) =>
            chip.type === "img" ? (
              <img
                key={`${chip.alt}-${index}`}
                className={chip.className}
                alt={chip.alt}
                src={chip.src}
              />
            ) : (
              <div
                key={`${chip.label}-${index}`}
                className={chip.wrapperClassName}
                aria-label={chip.label}
              >
                <div className={chip.textClassName}>{chip.label}</div>
              </div>
            ),
          )}
        </div>
        <header className="inline-flex flex-col items-center gap-6 relative flex-[0_0_auto]">
          <h2
            id="daily-world-overview-title"
            className="relative w-fit mt-[-1.00px] font-headings-display-l font-[number:var(--headings-display-l-font-weight)] text-[#000000] text-[length:var(--headings-display-l-font-size)] text-center tracking-[var(--headings-display-l-letter-spacing)] leading-[var(--headings-display-l-line-height)] whitespace-nowrap [font-style:var(--headings-display-l-font-style)]"
          >
            A digital cabin for your daily world
          </h2>
          <p className="relative w-[614px] [font-family:'Montserrat',Helvetica] font-medium text-[#2d3142] text-xl text-center tracking-[0] leading-[30px]">
            For the things that don&apos;t fit in your notes, get too messy for
            a spreadsheet, and get lost in a group chat.
          </p>
        </header>
        <button
          type="button"
          className="inline-flex h-14 items-center justify-center gap-2.5 px-6 py-4 relative bg-[#dcd4ff] rounded-[100px]"
          aria-label="Get early access"
        >
          <span className="relative w-fit font-label-label-m font-[number:var(--label-label-m-font-weight)] text-neutral-950 text-[length:var(--label-label-m-font-size)] text-center tracking-[var(--label-label-m-letter-spacing)] leading-[var(--label-label-m-line-height)] whitespace-nowrap [font-style:var(--label-label-m-font-style)]">
            Get early access
          </span>
        </button>
        <div className="flex items-start gap-6 relative self-stretch w-full flex-[0_0_auto]">
          {featureCards.map((card) => (
            <article key={card.title} className={card.cardClassName}>
              <div className={card.contentClassName}>
                <h3 className="relative self-stretch mt-[-1.00px] [font-family:'Montserrat',Helvetica] font-extrabold text-[#000000] text-2xl tracking-[-0.05px] leading-[33px]">
                  {card.title}
                </h3>
                <p className="relative self-stretch [font-family:'Montserrat',Helvetica] font-medium text-[#3f4765] text-lg tracking-[-0.04px] leading-[26px]">
                  {card.description}
                </p>
              </div>
              <div className={card.imageWrapperClassName}>
                <img
                  className={card.imageClassName}
                  alt={card.imageAlt}
                  src={card.imageSrc}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
      <section className="inline-flex flex-col items-center gap-[100px] px-[178px] py-[100px] relative flex-[0_0_auto] bg-white">
        <h2 className="relative w-fit mt-[-1.00px] font-headings-display-l font-[number:var(--headings-display-l-font-weight)] text-[#000000] text-[length:var(--headings-display-l-font-size)] text-center tracking-[var(--headings-display-l-letter-spacing)] leading-[var(--headings-display-l-line-height)] whitespace-nowrap [font-style:var(--headings-display-l-font-style)]">
          For the things a group chat cannot hold!
        </h2>
        <div className="flex flex-wrap w-[1084px] items-start gap-[24px_24px] relative flex-[0_0_auto]">
          {highlightCards.map((card, index) => {
            if (card.type === "wide") {
              return (
                <article key={`wide-${index}`} className={card.cardClassName}>
                  <div className="items-center gap-6 self-stretch w-full flex-[0_0_auto] flex relative">
                    <img
                      className={card.imageClassName}
                      alt={card.imageAlt}
                      src={card.imageSrc}
                    />
                    <div className={card.contentClassName}>
                      <h3 className="relative self-stretch mt-[-1.00px] font-headings-h2 font-[number:var(--headings-h2-font-weight)] text-neutral-950 text-[length:var(--headings-h2-font-size)] tracking-[var(--headings-h2-letter-spacing)] leading-[var(--headings-h2-line-height)] [font-style:var(--headings-h2-font-style)]">
                        {card.title}
                      </h3>
                      <p className="relative self-stretch font-body-body-m font-[number:var(--body-body-m-font-weight)] text-[#3f4765] text-[length:var(--body-body-m-font-size)] tracking-[var(--body-body-m-letter-spacing)] leading-[var(--body-body-m-line-height)] [font-style:var(--body-body-m-font-style)]">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </article>
              );
            }

            if (card.type === "image") {
              return (
                <div key={`image-${index}`} className={card.cardClassName}>
                  <div className={card.innerClassName}>
                    <img
                      className={card.imageClassName}
                      alt={card.imageAlt}
                      src={card.imageSrc}
                    />
                  </div>
                </div>
              );
            }

            return (
              <div
                key={`row-${index}`}
                className="w-[1084px] items-center gap-6 flex relative"
              >
                <article className="flex items-center gap-4 p-6 flex-1 grow bg-[#f6f6f9] rounded-[45px] relative overflow-hidden">
                  <div className="flex-col items-start gap-4 flex-1 grow flex relative">
                    <h3 className="relative self-stretch mt-[-1.00px] font-headings-h2 font-[number:var(--headings-h2-font-weight)] text-neutral-950 text-[length:var(--headings-h2-font-size)] tracking-[var(--headings-h2-letter-spacing)] leading-[var(--headings-h2-line-height)] [font-style:var(--headings-h2-font-style)]">
                      {card.left.title}
                    </h3>
                    <p className="relative self-stretch font-body-body-m font-[number:var(--body-body-m-font-weight)] text-[#3f4765] text-[length:var(--body-body-m-font-size)] tracking-[var(--body-body-m-letter-spacing)] leading-[var(--body-body-m-line-height)] [font-style:var(--body-body-m-font-style)]">
                      {card.left.description}
                    </p>
                  </div>
                  <img
                    className="relative w-[307px] h-[257px] mt-[-21.00px] mb-[-24.00px] mr-[-24.00px] aspect-[1.22]"
                    alt={card.left.imageAlt}
                    src={card.left.imageSrc}
                  />
                </article>
                <article className="flex-col w-[426px] h-[260px] items-start justify-center gap-2.5 p-6 bg-[#f6f6f9] rounded-[45px] overflow-hidden flex relative">
                  <h3 className="relative self-stretch font-headings-h2 font-[number:var(--headings-h2-font-weight)] text-neutral-950 text-[length:var(--headings-h2-font-size)] tracking-[var(--headings-h2-letter-spacing)] leading-[var(--headings-h2-line-height)] [font-style:var(--headings-h2-font-style)]">
                    {card.right.title}
                  </h3>
                  <p className="relative self-stretch font-body-body-m font-[number:var(--body-body-m-font-weight)] text-[#3f4765] text-[length:var(--body-body-m-font-size)] tracking-[var(--body-body-m-letter-spacing)] leading-[var(--body-body-m-line-height)] [font-style:var(--body-body-m-font-style)]">
                    {card.right.description}
                  </p>
                </article>
              </div>
            );
          })}
        </div>
      </section>
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <section className="relative self-stretch w-full h-[801px] bg-[#f6f6f9]">
          {testimonials.slice(0, 4).map((item, index) => (
            <blockquote
              key={`testimonial-left-${index}`}
              className={item.className}
            >
              <p
                className={
                  item.textClassName ??
                  "relative self-stretch mt-[-1.00px] font-body-body-s font-[number:var(--body-body-s-font-weight)] text-black text-[length:var(--body-body-s-font-size)] tracking-[var(--body-body-s-letter-spacing)] leading-[var(--body-body-s-line-height)] [font-style:var(--body-body-s-font-style)]"
                }
              >
                {item.text}
              </p>
              <footer
                className={
                  item.authorClassName ??
                  "relative w-fit font-body-body-s font-[number:var(--body-body-s-font-weight)] text-[#000000] text-[length:var(--body-body-s-font-size)] tracking-[var(--body-body-s-letter-spacing)] leading-[var(--body-body-s-line-height)] whitespace-nowrap [font-style:var(--body-body-s-font-style)]"
                }
              >
                {item.author}
              </footer>
            </blockquote>
          ))}

          <div className="flex flex-col w-[530px] h-[539px] items-start gap-10 p-10 absolute top-[115px] left-[calc(50.00%_-_265px)] rounded-[25px] shadow-[0px_4px_35px_#d6d6d626] bg-[color:var(--brand-colors-brand-neutral-100)]">
            <div className="w-full">
              <h2 className="relative self-stretch mt-[-1.00px] font-headings-display-m font-[number:var(--headings-display-m-font-weight)] text-[#2d3142] text-[length:var(--headings-display-m-font-size)] text-center tracking-[var(--headings-display-m-letter-spacing)] leading-[var(--headings-display-m-line-height)] [font-style:var(--headings-display-m-font-style)]">
                From &quot;We need this&quot; to <br />
                &quot;We made this&quot;
              </h2>
            </div>
            <div className="relative self-stretch font-headings-h4 font-[number:var(--headings-h4-font-weight)] text-[#2d3142] text-[length:var(--headings-h4-font-size)] text-center tracking-[var(--headings-h4-letter-spacing)] leading-[var(--headings-h4-line-height)] [font-style:var(--headings-h4-font-style)]">
              Get early access.
            </div>
            <form
              className="flex flex-col items-center justify-center gap-6 relative self-stretch w-full flex-[0_0_auto]"
              onSubmit={handleSubmit}
            >
              <div className="w-full">
                <label htmlFor={mashId} className="sr-only">
                  What would you mash?
                </label>
                <div className="flex h-14 items-center gap-2.5 px-6 py-4 relative self-stretch w-full bg-white rounded-[25px] overflow-hidden border border-solid border-[#ebecf3]">
                  <input
                    id={mashId}
                    value={mashIdea}
                    onChange={(event) => setMashIdea(event.target.value)}
                    placeholder="What would you mash?"
                    aria-label="What would you mash?"
                    className="relative w-full font-label-label-s font-[number:var(--label-label-s-font-weight)] text-[#2d3142] placeholder:text-[#4d577c] text-[length:var(--label-label-s-font-size)] tracking-[var(--label-label-s-letter-spacing)] leading-[var(--label-label-s-line-height)] [font-style:var(--label-label-s-font-style)]"
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor={emailId} className="sr-only">
                  Your email
                </label>
                <div className="flex h-14 items-center gap-2.5 px-6 py-4 relative self-stretch w-full bg-white rounded-[25px] overflow-hidden border border-solid border-[#ebecf3]">
                  <input
                    id={emailId}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Your email"
                    aria-label="Your email"
                    className="relative w-full font-label-label-s font-[number:var(--label-label-s-font-weight)] text-[#2d3142] placeholder:text-[#4d577c] text-[length:var(--label-label-s-font-size)] tracking-[var(--label-label-s-letter-spacing)] leading-[var(--label-label-s-line-height)] [font-style:var(--label-label-s-font-style)]"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="flex h-14 items-center justify-center gap-2.5 px-6 py-4 relative self-stretch w-full bg-[#5b18bf] rounded-[100px]"
                aria-label="Join the waitlist"
              >
                <span className="relative w-fit font-label-label-m font-[number:var(--label-label-m-font-weight)] text-neutral-50 text-[length:var(--label-label-m-font-size)] text-center tracking-[var(--label-label-m-letter-spacing)] leading-[var(--label-label-m-line-height)] whitespace-nowrap [font-style:var(--label-label-m-font-style)]">
                  Join the waitlist
                </span>
              </button>
            </form>
          </div>
          <div className={testimonials[4].className}>
            <blockquote className="flex flex-col items-start justify-between p-6 relative flex-1 self-stretch grow bg-[#d4d7e3] rounded-[15px]">
              <p className="relative self-stretch mt-[-1.00px] font-body-body-s font-[number:var(--body-body-s-font-weight)] text-black text-[length:var(--body-body-s-font-size)] tracking-[var(--body-body-s-letter-spacing)] leading-[var(--body-body-s-line-height)] [font-style:var(--body-body-s-font-style)]">
                {testimonials[4].text}
              </p>
              <footer className="relative w-fit font-body-body-s font-[number:var(--body-body-s-font-weight)] text-[#000000] text-[length:var(--body-body-s-font-size)] tracking-[var(--body-body-s-letter-spacing)] leading-[var(--body-body-s-line-height)] whitespace-nowrap [font-style:var(--body-body-s-font-style)]">
                {testimonials[4].author}
              </footer>
            </blockquote>
          </div>
          <blockquote className={testimonials[5].className}>
            <p className="relative self-stretch mt-[-1.00px] font-body-body-s font-[number:var(--body-body-s-font-weight)] text-black text-[length:var(--body-body-s-font-size)] tracking-[var(--body-body-s-letter-spacing)] leading-[var(--body-body-s-line-height)] [font-style:var(--body-body-s-font-style)]">
              {testimonials[5].text}
            </p>
            <footer className="relative w-fit font-body-body-s font-[number:var(--body-body-s-font-weight)] text-[#000000] text-[length:var(--body-body-s-font-size)] tracking-[var(--body-body-s-letter-spacing)] leading-[var(--body-body-s-line-height)] whitespace-nowrap [font-style:var(--body-body-s-font-style)]">
              {testimonials[5].author}
            </footer>
          </blockquote>
        </section>
        <footer className="flex flex-col items-start gap-2.5 pt-[120px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto] bg-[url(https://c.animaapp.com/UtFPsluo/img/frame-5.png)] bg-cover bg-[50%_50%]">
          <div className="flex flex-col w-[1440px] items-start justify-center gap-6 pt-px pb-6 px-20 relative flex-[0_0_auto]">
            <img
              className="relative w-[1336px] h-px mt-[-1.00px] mr-[-56.00px] object-cover"
              alt=""
              src="https://c.animaapp.com/UtFPsluo/img/line-1.svg"
              aria-hidden="true"
            />
            <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
              <img
                className="relative w-[74px] h-[18px]"
                alt="Mash logo"
                src="https://c.animaapp.com/UtFPsluo/img/logo-1.svg"
              />
              <nav aria-label="Footer links">
                <ul className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  {footerLinks.map((link, index) => (
                    <li key={link} className="inline-flex items-center gap-2">
                      {index > 0 && (
                        <span
                          className="relative w-fit mt-[-1.00px] font-label-label-XS font-[number:var(--label-label-XS-font-weight)] text-[#2d3142] text-[length:var(--label-label-XS-font-size)] text-center tracking-[var(--label-label-XS-letter-spacing)] leading-[var(--label-label-XS-line-height)] whitespace-nowrap [font-style:var(--label-label-XS-font-style)]"
                          aria-hidden="true"
                        >
                          ·
                        </span>
                      )}
                      <a
                        href="#"
                        className="relative w-fit mt-[-1.00px] font-label-label-XS font-[number:var(--label-label-XS-font-weight)] text-[#2d3142] text-[length:var(--label-label-XS-font-size)] text-center tracking-[var(--label-label-XS-letter-spacing)] leading-[var(--label-label-XS-line-height)] whitespace-nowrap [font-style:var(--label-label-XS-font-style)]"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <p className="relative w-fit font-label-label-XS font-[number:var(--label-label-XS-font-weight)] text-[#2d3142] text-[length:var(--label-label-XS-font-size)] text-center tracking-[var(--label-label-XS-letter-spacing)] leading-[var(--label-label-XS-line-height)] whitespace-nowrap [font-style:var(--label-label-XS-font-style)]">
                © 2026 Mash. Tiny apps for everyday life
              </p>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};
