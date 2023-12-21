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
    <div className="container px-4 text-justify" style={{ maxWidth: "800px" }}>
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
              className="font-normal text-gray-600 mt-5"
            >
              Pozdrav svima, moje ime je Bojana i drago mi je da Vam ovdje mogu
              pokazati svoje radove. Bonani je skraćenica punog imena moje
              sestre i mene, a nastao je kao dugogodišnji zajednički hobi gdje
              je bilo puno eksperimetiranja, a danas je to pravi posao!
              <br /> Moj poslovni put počeo je drugačije, ali želja za
              kreativnim izražavanjem, koja traje od osnovnoškolskih dana, bila
              je dovoljno jaka da kreativan izraz ljubavi prema izradi pretvorim
              u posao. A kad ti život da priliku da se baviš onime što voliš,
              zgrabiš ju!
              <br /> Tako je stvoren obrt Bonani. Strastveni hobi prema lijepim
              stvarima i pažljivom radu na detaljima doveo me do toga da imam
              priliku izrađivati upravo te lijepe stvari za život.
              <br /> Nije uvijek lako i ne ide uvijek sve po planu, međutim na
              kraju svake kiše dolazi sunce pa tako bez obzira na sve –
              nastavljam gledati prema suncu.
              <br /> Prvenstveno je fokus na izrađivanju Cake Toppera kao ukras
              za slastice za sve koji žele ukrasiti torte, kolače, muffine i
              slično. A obzirom na ljubav općenito prema kreativnosti,
              konstantno donosim nove proizvode i ideje. Bonani nastoji
              unaprijediti ljepotu svakodnevnog života. Osnovna filozofija obrta
              je pridavanje važnosti svakom detalju i stvaranje predmeta koji ne
              samo da uljepšavaju prostor, već i izazivaju osjećaj sreće i
              zadovoljstva za sve one kojima i najmanja sitnica može uljepšati
              dan.
              <br /> Veselim se svakom novom projektu i radujem se suradnji,
              <br />
              <br />
              <em className="font-letter text-3xl block text-right pr-10 md:pr-16">
                Bojana
              </em>
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
              className="font-normal text-gray-600 leading-6 mt-5"
            >
              Proizvode radim isključivo po narudžbi, u dogovoru s Vama stoga
              nemam proizvode „na stanju”.
              <br /> Rok isporuke ovisi o zahtjevnosti i količini, ali sve se
              definira prilikom same narudžbe. Naravno, ukoliko je iz bilo kojeg
              razloga nešto hitnije, svakako nastojim izaći u susret koliko god
              je to moguće. Tako je, osim dostave kurirskim službama, moguće i
              osobno preuzimanje na adresi Hećimovićeva ulica 3, Zagreb.
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
              className="font-normal text-gray-600 leading-6 mt-5"
            >
              Cijene proizvoda na stranici već su definirane, međutim kako se
              radi o ručnom i kreativnom radu, ukoliko želite neke promjene u
              izgledu i/ili veličini, prema tome se naknadno definira cijena.
              Napominjem kako je cilj napraviti najbolje moguće za Vas stoga se
              prilikom naručivanja dogovaramo o svim detaljima, roku isporuke i
              cijeni kako biste odmah dobili točne informacije o proizvodu kojeg
              naručujete.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};
export default AboutMe;
