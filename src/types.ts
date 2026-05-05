export type Language = 'en' | 'zh';
export type ThemeMode = 'dark' | 'light';
export type EditorPane = 'content' | 'font' | 'colors';

export type CategoryKey =
  | 'nonmetal'
  | 'noble'
  | 'alkali'
  | 'alkaline'
  | 'transition'
  | 'posttrans'
  | 'metalloid'
  | 'lanthanide'
  | 'actinide';

export interface ElementRecord {
  n: number;
  sym: string;
  name: string;
  cat: CategoryKey;
  mass: string;
  row: number;
  col: number;
  phase: string;
  group: string;
  period: string;
  config: string;
  desc: string;
}

export interface UiCopy {
  title: string;
  subtitle: string;
  search: string;
  all: string;
  phase: string;
  period: string;
  group: string;
  mass: string;
  config: string;
  placeholder: string;
}

export interface EditableCopy {
  title: string;
  subtitle: string;
}

export interface FontSettings {
  body: string;
  heading: string;
  baseSize: number;
}

export interface SurfaceSettings {
  bg: string;
  bg2: string;
  accent: string;
  txt: string;
}

export interface ThemeSettings {
  surface: SurfaceSettings;
  categories: Record<CategoryKey, string>;
}
