/* ══════════════════════════════════════════
   Garyshker i18n — RU / KZ / EN
   Usage: add data-i18n="key" to any element
   ══════════════════════════════════════════ */

const TRANSLATIONS = {
  // ── NAV ──
  'nav.who':        { ru: 'Кто мы',              kz: 'Біз кімбіз',         en: 'Who We Are' },
  'nav.projects':   { ru: 'Наши проекты',        kz: 'Біздің жобалар',     en: 'Our Projects' },
  'nav.apply':      { ru: 'Получить помощь',     kz: 'Көмек алу',          en: 'Get Help' },
  'nav.support':    { ru: 'Поддержите нас', kz: 'Бізді қолдаңыз', en: 'Support Us' },
  'nav.contacts':   { ru: 'Контакты',             kz: 'Байланыс',           en: 'Contact' },
  'nav.cta':        { ru: 'Поддержать',          kz: 'Қолдау',             en: 'Donate' },

  // ── HOME HERO ──
  'home.hero.overline': { ru: 'Образовательное движение · Казахстан · с 2019', kz: 'Білім беру қозғалысы · Қазақстан · 2019 жылдан', en: 'Educational Movement · Kazakhstan · since 2019' },
  'home.hero.h1':   {
    ru: 'У мечтаний, как и у космоса, не должно быть <em>пределов</em>',
    kz: 'Арман да, ғарыш сияқты, шексіз болуы <em>керек</em>',
    en: 'Dreams, just like space, should have no <em>limits</em>'
  },
  'home.hero.h1a':  { ru: 'Каждый ребёнок', kz: 'Әрбір бала', en: 'Every child' },
  'home.hero.h1b':  { ru: 'заслуживает шанса', kz: 'мүмкіндікке лайық', en: 'deserves a chance' },
  'home.hero.sub':  { ru: 'Образовательное движение Казахстана', kz: 'Қазақстанның білім беру қозғалысы', en: 'Kazakhstan\'s Educational Movement' },
  'home.hero.btn1': { ru: 'Поддержите нас', kz: 'Бізді қолдаңыз', en: 'Support Us' },
  'home.hero.btn2': { ru: 'Узнать о нас',        kz: 'Біз туралы білу',    en: 'Learn About Us' },

  // ── HOME STATS ──
  'home.stats.overline': { ru: 'Влияние в цифрах', kz: 'Сандармен әсер', en: 'Impact in numbers' },
  'home.stats.l1':  { ru: 'Рюкзаков роздано', kz: 'Рюкзак таратылды', en: 'Backpacks distributed' },
  'home.stats.s1':  { ru: 'с 2019 года, по всей стране', kz: '2019 жылдан, бүкіл елде', en: 'since 2019, across the country' },
  'home.stats.l2':  { ru: 'Городов', kz: 'Қала', en: 'Cities' },
  'home.stats.s2':  { ru: 'по всему Казахстану', kz: 'бүкіл Қазақстан бойынша', en: 'across Kazakhstan' },
  'home.stats.l3':  { ru: 'Семей охвачено', kz: 'Отбасы қамтылды', en: 'Families reached' },
  'home.stats.s3':  { ru: 'YouTube + Instagram', kz: 'YouTube + Instagram', en: 'YouTube + Instagram' },
  'home.stats.l4':  { ru: 'Активных волонтёров', kz: 'Белсенді волонтерлер', en: 'Active volunteers' },
  'home.stats.s4':  { ru: 'шестой год движения', kz: 'қозғалыстың алтыншы жылы', en: 'sixth year of the movement' },
  'home.stats.cta': { ru: 'Поддержите нас', kz: 'Бізді қолдаңыз', en: 'Support Us' },

  // ── HOME WHY ──
  'home.why.overline': { ru: 'Почему мы существуем', kz: 'Біз неге бармыз', en: 'Why we exist' },
  'home.why.q': {
    ru: '70% школьников Казахстана учатся на казахском языке. При этом качественного образовательного контента на казахском почти не существует. Темы которые меняют жизнь — финансы, ментальное здоровье, права, критическое мышление — в школе либо не преподаются вовсе, либо преподаются формально. <span class="amber">Garyshker закрывает эту нишу.</span>',
    kz: 'Қазақстан мектеп оқушыларының 70% қазақ тілінде оқиды. Алайда қазақ тіліндегі сапалы білім беру мазмұны іс жүзінде жоқ. Өмірді өзгертетін тақырыптар — қаржы, психикалық денсаулық, құқықтар, сыни тұрғыдан ойлау — мектепте үйретілмейді немесе формальды түрде ғана өткізіледі. <span class="amber">Garyshker осы олқылықты жабады.</span>',
    en: '70% of Kazakhstan\'s students study in Kazakh. Yet quality educational content in Kazakh barely exists. Life-changing topics — finance, mental health, rights, critical thinking — are either not taught in school at all or taught formally. <span class="amber">Garyshker fills this gap.</span>'
  },

  // ── HOME DIRECTIONS ──
  'home.dir.overline': { ru: 'Направления', kz: 'Бағыттар', en: 'Programmes' },
  'home.dir.h2': {
    ru: 'Наши <em>направления</em>',
    kz: 'Біздің <em>бағыттарымыз</em>',
    en: 'What we <em>do</em>'
  },
  'home.dir.desc': { ru: 'Две работающие программы и четыре плана до 2030 года. Подача честная — без обещаний, которые мы не сможем выполнить.', kz: 'Екі жұмыс істейтін бағдарлама және 2030 жылға дейінгі төрт жоспар. Шынайы тұрғыдан — орындай алмайтын уәделерсіз.', en: 'Two active programmes and four plans to 2030. Honest approach — no promises we can\'t keep.' },
  'home.dir.h2a': { ru: 'Что мы', kz: 'Біз не', en: 'What we' },
  'home.dir.h2b': { ru: 'делаем', kz: 'жасаймыз', en: 'do' },

  // direction cards
  'home.dir.tag.active': { ru: 'Активно', kz: 'Белсенді', en: 'Active' },
  'home.dir.tag.planned': { ru: 'До 2030', kz: '2030 дейін', en: 'By 2030' },
  'home.dir.cosmosomke.name': {
    ru: 'Garyshker <em>Cosmosomke</em>',
    kz: 'Garyshker <em>Cosmosomke</em>',
    en: 'Garyshker <em>Cosmosomke</em>'
  },
  'home.dir.cosmosomke.desc': { ru: 'Рюкзаки для детей из социально уязвимых семей. Адресно на дом, с уважением к каждой семье.', kz: 'Әлеуметтік осал отбасылардағы балаларға арналған рюкзактар. Үйге дейін, әр отбасыға құрметпен.', en: 'Backpacks for children from vulnerable families. Delivered home directly, with respect for each family.' },
  'home.dir.cosmosomke.cta': { ru: 'Подробнее', kz: 'Толығырақ', en: 'Learn more' },
  'home.dir.media.name': {
    ru: 'Garyshker <em>Media</em>',
    kz: 'Garyshker <em>Media</em>',
    en: 'Garyshker <em>Media</em>'
  },
  'home.dir.media.desc': { ru: 'Образовательный контент на казахском — о темах, о которых молчат в школе.', kz: 'Мектепте айтылмайтын тақырыптар туралы қазақ тіліндегі білім беру мазмұны.', en: 'Educational content in Kazakh — on topics schools stay silent about.' },
  'home.dir.media.cta': { ru: 'Подробнее', kz: 'Толығырақ', en: 'Learn more' },
  'home.dir.synyptar.name': {
    ru: 'Garyshker <em>Сыныптар</em>',
    kz: 'Garyshker <em>Сыныптар</em>',
    en: 'Garyshker <em>Synyptar</em>'
  },
  'home.dir.synyptar.desc': { ru: 'Образовательные модули для школ — готовые программы на казахском бесплатно.', kz: 'Мектептерге арналған білім беру модульдері — қазақ тіліндегі дайын бағдарламалар тегін.', en: 'Educational modules for schools — ready-made programmes in Kazakh, free of charge.' },
  'home.dir.synyptar.cta': { ru: 'Подробнее', kz: 'Толығырақ', en: 'Learn more' },
  'home.dir.grant.name': {
    ru: 'Garyshker <em>Grant</em>',
    kz: 'Garyshker <em>Grant</em>',
    en: 'Garyshker <em>Grant</em>'
  },
  'home.dir.grant.desc': { ru: 'Гранты и менторство для молодёжи из регионов Казахстана.', kz: 'Қазақстан өңірлеріндегі жастарға арналған гранттар мен тәлімгерлік.', en: 'Grants and mentorship for youth from Kazakhstan\'s regions.' },
  'home.dir.grant.cta': { ru: 'Подробнее', kz: 'Толығырақ', en: 'Learn more' },
  'home.dir.chapters.name': {
    ru: 'Garyshker <em>Chapters</em>',
    kz: 'Garyshker <em>Chapters</em>',
    en: 'Garyshker <em>Chapters</em>'
  },
  'home.dir.chapters.desc': { ru: 'Студенческие клубы в университетах — среда для будущих лидеров движения.', kz: 'Университеттердегі студенттік клубтар — қозғалыстың болашақ көшбасшыларына арналған орта.', en: 'Student clubs at universities — a space for future movement leaders.' },
  'home.dir.chapters.cta': { ru: 'Подробнее', kz: 'Толығырақ', en: 'Learn more' },
  'home.dir.research.name': {
    ru: 'Garyshker <em>Research</em>',
    kz: 'Garyshker <em>Research</em>',
    en: 'Garyshker <em>Research</em>'
  },
  'home.dir.research.desc': { ru: 'Исследования о молодёжи Казахстана — данные для системных изменений.', kz: 'Қазақстан жастары туралы зерттеулер — жүйелі өзгерістерге арналған деректер.', en: 'Research on Kazakhstan\'s youth — data for systemic change.' },
  'home.dir.research.cta': { ru: 'Подробнее', kz: 'Толығырақ', en: 'Learn more' },

  // ── HOME STORY ──
  'home.story.overline': { ru: 'История', kz: 'Тарих', en: 'Story' },
  'home.story.name': { ru: 'Айгерим, 11 лет · Атырау', kz: 'Айгерім, 11 жаст · Атырау', en: 'Aigerim, 11 years old · Atyrau' },
  'home.story.q': {
    ru: 'Когда нам принесли рюкзак, она сказала: «Теперь я не буду стыдиться идти в школу». Это не просто рюкзак — это <em style="font-family: var(--font-serif); color: var(--amber);">достоинство</em>.',
    kz: 'Рюкзакты әкелгенде ол: «Енді мектепке баруға ұялмаймын» деді. Бұл жай рюкзак емес — бұл <em style="font-family: var(--font-serif); color: var(--amber);">қадір-қасиет</em>.',
    en: 'When we brought her the backpack, she said: "Now I won\'t be ashamed to go to school." It\'s not just a backpack — it\'s <em style="font-family: var(--font-serif); color: var(--amber);">dignity</em>.'
  },
  'home.story.cta': { ru: 'Читать историю', kz: 'Тарихты оқу', en: 'Read the story' },

  // ── HOME PARTNERS ──
  'home.partners.overline': { ru: 'Нам доверяют', kz: 'Бізге сенеді', en: 'They trust us' },

  // ── HOME EVENTS ──
  'home.events.overline': { ru: 'Новости', kz: 'Жаңалықтар', en: 'News' },
  'home.events.h2': {
    ru: 'Последние <em>события</em>',
    kz: 'Соңғы <em>оқиғалар</em>',
    en: 'Latest <em>events</em>'
  },
  'home.events.e1.date': { ru: '15 мая 2026', kz: '15 мамыр 2026', en: 'May 15, 2026' },
  'home.events.e1.title': { ru: 'Весенний сбор рюкзаков: итоги', kz: 'Көктемгі рюкзак жинау: қорытынды', en: 'Spring backpack drive: results' },
  'home.events.e2.date': { ru: '02 апреля 2026', kz: '02 сәуір 2026', en: 'April 2, 2026' },
  'home.events.e2.title': { ru: 'Как мы собрали 500 рюкзаков за один день', kz: 'Бір күнде 500 рюкзакты қалай жинадық', en: 'How we packed 500 backpacks in one day' },
  'home.events.e3.date': { ru: '18 марта 2026', kz: '18 наурыз 2026', en: 'March 18, 2026' },
  'home.events.e3.title': { ru: 'Garyshker Media: первый миллион просмотров', kz: 'Garyshker Media: бірінші миллион көрініс', en: 'Garyshker Media: first million views' },
  'home.events.cta': { ru: 'Смотреть все события', kz: 'Барлық оқиғаларды қарау', en: 'View all events' },

  // ── FOOTER ──
  'footer.tagline': { ru: 'У мечтаний, как и у космоса, не должно быть пределов.', kz: 'Арман да, ғарыш сияқты, шексіз болуы керек.', en: 'Dreams, just like space, should have no limits.' },
  'footer.sub':     { ru: 'Образовательное движение Казахстана с 2019.', kz: 'Қазақстанның білім беру қозғалысы, 2019 жылдан бастап.', en: 'Kazakhstan\'s educational movement since 2019.' },
  'footer.nav':     { ru: 'Навигация',  kz: 'Навигация', en: 'Navigation' },
  'footer.nav.who':     { ru: 'Кто мы',              kz: 'Біз кімбіз',         en: 'Who We Are' },
  'footer.nav.projects':{ ru: 'Наши проекты',        kz: 'Біздің жобалар',     en: 'Our Projects' },
  'footer.nav.apply':   { ru: 'Получить помощь',     kz: 'Көмек алу',          en: 'Get Help' },
  'footer.nav.support': { ru: 'Поддержите нас', kz: 'Бізді қолдаңыз', en: 'Support Us' },
  'footer.nav.contacts':{ ru: 'Контакты',       kz: 'Байланыс',     en: 'Contact' },
  'footer.social':  { ru: 'Соцсети', kz: 'Әлеуметтік желілер', en: 'Social Media' },
  'footer.reqs':    { ru: 'Реквизиты', kz: 'Деректемелер', en: 'Details' },
  'footer.legal':   { ru: 'ЧФ «Garyshker Foundation» · БИН 191240028548', kz: 'ЖҚ «Garyshker Foundation» · БСН 191240028548', en: 'Charitable Foundation «Garyshker Foundation» · TIN 191240028548' },
  'footer.copy':    { ru: '© Garyshker Foundation 2026 · Алматы', kz: '© Garyshker Foundation 2026 · Алматы', en: '© Garyshker Foundation 2026 · Almaty' },
  'footer.city':    { ru: 'Алматы, Казахстан', kz: 'Алматы, Қазақстан', en: 'Almaty, Kazakhstan' },
  'footer.cta.btn': { ru: 'Поддержите нас', kz: 'Бізді қолдаңыз', en: 'Support Us' },

  // ── ABOUT HERO ──
  'about.hero.overline': { ru: 'Кто мы', kz: 'Біз кімбіз', en: 'Who We Are' },
  'about.hero.h1': {
    ru: 'Тому, чему не учат <em>в школе</em>',
    kz: 'Мектепте үйретпейтін <em>заттар</em>',
    en: 'What they <em>don\'t teach</em> in school'
  },
  'about.hero.h1a': { ru: 'Движение, которое', kz: 'Мектепте', en: 'A movement built' },
  'about.hero.h1b': { ru: 'меняет образование', kz: 'үйретпейтін заттар', en: 'to change education' },
  'about.hero.p': { ru: 'Образовательное движение Казахстана с 2019 года.', kz: 'Қазақстанның білім беру қозғалысы, 2019 жылдан бастап.', en: 'Kazakhstan\'s educational movement since 2019.' },

  // ── ABOUT WHY ──
  'about.why.overline': { ru: 'Почему мы существуем', kz: 'Біз неге бармыз', en: 'Why we exist' },
  'about.why.h2': {
    ru: 'Тому, чему не учат <em>в школе</em>',
    kz: 'Мектепте үйретпейтін <em>заттар</em>',
    en: 'What they <em>don\'t teach</em> in school'
  },
  'about.why.p1': {
    ru: '<strong>70% школьников Казахстана учатся на казахском языке.</strong> При этом качественного образовательного контента на казахском почти не существует.',
    kz: '<strong>Қазақстан мектеп оқушыларының 70% қазақ тілінде оқиды.</strong> Алайда қазақ тіліндегі сапалы білім беру мазмұны іс жүзінде жоқ.',
    en: '<strong>70% of Kazakhstan\'s students study in Kazakh.</strong> Yet quality educational content in Kazakh barely exists.'
  },
  'about.why.p2': { ru: 'Темы которые меняют жизнь — финансы, ментальное здоровье, права, критическое мышление — в школе либо не преподаются вовсе, либо преподаются формально. Молодёжь страны вынуждена познавать мир через чужую культурную оптику.', kz: 'Өмірді өзгертетін тақырыптар — қаржы, психикалық денсаулық, құқықтар, сыни тұрғыдан ойлау — мектепте үйретілмейді немесе формальды түрде ғана өткізіледі. Елдің жастары әлемді бөтен мәдени призма арқылы тануға мәжбүр.', en: 'Life-changing topics — finance, mental health, rights, critical thinking — are either not taught in school at all or taught formally. The country\'s youth are forced to understand the world through another culture\'s lens.' },
  'about.why.p3': {
    ru: '<span class="amber">Garyshker закрывает эту нишу.</span>',
    kz: '<span class="amber">Garyshker осы олқылықты жабады.</span>',
    en: '<span class="amber">Garyshker fills this gap.</span>'
  },

  // ── ABOUT STORY ──
  'about.story.overline': { ru: 'История движения', kz: 'Қозғалыс тарихы', en: 'Movement history' },
  'about.story.h2': {
    ru: 'Как всё <em>началось</em>',
    kz: 'Бәрі қалай <em>басталды</em>',
    en: 'How it all <em>began</em>'
  },
  'about.story.p1': { ru: 'Garyshker начался с простого наблюдения: дети в Казахстане растут в неравных условиях. В 2019 году появилось движение — не как благотворительный фонд в классическом смысле, а как образовательная система.', kz: 'Garyshker қарапайым бақылаудан басталды: Қазақстандағы балалар тең емес жағдайда өседі. 2019 жылы қозғалыс пайда болды — классикалық қайырымдылық қоры ретінде емес, білім беру жүйесі ретінде.', en: 'Garyshker began with a simple observation: children in Kazakhstan grow up in unequal conditions. In 2019 the movement was born — not as a charitable foundation in the classic sense, but as an educational system.' },
  'about.story.p2': {
    ru: 'С одним убеждением: <strong>образование — это фундамент, который может изменить будущее целого поколения.</strong> Мы продолжаем выполнять свою миссию.',
    kz: 'Бір сенімге негізделген: <strong>білім — бүтін буынның болашағын өзгерте алатын іргетас.</strong> Біз өз миссиямызды орындауды жалғастырамыз.',
    en: 'With one conviction: <strong>education is the foundation that can change the future of an entire generation.</strong> We continue to fulfil our mission.'
  },

  // ── ABOUT FOUNDER ──
  'about.founder.overline': { ru: 'Основатель', kz: 'Негізін қалаушы', en: 'Founder' },
  'about.founder.h2': {
    ru: 'Кто за этим <em>стоит</em>',
    kz: 'Мұның артында <em>кім тұр</em>',
    en: 'The person <em>behind it</em>'
  },
  'about.founder.name': { ru: 'Биржан Шакарим', kz: 'Биржан Шакарим', en: 'Birzhan Shakarim' },
  'about.founder.role': { ru: 'Основатель Garyshker', kz: 'Garyshker негізін қалаушы', en: 'Founder of Garyshker' },
  'about.founder.p': { ru: 'Происходя из обычной семьи, с детства видел неравенство в доступе к качественному образованию. Верит что образование — фундаментальное направление, которое может позитивно изменить будущее казахстанских детей.', kz: 'Қарапайым отбасынан шыққан ол балалық шағынан сапалы білімге қол жеткізудегі теңсіздікті көрді. Білім — қазақстандық балалардың болашағын оң өзгерте алатын іргелі бағыт деп санайды.', en: 'From an ordinary family, he witnessed inequality in access to quality education from childhood. He believes that education is the fundamental direction that can positively change the future of Kazakhstani children.' },

  // ── ABOUT TEAM ──
  'about.team.overline': { ru: 'Команда', kz: 'Команда', en: 'Team' },
  'about.team.h2': {
    ru: 'Нас уже <em>много</em>',
    kz: 'Біз жеткілікті <em>көппіз</em>',
    en: 'We\'ve grown <em>strong</em>'
  },
  'about.team.p': { ru: 'Garyshker — это не офис и не список должностей. Это люди которые верят что образование меняет жизнь. Волонтёры, менторы, студенческие клубы, партнёры — все кто движется в одну сторону.', kz: 'Garyshker — бұл кеңсе де, лауазымдар тізімі де емес. Бұл білімнің өмірді өзгертетініне сенетін адамдар. Волонтерлер, тәлімгерлер, студенттік клубтар, серіктестер — барлығы бір бағытта қозғалады.', en: 'Garyshker is not an office or a list of positions. It\'s people who believe education changes lives. Volunteers, mentors, student clubs, partners — everyone moving in the same direction.' },
  'about.team.photo.cap': { ru: 'Фото с мероприятий', kz: 'Іс-шаралардан фото', en: 'Event photos' },

  // ── ABOUT REPORT ──
  'about.report.overline': { ru: 'Отчётность', kz: 'Есептілік', en: 'Accountability' },
  'about.report.h2': {
    ru: 'Каждый тенге отчитывается <em>публично</em>',
    kz: 'Әрбір теңге <em>ашық</em> есептеледі',
    en: 'Every tenge is accounted for <em>publicly</em>'
  },
  'about.report.p': { ru: 'Прозрачность — не обязанность, а наша позиция', kz: 'Ашықтық — міндет емес, біздің ұстанымымыз', en: 'Transparency is not an obligation — it\'s our position' },
  'about.report.stat.l1': { ru: 'Рюкзаков роздано', kz: 'Рюкзак таратылды', en: 'Backpacks distributed' },
  'about.report.stat.l2': { ru: 'Городов', kz: 'Қала', en: 'Cities' },
  'about.report.stat.l3': { ru: 'Партнёров', kz: 'Серіктестер', en: 'Partners' },
  'about.report.stat.l4': { ru: 'Сумма сборов', kz: 'Жинау сомасы', en: 'Total raised' },
  'about.report.income.h': { ru: 'Доходы', kz: 'Кірістер', en: 'Income' },
  'about.report.income.r1': { ru: 'Партнёрские взносы', kz: 'Серіктестік жарналар', en: 'Partner contributions' },
  'about.report.income.r2': { ru: 'Частные пожертвования', kz: 'Жеке қайырымдылық', en: 'Private donations' },
  'about.report.income.r3': { ru: 'Гранты', kz: 'Гранттар', en: 'Grants' },
  'about.report.income.r4': { ru: 'Итого', kz: 'Жиыны', en: 'Total' },
  'about.report.expense.h': { ru: 'Расходы', kz: 'Шығыстар', en: 'Expenses' },
  'about.report.expense.r1': { ru: 'Рюкзаки и канцелярия', kz: 'Рюкзактар мен кеңсе тауарлары', en: 'Backpacks and stationery' },
  'about.report.expense.r2': { ru: 'Логистика и доставка', kz: 'Логистика және жеткізу', en: 'Logistics and delivery' },
  'about.report.expense.r3': { ru: 'Операционные расходы', kz: 'Операциялық шығыстар', en: 'Operating costs' },
  'about.report.expense.r4': { ru: 'Итого', kz: 'Жиыны', en: 'Total' },
  'about.report.partners.h': { ru: 'Партнёры и спонсоры года', kz: 'Жылдың серіктестері мен демеушілері', en: 'Partners and sponsors of the year' },
  'about.report.download': { ru: 'Скачать PDF-отчёт', kz: 'PDF-есепті жүктеу', en: 'Download PDF report' },
  'about.report.note': { ru: 'Все цифры — только верифицированные данные.', kz: 'Барлық сандар — тек тексерілген деректер.', en: 'All figures are verified data only.' },

  // ── PROJECTS HERO ──
  'proj.hero.overline': { ru: 'Наши проекты', kz: 'Біздің жобалар', en: 'Our Projects' },
  'proj.hero.h1': {
    ru: 'Шесть направлений — <em>одна миссия</em>',
    kz: 'Алты бағыт — <em>бір миссия</em>',
    en: 'Six programmes — <em>one mission</em>'
  },
  'proj.hero.p': { ru: 'Две программы работают сейчас. Четыре запускаем до 2030 года.', kz: 'Екі бағдарлама қазір жұмыс істейді. Төртеуін 2030 жылға дейін іске қосамыз.', en: 'Two programmes are running now. Four launching by 2030.' },

  // ── PROJECTS ACTIVE ──
  'proj.active.title': {
    ru: 'Работают <em>сейчас</em>',
    kz: 'Қазір <em>жұмыс істейді</em>',
    en: 'Running <em>now</em>'
  },

  // COSMOSOMKE program
  'proj.cosmo.badge': { ru: '★ Активная программа', kz: '★ Белсенді бағдарлама', en: '★ Active programme' },
  'proj.cosmo.name': {
    ru: '<em>Cosmosomke</em> — первый шаг<br>в большой путь',
    kz: '<em>Cosmosomke</em> — үлкен жолдағы<br>бірінші қадам',
    en: '<em>Cosmosomke</em> — the first step<br>on a long journey'
  },
  'proj.cosmo.tagline': { ru: 'Ежегодная программа адресной помощи детям из социально уязвимых семей Казахстана', kz: 'Қазақстандағы әлеуметтік осал отбасылардың балаларына арнайы көмек беретін жыл сайынғы бағдарлама', en: 'Annual targeted support programme for children from socially vulnerable families in Kazakhstan' },
  'proj.cosmo.p': { ru: 'К 1 сентября каждый ребёнок получает рюкзак с полным набором канцелярии. Но за шесть лет мы поняли: рюкзак — это не финал, это начало. Сегодня Cosmosomke вырастает в нечто большее — каждый рюкзак становится точкой входа в образовательную экосистему фонда. QR-код внутри открывает доступ к контенту и сообществу Garyshker.', kz: '1 қыркүйекке қарай әрбір бала толық кеңсе жиынтығы бар рюкзак алады. Алты жыл ішінде біз түсіндік: рюкзак — соңы емес, басы. Бүгін Cosmosomke одан да үлкен нәрсеге айналуда — әрбір рюкзак қордың білім беру экожүйесіне кіру нүктесіне айналады. Ішіндегі QR-код Garyshker мазмұны мен қауымдастығына қол жеткізуді ашады.', en: 'By September 1st, every child receives a backpack with a full set of stationery. But over six years we understood: the backpack is not the finish line, it\'s the starting point. Today Cosmosomke is growing into something bigger — each backpack becomes an entry point into the foundation\'s educational ecosystem. A QR code inside opens access to Garyshker content and community.' },
  'proj.cosmo.stat.l1': { ru: 'Рюкзаков роздано', kz: 'Рюкзак таратылды', en: 'Backpacks distributed' },
  'proj.cosmo.stat.l2': { ru: 'Городов: Алматы, Атырау, Астана, Караганда, Актау', kz: 'Қала: Алматы, Атырау, Астана, Қарағанды, Ақтау', en: 'Cities: Almaty, Atyrau, Astana, Karaganda, Aktau' },
  'proj.cosmo.cta': { ru: 'Помочь собрать рюкзаки', kz: 'Рюкзак жинауға көмектесу', en: 'Help pack backpacks' },

  // MEDIA program
  'proj.media.badge': { ru: '★ Активная программа', kz: '★ Белсенді бағдарлама', en: '★ Active programme' },
  'proj.media.name': {
    ru: '<em>Garyshker Media</em> — витрина движения',
    kz: '<em>Garyshker Media</em> — қозғалыстың витринасы',
    en: '<em>Garyshker Media</em> — the movement\'s showcase'
  },
  'proj.media.tagline': { ru: 'Образовательный контент на казахском языке и главный инструмент фонда для партнёров, родителей и широкой аудитории', kz: 'Қазақ тіліндегі білім беру мазмұны және қордың серіктестерге, ата-аналарға және кең аудиторияға арналған негізгі құралы', en: 'Educational content in Kazakh and the foundation\'s primary tool for partners, parents and the wider audience' },
  'proj.media.p': { ru: 'Garyshker Media — это не просто страницы в соцсетях. Это инфраструктура доверия которая питает всё движение. Мы создаём контент по темам о которых молчат в школе: финансы, ментальное здоровье, права, карьера, идентичность. На языке на котором говорит большинство молодёжи страны. Без морализаторства — только честная информация.', kz: 'Garyshker Media — бұл жай ғана әлеуметтік желідегі беттер емес. Бұл бүкіл қозғалысты қоректендіретін сенім инфрақұрылымы. Біз мектепте айтылмайтын тақырыптар бойынша мазмұн жасаймыз: қаржы, психикалық денсаулық, құқықтар, мансап, ұлттық бірегейлік. Елдің жастарының көпшілігі сөйлейтін тілде. Насихатсыз — тек шынайы ақпарат.', en: 'Garyshker Media is not just social media pages. It\'s the trust infrastructure that powers the entire movement. We create content on topics schools stay silent about: finance, mental health, rights, career, identity. In the language most of the country\'s youth speaks. Without moralising — just honest information.' },
  'proj.media.stat.l1': { ru: 'Instagram', kz: 'Instagram', en: 'Instagram' },
  'proj.media.stat.l2': { ru: 'YouTube', kz: 'YouTube', en: 'YouTube' },
  'proj.media.stat.l3': { ru: 'Тематических направлений', kz: 'Тақырыптық бағыттар', en: 'Thematic directions' },
  'proj.media.cta': { ru: 'Смотреть контент', kz: 'Мазмұнды қарау', en: 'Watch content' },

  // ── PROJECTS PLANNED ──
  'proj.planned.overline': { ru: '2026 — 2030', kz: '2026 — 2030', en: '2026 — 2030' },
  'proj.planned.h2': {
    ru: 'Наш план <em>до 2030</em>',
    kz: 'Біздің <em>2030 жылға</em> дейінгі жоспар',
    en: 'Our plan <em>to 2030</em>'
  },
  'proj.planned.p': { ru: 'Четыре программы в разработке. Запускаем поэтапно.', kz: 'Төрт бағдарлама әзірленуде. Кезең-кезеңімен іске қосамыз.', en: 'Four programmes in development. Launching in stages.' },

  'proj.synyptar.badge': { ru: '◎ В разработке — старт 2026', kz: '◎ Әзірленуде — 2026 жылы іске қосу', en: '◎ In development — launching 2026' },
  'proj.synyptar.name': {
    ru: 'Garyshker <em>Сыныптар</em>',
    kz: 'Garyshker <em>Сыныптар</em>',
    en: 'Garyshker <em>Synyptar</em>'
  },
  'proj.synyptar.desc': { ru: 'Современные образовательные модули для школ', kz: 'Мектептерге арналған заманауи білім беру модульдері', en: 'Modern educational modules for schools' },
  'proj.synyptar.stats': { ru: 'Старт 2026 · 6 модулей · 25 000 учеников к 2030', kz: 'Старт 2026 · 6 модуль · 2030 жылға қарай 25 000 оқушы', en: 'Start 2026 · 6 modules · 25,000 students by 2030' },
  'proj.synyptar.cta': { ru: 'Подключить школу', kz: 'Мектепті қосу', en: 'Connect a school' },

  'proj.grant.badge': { ru: '◎ В разработке — план до 2030', kz: '◎ Әзірленуде — 2030 жылға дейінгі жоспар', en: '◎ In development — plan to 2030' },
  'proj.grant.name': {
    ru: 'Garyshker <em>Grant</em>',
    kz: 'Garyshker <em>Grant</em>',
    en: 'Garyshker <em>Grant</em>'
  },
  'proj.grant.desc': { ru: 'Гранты и менторская программа для молодёжи регионов', kz: 'Өңір жастарына арналған гранттар мен тәлімгерлік бағдарламасы', en: 'Grants and mentorship programme for regional youth' },
  'proj.grant.note': { ru: 'Детали программы уточняются', kz: 'Бағдарлама мәліметтері нақтылануда', en: 'Programme details are being finalised' },

  'proj.chapters.badge': { ru: '◎ В разработке — старт 2026', kz: '◎ Әзірленуде — 2026 жылы іске қосу', en: '◎ In development — launching 2026' },
  'proj.chapters.name': {
    ru: 'Garyshker <em>Chapters</em>',
    kz: 'Garyshker <em>Chapters</em>',
    en: 'Garyshker <em>Chapters</em>'
  },
  'proj.chapters.desc': { ru: 'Студенческие сообщества и среда для лидеров в университетах', kz: 'Университеттердегі студенттік қауымдастықтар мен көшбасшыларға арналған орта', en: 'Student communities and a space for leaders at universities' },
  'proj.chapters.stats': { ru: 'Старт 2026 · 15+ университетов к 2030', kz: 'Старт 2026 · 2030 жылға қарай 15+ университет', en: 'Start 2026 · 15+ universities by 2030' },
  'proj.chapters.cta': { ru: 'Присоединиться', kz: 'Қосылу', en: 'Join' },

  'proj.research.badge': { ru: '◎ В разработке — план до 2030', kz: '◎ Әзірленуде — 2030 жылға дейінгі жоспар', en: '◎ In development — plan to 2030' },
  'proj.research.name': {
    ru: 'Garyshker <em>Research</em>',
    kz: 'Garyshker <em>Research</em>',
    en: 'Garyshker <em>Research</em>'
  },
  'proj.research.desc': { ru: 'Исследования проблем и потребностей молодёжи Казахстана', kz: 'Қазақстан жастарының мәселелері мен қажеттіліктерін зерттеу', en: 'Research into the problems and needs of Kazakhstan\'s youth' },
  'proj.research.stats': { ru: '2028 — первый национальный доклад', kz: '2028 — бірінші ұлттық баяндама', en: '2028 — first national report' },

  // ── CONTACTS ──
  'contacts.hero.overline': { ru: 'Свяжитесь с нами', kz: 'Бізбен байланысыңыз', en: 'Get in Touch' },
  'contacts.hero.h1': { ru: 'Мы всегда <em>на связи</em>', kz: 'Біз әрқашан <em>байланыстамыз</em>', en: 'We\'re always <em>in touch</em>' },
  'contacts.hero.p': { ru: 'Вопросы, партнёрство, медиа — пишите нам.', kz: 'Сұрақтар, серіктестік, медиа — бізге жазыңыз.', en: 'Questions, partnerships, media — write to us.' },
  'contacts.email.label': { ru: 'Email', kz: 'Email', en: 'Email' },
  'contacts.address.label': { ru: 'Адрес', kz: 'Мекенжай', en: 'Address' },
  'contacts.address.value': { ru: 'Алматы, Казахстан', kz: 'Алматы, Қазақстан', en: 'Almaty, Kazakhstan' },
  'contacts.social.label': { ru: 'Соцсети', kz: 'Әлеуметтік желілер', en: 'Social media' },
  'contacts.legal.label': { ru: 'Реквизиты', kz: 'Деректемелер', en: 'Legal details' },
  'contacts.form.h2': { ru: 'Написать <em>нам</em>', kz: 'Бізге <em>жазу</em>', en: 'Write <em>to us</em>' },
  'contacts.form.sub': { ru: 'Ответим в течение 1–2 рабочих дней.', kz: '1–2 жұмыс күні ішінде жауап береміз.', en: 'We\'ll reply within 1–2 business days.' },
  'contacts.form.name': { ru: 'Имя', kz: 'Аты', en: 'Name' },
  'contacts.form.name.ph': { ru: 'Ваше имя', kz: 'Атыңыз', en: 'Your name' },
  'contacts.form.contact': { ru: 'Email или телефон', kz: 'Email немесе телефон', en: 'Email or phone' },
  'contacts.form.contact.ph': { ru: 'email@example.com или +7 ___', kz: 'email@example.com немесе +7 ___', en: 'email@example.com or +7 ___' },
  'contacts.form.topic': { ru: 'Тема обращения', kz: 'Өтінімнің тақырыбы', en: 'Subject' },
  'contacts.form.topic.ph': { ru: 'Выберите тему', kz: 'Тақырыпты таңдаңыз', en: 'Select subject' },
  'contacts.form.topic.1': { ru: 'Партнёрство', kz: 'Серіктестік', en: 'Partnership' },
  'contacts.form.topic.2': { ru: 'Медиа / пресса', kz: 'Медиа / баспасөз', en: 'Media / press' },
  'contacts.form.topic.3': { ru: 'Волонтёрство', kz: 'Волонтерлік', en: 'Volunteering' },
  'contacts.form.topic.4': { ru: 'Пожертвование', kz: 'Қайырымдылық', en: 'Donation' },
  'contacts.form.topic.5': { ru: 'Другое', kz: 'Басқа', en: 'Other' },
  'contacts.form.message': { ru: 'Сообщение', kz: 'Хабарлама', en: 'Message' },
  'contacts.form.message.ph': { ru: 'Расскажите подробнее...', kz: 'Толығырақ айтыңыз...', en: 'Tell us more...' },
  'contacts.form.submit': { ru: 'Отправить', kz: 'Жіберу', en: 'Send message' },
  'contacts.form.success': { ru: 'Спасибо! Мы получили ваше сообщение и скоро свяжемся с вами.', kz: 'Рақмет! Хабарламаңызды алдық, жақында хабарласамыз.', en: 'Thank you! We received your message and will get back to you soon.' },

  // ── SUPPORT HERO ──
  'sup.hero.overline': { ru: 'Поддержите нас', kz: 'Бізді қолдаңыз', en: 'Support Us' },
  'sup.hero.h1': {
    ru: 'Каждый тенге меняет<br><em>жизнь ребёнка</em>',
    kz: 'Әрбір теңге<br><em>баланың өмірін өзгертеді</em>',
    en: 'Every tenge changes<br><em>a child\'s life</em>'
  },
  'sup.hero.h1a': { ru: 'Каждый тенге', kz: 'Әрбір теңге', en: 'Every tenge' },
  'sup.hero.h1b': { ru: 'меняет жизнь ребёнка', kz: 'баланың өмірін өзгертеді', en: 'changes a child\'s life' },
  'sup.hero.p': { ru: 'Никаких посредников — только прямое действие.', kz: 'Ешқандай делдал жоқ — тек тікелей әрекет.', en: 'No intermediaries — only direct action.' },

  // ── DONATE BLOCK ──
  'sup.donate.overline': { ru: 'Донат', kz: 'Донат', en: 'Donate' },
  'sup.donate.h2': {
    ru: 'Поддержать <em>движение</em>',
    kz: '<em>Қозғалысты</em> қолдау',
    en: 'Support the <em>movement</em>'
  },
  'sup.donate.p': { ru: 'Каждый тенге идёт на образование детей. Никаких посредников — только прямое действие.', kz: 'Әрбір теңге балалардың білімін алуына жұмсалады. Ешқандай делдал жоқ — тек тікелей әрекет.', en: 'Every tenge goes to children\'s education. No intermediaries — only direct action.' },
  'sup.donate.toggle.once': { ru: 'Разовый донат', kz: 'Бір рет донат', en: 'One-time donation' },
  'sup.donate.toggle.monthly': { ru: 'Ежемесячная поддержка', kz: 'Ай сайынғы қолдау', en: 'Monthly support' },
  'sup.donate.d1': { ru: 'Канцтовары для одного ребёнка', kz: 'Бір балаға кеңсе тауарлары', en: 'Stationery for one child' },
  'sup.donate.d2': { ru: 'Полный рюкзак для одного ребёнка', kz: 'Бір балаға толық рюкзак', en: 'Full backpack for one child' },
  'sup.donate.d3': { ru: 'Рюкзаки для двух детей', kz: 'Екі балаға рюкзак', en: 'Backpacks for two children' },
  'sup.donate.d4': { ru: 'Рюкзаки для десяти детей', kz: 'Он балаға рюкзак', en: 'Backpacks for ten children' },
  'sup.donate.custom': { ru: 'Своя сумма', kz: 'Өз сомаңыз', en: 'Custom amount' },
  'sup.donate.custom.placeholder': { ru: 'Введите сумму, ₸', kz: 'Соманы енгізіңіз, ₸', en: 'Enter amount, ₸' },
  'sup.donate.pay.kaspi': { ru: 'Kaspi', kz: 'Kaspi', en: 'Kaspi' },
  'sup.donate.pay.card': { ru: 'Картой', kz: 'Карта арқылы', en: 'By card' },
  'sup.donate.cta': { ru: 'Поддержать', kz: 'Қолдау', en: 'Donate' },
  'sup.donate.reqs': { ru: 'Реквизиты: ЧФ «Garyshker Foundation» · IBAN KZ127225000038329758 · БИН 220940024982', kz: 'Деректемелер: ЖҚ «Garyshker Foundation» · IBAN KZ127225000038329758 · БСН 220940024982', en: 'Details: Charitable Foundation «Garyshker Foundation» · IBAN KZ127225000038329758 · TIN 220940024982' },

  // ── PARTNERSHIP BLOCK ──
  'sup.part.overline': { ru: 'Партнёрство', kz: 'Серіктестік', en: 'Partnership' },
  'sup.part.h2': {
    ru: 'Ваш бренд — часть образовательного <em>движения страны</em>',
    kz: 'Сіздің брендіңіз — елдің білім беру <em>қозғалысының</em> бөлігі',
    en: 'Your brand — part of the country\'s educational <em>movement</em>'
  },
  'sup.part.p': { ru: 'Партнёрство с Garyshker — это готовая ESG-история с измеримым результатом. Конкретные дети, конкретные регионы, реальные цифры. Мы открыты к разным форматам партнёрства в сфере образования — напишите нам и мы найдём то что подойдёт именно вам.', kz: 'Garyshker-мен серіктестік — бұл өлшенетін нәтижесі бар дайын ESG-тарих. Нақты балалар, нақты өңірлер, нақты сандар. Біз білім беру саласындағы серіктестіктің әртүрлі форматтарына ашықпыз — бізге жазыңыз, сізге дәл келетін нәрсені табамыз.', en: 'Partnership with Garyshker is a ready-made ESG story with measurable impact. Specific children, specific regions, real numbers. We\'re open to various partnership formats in education — write to us and we\'ll find what fits you best.' },
  'sup.part.perk1': { ru: 'Реальный измеримый импакт — конкретные дети, школы, регионы', kz: 'Нақты өлшенетін импакт — нақты балалар, мектептер, өңірлер', en: 'Real measurable impact — specific children, schools, regions' },
  'sup.part.perk2': { ru: 'Готовый медиаматериал для ESG-отчётности', kz: 'ESG-есептілік үшін дайын медиаматериал', en: 'Ready media material for ESG reporting' },
  'sup.part.perk3': { ru: 'Доступ к молодой казахскоязычной аудитории', kz: 'Жас қазақ тілді аудиторияға қол жеткізу', en: 'Access to a young Kazakh-speaking audience' },
  'sup.part.perk4': { ru: 'Часть истории которая меняет образование в Казахстане', kz: 'Қазақстандағы білімді өзгертетін тарихтың бір бөлігі', en: 'Part of the story that is changing education in Kazakhstan' },
  'sup.part.form.company': { ru: 'Название компании', kz: 'Компания атауы', en: 'Company name' },
  'sup.part.form.name': { ru: 'Имя и должность', kz: 'Аты-жөні және лауазымы', en: 'Name and position' },
  'sup.part.form.contact': { ru: 'Email / телефон', kz: 'Email / телефон', en: 'Email / phone' },
  'sup.part.form.comment': { ru: 'Комментарий', kz: 'Пікір', en: 'Comment' },
  'sup.part.form.comment.opt': { ru: '· необязательно', kz: '· міндетті емес', en: '· optional' },
  'sup.part.form.comment.placeholder': { ru: 'Какой формат партнёрства вас интересует?', kz: 'Серіктестіктің қандай форматы сізді қызықтырады?', en: 'Which partnership format are you interested in?' },
  'sup.part.form.btn': { ru: 'Обсудить партнёрство', kz: 'Серіктестікті талқылау', en: 'Discuss partnership' },
  'sup.part.success': { ru: '✓ Заявка отправлена. Мы свяжемся с вами в ближайшие дни.', kz: '✓ Өтінім жіберілді. Жақын күндерде сізбен байланысамыз.', en: '✓ Application sent. We will contact you within the next few days.' },

  // ── VOLUNTEER BLOCK ──
  'sup.vol.overline': { ru: 'Волонтёрство', kz: 'Волонтерлік', en: 'Volunteering' },
  'sup.vol.h2': {
    ru: 'Стать <em>волонтёром</em>',
    kz: '<em>Волонтер</em> болу',
    en: 'Become a <em>volunteer</em>'
  },
  'sup.vol.p': { ru: 'Garyshker — это люди. Если вы хотите быть частью движения — оставьте заявку.', kz: 'Garyshker — бұл адамдар. Егер сіз қозғалыстың бөлігі болғыңыз келсе — өтінім қалдырыңыз.', en: 'Garyshker is people. If you want to be part of the movement — leave an application.' },
  'sup.vol.skill.design.t': { ru: 'Дизайн', kz: 'Дизайн', en: 'Design' },
  'sup.vol.skill.design.d': { ru: 'создаём визуальный язык движения', kz: 'қозғалыстың визуалды тілін жасаймыз', en: 'we create the movement\'s visual language' },
  'sup.vol.skill.media.t': { ru: 'Фото и видео', kz: 'Фото және бейне', en: 'Photo and video' },
  'sup.vol.skill.media.d': { ru: 'документируем истории которые меняют жизнь', kz: 'өмірді өзгертетін тарихтарды жазып аламыз', en: 'we document stories that change lives' },
  'sup.vol.skill.text.t': { ru: 'Текст и контент', kz: 'Мәтін және мазмұн', en: 'Text and content' },
  'sup.vol.skill.text.d': { ru: 'рассказываем о том что важно', kz: 'маңызды заттар туралы айтамыз', en: 'we talk about what matters' },
  'sup.vol.skill.events.t': { ru: 'Организация мероприятий', kz: 'Іс-шараларды ұйымдастыру', en: 'Event organisation' },
  'sup.vol.skill.events.d': { ru: 'создаём пространство для людей', kz: 'адамдарға кеңістік жасаймыз', en: 'we create space for people' },
  'sup.vol.skill.mentor.t': { ru: 'Преподавание и менторство', kz: 'Оқыту және тәлімгерлік', en: 'Teaching and mentorship' },
  'sup.vol.skill.mentor.d': { ru: 'передаём знания тем кто в них нуждается', kz: 'оған мұқтаж адамдарға білім береміз', en: 'we share knowledge with those who need it' },
  'sup.vol.skill.tech.t': { ru: 'Технологии', kz: 'Технологиялар', en: 'Technology' },
  'sup.vol.skill.tech.d': { ru: 'строим инфраструктуру движения', kz: 'қозғалыстың инфрақұрылымын жасаймыз', en: 'we build the movement\'s infrastructure' },
  'sup.vol.skill.logistics.t': { ru: 'Логистика', kz: 'Логистика', en: 'Logistics' },
  'sup.vol.skill.logistics.d': { ru: 'доставляем помощь туда где она нужна', kz: 'көмекті қажет жерге жеткіземіз', en: 'we deliver help where it\'s needed' },
  'sup.vol.skill.other.t': { ru: 'Другое', kz: 'Басқа', en: 'Other' },
  'sup.vol.skill.other.d': { ru: 'у вас есть что-то своё', kz: 'сізде өзіңіздің бірдеңеңіз бар', en: 'you have something of your own' },
  'sup.vol.form.title': { ru: 'Заполните анкету волонтёра', kz: 'Волонтер анкетасын толтырыңыз', en: 'Fill out the volunteer form' },
  'sup.vol.form.intro': { ru: 'Выбранные направления выше попадут в заявку вместе с вашими контактами. Мы свяжемся и расскажем о ближайших возможностях участия.', kz: 'Жоғарыда таңдалған бағыттар өтінімге сіздің байланыс деректеріңізбен бірге енеді. Байланысып, жақын арадағы қатысу мүмкіндіктері туралы айтамыз.', en: 'The directions selected above will be included in the application along with your contact details. We\'ll get in touch and tell you about upcoming opportunities to participate.' },
  'sup.vol.form.name': { ru: 'Имя', kz: 'Аты', en: 'Name' },
  'sup.vol.form.city': { ru: 'Город', kz: 'Қала', en: 'City' },
  'sup.vol.form.contact': { ru: 'Телефон / email', kz: 'Телефон / email', en: 'Phone / email' },
  'sup.vol.form.comment': { ru: 'Комментарий', kz: 'Пікір', en: 'Comment' },
  'sup.vol.form.comment.opt': { ru: '· необязательно', kz: '· міндетті емес', en: '· optional' },
  'sup.vol.form.comment.placeholder': { ru: 'необязательно', kz: 'міндетті емес', en: 'optional' },
  'sup.vol.form.btn': { ru: 'Отправить заявку', kz: 'Өтінімді жіберу', en: 'Submit application' },
  'sup.vol.success': { ru: '✓ Спасибо. Мы свяжемся с вами и расскажем о ближайших возможностях.', kz: '✓ Рахмет. Сізбен байланысып, жақын арадағы мүмкіндіктер туралы айтамыз.', en: '✓ Thank you. We\'ll contact you and tell you about upcoming opportunities.' },

  // ── COLLAB BLOCK ──
  'sup.collab.overline': { ru: 'Коллаборация', kz: 'Ынтымақтастық', en: 'Collaboration' },
  'sup.collab.h2': {
    ru: 'Предложить <em>идею</em>',
    kz: '<em>Идея</em> ұсыну',
    en: 'Propose an <em>idea</em>'
  },
  'sup.collab.p': { ru: 'Есть идея как вместе сделать что-то важное? Мы открыты к любым предложениям.', kz: 'Бірге маңызды нәрсе жасаудың идеясы бар ма? Біз кез келген ұсыныстарға ашықпыз.', en: 'Have an idea for doing something important together? We\'re open to any proposals.' },
  'sup.collab.form.name': { ru: 'Имя / организация', kz: 'Аты / ұйым', en: 'Name / organisation' },
  'sup.collab.form.type': { ru: 'Тип предложения', kz: 'Ұсыныс түрі', en: 'Type of proposal' },
  'sup.collab.form.type.placeholder': { ru: 'Выберите тип', kz: 'Түрін таңдаңыз', en: 'Select type' },
  'sup.collab.form.type.joint': { ru: 'Совместный проект', kz: 'Бірлескен жоба', en: 'Joint project' },
  'sup.collab.form.type.media': { ru: 'Медиапартнёрство', kz: 'Медиа серіктестік', en: 'Media partnership' },
  'sup.collab.form.type.vol': { ru: 'Волонтёрство', kz: 'Волонтерлік', en: 'Volunteering' },
  'sup.collab.form.type.other': { ru: 'Другое', kz: 'Басқа', en: 'Other' },
  'sup.collab.form.idea': { ru: 'Описание идеи', kz: 'Идея сипаттамасы', en: 'Description of idea' },
  'sup.collab.form.contact': { ru: 'Контакт', kz: 'Байланыс', en: 'Contact' },
  'sup.collab.form.contact.placeholder': { ru: 'email или телефон', kz: 'email немесе телефон', en: 'email or phone' },
  'sup.collab.form.btn': { ru: 'Отправить предложение', kz: 'Ұсынысты жіберу', en: 'Send proposal' },
  'sup.collab.success': { ru: '✓ Идея отправлена. Прочитаем внимательно и ответим — обычно в течение недели.', kz: '✓ Идея жіберілді. Мұқият оқып, жауап береміз — әдетте бір апта ішінде.', en: '✓ Idea sent. We\'ll read it carefully and respond — usually within a week.' },

  // ── REPORTS / TRANSPARENCY ──
  'sup.reports.overline': { ru: 'Прозрачность', kz: 'Ашықтық', en: 'Transparency' },
  'sup.reports.h2': { ru: 'Отчёты по проекту <em>РюкзакKit</em>', kz: '<em>РюкзакKit</em> жобасының есептері', en: 'Reports: <em>РюкзакKit</em> project' },
  'sup.reports.p': { ru: 'Каждый год мы публикуем полный финансовый отчёт. Ниже — данные о поступлениях и расходах за каждый год акции.', kz: 'Әр жыл толық қаржылық есепті жариялаймыз. Төменде — акцияның әр жылы бойынша түсімдер мен шығындар туралы деректер.', en: 'Each year we publish a full financial report. Below is income and expense data for every campaign year.' },
  'sup.reports.backpacks': { ru: 'рюкзаков\nроздано', kz: 'рюкзак\tаратылды', en: 'backpacks\ndistributed' },
  'sup.reports.income': { ru: 'Поступления', kz: 'Түсімдер', en: 'Income' },
  'sup.reports.backpacks.row': { ru: 'Рюкзаки', kz: 'Рюкзактар', en: 'Backpacks' },
  'sup.reports.stationery': { ru: 'Канцтовары', kz: 'Кеңсе тауарлары', en: 'Stationery' },
  'sup.reports.patches': { ru: 'Нашивки', kz: 'Нашивкалар', en: 'Patches' },
  'sup.reports.stickers': { ru: 'Стикерпаки', kz: 'Стикер-пакеттер', en: 'Sticker packs' },
  'sup.reports.branding': { ru: 'Нанесение и стикеры', kz: 'Басып шығару және стикерлер', en: 'Branding & stickers' },
  'sup.reports.logistics': { ru: 'Логистика', kz: 'Логистика', en: 'Logistics' },
  'sup.reports.other': { ru: 'Прочее', kz: 'Басқа', en: 'Other' },
  'sup.reports.total': { ru: 'Итого расходов', kz: 'Барлық шығындар', en: 'Total expenses' },
  'sup.reports.balance': { ru: 'Остаток', kz: 'Қалдық', en: 'Balance carried over' },
  'sup.reports.balance.last': { ru: 'Остаток', kz: 'Қалдық', en: 'Balance' },

  // ── APPLY HERO ──
  'apply.hero.overline': { ru: 'Получить помощь', kz: 'Көмек алу', en: 'Apply for Help' },
  'apply.hero.h1': {
    ru: 'Получить рюкзак<br>для <em>ребёнка</em>',
    kz: '<em>Балаға</em> рюкзак<br>алу',
    en: 'Get a backpack<br>for a <em>child</em>'
  },
  'apply.hero.p': { ru: 'Каждый год перед 1 сентября.', kz: 'Жыл сайын 1 қыркүйекке дейін.', en: 'Every year before September 1st.' },

  // ── APPLY BLOCK 1 ──
  'apply.b1.overline': { ru: 'Заявка на рюкзак', kz: 'Рюкзакка өтінім', en: 'Backpack application' },
  'apply.b1.h2': {
    ru: 'Получить рюкзак<br>для <em>ребёнка</em>',
    kz: '<em>Балаға</em> рюкзак<br>алу',
    en: 'Get a backpack<br>for a <em>child</em>'
  },
  'apply.b1.p': { ru: 'Каждый год перед 1 сентября фонд Garyshker собирает и передаёт рюкзаки с канцелярией детям из социально уязвимых семей. Если вашей семье нужна помощь — оставьте заявку. Мы свяжемся с вами.', kz: 'Жыл сайын 1 қыркүйекке дейін Garyshker қоры әлеуметтік осал отбасылардың балаларына кеңсе жиынтығы бар рюкзактарды жинап, тапсырады. Егер отбасыңызға көмек қажет болса — өтінім қалдырыңыз. Сізбен байланысамыз.', en: 'Every year before September 1st, the Garyshker Foundation collects and delivers backpacks with stationery to children from socially vulnerable families. If your family needs help — leave an application. We will contact you.' },
  'apply.b1.form.name': { ru: 'Имя заявителя', kz: 'Өтінім берушінің аты', en: 'Applicant\'s name' },
  'apply.b1.form.name.placeholder': { ru: 'Ваше имя', kz: 'Сіздің атыңыз', en: 'Your name' },
  'apply.b1.form.phone': { ru: 'Телефон', kz: 'Телефон', en: 'Phone' },
  'apply.b1.form.city': { ru: 'Город', kz: 'Қала', en: 'City' },
  'apply.b1.form.city.placeholder': { ru: 'Выберите город', kz: 'Қаланы таңдаңыз', en: 'Select city' },
  'apply.b1.form.city.almaty': { ru: 'Алматы', kz: 'Алматы', en: 'Almaty' },
  'apply.b1.form.city.atyrau': { ru: 'Атырау', kz: 'Атырау', en: 'Atyrau' },
  'apply.b1.form.city.astana': { ru: 'Астана', kz: 'Астана', en: 'Astana' },
  'apply.b1.form.city.karaganda': { ru: 'Караганда', kz: 'Қарағанды', en: 'Karaganda' },
  'apply.b1.form.city.aktau': { ru: 'Актау', kz: 'Ақтау', en: 'Aktau' },
  'apply.b1.form.city.other': { ru: 'Другой город', kz: 'Басқа қала', en: 'Other city' },
  'apply.b1.form.kids': { ru: 'Количество детей', kz: 'Балалар саны', en: 'Number of children' },
  'apply.b1.form.doc': { ru: 'Прикрепить документ', kz: 'Құжатты тіркеу', en: 'Attach document' },
  'apply.b1.form.doc.hint': { ru: 'Справка о доходах, удостоверение многодетной семьи или другой подтверждающий документ', kz: 'Табыс туралы анықтама, көпбалалы отбасы куәлігі немесе басқа растаушы құжат', en: 'Income certificate, large family ID, or other supporting document' },
  'apply.b1.form.comment': { ru: 'Короткий комментарий', kz: 'Қысқаша пікір', en: 'Short comment' },
  'apply.b1.form.comment.opt': { ru: '· необязательно', kz: '· міндетті емес', en: '· optional' },
  'apply.b1.form.comment.placeholder': { ru: 'Расскажите немного о ситуации...', kz: 'Жағдай туралы біраз айтыңыз...', en: 'Tell us a bit about the situation...' },
  'apply.b1.form.btn': { ru: 'Отправить заявку', kz: 'Өтінімді жіберу', en: 'Submit application' },
  'apply.b1.success': { ru: '✓ Мы получили вашу заявку и свяжемся с вами в течение 3 рабочих дней', kz: '✓ Өтінімді алдық, 3 жұмыс күні ішінде сізбен байланысамыз', en: '✓ We received your application and will contact you within 3 business days' },

  // ── APPLY BLOCK 2 ──
  'apply.b2.overline': { ru: 'Общее обращение', kz: 'Жалпы өтініш', en: 'General enquiry' },
  'apply.b2.h2': {
    ru: 'Написать <em>в фонд</em>',
    kz: '<em>Қорға</em> жазу',
    en: 'Write to <em>the foundation</em>'
  },
  'apply.b2.p': { ru: 'Если у вас есть вопрос, предложение или вы хотите рассказать свою историю — мы читаем каждое сообщение.', kz: 'Егер сұрағыңыз, ұсынысыңыз болса немесе өз тарихыңызды айтқыңыз келсе — біз әр хабарламаны оқимыз.', en: 'If you have a question, a suggestion, or want to share your story — we read every message.' },
  'apply.b2.form.name': { ru: 'Имя', kz: 'Аты', en: 'Name' },
  'apply.b2.form.contact': { ru: 'Контакт — телефон или email', kz: 'Байланыс — телефон немесе email', en: 'Contact — phone or email' },
  'apply.b2.form.contact.placeholder': { ru: '+7 ___ или email@example.com', kz: '+7 ___ немесе email@example.com', en: '+7 ___ or email@example.com' },
  'apply.b2.form.topic': { ru: 'Тема', kz: 'Тақырып', en: 'Subject' },
  'apply.b2.form.topic.placeholder': { ru: 'Выберите тему', kz: 'Тақырыпты таңдаңыз', en: 'Select subject' },
  'apply.b2.form.topic.backpacks': { ru: 'Вопрос о рюкзаках', kz: 'Рюкзак туралы сұрақ', en: 'Question about backpacks' },
  'apply.b2.form.topic.partner': { ru: 'Партнёрство', kz: 'Серіктестік', en: 'Partnership' },
  'apply.b2.form.topic.volunteer': { ru: 'Волонтёрство', kz: 'Волонтерлік', en: 'Volunteering' },
  'apply.b2.form.topic.media': { ru: 'Медиа-запрос', kz: 'Медиа-сұрау', en: 'Media enquiry' },
  'apply.b2.form.topic.story': { ru: 'Рассказать историю', kz: 'Тарих айту', en: 'Share a story' },
  'apply.b2.form.topic.other': { ru: 'Другое', kz: 'Басқа', en: 'Other' },
  'apply.b2.form.message': { ru: 'Сообщение', kz: 'Хабарлама', en: 'Message' },
  'apply.b2.form.message.placeholder': { ru: 'Расскажите о вашем запросе...', kz: 'Сұрауыңыз туралы айтыңыз...', en: 'Tell us about your enquiry...' },
  'apply.b2.form.btn': { ru: 'Отправить сообщение', kz: 'Хабарламаны жіберу', en: 'Send message' },
  'apply.b2.success': { ru: '✓ Сообщение отправлено. Спасибо — мы читаем каждое и постараемся ответить как можно скорее', kz: '✓ Хабарлама жіберілді. Рахмет — біз әрқайсысын оқимыз және мүмкіндігінше тез жауап беруге тырысамыз', en: '✓ Message sent. Thank you — we read every one and will try to respond as soon as possible' },

  // ── COMMON BUTTONS ──
  'btn.donate':      { ru: 'Задонатить',           kz: 'Донат жасау',       en: 'Donate' },
  'btn.volunteer':   { ru: 'Стать волонтёром',     kz: 'Волонтер болу',     en: 'Become a Volunteer' },
  'btn.partner':     { ru: 'Стать партнёром',      kz: 'Серіктес болу',     en: 'Become a Partner' },
  'btn.apply':       { ru: 'Подать заявку',        kz: 'Өтінім беру',       en: 'Apply Now' },
  'btn.send':        { ru: 'Отправить',            kz: 'Жіберу',            en: 'Send' },
  'btn.more':        { ru: 'Узнать больше',        kz: 'Толығырақ білу',    en: 'Learn More' },
  'btn.projects':    { ru: 'Смотреть проекты',     kz: 'Жобаларды қарау',   en: 'View Projects' },
  'btn.report':      { ru: 'Смотреть отчётность',  kz: 'Есептілікті қарау', en: 'View Reports' },
  'btn.support':     { ru: 'Поддержать',           kz: 'Қолдау',            en: 'Donate' },

  // ── FORM LABELS ──
  'form.name':     { ru: 'Ваше имя',        kz: 'Атыңыз',           en: 'Your name' },
  'form.email':    { ru: 'Email',           kz: 'Email',             en: 'Email' },
  'form.phone':    { ru: 'Телефон',         kz: 'Телефон',           en: 'Phone' },
  'form.city':     { ru: 'Город',           kz: 'Қала',              en: 'City' },
  'form.message':  { ru: 'Сообщение',       kz: 'Хабарлама',         en: 'Message' },
  'form.children': { ru: 'Количество детей', kz: 'Балалар саны',     en: 'Number of children' },
};

