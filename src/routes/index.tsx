import { createFileRoute } from "@tanstack/react-router";
import { Building2, Facebook, GraduationCap, Instagram, Mail, MapPin, Users } from "lucide-react";

import heroVideo from "../assets/coex.mp4";
import heroBanner from "../assets/hero-banner.jpg";
import groupPhoto from "../assets/coex.jpeg";
import alicjaTrybus from "../assets/alicja-trybus.jpg";
import barbaraFronkova from "../assets/barbara-fronkova.jpg";
import beataSikorova from "../assets/beata-sikorova.jpg";
import danielLacek from "../assets/daniel-lacek.jpg";
import ewaRylko from "../assets/ewa-rylko.jpg";
import irenaMedkova from "../assets/irena-medkova.jpg";
import jakubKadlubiec from "../assets/jakub-kadlubiec.jpg";
import jakubKawulok from "../assets/jakub-kawulok.jpg";
import janJursa from "../assets/jan-jursa.jpg";
import magdalenaCmiel from "../assets/magdalena-cmiel.jpg";
import marekSztula from "../assets/marek-sztula.jpg";
import marianStarzyk from "../assets/marian-starzyk.jpg";
import marianSztefek from "../assets/marian-sztefek.jpg";
import tomaszPilch from "../assets/tomasz-pilch.jpg";
import zbigniewGrochol from "../assets/zbigniew-grochol.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Coex Hrádek — Wspólnie dla naszej wioski" },
      {
        name: "description",
        content:
          "Zespół kandydatów Coex Hrádek. Wspólnie dla naszej wioski. Společně pro naši vesnici.",
      },
      { property: "og:title", content: "Coex Hrádek — Wspólnie dla naszej wioski" },
      {
        property: "og:description",
        content:
          "Zespół kandydatów Coex Hrádek. Wspólnie dla naszej wioski. Společně pro naši vesnici.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const programSections = [
  {
    icon: Building2,
    titlePl: "Modernizacja infrastruktury gminnej",
    titleCz: "Modernizace obecní infrastruktury",
    points: [
      { pl: "Rekonstrukcja mostu przez Olzę", cz: "Rekonstrukce mostu přes Olzu" },
      { pl: "Przygotowanie kanalizacji w centrum gminy", cz: "Příprava kanalizace v centru obce" },
      { pl: "Skuteczniejsze bariery przeciwhałasowe", cz: "Účinnější protihlukové bariéry" },
      {
        pl: "Sprawniejsze odśnieżanie dróg gminnych",
        cz: "Efektivnější zimní údržba obecních komunikací",
      },
    ],
  },
  {
    icon: GraduationCap,
    titlePl: "Szkolnictwo",
    titleCz: "Školství",
    points: [
      { pl: "Rekonstrukcja budynku czeskiej szkoły", cz: "Rekonstrukce budovy české školy" },
      { pl: "Budowa sali gimnastycznej", cz: "Vybudování školní tělocvičny" },
    ],
  },
  {
    icon: Users,
    titlePl: "Społeczność",
    titleCz: "Komunita",
    points: [
      {
        pl: "Wspieranie działalności miejscowych stowarzyszeń, organizacji i Kościołów",
        cz: "Podpora činnosti místních spolků, organizací a církví",
      },
      { pl: "Dbałość o lokalne tradycje i język", cz: "Péče o lokální tradice a jazyk" },
      { pl: "Wsparcie miejscowych przedsiębiorców", cz: "Podpora místních živnostníků" },
      {
        pl: "Rozwój sportu i aktywnego stylu życia",
        cz: "Rozvoj sportu a aktivního životního stylu",
      },
    ],
  },
];

