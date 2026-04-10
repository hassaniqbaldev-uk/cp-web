import Image from "next/image";
import LpResultImg from "@/assets/images/cards/lp-result-img.png";

const LpResultSection = () => {
  return (
    <section className="py-[10rem]">
      <div className="relative container h-[68.8rem]">
        <div
          style={{
            background:
              "linear-gradient(184.61deg, #F8E19E 3.73%, #F5A267 90.31%, #EE7621 130.8%)",
          }}
          className="absolute top-0 left-0 z-[1] h-[69rem] w-full rounded-[3rem]"
        />

        <div className="relative z-[10] flex flex-col items-center gap-[1rem] pt-[7rem] text-center">
          <h2 className="text-[7rem] leading-[8rem] font-bold tracking-[-0.03em] text-[#312749]">
            Results Our Clients Love
          </h2>

          <p className="text-[2rem] leading-[2.5rem] font-normal tracking-normal text-[#312749]">
            We believe in measurable results. Our WordPress projects have helped
            clients:
          </p>
        </div>

        <div className="absolute bottom-0 left-1/2 z-[10] h-[45rem] w-[110rem] -translate-x-1/2">
          <Image src={LpResultImg} width={1100} height={450} alt="Card Image" />
        </div>
      </div>
    </section>
  );
};

export default LpResultSection;
