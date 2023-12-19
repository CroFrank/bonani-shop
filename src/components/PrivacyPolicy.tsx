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

const PrivacyPolicy = () => {
  return (
    <div className="container px-4" style={{ maxWidth: "800px" }}>
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Politika privatnosti
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="small" className="font-normal text-gray-600">
              Poštujemo Vašu privatnost, razumijemo njenu važnost i koliko Vam
              je stalo znati kako se Vaše informacije koriste. Ova pravila
              objašnjavaju kada, zašto i kako prikupljamo osobne podatke od
              osoba koje kupuju kod nas, posjete našu web stranicu, ispune
              kontakt obrazac u svrhu postavljanja upita, kontaktiraju nas putem
              email-a. Politika privatnosti se primjenjuje na sve osobne podatke
              korisnika koje prikupljamo i obrađujemo, izravno ili putem svojih
              partnera. Osobni podatak je svaki podatak koji se odnosi na
              fizičku osobu čiji je identitet utvrđen ili se može utvrditi,
              izravno ili neizravno. Obrada podataka je bilo koja radnja
              izvršena na osobnim podacima, poput primjerice prikupljanja,
              pohrane, upotrebe, uvida i prijenosa osobnih podataka. Ova
              Politika se ne primjenjuje na anonimne podatke. Anonimni podatak
              je podatak koji se ne može povezati s određenom fizičkom osobom.
              Poštujemo privatnost svojih korisnika i posjetitelja svojih
              internetskih stranica. Bonani može u skladu sa zakonom prikupljati
              određene podatke o korisnicima dobivene tijekom korištenja
              internetskih stranica putem kolačića (cookies), koji ne sadrže
              osobne podatke, te IP adrese koje su automatski zabilježene u
              zapisima pristupa. Isti služe da bi web stranica radila optimalno.
              Blokiranje kolačića je moguće, nakon čega ćete i dalje moći
              pregledavati stranicu, no neke njezine mogućnosti neće Vam biti
              dostupne. Vaši podaci obrađivat će se u svrhu vršenja ugovorenih
              usluga, pružanja informacija o našim ponudama, novostima i
              događanjima i promocijama.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Prikupljamo slijedeće osobne podatke:
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              className="font-normal text-gray-600 leading-6"
            >
              • Ime i prezime • Adresa • e-mail • OIB • Kontakt broj •
              Fotografije
            </Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Osobne podatke prikupljamo u određenu i zakonitu svrhu:
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="small" className="font-normal text-gray-600">
              Za potrebe vlastitih evidencija i pružanja drugih usluga,
              stvaranja baze podataka o kupcima, te unapređenja usluga. Navedene
              podatke dalje ne obrađujemo na način koji nije u skladu sa svrhom
              u koju su prikupljeni, osim ako nije drugačije propisano zakonom
              ili na temelju privole korisnika. Sukladno Uredbi o mjerama
              zaštite osobnih podataka (GDPR – General Data Protection
              Regulation) na vaš zahtjev omogućiti će vam se uvid u sve vaše
              osobne podatke kojima raspolažemo, načinu obrade te mogućnosti
              ograničenja obrade, izmjene ili brisanja istih. Kontaktirajte nas
              putem broja telefona +385 97 678 5381 ili putem elektroničke pošte
              na shop.bonani@gmail.com. Zaštita privatnosti vaših podataka je
              trajna. Poduzimamo sve mjere potrebne za zaštitu istih sukladno
              važećoj regulativi i dobrim praksama. Osobne podatke obrađujemo na
              siguran način, uključujući zaštitu od neovlaštene ili nezakonite
              obrade te od gubitka.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Zaštita vaših osobnih podataka znači da:
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography variant="small" className="font-normal text-gray-600">
              Vaše podatke nećemo koristiti ni za jednu drugu svrhu od one koja
              je ovdje navedena. Vaš kontakt i osobne podatke nećemo dati bilo
              kojoj trećoj strani osim onih kojima je po zakonu Bonani dužan
              ustupiti takve podatke. Vaš kontakt i osobni podaci mogu se
              otkriti trećoj strani samo na vaš zahtjev (pravo na prijenos) ili
              uz sudski nalog. Prikupljamo samo one osobne podatke koji su nam
              dobrovoljno dostavljeni. Ne uvjetujemo pristup našim stranicama
              dostavom podataka, te ne tražimo da otkrijete više podataka no što
              je doista potrebno za izvršenje naručenih usluga i proizvoda.
              Osobne podatke pohranjujemo i obrađujemo samo onoliko dugo koliko
              je potrebno za izvršenje određene legitimne svrhe, osim ako
              važećim propisima nije za pojedinu svrhu predviđeno duže vrijeme
              čuvanja. U slučaju davanja dozvole za primanje obavijesti i
              korisnih informacija, podatke čuvamo onoliko dugo dok se dozvola
              ne povuče.
            </Typography>
          </TimelineBody>
        </TimelineItem>

        <TimelineItem>
          <TimelineHeader className="h-3">
            <TimelineIcon />
            <Typography variant="h6" color="blue-gray" className="leading-none">
              Svaki naš korisnik u skladu s GDPR uredbom ima određena prava:
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography
              variant="small"
              className="font-normal text-gray-600 leading-6"
            >
              Pravo na prigovor – Korisnik ima pravo uložiti prigovor na obrade
              podataka, osim ako je drugačije propisano zakonom. Pravo na
              pristup – Korisnik ima pravo dobiti potvrdu o obradi osobnih
              podataka ispitanika, kao i pristup istima sukladno Uredbi. c)
              Pravo na brisanje – Korisnik ima pravo tražiti brisanje osobnih
              podataka koji se odnose na njega bez nepotrebnog odgađanja i pod
              uvjetima navedenima u važećim propisima o zaštiti podataka. d)
              Pravo na ispravak – Korisnik ima pravo tražiti ispravak netočnih
              osobnih podataka koji se odnose na istog. e) Pravo na prenosivost
              – Korisnik ima pravo dobiti podatke u računalno čitljivom obliku,
              ukoliko je to izvedivo. Svoja prava kupac može ostvariti kontaktom
              putem broja telefona +385 97 678 5381 ili putem elektroničke pošte
              na shop.bonani@gmail.com Povreda zaštite osobnih podataka Svaka
              osoba koja sumnja da je došlo do kršenja zaštite osobnih podataka
              zbog krađe ili izloženosti osobnih podataka, mora odmah prijaviti
              incident s opisom događaja. Kontaktirajte nas putem broja telefona
              +385 97 678 5381 ili putem elektroničke pošte na
              shop.bonani@gmail.com Obrt će istražiti sve prijavljene incidente
              kako bi potvrdio je li došlo do povrede zaštite osobnih podataka
              (data breach), te poduzeti sve zakonske mjere zaštite osobnih
              podataka. Društvo će obrađivati vaše podatke na zakonit i siguran
              način, Ukoliko smatrate da obrt postupa s Vašim podacima na
              nezakonit način te isto ne može riješiti u suradnji s obrtom,
              imate pravo uložiti prigovor Nadzornom tijelu (Agencija za zaštitu
              osobnih podataka – AZOP).
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};
export default PrivacyPolicy;
