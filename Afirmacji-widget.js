// Афірмації — віджет для Scriptable (iPhone)
// Як встановити: див. інструкцію. Цей файл повністю вставляється в новий скрипт у Scriptable.
// icon-color: pink; icon-glyph: heart;

// Посилання на сторінку з афірмаціями. Торкання віджета відкриває її.
// Залиште "" якщо сторінки ще немає.
const PAGE_URL = "https://lavok87.github.io/afirmacje/";

const LIB = {"confidence": [["Я впевнена в собі та своїх силах.", "Jestem pewna siebie i swoich możliwości."], ["Я заслуговую на повагу і поважаю себе сама.", "Zasługuję na szacunek i sama siebie szanuję."], ["Мій голос важливий, і я не боюся його використовувати.", "Mój głos jest ważny i nie boję się go używać."], ["Я довіряю своїй інтуїції.", "Ufam swojej intuicji."], ["Я сильна, навіть коли мені важко.", "Jestem silna, nawet gdy jest mi trudno."], ["Я гідна всього найкращого.", "Jestem warta wszystkiego, co najlepsze."], ["Я ухвалюю рішення спокійно й упевнено.", "Podejmuję decyzje spokojnie i pewnie."], ["Мені не потрібне чиєсь схвалення, щоб бути собою.", "Nie potrzebuję niczyjej aprobaty, żeby być sobą."], ["Я вмію відстоювати свої межі.", "Potrafię bronić swoich granic."], ["Я пишаюся тим, якою я стала.", "Jestem dumna z tego, kim się stałam."], ["Кожен виклик робить мене сміливішою.", "Każde wyzwanie czyni mnie odważniejszą."], ["Я сяю такою, яка я є.", "Błyszczę taka, jaka jestem."], ["Я здатна на більше, ніж думаю.", "Stać mnie na więcej, niż myślę."], ["Я приймаю компліменти з вдячністю.", "Przyjmuję komplementy z wdzięcznością."], ["Я сама для себе найкраща подруга й опора.", "Jestem dla siebie najlepszą przyjaciółką i oparciem."]], "productivity": [["Я зосереджена на тому, що справді важливо.", "Jestem skupiona na tym, co naprawdę ważne."], ["Я роблю крок за кроком, і цього достатньо.", "Idę krok po kroku i to wystarczy."], ["Сьогодні я зроблю головне без поспіху.", "Dziś zrobię to, co najważniejsze, bez pośpiechu."], ["Я організована, і мій день під моїм контролем.", "Jestem zorganizowana, a mój dzień jest pod moją kontrolą."], ["Я вмію відпочивати, щоб працювати з радістю.", "Umiem odpoczywać, żeby pracować z radością."], ["Я легко починаю справи й доводжу їх до кінця.", "Łatwo zaczynam sprawy i doprowadzam je do końca."], ["Мій час цінний, і я використовую його мудро.", "Mój czas jest cenny i wykorzystuję go mądrze."], ["Я кажу «ні» всьому, що відволікає мене від цілей.", "Mówię „nie” wszystkiemu, co odciąga mnie od celów."], ["Кожна маленька справа наближає мене до великої мети.", "Każde małe zadanie przybliża mnie do wielkiego celu."], ["Я працюю з натхненням і легкістю.", "Pracuję z inspiracją i lekkością."], ["Я спокійна й зібрана навіть у насичений день.", "Jestem spokojna i skupiona nawet w intensywny dzień."], ["Я пишаюся кожним завершеним завданням.", "Jestem dumna z każdego ukończonego zadania."], ["Мені вистачає часу на все, що для мене важливо.", "Mam czas na wszystko, co jest dla mnie ważne."], ["Я обираю прогрес, а не ідеальність.", "Wybieram postęp, a nie perfekcję."], ["Я спрямовую свою енергію туди, куди хочу.", "Kieruję swoją energię tam, gdzie chcę."]], "mindfulness": [["Я тут і зараз, і ця мить належить мені.", "Jestem tu i teraz, a ta chwila należy do mnie."], ["Я дихаю глибоко й відпускаю напругу.", "Oddycham głęboko i uwalniam napięcie."], ["Я помічаю красу в простих речах.", "Dostrzegam piękno w prostych rzeczach."], ["Мої думки — лише думки, і я обираю, яким із них вірити.", "Moje myśli to tylko myśli i sama wybieram, w które wierzyć."], ["Я спокійна, як тиха вода.", "Jestem spokojna jak cicha woda."], ["Я прислухаюся до свого тіла й дбаю про нього.", "Słucham swojego ciała i dbam o nie."], ["Я приймаю свої почуття без осуду.", "Przyjmuję swoje uczucia bez oceniania."], ["Я проживаю цей день повільно й усвідомлено.", "Przeżywam ten dzień powoli i świadomie."], ["Мені не потрібно поспішати, я все встигну.", "Nie muszę się spieszyć, ze wszystkim zdążę."], ["Я відпускаю те, чого не можу змінити.", "Odpuszczam to, czego nie mogę zmienić."], ["Кожен вдих наповнює мене спокоєм.", "Każdy oddech napełnia mnie spokojem."], ["Я присутня у своєму житті.", "Jestem obecna w swoim życiu."], ["Тиша всередині мене — моя сила.", "Cisza we mnie jest moją siłą."], ["Я обираю спокій замість тривоги.", "Wybieram spokój zamiast niepokoju."], ["Я м'яко повертаю себе в теперішню мить.", "Łagodnie wracam do chwili obecnej."]], "selfLove": [["Я люблю себе такою, яка я є.", "Kocham siebie taką, jaka jestem."], ["Я достатня. Завжди.", "Jestem wystarczająca. Zawsze."], ["Я ставлюся до себе з ніжністю й турботою.", "Traktuję siebie z czułością i troską."], ["Моє тіло прекрасне і заслуговує на любов.", "Moje ciało jest piękne i zasługuje na miłość."], ["Я дозволяю собі відпочивати без почуття провини.", "Pozwalam sobie odpoczywać bez poczucia winy."], ["Я пробачаю собі помилки й вчуся на них.", "Wybaczam sobie błędy i uczę się na nich."], ["Я гарна і зсередини, і зовні.", "Jestem piękna w środku i na zewnątrz."], ["Я заслуговую на ту любов, яку дарую іншим.", "Zasługuję na miłość, którą daję innym."], ["Мої потреби важливі.", "Moje potrzeby są ważne."], ["Я обираю бути до себе доброю.", "Postanawiam być dla siebie dobra."], ["Я — найважливіша людина у своєму житті.", "Jestem najważniejszą osobą w swoim życiu."], ["Я дбаю про себе, бо я на це заслуговую.", "Dbam o siebie, bo jestem tego warta."], ["Я приймаю всі свої сторони.", "Akceptuję wszystkie swoje strony."], ["Я усміхаюся своєму відображенню.", "Uśmiecham się do swojego odbicia."], ["Мені добре й затишно із самою собою.", "Dobrze mi i przytulnie z samą sobą."]], "motivation": [["Сьогодні я роблю ще один крок уперед.", "Dziś robię kolejny krok naprzód."], ["Я сильніша за будь-які сумніви.", "Jestem silniejsza niż wszelkie wątpliwości."], ["У мене є все, щоб почати просто зараз.", "Mam wszystko, żeby zacząć już teraz."], ["Я не здаюся: я відпочиваю й іду далі.", "Nie poddaję się: odpoczywam i idę dalej."], ["Кожен день — це новий шанс.", "Każdy dzień to nowa szansa."], ["Я рішуча, наполеглива й смілива.", "Jestem zdecydowana, wytrwała i odważna."], ["Мої зусилля обов'язково дадуть результат.", "Moje starania na pewno przyniosą efekty."], ["Я перетворюю страх на енергію для дії.", "Zamieniam strach w energię do działania."], ["Я вже пройшла довгий шлях і пишаюся собою.", "Przeszłam już długą drogę i jestem z siebie dumna."], ["Труднощі роблять мене мудрішою.", "Trudności czynią mnie mądrzejszą."], ["Я сама створюю свої можливості.", "Sama tworzę swoje możliwości."], ["Мені під силу все, що я задумала.", "Jestem w stanie zrobić wszystko, co zaplanowałam."], ["Я надихаю себе та інших.", "Inspiruję siebie i innych."], ["Я обираю діяти, а не чекати.", "Wybieram działanie zamiast czekania."], ["Моя сила — у моїй наполегливості.", "Moja siła tkwi w mojej wytrwałości."]], "dreams": [["Мої мрії здійсненні, і я вже на шляху до них.", "Moje marzenia są w zasięgu ręki i już do nich zmierzam."], ["Я ясно бачу свої цілі.", "Wyraźnie widzę swoje cele."], ["Я дозволяю собі мріяти з розмахом.", "Pozwalam sobie marzyć z rozmachem."], ["Всесвіт підтримує мої мрії.", "Wszechświat wspiera moje marzenia."], ["Я гідна життя, про яке мрію.", "Jestem warta życia, o którym marzę."], ["Щодня я наближаюся до своєї мети.", "Każdego dnia zbliżam się do swojego celu."], ["Я вірю у своє майбутнє.", "Wierzę w swoją przyszłość."], ["Я відкрита для нових можливостей.", "Jestem otwarta na nowe możliwości."], ["Мої цілі надихають мене щоранку.", "Moje cele inspirują mnie każdego ranka."], ["Я створюю життя своєї мрії власними руками.", "Tworzę życie swoich marzeń własnymi rękami."], ["Те, чого я прагну, вже йде до мене.", "To, czego pragnę, już do mnie zmierza."], ["Я святкую кожен маленький успіх.", "Świętuję każdy mały sukces."], ["Я заслуговую на успіх і досягну його.", "Zasługuję na sukces i osiągnę go."], ["Я сміливо мрію і впевнено дію.", "Odważnie marzę i pewnie działam."], ["Моє майбутнє світле й сповнене радості.", "Moja przyszłość jest jasna i pełna radości."]], "gratitude": [["Я вдячна за цей новий день.", "Jestem wdzięczna za ten nowy dzień."], ["Моє життя сповнене маленьких чудес.", "Moje życie jest pełne małych cudów."], ["Я дякую своєму тілу за все, що воно для мене робить.", "Dziękuję swojemu ciału za wszystko, co dla mnie robi."], ["Я вдячна людям, які мене люблять.", "Jestem wdzięczna ludziom, którzy mnie kochają."], ["Життя прекрасне, і я насолоджуюся ним.", "Życie jest piękne i cieszę się nim."], ["Я помічаю добро навколо себе.", "Dostrzegam dobro wokół siebie."], ["У моєму житті багато любові й тепла.", "W moim życiu nie brakuje miłości i ciepła."], ["Я вдячна навіть за уроки, які було важко пройти.", "Jestem wdzięczna nawet za trudne lekcje."], ["Кожен день дарує мені привід усміхнутися.", "Każdy dzień daje mi powód do uśmiechu."], ["Я відкриваю серце радості.", "Otwieram serce na radość."], ["Я ціную те, що маю, і з радістю приймаю нове.", "Doceniam to, co mam, i z radością przyjmuję nowe."], ["Моє життя — це дарунок, і я проживаю його з любов'ю.", "Moje życie jest darem i przeżywam je z miłością."], ["Я щаслива бути собою.", "Jestem szczęśliwa, że jestem sobą."], ["Світ щедрий до мене, і я щедра до світу.", "Świat jest dla mnie hojny, a ja jestem hojna dla świata."], ["Сьогодні я обираю радість.", "Dziś wybieram radość."]]};
const THEMES = ["confidence","productivity","mindfulness","selfLove","motivation","dreams","gratitude"];
const TITLES = {
  confidence: ["Впевненість у собі", "Pewność siebie"],
  productivity: ["Продуктивність", "Produktywność"],
  mindfulness: ["Усвідомленість", "Uważność"],
  selfLove: ["Любов до себе", "Miłość do siebie"],
  motivation: ["Мотивація", "Motywacja"],
  dreams: ["Мрії та цілі", "Marzenia i cele"],
  gratitude: ["Вдячність і життя", "Wdzięczność i życie"]
};
// [світлий 1, світлий 2, акцент, темний 1, темний 2, акцент у темному]
const COLORS = {"confidence": ["#FDE8D2", "#F5BFA8", "#B8664A", "#423839", "#5f4946", "#d19c89"], "productivity": ["#FBF1DC", "#EDCBA4", "#946B40", "#42393a", "#5c4c45", "#b99f83"], "mindfulness": ["#E8F2E6", "#BFD9C5", "#55866A", "#3f393c", "#4f504e", "#90b09e"], "selfLove": ["#FCE1E4", "#F2AFBC", "#B85A70", "#42373b", "#5e444c", "#d194a2"], "motivation": ["#FDE4D6", "#F2A994", "#B5563D", "#423739", "#5e4340", "#cf9181"], "dreams": ["#EDE6F7", "#C9BAE8", "#7660AE", "#40373e", "#524858", "#a698ca"], "gratitude": ["#FFF3DB", "#F3D09F", "#9C7430", "#43393a", "#5e4e44", "#bfa578"]};
// Фони: [колір 1, колір 2, колір тексту]. "theme" — кольори теми афірмації, "photo" — своє фото.
const BACKGROUNDS = {
  theme:    { name: ["Кольори теми (змінюються)", "Kolory tematu (zmienne)"] },
  powder:   { name: ["Пудровий рожевий", "Pudrowy róż"], c: ["#FCE1E4", "#F2AFBC", "#57373d"] },
  peach:    { name: ["Персик", "Brzoskwinia"], c: ["#FDE8D2", "#F5BFA8", "#5a3426"] },
  lavender: { name: ["Лаванда", "Lawenda"], c: ["#EDE6F7", "#C9BAE8", "#3f3159"] },
  sage:     { name: ["Шавлія", "Szałwia"], c: ["#E8F2E6", "#BFD9C5", "#2f4a3a"] },
  sand:     { name: ["Пісок", "Piasek"], c: ["#FBF1DC", "#EDCBA4", "#4f3a22"] },
  sunset:   { name: ["Захід сонця", "Zachód słońca"], c: ["#F9C5B5", "#C99BD8", "#3d2433"] },
  night:    { name: ["Нічне небо", "Nocne niebo"], c: ["#2b2140", "#4a3466", "#f5e4f0"] },
  white:    { name: ["Білий", "Biały"], c: ["#FFFFFF", "#F6EFEF", "#3b2a2e"] },
  photo:    { name: ["Своє фото…", "Własne zdjęcie…"] }
};
// Шрифти, що підтримують українські та польські літери
const FONTS = {
  georgia:   { name: ["Класичний (Georgia)", "Klasyczna (Georgia)"], f: (n) => new Font("Georgia", n) },
  georgiaI:  { name: ["Класичний курсив", "Klasyczna kursywa"], f: (n) => new Font("Georgia-Italic", n) },
  times:     { name: ["Книжковий (Times)", "Książkowa (Times)"], f: (n) => new Font("TimesNewRomanPSMT", n) },
  avenir:    { name: ["Сучасний (Avenir)", "Nowoczesna (Avenir)"], f: (n) => new Font("AvenirNext-Medium", n) },
  light:     { name: ["Легкий тонкий", "Lekka cienka"], f: (n) => new Font("HelveticaNeue-Light", n) },
  rounded:   { name: ["Округлий", "Zaokrąglona"], f: (n) => Font.mediumRoundedSystemFont(n) },
  typewriter:{ name: ["Друкарська машинка", "Maszyna do pisania"], f: (n) => new Font("AmericanTypewriter", n) }
};
const SIZES = { s: [0.85, ["Менший", "Mniejszy"]], m: [1, ["Звичайний", "Normalny"]], l: [1.18, ["Більший", "Większy"]] };
const PHOTO = "afirmacji-tlo.jpg";