// ── Engine ──
const LANG_KEY = 'gs_lang';
const SUPPORTED = ['ru', 'kz', 'en'];

function detectLang() {
  // 1. URL param ?lang=kz
  const param = new URLSearchParams(location.search).get('lang');
  if (param && SUPPORTED.includes(param)) return param;
  // 2. URL path /kz/ /en/
  const seg = location.pathname.split('/').find(s => SUPPORTED.includes(s));
  if (seg) return seg;
  // 3. localStorage
  const stored = localStorage.getItem(LANG_KEY);
  if (stored && SUPPORTED.includes(stored)) return stored;
  // 4. Browser language
  const bl = (navigator.language || 'ru').slice(0, 2).toLowerCase();
  if (bl === 'kk') return 'kz';
  if (bl === 'en') return 'en';
  return 'ru';
}

function applyLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  document.documentElement.lang = lang === 'kz' ? 'kk' : lang;

  // Update data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const t = TRANSLATIONS[key];
    if (!t) return;
    const text = t[lang] || t.ru;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else {
      el.textContent = text;
    }
  });

  // Update data-i18n-html elements (allow inner HTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const t = TRANSLATIONS[key];
    if (!t) return;
    el.innerHTML = t[lang] || t.ru;
  });

  // Update lang switcher buttons
  document.querySelectorAll('.lang button').forEach(btn => {
    btn.classList.toggle('is-active', btn.getAttribute('data-lang') === lang);
  });

  // Update <html lang>
  document.documentElement.setAttribute('lang', lang === 'kz' ? 'kk' : lang);
}

