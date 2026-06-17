import Icon from '@/components/ui/icon';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/eaedfb4f-1a6b-48c7-b54e-7e4fa0ae02fc/files/7bd8ad2f-20e9-45a6-a0b4-067413e04e94.jpg';

const innovations = [
  {
    icon: 'ScanLine',
    tag: '01',
    title: 'Диагностика КТ на базе ИИ',
    text: 'Нейросеть находит скрытые проблемы за 10 секунд — точнее и быстрее человеческого глаза.',
  },
  {
    icon: 'Sparkles',
    tag: '02',
    title: 'ИИ-примерка улыбки',
    text: 'Мгновенно увидьте себя с новыми винирами или брекетами ещё до начала лечения.',
  },
  {
    icon: 'Glasses',
    tag: '03',
    title: 'VR-изоляция в кресле',
    text: 'Погружение в виртуальную реальность во время процедур полностью убирает страх.',
  },
];

const services = [
  {
    icon: 'Wind',
    title: 'Анти-Запах и звуковой щит',
    text: 'В холле — аромат дорогого парфюма и белого чая. Никаких больничных запахов, только акустический комфорт.',
  },
  {
    icon: 'Pill',
    title: 'Аптечный киоск замкнутого цикла',
    text: 'Все необходимые медикаменты для восстановления выдаются прямо в клинике, без визита в аптеку.',
  },
];

const roadmap = [
  { year: '2025', city: 'Грозный', note: 'Флагманский центр' },
  { year: '2026', city: 'Москва', note: 'Премиальный кластер' },
  { year: '2027', city: 'Казань', note: 'Региональный хаб' },
  { year: '2028', city: 'Санкт-Петербург', note: 'Северный флагман' },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black overflow-x-hidden">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
          <span className="font-display font-700 tracking-[0.35em] text-sm md:text-base">
            NOVA&nbsp;SMILE
          </span>
          <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.2em] uppercase text-white/50">
            <a href="#ai" className="hover:text-white transition-colors">Технологии</a>
            <a href="#service" className="hover:text-white transition-colors">Сервис</a>
            <a href="#roadmap" className="hover:text-white transition-colors">Сеть</a>
          </nav>
          <button className="text-xs tracking-[0.2em] uppercase border border-white/20 px-5 py-2.5 hover:bg-white hover:text-black transition-colors">
            Записаться
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center grain">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="NOVA SMILE"
            className="w-full h-full object-cover opacity-40 animate-fade-in-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full pt-32 pb-20">
          <p className="text-xs tracking-[0.4em] uppercase text-white/50 mb-8 animate-fade-in">
            Премиальная стоматологическая сеть
          </p>
          <h1 className="font-display font-700 uppercase leading-[0.92] text-5xl sm:text-7xl lg:text-8xl text-balance max-w-5xl animate-fade-in" style={{ animationDelay: '0.1s' }}>
            NOVA SMILE.
            <br />
            <span className="text-white/60">Будущее</span> безупречных улыбок.
          </h1>
          <p className="mt-10 max-w-xl text-lg md:text-xl text-white/60 leading-relaxed animate-fade-in" style={{ animationDelay: '0.25s' }}>
            Сеть клиник под управлением ИИ нового поколения — в атмосфере
            абсолютного комфорта.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button className="group bg-white text-black px-9 py-4 text-sm tracking-[0.2em] uppercase font-500 flex items-center justify-center gap-3 hover:bg-white/90 transition-colors">
              Записаться на VIP-приём
              <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/25 px-9 py-4 text-sm tracking-[0.2em] uppercase text-white/80 hover:bg-white/5 hover:text-white transition-colors">
              Технологии ИИ
            </button>
          </div>
        </div>
      </section>

      {/* INNOVATIONS */}
      <section id="ai" className="relative py-28 md:py-40 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <h2 className="font-display font-600 uppercase text-4xl md:text-6xl leading-none max-w-2xl text-balance">
              Интеллект,<br /> встроенный в улыбку
            </h2>
            <p className="text-sm tracking-[0.2em] uppercase text-white/40">AI&nbsp;·&nbsp;VR</p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {innovations.map((it) => (
              <div
                key={it.title}
                className="group bg-black p-10 md:p-12 flex flex-col min-h-[340px] hover:bg-white/[0.03] transition-colors"
              >
                <div className="flex items-center justify-between mb-12">
                  <Icon name={it.icon} size={34} className="text-white/80 group-hover:scale-110 transition-transform" />
                  <span className="font-display text-white/20 text-3xl">{it.tag}</span>
                </div>
                <h3 className="font-display font-500 uppercase text-2xl mb-5 tracking-wide">{it.title}</h3>
                <p className="text-white/50 leading-relaxed text-[15px]">{it.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section id="service" className="relative py-28 md:py-40 bg-gradient-to-b from-black via-zinc-950 to-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-6">Элитный сервис</p>
          <h2 className="font-display font-600 uppercase text-4xl md:text-6xl leading-none mb-20 max-w-3xl text-balance">
            Комфорт, который ощущается с порога
          </h2>

          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {services.map((s) => (
              <div key={s.title} className="bg-black p-10 md:p-14 flex flex-col gap-6 hover:bg-white/[0.03] transition-colors">
                <Icon name={s.icon} size={40} className="text-white/80" />
                <h3 className="font-display font-500 uppercase text-2xl md:text-3xl tracking-wide">{s.title}</h3>
                <p className="text-white/50 leading-relaxed text-base md:text-lg">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section id="roadmap" className="relative py-28 md:py-40 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <p className="text-xs tracking-[0.4em] uppercase text-white/40 mb-6">Дорожная карта</p>
          <h2 className="font-display font-600 uppercase text-4xl md:text-6xl leading-none mb-24 max-w-3xl text-balance">
            Расширение сети
          </h2>

          <div className="relative">
            <div className="absolute left-0 top-3 h-px w-full bg-white/10" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
              {roadmap.map((r, i) => (
                <div key={r.city} className="relative pt-12">
                  <span className="absolute top-1.5 left-0 w-3 h-3 rounded-full bg-white" />
                  <div className="font-display text-white/30 text-sm tracking-[0.3em] mb-3">{r.year}</div>
                  <div className="font-display font-600 uppercase text-2xl md:text-3xl mb-2">{r.city}</div>
                  <div className="text-white/40 text-sm">{r.note}</div>
                  {i === 0 && (
                    <span className="inline-block mt-4 text-[10px] tracking-[0.2em] uppercase border border-white/20 px-3 py-1 text-white/60">
                      Открыт
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 md:py-44 border-t border-white/10 text-center grain">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display font-700 uppercase text-4xl md:text-7xl leading-[0.95] text-balance">
            Ваша новая улыбка<br />начинается здесь
          </h2>
          <button className="group mt-12 bg-white text-black px-10 py-4 text-sm tracking-[0.2em] uppercase font-500 inline-flex items-center gap-3 hover:bg-white/90 transition-colors">
            Записаться на VIP-приём
            <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-display font-700 tracking-[0.35em] text-sm">NOVA&nbsp;SMILE</span>
          <p className="text-white/40 text-xs tracking-[0.15em] uppercase text-center">
            NOVA SMILE. Разработано heavyy. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
