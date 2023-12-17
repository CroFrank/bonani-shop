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

const Term = () => {
  return (
    <div className="container px-4" style={{ maxWidth: "800px" }}>
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Cijene
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="small" className="font-normal text-gray-600">
              Sve cijene navedene su u eurima (€)
            </Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Način plaćanja
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              className="font-normal text-gray-600 leading-6"
            >
              <b>Uplatom na žiro-račun</b> nakon primitka narudžbe, na Vašu
              e-mail adresu ili nekim drugim putem poslat ćemo Vam ponudu s
              podacima o ukupnom iznosu narudžbe i broj našeg žiro-računa IBAN.
              Navedeni iznos potrebno je uplatiti na naš žiro-račun npr.
              virmanom, putem internetskog bankarstva i sl., a mi ćemo Vam nakon
              uplate poslati naručene proizvode i račun.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Rok za izradu
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="small" className="font-normal text-gray-600">
              Obrt Bonani se obvezuje u najkraćem mogućem roku izraditi
              proizvod, ali ne duže od 20 dana nakon vidljive uplate na račun za
              isti proizvod.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Preuzimanje robe
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="small" className="font-normal text-gray-600">
              Nakon što Vas obrt Bonani obavijesti da je proizvod napravljen,
              isti možete preuzeti na adresi Hećimovićeva 3, 10000 Zagreb u
              prethodno dogovorenom terminu u roku od 14 dana. Ako je dogovorena
              isporuka putem pošte ili Tiska, obrt Bonani će proizvod nakon
              izrade poslati u najkraćem mogućem roku, ali ne duže od 3 radna
              dana.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Povrat robe
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              className="font-normal text-gray-600 leading-6"
            >
              Kupac ima pravo na povratak robe u roku od 14, četrnaest, dana od
              dana dostave proizvoda Kupcu na adresu. Kupac je dužan obavjestiti
              o povratku robe prije isteka roka za povrat i to pismeno putem
              elektronske pošte na XXXXXXXXXXXXXXXX. U slučaju povrata robe,
              robu je potrebno vratiti neoštećenu, u nepromijenjenoj količini i
              popraćenu kopijom računa. Kupac je odgovoran za svako umanjenje
              vrijednosti proizvoda koje je rezultat rukovanja proizvodom. Kupac
              mora izvršiti povrat proizvoda bez odgađanja, a najkasnije u roku
              od 14 dana od dana obavjesti o povratku. Troškove povrata
              proizvoda snosi Kupac. Ukoliko se nedvojbeno utvrdi da je
              reklamacija na proizvod neopravdana ili da je do neispravnosti
              naručenog proizvoda došlo zbog neadekvatnog rukovanja ili uporabe,
              tada obrt Bonani nije dužan izvršiti povrat novca ili dostaviti
              zamjenski proizvod. Reklamirani proizvod bit će vraćen Kupacu o
              njegovom trošku uz pisano objašnjenje razloga neprihvaćanja
              zahtjeva za povratom ili zamjenom. Obrt Bonani će izvršiti povrat
              plaćenog tek nakon što mu proizvod bude vraćen odnosno, nakon što
              mu Kupac dostavi dokaz da je proizvod na isti način na koji mu je
              dostavljen, poslao natrag. Ukoliko je došlo do pogreške te kupac
              nije dobio naručeni proizvod, dužan je navedeno prijaviti pismeno
              putem elektronske pošte na XXXXXXXXXXXXXXXXXXX u roku od osam, 8,
              dana. U tom slučaju, Kupac vraća krivo isporučen proizvod na
              trošak obrta Bonani koji se obvezuje isporučiti naručeni proizvod
              ili izvršiti povrat novca, sukladno zahtjevu Kupaca, u roku od
              petnaest, 15, dana od zaprimljenog krivo isporučenog artikla.
              Ukoliko Kupac nije dobio naručeni i plaćeni proizvod, dužan je to
              prijaviti u roku od osam, 8, dana od dana očekivanog dolaska
              naručenog proizvoda pismeno putem elektronske pošte na
              XXXXXXXXXXXXXX. Sve eventualne sporove Kupac i obrta Bonani
              rješavat će primjenom Zakona o zaštiti potrošača i Zakona o
              obveznim odnosima.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Izjava o privatnosti
            </Typography>
          </TimelineHeader>
          <TimelineBody>
            <Typography
              variant="small"
              className="font-normal text-gray-600 leading-6"
            >
              Svi podaci o korisnicama i kupcima strogo se čuvaju i dostupni su
              samo djelatnicima, koji će ih koristiti isključivo za potrebe
              ispunjavanja narudžbi i drugu potrebnu komunikaciju. Korisnikovi
              podaci neće ni u kojem slučaju biti predani trećoj strani i/ili
              neovlaštenim osobama.
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};
export default Term;
