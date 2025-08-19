import { useEffect, useState } from 'react';

// Importá cada tema como URL (Vite: ?url). Lista completa de temas disponibles
import cerulean   from 'bootswatch/dist/cerulean/bootstrap.min.css?url';
import cosmo      from 'bootswatch/dist/cosmo/bootstrap.min.css?url';
import cyborg     from 'bootswatch/dist/cyborg/bootstrap.min.css?url';
import darkly     from 'bootswatch/dist/darkly/bootstrap.min.css?url';
import flatly     from 'bootswatch/dist/flatly/bootstrap.min.css?url';
import journal    from 'bootswatch/dist/journal/bootstrap.min.css?url';
import litera     from 'bootswatch/dist/litera/bootstrap.min.css?url';
import lumen      from 'bootswatch/dist/lumen/bootstrap.min.css?url';
import lux        from 'bootswatch/dist/lux/bootstrap.min.css?url';
import materia    from 'bootswatch/dist/materia/bootstrap.min.css?url';
import minty      from 'bootswatch/dist/minty/bootstrap.min.css?url';
import morph      from 'bootswatch/dist/morph/bootstrap.min.css?url';
import pulse      from 'bootswatch/dist/pulse/bootstrap.min.css?url';
import quartz     from 'bootswatch/dist/quartz/bootstrap.min.css?url';
import sandstone  from 'bootswatch/dist/sandstone/bootstrap.min.css?url';
import simplex    from 'bootswatch/dist/simplex/bootstrap.min.css?url';
import sketchy    from 'bootswatch/dist/sketchy/bootstrap.min.css?url';
import slate      from 'bootswatch/dist/slate/bootstrap.min.css?url';
import solar      from 'bootswatch/dist/solar/bootstrap.min.css?url';
import spacelab   from 'bootswatch/dist/spacelab/bootstrap.min.css?url';
import superhero  from 'bootswatch/dist/superhero/bootstrap.min.css?url';
import united     from 'bootswatch/dist/united/bootstrap.min.css?url';
import vapor      from 'bootswatch/dist/vapor/bootstrap.min.css?url';
import yeti       from 'bootswatch/dist/yeti/bootstrap.min.css?url';
import zephyr     from 'bootswatch/dist/zephyr/bootstrap.min.css?url';

// Mapa de temas -> URL
const THEME_URL = {
  cerulean, cosmo, cyborg, darkly, flatly, journal, litera, lumen, lux,
  materia, minty, morph, pulse, quartz, sandstone, simplex, sketchy, slate, solar,
  spacelab, superhero, united, vapor, yeti, zephyr,
} as const;

type ThemeName = 'default' | keyof typeof THEME_URL;

const STORAGE_KEY = 'ui:bootswatch-theme';
const LINK_ID = 'bootswatch-theme';

function ensureLink(): HTMLLinkElement {
  let el = document.getElementById(LINK_ID) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.id = LINK_ID;
    el.rel = 'stylesheet';
    document.head.appendChild(el);
  }
  return el;
}

function removeLink() {
  const el = document.getElementById(LINK_ID);
  if (el?.parentNode) el.parentNode.removeChild(el);
}

function applyTheme(theme: ThemeName) {
  if (theme === 'default') {
    removeLink();
    return;
  }
  const el = ensureLink();
  el.href = THEME_URL[theme];
}

function pretty(name: ThemeName) {
  if (name === 'default') return 'Bootstrap (default)';
  return name.replace(/-/g, ' ').replace(/\b\w/g, m => m.toUpperCase());
}

interface Props {
  defaultTheme?: ThemeName;
}

export default function BootswatchSwitcher({ defaultTheme = 'default' }: Props) {
  const [theme, setTheme] = useState<ThemeName>(defaultTheme);

  useEffect(() => {
    const saved = (localStorage.getItem(STORAGE_KEY) as ThemeName) || defaultTheme;
    setTheme(saved);
    applyTheme(saved);
  }, [defaultTheme]);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as ThemeName;
    setTheme(value);
    localStorage.setItem(STORAGE_KEY, value);
    applyTheme(value);
  };

  const options: ThemeName[] = ['default', ...Object.keys(THEME_URL) as (keyof typeof THEME_URL)[]];

  return (
    <div className="position-fixed bottom-0 end-0 p-2" style={{ zIndex: 1080, transform: 'scale(0.7)', transformOrigin: 'bottom right' }}>
      <div className="bg-body border rounded shadow-sm p-1 d-flex align-items-center gap-1">
        <label className="form-label m-0 small fw-semibold" htmlFor="bootswatch-select" style={{ fontSize: '0.75rem' }}>
          Tema
        </label>
        <select
          id="bootswatch-select"
          className="form-select form-select-sm"
          value={theme}
          onChange={onChange}
          style={{ fontSize: '0.75rem', padding: '0.25rem 0.5rem' }}
        >
          {options.map(t => (
            <option key={t} value={t}>{pretty(t)}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