const SYMBOL = { confidence: "sun.max.fill", productivity: "checklist", mindfulness: "leaf.fill", selfLove: "heart.fill", motivation: "flame.fill", dreams: "moon.stars.fill", gratitude: "sparkles" };

// ---------- Налаштування (зберігаються в iCloud або на телефоні) ----------
const fm = (() => { try { return FileManager.iCloud(); } catch (e) { return FileManager.local(); } })();
const FILE = fm.joinPath(fm.documentsDirectory(), "afirmacji.json");

function loadState() {
  const base = { lang: Device.language().startsWith("pl") ? "pl" : "uk", themes: THEMES.slice(), includeCustom: true, custom: [], bg: "theme", font: "georgia", size: "m" };
  try {
    if (fm.fileExists(FILE)) {
      if (fm.isFileStoredIniCloud(FILE) && !fm.isFileDownloaded(FILE)) { /* буде завантажено нижче */ }
      return Object.assign(base, JSON.parse(fm.readString(FILE)));
    }
  } catch (e) {}
  return base;
}
function saveState(s) { fm.writeString(FILE, JSON.stringify(s)); }

// ---------- Той самий алгоритм, що й на сторінці ----------
function utf8(str) {
  const out = [];
  for (const ch of str) {
    let c = ch.codePointAt(0);
    if (c < 0x80) out.push(c);
    else if (c < 0x800) out.push(0xc0 | (c >> 6), 0x80 | (c & 63));
    else if (c < 0x10000) out.push(0xe0 | (c >> 12), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
    else out.push(0xf0 | (c >> 18), 0x80 | ((c >> 12) & 63), 0x80 | ((c >> 6) & 63), 0x80 | (c & 63));
  }
  return out;
}
function fnv(str) {
  let h = 0xcbf29ce484222325n;
  for (const b of utf8(str)) { h ^= BigInt(b); h = (h * 0x100000001b3n) & 0xffffffffffffffffn; }
  return h;
}
function dayNumber(d) {
  const a = new Date(2024, 0, 1), b = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  return Math.abs(Math.round((b - a) / 86400000));
}
function pool(s) {
  const L = s.lang === "pl" ? 1 : 0;
  const themes = s.themes && s.themes.length ? s.themes : THEMES;
  let list = [];
  for (const th of THEMES) if (themes.includes(th)) LIB[th].forEach((p, i) => list.push({ id: `${th}-${i}`, theme: th, text: p[L], custom: false }));
  if (s.includeCustom) for (const c of s.custom || []) list.push({ id: `custom-${c.id}`, theme: c.theme, text: c.text, custom: true });
  if (!list.length) LIB.selfLove.forEach((p, i) => list.push({ id: `selfLove-${i}`, theme: "selfLove", text: p[L], custom: false }));
  const h = new Map(list.map(x => [x.id, fnv(x.id)]));
  return list.sort((x, y) => (h.get(x.id) < h.get(y.id) ? -1 : h.get(x.id) > h.get(y.id) ? 1 : 0));
}
function affirmationFor(s, date) { const p = pool(s); return p[dayNumber(date) % p.length]; }

// ---------- Віджет ----------
const dyn = (l, d) => Color.dynamic(new Color(l), new Color(d));
const INK = dyn("#57373d", "#f5e4e2");
const INK_SOFT = dyn("#8d6c71", "#c4a7aa");

let CURRENT = null;
function serif(size) {
  const s = CURRENT || {};
  const f = FONTS[s.font] || FONTS.georgia;
  return f.f(Math.round(size * ((SIZES[s.size] || SIZES.m)[0])));
}
function photoPath() { return fm.joinPath(fm.documentsDirectory(), PHOTO); }

function buildWidget(s, family) {
  const now = new Date();
  const a = affirmationFor(s, now);
  const L = s.lang === "pl" ? 1 : 0;
  const c = COLORS[a.theme];
  CURRENT = s;
  const w = new ListWidget();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 30);
  w.refreshAfterDate = tomorrow;
  if (PAGE_URL) w.url = PAGE_URL;

  if (family === "accessoryInline") {
    w.addText(a.text);
    return w;
  }
  if (family === "accessoryRectangular") {
    const head = w.addText(L ? "Afirmacja dnia" : "Афірмація дня");
    head.font = Font.semiboldSystemFont(11);
    const t = w.addText(a.text);
    t.font = serif(13);
    t.minimumScaleFactor = 0.6;
    return w;
  }

  const g = new LinearGradient();
  g.locations = [0, 1];
  g.startPoint = new Point(0, 0);
  g.endPoint = new Point(1, 1);
  let ink = INK, inkSoft = INK_SOFT, accent = dyn(c[2], c[5]);
  const bg = BACKGROUNDS[s.bg] || BACKGROUNDS.theme;
  let photo = null;
  if (s.bg === "photo" && fm.fileExists(photoPath())) { try { photo = fm.readImage(photoPath()); } catch (e) {} }
  if (photo) {
    w.backgroundImage = photo;
    ink = Color.white(); inkSoft = new Color("#ffffff", 0.8); accent = new Color("#ffffff", 0.9);
  } else if (bg.c) {
    g.colors = [new Color(bg.c[0]), new Color(bg.c[1])];
    w.backgroundGradient = g;
    ink = new Color(bg.c[2]); inkSoft = new Color(bg.c[2], 0.7); accent = new Color(bg.c[2], 0.8);
  } else {
    g.colors = [dyn(c[0], c[3]), dyn(c[1], c[4])];
    w.backgroundGradient = g;
  }
  const small = family === "small";
  const large = family === "large" || family === "extraLarge";
  w.setPadding(small ? 14 : 18, 16, small ? 14 : 16, 16);

  const top = w.addStack();
  top.centerAlignContent();
  const sym = SFSymbol.named(SYMBOL[a.theme]);
  if (sym) {
    const img = top.addImage(sym.image);
    img.imageSize = new Size(12, 12);
    img.tintColor = accent;
    top.addSpacer(5);
  }
  if (!small) {
    const label = top.addText(TITLES[a.theme][L].toUpperCase());
    label.font = Font.boldSystemFont(10);
    label.textColor = accent;
  }
  top.addSpacer();

  w.addSpacer();
  const text = w.addText(a.text);
  text.font = serif(small ? 17 : large ? 28 : 21);
  text.textColor = ink;
  text.minimumScaleFactor = 0.5;
  if (!small) text.centerAlignText();
  w.addSpacer();

  if (!small) {
    const foot = w.addStack();
    foot.addSpacer();
    const df = new DateFormatter();
    df.locale = L ? "pl_PL" : "uk_UA";
    df.dateFormat = "EEEE, d MMMM";
    const d = foot.addText("♥  " + df.string(now));
    d.font = Font.mediumSystemFont(10);
    d.textColor = inkSoft;
    foot.addSpacer();
  }
  return w;
}

