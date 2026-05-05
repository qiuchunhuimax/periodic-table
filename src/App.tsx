import { useEffect, useMemo, useState } from 'react';
import {
  CAT_COLORS,
  CAT_LABEL,
  CAT_LABEL_ZH,
  CN_NAMES,
  ELEMENTS,
  UI_EN,
  UI_ZH,
} from './data/legacyData';
import type {
  CategoryKey,
  EditableCopy,
  EditorPane,
  ElementRecord,
  FontSettings,
  Language,
  ThemeMode,
  ThemeSettings,
  UiCopy,
} from './types';

const CATEGORY_KEYS: CategoryKey[] = [
  'nonmetal',
  'noble',
  'alkali',
  'alkaline',
  'transition',
  'posttrans',
  'metalloid',
  'lanthanide',
  'actinide',
];

const SURFACE_DEFAULTS = {
  bg: '#0a0e17',
  bg2: '#111827',
  accent: '#38bdf8',
  txt: '#e2e8f0',
} as const;

const DEFAULT_FONTS: FontSettings = {
  body: "'IBM Plex Sans', sans-serif",
  heading: "'Space Mono', monospace",
  baseSize: 16,
};

const FONT_SIZE_BASES = {
  '--fs-body': 16,
  '--fs-title': 30,
  '--fs-subtitle': 15,
  '--fs-control': 13,
  '--fs-input': 15,
  '--fs-cell-num': 10,
  '--fs-cell-symbol': 22,
  '--fs-cell-name': 9,
  '--fs-ref': 10,
  '--fs-detail-symbol': 34,
  '--fs-detail-title': 24,
  '--fs-detail-body': 15,
  '--fs-detail-label': 12,
  '--fs-editor': 14,
} as const;

const BODY_FONT_OPTIONS = [
  "'IBM Plex Sans', sans-serif",
  "'Inter', sans-serif",
  "'Space Mono', monospace",
  'system-ui, sans-serif',
  'Georgia, serif',
];

const HEADING_FONT_OPTIONS = [
  "'Space Mono', monospace",
  "'IBM Plex Sans', sans-serif",
  "'Inter', sans-serif",
  'Georgia, serif',
];

const FONT_LABELS: Record<string, string> = {
  "'IBM Plex Sans', sans-serif": 'IBM Plex Sans',
  "'Inter', sans-serif": 'Inter',
  "'Space Mono', monospace": 'Space Mono',
  'system-ui, sans-serif': 'System UI',
  'Georgia, serif': 'Georgia',
};

const CHINESE_NAMES = CN_NAMES as Record<number, string>;
const CATEGORY_LABEL_EN = CAT_LABEL as Record<CategoryKey, string>;
const CATEGORY_LABEL_ZH = CAT_LABEL_ZH as Record<CategoryKey, string>;
const ELEMENT_LIST = ELEMENTS as ElementRecord[];
const DEFAULT_UI: Record<Language, UiCopy> = {
  en: UI_EN as UiCopy,
  zh: UI_ZH as UiCopy,
};
const DEFAULT_THEME: ThemeSettings = {
  surface: { ...SURFACE_DEFAULTS },
  categories: { ...(CAT_COLORS as Record<CategoryKey, string>) },
};

function getChineseName(atomicNumber: number): string {
  return CHINESE_NAMES[atomicNumber] ?? '';
}

function clampBaseSize(value: number): number {
  return Math.min(24, Math.max(14, value));
}

