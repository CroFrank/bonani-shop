import pkg from "@material-tailwind/react";
const {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} = pkg;

const AboutMe = () => {
  return (
    <div className="container px-4" style={{ maxWidth: "800px" }}>
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h5" color="blue-gray" className="leading-none">
              Naša Priča
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="paragraph"
              className="font-normal text-gray-600"
            >
              Obrt "Bonani" proizašao je iz strastvenog hobija prema lijepim
              stvarima i pažljivom radu na detaljima. Počelo je kao kreativan
              izraz ljubavi prema umjetnosti ukrašavanja, a danas je izraslo u
              uspješan posao. Ovaj obrt fokusira se na stvaranje cake toppera za
              torte i kolače te raznih kreacija namijenjenih za poklon ili ukras
              te konstantno donosimo nove proizvode i ideje. Od personaliziranih
              dekoracija za dom do posebnih događanja, Bonani nastoji
              unaprijediti ljepotu svakodnevnog života kroz estetski dovršene
              proizvode. Osnovna filozofija obrta je pridavanje važnosti svakom
              detalju i stvaranje predmeta koji ne samo da uljepšavaju prostor,
              već i izazivaju osjećaj sreće i zadovoljstva.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h5" color="blue-gray" className="leading-none">
              O Obrtu
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="paragraph"
              className="font-normal text-gray-600 leading-6"
            >
              Ukrase proizvodimo isključivo po narudžbi te nemamo niti jedan
              proizvod "na stanju". Ukrasi kao što su Cake Topperi su najčešće
              gotovi unutar jednog dana, ali ovisno o zahtjevnosti narudžbe i
              količini može potrajati i duže. Cijene proizvoda na stranici su
              već definirane, međutim kako se radi o ručnom i kreativnom radu za
              proizvode rađene po željama naknadno se definira cijena. Stojimo
              na raspolaganju za Vaše želje i prijedloge te ćemo se potruditi
              napraviti nabolje moguće za Vas.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h5" color="blue-gray" className="leading-none">
              O Proizvodima
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="paragraph"
              className="font-normal text-gray-600 leading-6"
            >
              Nakon što izaberete svoj proizvod ili dogovorimo izradu neke teme
              po Vaše
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};
export default AboutMe;
