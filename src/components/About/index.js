import React from "react";
import aboutImage from "../../assets/images/about.jpg";

const About = () => {
  return (
    <section id="about" className="projects-section bg-light">
      <div className="container">
        <div className="row align-items-center no-gutters mb-4 mb-lg-5">
          {" "}
          <div className="col-xl-5 col-lg-4">
            <img className="img-fluid mb-3 mb-lg-0" src={aboutImage} alt="" />
          </div>
          <div className="col-xl-7 col-lg-8">
            <div className="featured-text text-center text-lg-left">
              <h2>Om mig</h2>
              <p className="text-black-50 mb-3">
                Med glimten i ögat och ett driv för resultat så ser jag till att
                din träning går framåt men också är rolig på samma gång. Med
                över 10 000h+ på golvet med kunder så har jag fått chansen att
                utveckla träning och kostupplägg för att det ska passa kundens
                behov och förutsättningar. Jag hittar vägar för att människor
                ska bli smärtfria och kunna träna hårt igen.
              </p>
              <p className="text-black-50 mb-3">
                Jag har alltid befunnit mig i miljöer där teamkänslan är viktig.
                Lagsporter var en stor del av min uppväxt och ungdom. Jag
                beslutade mig för att bli tränare och hjälpa personer med deras
                hälsa efter att jag hade jobbat på ett HVB hem. Jag såg andra
                tränare, både fysiskt och online, som jobbade med träning och
                kost men glömde det viktigaste, helheten!
              </p>

              <p className="text-black-50 mb-3">
                Alla kan betala för ett kost- & träningsprogram. Att få allting
                att fungera som leder till resultat är en annan sak. Möjligheten
                att få ta del av en annan persons liv, se över behov och
                förutsättningar för att sen pussla om för att få allting att
                fungera och bli långvarigt. Det är ingen enkel resa, men den
                känslan av att få allting att fungera utefter hur du vill, det
                triggar mig. Jag krigar så länge du krigar. Du avgör hur mycket
                jag investerar i dig. Ge mig 100% så ger jag dig 110%. Valet
                ligger alltid hos individen själv, inte hos
                verktygsleverantören.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