function switchLang(lang) {
  const url = new URL(location.href);
  url.searchParams.set('lang', lang);
  history.pushState({}, '', url);
  applyLang(lang);
}

// Lock nav item widths so text never shifts on language switch
function lockNavWidths() {
  const items = document.querySelectorAll('.nav__items .nav__a[data-i18n], .nav__cta[data-i18n]');
  const lang = detectLang();

  items.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const t = TRANSLATIONS[key];
    if (!t) return;

    // Remove any existing lock
    el.style.minWidth = '';
    el.style.textAlign = '';

    // Measure max width across all 3 languages
    let maxW = 0;
    ['ru', 'kz', 'en'].forEach(l => {
      el.textContent = t[l] || t.ru;
      maxW = Math.max(maxW, el.scrollWidth);
    });

    // Restore current language and lock width
    el.textContent = t[lang] || t.ru;
    el.style.minWidth = maxW + 'px';
    el.style.textAlign = 'center';
    el.style.display = 'inline-block';
  });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  const lang = detectLang();
  applyLang(lang);
  // Lock widths after fonts are ready so measurements are accurate
  const doLock = () => lockNavWidths();
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(doLock);
  } else {
    setTimeout(doLock, 300);
  }
});

// Expose globally
window.gsi18n = { switchLang, applyLang, detectLang, TRANSLATIONS };