// ---------- Меню при запуску в додатку Scriptable ----------
async function menu(s) {
  while (true) {
    const L = s.lang === "pl" ? 1 : 0;
    const tr = (uk, pl) => (L ? pl : uk);
    const a = new Alert();
    a.title = tr("Афірмації", "Afirmacje");
    a.message = affirmationFor(s, new Date()).text;
    const items = [
      ["preview", tr("Показати віджет", "Pokaż widżet")],
      ["add", tr("Додати свою афірмацію", "Dodaj własną afirmację")],
      ["mine", tr("Мої афірмації", "Moje afirmacje") + ` (${s.custom.length})`],
      ["bg", tr("Фон", "Tło")],
      ["font", tr("Шрифт і розмір", "Czcionka i rozmiar")],
      ["themes", tr("Теми", "Tematy")],
      ["lang", tr("Мова: українська → польська", "Język: polski → ukraiński")],
      ["import", tr("Імпортувати зі сторінки (з буфера)", "Importuj ze strony (ze schowka)")]
    ];
    items.forEach(it => a.addAction(it[1]));
    a.addCancelAction(tr("Готово", "Gotowe"));
    const i = await a.presentSheet();
    if (i < 0 || i >= items.length) break;
    const act = items[i][0];

    if (act === "preview") {
      await buildWidget(s, "medium").presentMedium();
    } else if (act === "add") {
      const text = await askText(tr("Нова афірмація", "Nowa afirmacja"), "", tr("Я спокійна і щаслива", "Jestem spokojna i szczęśliwa"), tr);
      if (text) {
        const k = await pick(tr("Тема", "Temat"), THEMES.map(t => TITLES[t][L]), tr);
        s.custom.unshift({ id: UUID.string(), text, theme: THEMES[k] || "selfLove" });
        saveState(s);
        await info(tr("Збережено 💛", "Zapisano 💛"));
      }
    } else if (act === "mine") {
      if (!s.custom.length) { await info(tr("Своїх афірмацій поки немає.", "Nie ma jeszcze własnych afirmacji.")); continue; }
      const k = await pick(tr("Мої афірмації", "Moje afirmacje"), s.custom.map(c => c.text), tr);
      if (k < 0) continue;
      const item = s.custom[k];
      const d = await pick(item.text, [tr("Змінити текст", "Zmień tekst"), tr("Видалити", "Usuń")], tr);
      if (d === 0) {
        const text = await askText(tr("Редагування", "Edycja"), item.text, "", tr);
        if (text) { item.text = text; saveState(s); }
      } else if (d === 1) {
        s.custom.splice(k, 1); saveState(s);
      }
    } else if (act === "bg") {
      const keys = Object.keys(BACKGROUNDS);
      const k = await pick(tr("Фон віджета", "Tło widżetu"), keys.map(x => (s.bg === x ? "✓ " : "") + BACKGROUNDS[x].name[L]), tr);
      if (k < 0) continue;
      if (keys[k] === "photo") {
        try {
          const img = await Photos.fromLibrary();
          fm.writeImage(photoPath(), dimmed(img));
          s.bg = "photo";
        } catch (e) { continue; }
      } else {
        s.bg = keys[k];
      }
      saveState(s);
      await buildWidget(s, "medium").presentMedium();
    } else if (act === "font") {
      const keys = Object.keys(FONTS);
      const k = await pick(tr("Шрифт", "Czcionka"), keys.map(x => (s.font === x ? "✓ " : "") + FONTS[x].name[L]), tr);
      if (k < 0) continue;
      s.font = keys[k];
      const sk = Object.keys(SIZES);
      const z = await pick(tr("Розмір тексту", "Rozmiar tekstu"), sk.map(x => (s.size === x ? "✓ " : "") + SIZES[x][1][L]), tr);
      if (z >= 0) s.size = sk[z];
      saveState(s);
      await buildWidget(s, "medium").presentMedium();
    } else if (act === "themes") {
      const k = await pick(tr("Увімкнути / вимкнути тему", "Włącz / wyłącz temat"),
        THEMES.map(t => (s.themes.includes(t) ? "✓ " : "○ ") + TITLES[t][L]), tr);
      if (k < 0) continue;
      const t = THEMES[k];
      s.themes = s.themes.includes(t) ? s.themes.filter(x => x !== t) : s.themes.concat([t]);
      saveState(s);
    } else if (act === "lang") {
      s.lang = s.lang === "pl" ? "uk" : "pl";
      saveState(s);
    } else if (act === "import") {
      const raw = Pasteboard.paste() || "";
      try {
        const data = JSON.parse(raw);
        if (!data || data.afirmacji !== 1) throw new Error();
        s.lang = data.lang === "pl" ? "pl" : "uk";
        s.themes = (data.themes || []).filter(t => THEMES.includes(t));
        s.includeCustom = data.includeCustom !== false;
        s.custom = (data.custom || []).filter(c => c && c.text && THEMES.includes(c.theme));
        saveState(s);
        await info(tr("Готово! Імпортовано своїх афірмацій: ", "Gotowe! Zaimportowano własnych afirmacji: ") + s.custom.length);
      } catch (e) {
        await info(tr("У буфері немає коду. На сторінці відкрий «Мова» → «Копіювати код» і спробуй ще раз.",
                      "W schowku nie ma kodu. Na stronie otwórz „Język” → „Kopiuj kod” i spróbuj ponownie."));
      }
    }
  }
}