const members = [
  {
    image: marekSztula,
    name: "Marek Sztuła",
    descPl:
      "Gródek to mój dom. Miejsce, w którym mieszkam z rodziną, dorastają moje dzieci i na którego przyszłości naprawdę mi zależy. Od wielu lat zawodowo pracuję w dużej międzynarodowej firmie, gdzie kieruję zespołami w kilku krajach Europy i odpowiadam za ludzi, wyniki oraz ważne decyzje. To doświadczenie nauczyło mnie słuchać, szukać rozwiązań i przede wszystkim doprowadzać sprawy do końca. Swoje doświadczenie, energię i zdrowy rozsądek chcę wykorzystać również dla Gródku. Bez wielkich obietnic – za to poprzez konkretną pracę i widoczne efekty. Chcę się zabrać za remont czeskiej szkoły.",
    descCz:
      "Hrádek je můj domov. Místo, kde žiji se svou rodinou, kde vyrůstají moje děti a na jehož budoucnosti mi opravdu záleží. Už řadu let pracuji ve velké mezinárodní společnosti, kde vedu týmy v několika evropských zemích a nesu odpovědnost za lidi, výsledky i důležitá rozhodnutí. Tato zkušenost mě naučila naslouchat, hledat řešení a především dotahovat věci do konce. Své zkušenosti, energii a zdravý rozum chci využít také pro Hrádek. Bez velkých slibů – zato konkrétní prací a výsledky, které budou vidět. Chci se pustit do rekonstrukce české školy.",
  },
  {
    image: jakubKawulok,
    name: "Mgr. Jakub Kawulok",
    descPl:
      "Mam 44 lata, żonę oraz dwójkę dzieci. Z zawodu jestem prawnikiem, obecnie pracuję jako kierownik działu kadr w Hucie Trzyniec. Praca w samorządzie jest dla mnie sposobem na zmienianie naszej wioski, aby żyło się nam tutaj wszystkim fajnie. Doświadczenie, pracowitość, odpowiedzialność. Oferuję konkretne rozwiązania.",
    descCz:
      "Je mi 44 let, mám manželku a dvě děti. Povoláním jsem právník, nyní pracuji jako vedoucí osobního oddělení v Třineckých železárnách. Práce v samosprávě je pro mě prostředkem, jak měnit naši obec tak, aby se nám všem tady žilo fajn. Zkušenosti, pracovitost, zodpovědnost. Nabízím vám skutečná řešení.",
  },
  {
    image: jakubKadlubiec,
    name: "MUDr. Jakub Kadłubiec",
    descPl:
      "Mam 41 lat, z zawodu jestem chirurgiem w Szpitalu Trzyniec. Uwielbiam góry, sport i przyrodę. Wraz z żoną 10 lat temu wybudowaliśmy w Gródku dom, w którym dorastają nasi trzej synowie. Chcę, żeby nasza gmina była dla naszych dzieci miejscem, do którego zawsze będą chciały wracać. Wierzę, że wspólnie możemy takie miejsce stworzyć. Chcę wspierać aktywność i zdrowy styl życia.",
    descCz:
      "Je mi 41 let a pracuji jako chirurg v Nemocnici Třinec. Miluji hory, sport a přírodu. Společně s manželkou jsme před 10 lety postavili v Hrádku dům, ve kterém vyrůstají naši tři synové. Chci, aby naše obec byla pro naše děti místem, kam se budou vždy rády vracet. Věřím, že takové místo můžeme společně vytvořit. Chci podporovat aktivní a zdravý životní styl.",
  },
  {
    image: marianStarzyk,
    name: "MDDr. Marian Starzyk, MBA",
    descPl:
      "Jestem przekonany, że prawdziwy rozwój zawsze niesie ze sobą decyzje – niektóre popularne, inne mniej. Jednak w ciągu ostatnich dziesięciu lat nie przypominam sobie ani jednej ważnej decyzji w Gródku, która wywołałaby poważną debatę lub nieporozumienie. I to właśnie sprawia, że czuję, że jesteśmy być może zbyt ostrożni i nie idziemy naprzód tak, jak moglibyśmy. Jako dentysta, który zbudował i prowadzi klinikę stomatologiczną, mam doświadczenie w biznesie, zarządzaniu ludźmi i biurokracji. Wiem, że aby coś się zmieniło i lepiej funkcjonowało, nie wystarczy tylko o tym mówić – trzeba wziąć odpowiedzialność i podejmować decyzje. Chciałbym wykorzystać to doświadczenie również w Gródku. Wierzę, że życie tutaj może być jeszcze lepsze.",
    descCz:
      "Je mi 45 let a kromě let strávených studiem žiji celý život v Hrádku. Vidím, jak se naše obec mění, ale také kde podle mě zůstává stát na místě. Jsem přesvědčený, že skutečný rozvoj s sebou vždy přináší rozhodnutí – některá populární, jiná méně. Za posledních deset let si ale nevzpomínám na zásadní rozhodnutí v Hrádku, které by vyvolalo větší diskusi nebo nesouhlas. A právě to ve mně vyvolává pocit, že jsme možná až příliš opatrní a neposouváme se dopředu tak, jak bychom mohli. Jako zubní lékař, který vybudoval a vede zubní kliniku, mám zkušenosti s podnikáním, vedením lidí i byrokracií. Vím, že když se má něco změnit a fungovat lépe, nestačí o tom jen mluvit – je potřeba převzít odpovědnost a rozhodovat. Tyto zkušenosti bych rád využil i pro Hrádek. Protože věřím, že se u nás může žít ještě lépe.",
  },
  {
    image: danielLacek,
    name: "MUDr. Daniel Lacek",
    descPl:
      "W tym roku obchodziłem 40. urodziny i przez prawie całe swoje życie, z wyjątkiem krótkich przerw, spędziłem w Gródku. Po ukończeniu studiów medycznych podjąłem pracę na oddziale chirurgicznym w trzynieckim szpitalu, gdzie pracuję do dziś. Uwielbiam chodzić w góry, podróżować, jeździć na rowerze i ogólnie spędzać czas w przyrodzie. Wraz z żoną wychowujemy trójkę dzieci i chcę, żeby Gródek był atrakcyjnym i bezpiecznym miejscem dla młodych. Chcę gminy atrakcyjnej dla młodzieży, bo młodzi to nasza przyszłość.",
    descCz:
      "Letos jsem oslavil 40. narozeniny a téměř celý svůj život, s výjimkou několika krátkých přestávek, jsem strávil v Hrádku. Po absolvování studia medicíny jsem nastoupil na chirurgické oddělení třinecké nemocnice, kde pracuji dodnes. Rád chodím do hor, cestuji, jezdím na kole a obecně trávím čas v přírodě. Společně s manželkou vychováváme tři děti a chci, aby byl Hrádek atraktivním a bezpečným místem pro mladé. Chci obec, která bude atraktivní pro mladé, protože mladí jsou naše budoucnost.",
  },
  {
    image: magdalenaCmiel,
    name: "Mgr. Magdalena Ćmiel",
    descPl:
      "Mam 38 lat. Wraz z mężem i dwójką dzieci mieszkam w Gródku od 12 lat. Ukończyłam socjologię na Uniwersytecie Jagiellońskim w Krakowie. Pracowałam w mediach, a obecnie pracuję w szkolnictwie. Moją pasją są ruch i ludzie. Cieszy mnie praca społeczna oraz organizowanie najróżniejszych wydarzeń. Od 2023 roku jestem prezeską MK PZKO w Gródku. Dla mnie ważne jest współdziałanie, bez różnicy narodowości czy wyznania.",
    descCz:
      "Je mi 38 let. Spolu s manželem a dvěma dětmi žiji v Hrádku již 12 let. Vystudovala jsem sociologii na Jagellonské univerzitě v Krakově. Pracovala jsem v médiích a v současné době působím ve školství. Mými vášněmi jsou pohyb a lidé. Baví mě společenská práce a organizování nejrůznějších akcí. Od roku 2023 jsem předsedkyní MK PZKO v Hrádku. Je pro mě důležité spolupracovat a spojovat lidi bez ohledu na národnost nebo vyznání.",
  },
  {
    image: janJursa,
    name: "Jan Jursa",
    descPl:
      "Mam na imię Jasio, mam 44 lat. Jestem mężem i tatą dwóch synów. Lubię pracę z ludźmi, chętnie się uczę, uprawiam sport, podróżuję i lubię wspólne wyjazdy. Najbardziej jednak cenię sobie czas spędzony z rodziną. Ważną częścią mojego życia jest wiara w Jezusa Chrystusa, służba w Kościele i pomaganie innym. Zależy mi na tym, by nasza gmina była bezpieczna.",
    descCz:
      "Jmenuji se Jasio, je mi 44 let. Jsem manželem a tátou dvou synů. Baví mě práce s lidmi, rád studuji, sportuji, cestuji a podnikám výlety. Nejraději však trávím čas se svou rodinou. Důležitou součástí mého života je víra v Ježíše Krista, služba v církvi a pomoc druhým. Záleží mi na tom, aby naše obec byla bezpečná.",
  },
  {
    image: tomaszPilch,
    name: "Ing. Tomasz Pilch",
    descPl:
      "Mam 34 lata, wraz z żoną i dwójką dzieci mieszkamy w Gródku. Pracuję w branży IT jako programista, współpracuję z klientami po całym świecie. Lubię doskonalić swoje umiejętności, spędzać czas ze swoimi dziećmi, a także udzielać się w PZKO, w którym od kilkunastu lat jestem wiceprezesem. Bez lokalnych przedsiębiorców gmina stoi w miejscu.",
    descCz:
      "Je mi 34 let a společně s manželkou a dvěma dětmi žijeme v Hrádku. Pracuji v oboru IT jako programátor a spolupracuji s klienty po celém světě. Rád zdokonaluji své dovednosti, trávím čas se svými dětmi a také se angažuji v PZKO, kde jsem již více než deset let místopředsedou. Bez místních podnikatelů se obec nemůže rozvíjet.",
  },
  {
    image: barbaraFronkova,
    name: "Bc. Barbara Fronková",
    descPl:
      "Mam 32 lata. Od kilku lat pracuję w trzynieckim szpitalu jako asystentka farmaceutyczna. Jestem mamą trójki dzieci i to właśnie rodzina jest dla mnie najważniejsza. Wspólnie spędzamy czas, chodzimy w góry, jeździmy na rowerach i troszczymy się o zwierzęta. Jestem również członkinią miejscowej ochotniczej straży pożarnej. W parafii ewangelickiej angażuję się w pracę z dziećmi i pomagam w szkółce niedzielnej. Lubię być blisko ludzi i angażować się w sprawy naszej społeczności. Chcę gminy bez hałasu, marzą mi się bardziej efektywne barierki przeciwhałasowe.",
    descCz:
      "Je mi 32 let. Již několik let pracuji v třinecké nemocnici jako farmaceutická asistentka. Jsem maminkou tří dětí a nejraději trávím volný čas s rodinou. Chodíme na hory, jezdíme na kole a staráme se o zvířata. Jsem členkou místního sboru dobrovolných hasičů. V evangelickém sboru se věnuji práci s dětmi a pomáhám v nedělní škole. Ráda jsem mezi lidmi a aktivně se zapojuji do života naší obce. Chci obec s menším hlukem a lepší protihlukovou ochranou.",
  },
  {
    image: marianSztefek,
    name: "Marian Sztefek",
    descPl:
      "Mam 45 lat, w Gródku mieszkam przez całe swoje życie. Jestem ojcem dwu dziewczynek, uwielbiam wycieczki w góry z rodziną i kolegami, jazdę na rowerze i pracę w ogrodzie. Chcę, aby nasza gmina była zimą dobrze i na czas odśnieżana.",
    descCz:
      "Je mi 45 let, v Hrádku žiji celý svůj život. Jsem otcem dvou holčiček. Mám rád výlety do hor s rodinou a kamarády, jízdu na kole a práci na zahradě. Chci, aby naše obec byla i v zimě dobře a včas udržovaná.",
  },
  {
    image: alicjaTrybus,
    name: "Mgr. Alicja Trybuś",
    descPl:
      "Na co dzień pracuję jako nauczycielka w miejscowej gródeckiej szkole. Wolny czas najchętniej spędzam na pieszych wycieczkach, odkrywaniu nowych smaków i nadrabianiu ulubionych seriali. Relaksuję się przy układaniu puzzli lub czytaniu dobrej książki. Chcę współpracy międzypokoleniowej.",
    descCz:
      "Pracuji jako učitelka v místní hrádecké škole. Ve volném čase ráda chodím na výlety, objevuji nové chutě a sleduji oblíbené seriály. Relaxuji skládáním puzzlí a čtením knih. Záleží mi na mezigenerační spolupráci.",
  },
  {
    image: ewaRylko,
    name: "Mgr. Ewa Ryłko",
    descPl:
      "Jestem mamą trzech córek, nauczycielką jogi i kaligrafii. Fascynują mnie historia, dawne pismo i literatura. Cenię sobie kontakt z ludźmi i lubię angażować się w to, co dzieje się wokół mnie. Chcę gminy pielęgnującej tradycję i język.",
    descCz:
      "Jsem mámou tří dcer, učitelkou jógy a kaligrafie. Fascinuje mě historie, staré písmo a literatura. Velmi si cením kontaktu s lidmi a ráda se zapojuji do dění kolem sebe. Chci obec, která pečuje o své tradice a jazyk.",
  },
  {
    image: beataSikorova,
    name: "MUDr. Beata Sikorová",
    descPl:
      "Mam 42 lata i jestem mamą dwójki dzieci. Pracuję jako zastępca ordynatora na oddziale dziecięcym w szpitalu w Trzyńcu. W wolnym czasie najchętniej wybieram się w góry, jeżdżę na rowerze oraz oglądam mecze piłkarskie i hokejowe. Dialog i troska o ludzi w potrzebie – bez tego ani rusz.",
    descCz:
      "Je mi 42 let a jsem mámou dvou dětí. Pracuji jako zástupkyně primáře na dětském oddělení v nemocnici v Třinci. Ve volném čase nejraději vyrážím do hor, jezdím na kole a sleduji fotbalové a hokejové zápasy. Naslouchat lidem a pomáhat tam, kde je potřeba – to je pro mě důležité.",
  },
  {
    image: zbigniewGrochol,
    name: "Zbigniew Grochol",
    descPl:
      "Mam 56 lat, z zawodu jestem elektrykiem. Najchętniej spędzam czas w ogródku, lubię majsterkować i pracować z drewnem. Stawiać czoła problemom – tego się trzymam.",
    descCz:
      "Je mi 56 let, jsem vyučený elektrikář. Nejraději trávím čas na zahradě, jsem kutil a rád pracuji se dřevem. Čelit problémům – toho se držím.",
  },
  {
    image: irenaMedkova,
    name: "Irena Medková",
    descPl:
      "Od ponad 20 lat prowadzę w Gródku sklep wielobranżowy. Lubię podróżować, ale najbardziej cieszy mnie czas spędzany z wnukami. Chcę zatroszczyć się o naszych seniorów w gminie.",
    descCz:
      "Již více než 20 let provozuji v Hrádku obchod se smíšeným zbožím. Ráda cestuji, ale nejvíce mě těší čas strávený s vnoučaty. Chci, aby se naši senioři v obci cítili dobře a měli potřebnou péči.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-navy">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="font-display text-lg font-bold tracking-tight text-white">
            Coex<span className="text-gold"> ·</span> Hrádek
          </a>
          <nav className="hidden items-center gap-5 text-sm font-medium text-white/70 lg:flex">
            <a className="transition hover:text-gold" href="#hasla">
              Wartości / Hodnoty
            </a>
            <a className="transition hover:text-gold" href="#program">
              Program
            </a>
            <a className="transition hover:text-gold" href="#zespol">
              Kandydaci / Kandidáti
            </a>
            <a className="transition hover:text-gold" href="#kontakt">
              Kontakt
            </a>
          </nav>
          <a
            href="#kontakt"
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-navy transition hover:bg-sky"
          >
            Napisz / Napište
          </a>
        </div>
      </header>

      {/* Hero — full-bleed banner */}
      <section id="top" className="relative min-h-[30vh] overflow-hidden md:min-h-[60vh]">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={heroBanner}
          aria-hidden="true"
          disablePictureInPicture
          className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/75 to-navy/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-navy/30" />

        <div className="relative z-10 mx-auto flex min-h-[30vh] max-w-6xl flex-col justify-center px-5 py-24 md:min-h-[60vh] md:py-32">
          <p className="eyebrow text-gold">Zespół kandydatów · Tým kandidátů</p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl font-bold leading-[0.95] tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
            Wspólnie
            <span className="block text-gold">Společně</span>
            <span className="block text-sky/90">Po naszymu</span>
          </h1>
          <div className="mt-8 h-px w-48 rule-gold" />
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/90">
            <span className="block">Z energią i zapałem dla Gródka</span>
            <span className="block text-sky/80">S energií a chutí pro Hrádek</span>
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#program"
              className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-navy transition hover:bg-sky"
            >
              Nasz program / Náš program
            </a>
            <a
              href="#zespol"
              className="rounded-full border border-primary-foreground/30 bg-primary-foreground/10 px-7 py-3 text-sm font-semibold text-primary-foreground backdrop-blur-sm transition hover:bg-primary-foreground/20"
            >
              Kandydaci / Kandidáti
            </a>
          </div>
        </div>
      </section>

      {/* Hasła / Slova */}
      <section id="hasla" className="gradient-hero py-24">
        <div className="mx-auto max-w-6xl px-5">
          <p className="eyebrow text-gold">01 — Wartości / Hodnoty</p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl">
            Łączy nas
            <span className="block text-sky/70">Spojuje nás</span>
          </h2>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
            {[
              {
                text: "Wspólnie",
                tone: "light",
                size: "text-4xl sm:text-5xl",
                rotate: "-rotate-3",
              },
              { text: "Společně", tone: "gold", size: "text-3xl sm:text-4xl", rotate: "rotate-2" },
              {
                text: "Rozwój",
                tone: "soft",
                size: "text-2xl sm:text-3xl",
                rotate: "-rotate-6",
              },
              {
                text: "Rozvoj",
                tone: "gold",
                size: "text-3xl sm:text-4xl",
                rotate: "rotate-5",
              },
              {
                text: "Zaufanie",
                tone: "light",
                size: "text-4xl sm:text-5xl",
                rotate: "-rotate-2",
              },
              {
                text: "Důvěra",
                tone: "soft",
                size: "text-2xl sm:text-3xl",
                rotate: "rotate-3",
              },
              {
                text: "Otwartość",
                tone: "light",
                size: "text-3xl sm:text-4xl",
                rotate: "-rotate-4",
              },
              {
                text: "Otevřenost",
                tone: "gold",
                size: "text-4xl sm:text-5xl",
                rotate: "rotate-2",
              },
              {
                text: "Współpraca",
                tone: "soft",
                size: "text-2xl sm:text-3xl",
                rotate: "-rotate-1",
              },
              {
                text: "Spolupráce",
                tone: "soft",
                size: "text-2xl sm:text-3xl",
                rotate: "rotate-4",
              },
              {
                text: "Szacunek",
                tone: "light",
                size: "text-3xl sm:text-4xl",
                rotate: "-rotate-5",
              },
              { text: "Respekt", tone: "gold", size: "text-2xl sm:text-3xl", rotate: "rotate-1" },
              { text: "Sercym", tone: "soft", size: "text-3xl sm:text-4xl", rotate: "-rotate-2" },
              {
                text: "Dlo dalszych generacji",
                tone: "light",
                size: "text-2xl sm:text-3xl",
                rotate: "rotate-3",
              },
            ].map((word, index) => (
              <span
                key={index}
                className={`inline-block whitespace-nowrap font-display font-bold ${word.size} ${word.rotate} ${
                  word.tone === "gold"
                    ? "text-gold"
                    : word.tone === "soft"
                      ? "text-sky/60"
                      : "text-primary-foreground"
                }`}
                style={{ textShadow: "0 6px 26px rgba(6, 40, 30, 0.55)" }}
              >
                {word.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Program — editorial numbered list */}
      <section id="program" className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-2xl">
            <p className="eyebrow text-trust">02 — Program</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary">
              Trzy priorytety
              <span className="block text-muted-foreground">Tři priority</span>
            </h2>
          </div>

          <div className="mt-14 border-t border-border">
            {programSections.map((section, index) => (
              <article
                key={index}
                className="group grid gap-5 border-b border-border py-9 md:grid-cols-[auto_0.8fr_1.4fr] md:items-start md:gap-10"
              >
                <span className="font-display text-3xl font-bold text-gold md:w-16">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="flex items-start gap-3">
                  <section.icon className="mt-1 h-5 w-5 shrink-0 text-trust" />
                  <div>
                    <h3 className="font-display text-xl font-semibold text-primary">
                      {section.titlePl}
                    </h3>
                    <p className="text-sm text-muted-foreground">{section.titleCz}</p>
                  </div>
                </div>
                <ul className="space-y-5">
                  {section.points.map((point) => (
                    <li key={point.pl} className="border-l-2 border-gold/50 pl-4">
                      <p className="font-medium text-foreground">{point.pl}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{point.cz}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Group photo — full bleed */}
      <section className="relative">
        <img
          src={groupPhoto}
          alt="Wspólne zdjęcie zespołu Coex Hrádek"
          className="h-[420px] w-full object-cover md:h-[560px]"
          loading="lazy"
          width={1600}
          height={1066}
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-5 pb-12">
            <p className="eyebrow text-gold">03 — Razem / Společně</p>
            <p className="mt-3 max-w-xl font-display text-2xl font-semibold text-primary-foreground sm:text-3xl">
              Zespół kandydatów
              <span className="block text-sky/75">Tým kandidátů</span>
            </p>
          </div>
        </div>
      </section>

      {/* Members */}
      <section id="zespol" className="bg-secondary/40 py-24">
        <div className="mx-auto max-w-6xl px-5">
          <div className="max-w-4xl">
            <p className="eyebrow text-trust">04 — Kandydaci / Kandidáti</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight text-primary">
              Poznajcie ludzi, którym zależy na naszej wiosce
              <span className="block text-muted-foreground">
                Poznejte lidi, kterým záleží na naší obci
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <article key={index} className="group">
                <div className="relative overflow-hidden rounded-sm">
                  <img
                    src={member.image}
                    alt={`Zdjęcie: ${member.name}`}
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={640}
                    height={800}
                  />
                  <span className="absolute left-0 top-0 bg-primary px-3 py-1 font-display text-xs font-semibold text-primary-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-4 h-px w-12 rule-gold" />
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">
                  {member.name}
                </h3>
                <p className="mt-3 text-sm italic text-foreground">{member.descPl}</p>
                <p className="mt-2 text-sm italic text-muted-foreground">{member.descCz}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="kontakt" className="bg-navy py-24 text-primary-foreground">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow text-gold">05 — Kontakt</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight">
              Bądźmy w kontakcie
              <span className="block text-sky/70">Buďme v kontaktu</span>
            </h2>
            <p className="mt-5 max-w-md text-primary-foreground/80">
              <span className="block">Śledź nas w mediach społecznościowych i napisz do nas.</span>
              <span className="block">Sledujte nás na sociálních sítích a napište nám.</span>
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <a
              href="https://www.instagram.com/coexhradek?stkn=MTZrMXplem93N2VnZw=="
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 border-b border-primary-foreground/20 py-4 text-lg font-medium transition hover:text-gold"
            >
              <span className="flex items-center gap-3">
                <Instagram className="h-5 w-5" /> Instagram
              </span>
              <span className="text-sm text-primary-foreground/60">@coexhradek</span>
            </a>
            <a
              href="https://www.facebook.com/share/1FUTXEVo11/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 border-b border-primary-foreground/20 py-4 text-lg font-medium transition hover:text-gold"
            >
              <span className="flex items-center gap-3">
                <Facebook className="h-5 w-5" /> Facebook
              </span>
              <span className="text-sm text-primary-foreground/60">/coexhradek</span>
            </a>
            <a
              href="mailto:coex-hradek@seznam.cz"
              className="flex items-center justify-between gap-4 border-b border-primary-foreground/20 py-4 text-lg font-medium transition hover:text-gold"
            >
              <span className="flex items-center gap-3">
                <Mail className="h-5 w-5" /> E-mail
              </span>
              <span className="text-sm text-primary-foreground/60">coex-hradek@seznam.cz</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-10 text-primary-foreground/70">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm md:flex-row">
          <p className="font-display text-base font-bold text-primary-foreground">Coex Hrádek</p>
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> Gródek, Czechy / Hrádek, Česko
          </p>
          <p>© {new Date().getFullYear()} Coex Hrádek</p>
        </div>
      </footer>
    </div>
  );
}