function App() {
  const elements = useMemo(() => {
    const unique = new Map<number, ElementRecord>();
    ELEMENT_LIST.forEach((element) => {
      if (!unique.has(element.n)) {
        unique.set(element.n, element);
      }
    });
    return Array.from(unique.values()).sort((a, b) => a.n - b.n);
  }, []);

  const elementByPosition = useMemo(() => {
    return new Map(elements.map((element) => [`${element.row}-${element.col}`, element]));
  }, [elements]);

  const [lang, setLang] = useState<Language>('en');
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  const [activeFilter, setActiveFilter] = useState<'all' | CategoryKey>('all');
  const [search, setSearch] = useState('');
  const [selectedElement, setSelectedElement] = useState<ElementRecord | null>(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [activePane, setActivePane] = useState<EditorPane>('content');
  const [editableCopy, setEditableCopy] = useState<Record<Language, EditableCopy>>({
    en: { title: DEFAULT_UI.en.title, subtitle: DEFAULT_UI.en.subtitle },
    zh: { title: DEFAULT_UI.zh.title, subtitle: DEFAULT_UI.zh.subtitle },
  });
  const [fonts, setFonts] = useState<FontSettings>(DEFAULT_FONTS);
  const [theme, setTheme] = useState<ThemeSettings>(DEFAULT_THEME);

  const ui = {
    ...DEFAULT_UI[lang],
    ...editableCopy[lang],
  };
  const categoryLabels = lang === 'zh' ? CATEGORY_LABEL_ZH : CATEGORY_LABEL_EN;

  const visibleElements = useMemo(() => {
    const query = search.trim().toLowerCase();
    return new Set(
      elements
        .filter((element) => {
          const matchesCategory = activeFilter === 'all' || element.cat === activeFilter;
          if (!matchesCategory) {
            return false;
          }
          if (!query) {
            return true;
          }
          const chineseName = getChineseName(element.n).toLowerCase();
          return (
            element.name.toLowerCase().includes(query) ||
            element.sym.toLowerCase().includes(query) ||
            String(element.n).includes(query) ||
            chineseName.includes(query)
          );
        })
        .map((element) => element.n),
    );
  }, [activeFilter, elements, search]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', themeMode);
  }, [themeMode]);

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--font-body', fonts.body);
    root.style.setProperty('--font-heading', fonts.heading);
    root.style.setProperty('--bg', theme.surface.bg);
    root.style.setProperty('--bg2', theme.surface.bg2);
    root.style.setProperty('--accent', theme.surface.accent);
    root.style.setProperty('--txt', theme.surface.txt);

    CATEGORY_KEYS.forEach((category) => {
      root.style.setProperty(`--${category}`, theme.categories[category]);
    });

    const scale = fonts.baseSize / 16;
    Object.entries(FONT_SIZE_BASES).forEach(([token, baseSize]) => {
      const scaledSize = Math.max(8, baseSize * scale);
      root.style.setProperty(token, `${scaledSize.toFixed(1)}px`);
    });
  }, [fonts, theme]);

  useEffect(() => {
    document.title = ui.title;
  }, [ui.title]);

  const legendItems = CATEGORY_KEYS.map((category) => ({
    key: category,
    label: categoryLabels[category],
    color: theme.categories[category],
  }));

  const updateCopy = (field: keyof EditableCopy, value: string) => {
    setEditableCopy((current) => ({
      ...current,
      [lang]: {
        ...current[lang],
        [field]: value,
      },
    }));
  };

  const updateSurface = (field: keyof ThemeSettings['surface'], value: string) => {
    setTheme((current) => ({
      ...current,
      surface: {
        ...current.surface,
        [field]: value,
      },
    }));
  };

  const updateCategoryColor = (category: CategoryKey, value: string) => {
    setTheme((current) => ({
      ...current,
      categories: {
        ...current.categories,
        [category]: value,
      },
    }));
  };

  const resetAll = () => {
    setEditableCopy({
      en: { title: DEFAULT_UI.en.title, subtitle: DEFAULT_UI.en.subtitle },
      zh: { title: DEFAULT_UI.zh.title, subtitle: DEFAULT_UI.zh.subtitle },
    });
    setFonts(DEFAULT_FONTS);
    setTheme(DEFAULT_THEME);
  };

  return (
    <main className="page-shell">
      <header className="page-header">
        <h1>{ui.title}</h1>
        <p className="subtitle">{ui.subtitle}</p>
      </header>

      <section className="toolbar">
        <input
          id="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          placeholder={ui.search}
          type="text"
        />

        {(['all', ...CATEGORY_KEYS] as const).map((category) => (
          <button
            key={category}
            className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
            onClick={() => setActiveFilter(category)}
            type="button"
          >
            {category === 'all' ? ui.all : categoryLabels[category]}
          </button>
        ))}

        <button
          className="toolbar-toggle"
          onClick={() => setLang((current) => (current === 'en' ? 'zh' : 'en'))}
          type="button"
        >
          {lang === 'zh' ? 'EN' : '中文'}
        </button>
        <button
          className="toolbar-toggle"
          onClick={() => setThemeMode((current) => (current === 'light' ? 'dark' : 'light'))}
          type="button"
        >
          {themeMode === 'light' ? '☾ Dark' : '☀ Light'}
        </button>
        <button
          className={`toolbar-toggle ${editorOpen ? 'open' : ''}`}
          onClick={() => setEditorOpen((current) => !current)}
          type="button"
        >
          ✏ Edit
        </button>
      </section>

      {editorOpen ? (
        <section className="editor-panel">
          <div className="editor-tabs">
            {(['content', 'font', 'colors'] as const).map((pane) => (
              <button
                key={pane}
                className={`editor-tab ${activePane === pane ? 'active' : ''}`}
                onClick={() => setActivePane(pane)}
                type="button"
              >
                {pane === 'content' ? 'Content' : pane === 'font' ? 'Font' : 'Colors'}
              </button>
            ))}
            <button className="editor-reset" onClick={resetAll} type="button">
              Reset all
            </button>
          </div>

          {activePane === 'content' ? (
            <div className="editor-grid">
              <label className="editor-field editor-field--full">
                <span>Page Title</span>
                <input
                  onChange={(event) => updateCopy('title', event.target.value)}
                  type="text"
                  value={editableCopy[lang].title}
                />
              </label>
              <label className="editor-field editor-field--full">
                <span>Subtitle</span>
                <input
                  onChange={(event) => updateCopy('subtitle', event.target.value)}
                  type="text"
                  value={editableCopy[lang].subtitle}
                />
              </label>
            </div>
          ) : null}

          {activePane === 'font' ? (
            <div className="editor-grid">
              <label className="editor-field">
                <span>UI Font</span>
                <select
                  onChange={(event) =>
                    setFonts((current) => ({ ...current, body: event.target.value }))
                  }
                  value={fonts.body}
                >
                  {BODY_FONT_OPTIONS.map((font) => (
                    <option key={font} value={font}>
                      {FONT_LABELS[font]}
                    </option>
                  ))}
                </select>
              </label>
              <label className="editor-field">
                <span>Heading Font</span>
                <select
                  onChange={(event) =>
                    setFonts((current) => ({ ...current, heading: event.target.value }))
                  }
                  value={fonts.heading}
                >
                  {HEADING_FONT_OPTIONS.map((font) => (
                    <option key={font} value={font}>
                      {FONT_LABELS[font]}
                    </option>
                  ))}
                </select>
              </label>
              <div className="editor-field">
                <span>Base font size: {fonts.baseSize}px</span>
                <div className="font-size-control">
                  <button
                    className="font-step"
                    onClick={() =>
                      setFonts((current) => ({
                        ...current,
                        baseSize: clampBaseSize(current.baseSize - 1),
                      }))
                    }
                    type="button"
                  >
                    A-
                  </button>
                  <input
                    max={24}
                    min={14}
                    onChange={(event) =>
                      setFonts((current) => ({
                        ...current,
                        baseSize: clampBaseSize(Number(event.target.value)),
                      }))
                    }
                    type="range"
                    value={fonts.baseSize}
                  />
                  <button
                    className="font-step"
                    onClick={() =>
                      setFonts((current) => ({
                        ...current,
                        baseSize: clampBaseSize(current.baseSize + 1),
                      }))
                    }
                    type="button"
                  >
                    A+
                  </button>
                </div>
              </div>
            </div>
          ) : null}

          {activePane === 'colors' ? (
            <div className="editor-grid">
              <ColorField
                label="Background"
                onChange={(value) => updateSurface('bg', value)}
                value={theme.surface.bg}
              />
              <ColorField
                label="Card BG"
                onChange={(value) => updateSurface('bg2', value)}
                value={theme.surface.bg2}
              />
              <ColorField
                label="Accent"
                onChange={(value) => updateSurface('accent', value)}
                value={theme.surface.accent}
              />
              <ColorField
                label="Text"
                onChange={(value) => updateSurface('txt', value)}
                value={theme.surface.txt}
              />
              {CATEGORY_KEYS.map((category) => (
                <ColorField
                  key={category}
                  label={CATEGORY_LABEL_EN[category]}
                  onChange={(value) => updateCategoryColor(category, value)}
                  value={theme.categories[category]}
                />
              ))}
            </div>
          ) : null}
        </section>
      ) : null}

      <section className="table-wrap">
        <div className="periodic-grid" role="grid">
          {Array.from({ length: 9 }, (_, rowIndex) => rowIndex + 1).flatMap((row) =>
            Array.from({ length: 18 }, (_, columnIndex) => columnIndex + 1).map((column) => {
              if ((row === 8 || row === 9) && column === 1) {
                return (
                  <div
                    className="grid-spacer"
                    key={`spacer-${row}`}
                    style={{ gridColumn: '1 / 3', gridRow: row }}
                  />
                );
              }

              if ((row === 8 || row === 9) && column === 2) {
                return null;
              }

              const element = elementByPosition.get(`${row}-${column}`);

              if (!element) {
                if (column === 3 && (row === 6 || row === 7)) {
                  const isLanthanide = row === 6;
                  const refColor = isLanthanide
                    ? theme.categories.lanthanide
                    : theme.categories.actinide;

                  return (
                    <div
                      className="series-ref"
                      key={`series-${row}`}
                      style={{
                        background: `${refColor}22`,
                        borderColor: `${refColor}55`,
                        color: refColor,
                        gridColumn: column,
                        gridRow: row,
                      }}
                    >
                      {isLanthanide ? '57-71' : '89-103'}
                    </div>
                  );
                }

                return (
                  <div
                    className="grid-empty"
                    key={`empty-${row}-${column}`}
                    style={{ gridColumn: column, gridRow: row }}
                  />
                );
              }

              const isVisible = visibleElements.has(element.n);
              const displayName =
                lang === 'zh'
                  ? getChineseName(element.n)
                  : element.name.length > 10
                    ? `${element.name.slice(0, 9)}…`
                    : element.name;
              const title = `${element.n} ${element.sym} ${
                lang === 'zh' ? `${getChineseName(element.n)} / ` : ''
              }${element.name}`;

              return (
                <button
                  aria-label={title}
                  className={[
                    'cell',
                    isVisible ? '' : 'faded',
                    selectedElement?.n === element.n ? 'selected' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  key={element.n}
                  onClick={() => setSelectedElement(element)}
                  style={{
                    background: `${theme.categories[element.cat]}e6`,
                    gridColumn: element.col,
                    gridRow: element.row,
                  }}
                  title={title}
                  type="button"
                >
                  <span className="num">{element.n}</span>
                  <span className="sym">{element.sym}</span>
                  <span className="nm">{displayName}</span>
                </button>
              );
            }),
          )}
        </div>
      </section>

      <section className="legend">
        {legendItems.map((item) => (
          <button
            className="legend-item"
            key={item.key}
            onClick={() => setActiveFilter((current) => (current === item.key ? 'all' : item.key))}
            type="button"
          >
            <span className="legend-dot" style={{ background: item.color }} />
            {item.label}
          </button>
        ))}
      </section>

      <section className="detail-panel">
        {selectedElement ? (
          <>
            <div
              className="detail-hero"
              style={{ background: `${theme.categories[selectedElement.cat]}e6` }}
            >
              <span className="b-num">{selectedElement.n}</span>
              <span className="b-sym">{selectedElement.sym}</span>
              <span className="b-mass">{selectedElement.mass}</span>
            </div>
            <div className="detail-info">
              <h2>
                {lang === 'zh'
                  ? `${getChineseName(selectedElement.n)} ${selectedElement.name}`
                  : selectedElement.name}
              </h2>
              <span
                className="cat-badge"
                style={{
                  background: `${theme.categories[selectedElement.cat]}25`,
                  color: theme.categories[selectedElement.cat],
                }}
              >
                {categoryLabels[selectedElement.cat]}
              </span>
              <p className="desc">{selectedElement.desc}</p>
              <div className="props">
                <DetailProp label={ui.mass} value={selectedElement.mass} />
                <DetailProp label={ui.phase} value={selectedElement.phase} />
                <DetailProp label={ui.period} value={selectedElement.period} />
                <DetailProp label={ui.group} value={selectedElement.group} />
                <DetailProp label={ui.config} value={selectedElement.config} wide />
              </div>
            </div>
          </>
        ) : (
          <p className="placeholder">{ui.placeholder}</p>
        )}
      </section>
    </main>
  );
}

function DetailProp({
  label,
  value,
  wide = false,
}: {
  label: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <div className={`prop ${wide ? 'prop--wide' : ''}`}>
      <div className="lbl">{label}</div>
      <div className="val">{value}</div>
    </div>
  );
}

function ColorField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <label className="editor-field">
      <span>{label}</span>
      <input onChange={(event) => onChange(event.target.value)} type="color" value={value} />
    </label>
  );
}

export default App;
