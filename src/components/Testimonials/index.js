import React from "react";
import Testimonial from "../common/Testimonial";
import Slider from "react-slick";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
  };
  return (
    <section>
      <div className="mt-5 mb-5">
        <Slider {...settings}>
          <div className="">
            <Testimonial stars={5}>
              <p>
                Jag kunde inte gå ordentligt och behövde skor inomhus för mina
                smärtor i fötterna. Balanssvårigheter i mitt vardagliga liv. Jag
                kunde inte resa mig från en knäsittande position utan hjälp.
                Idag har jag inga problem med mina fötter, jag kan sätta mig på
                knä och ta mig upp igen. På det är jag 10kg lättare med.
              </p>
            </Testimonial>
          </div>

          <div className="">
            <Testimonial stars={5}>
              <p>
                Oscars coachande egenskap, tålamod och driv, gjorde att jag blev
                starkare både psykiskt och fysiskt. Oscar är en positiv person,
                kunnig PT som uppmuntrade mig och coacha mig så jag inte gav
                upp. Oscar har gjort styrketräning roligt och långvarigt.
              </p>
            </Testimonial>
          </div>

          <div className="">
            <Testimonial stars={5}>
              <p>
                När jag kom till Oscar så hade jag inga träningsrutiner och
                extrema ländryggssmärtor så jag inte kunde böja mig fram. Idag
                lever jag ett aktivt liv och ländryggen är inte längre ett
                problem.
              </p>
            </Testimonial>
          </div>

          <div className="">
            <Testimonial stars={5}>
              <p>
                Oscar har hjälpt mig, inte bara med att hitta ett sätt att träna
                effektivt på, men också coachat mig vad gäller kosthållning,
                livsplanering och stress. Efter bara en månad med Oscar som
                personlig tränare kände jag mig starkare, friskare och i bättre
                balans. Dessutom uppskattar jag den raka och ärliga
                kommunikationen som jag har med honom. Det är superkul att träna
                med Oscar och för mig har timmarna med honom blivit en enormt
                viktig del i min personliga utveckling.
              </p>
            </Testimonial>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