async function pick(title, options, tr) {
  const a = new Alert();
  a.title = title;
  options.forEach(o => a.addAction(o));
  a.addCancelAction(tr("Назад", "Wstecz"));
  const k = await a.presentSheet();
  return k >= 0 && k < options.length ? k : -1;
}

async function askText(title, value, placeholder, tr) {
  const q = new Alert();
  q.title = title;
  q.addTextField(placeholder, value);
  q.addAction(tr("Зберегти", "Zapisz"));
  q.addCancelAction(tr("Скасувати", "Anuluj"));
  if ((await q.present()) !== 0) return "";
  return q.textFieldValue(0).trim();
}

// Затемнює фото, щоб білий текст добре читався, і зменшує його для віджета
function dimmed(img) {
  const maxW = 1200;
  const k = Math.min(1, maxW / img.size.width);
  const size = new Size(Math.round(img.size.width * k), Math.round(img.size.height * k));
  const ctx = new DrawContext();
  ctx.size = size;
  ctx.opaque = true;
  ctx.respectScreenScale = false;
  ctx.drawImageInRect(img, new Rect(0, 0, size.width, size.height));
  ctx.setFillColor(new Color("#000000", 0.35));
  ctx.fillRect(new Rect(0, 0, size.width, size.height));
  return ctx.getImage();
}
async function info(text) { const a = new Alert(); a.message = text; a.addAction("OK"); await a.present(); }

// ---------- Запуск ----------
if (fm.fileExists(FILE) && typeof fm.downloadFileFromiCloud === "function") {
  try { await fm.downloadFileFromiCloud(FILE); } catch (e) {}
}
const state = loadState();
if (state.bg === "photo" && fm.fileExists(photoPath()) && typeof fm.downloadFileFromiCloud === "function") {
  try { await fm.downloadFileFromiCloud(photoPath()); } catch (e) {}
}
// Параметр віджета "uk" або "pl" примусово задає мову
const param = (args.widgetParameter || "").trim().toLowerCase();
if (param === "uk" || param === "pl") state.lang = param;

if (config.runsInWidget) {
  Script.setWidget(buildWidget(state, config.widgetFamily));
} else {
  await menu(state);
}
Script.complete();
