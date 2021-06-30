import { Padding } from './utils/padding';

export enum KeyType {
  Any = -1,
  CtrlOrAlt,
  Ctrl,
  Shift,
  Alt,
  Right,
}

export enum KeydownType {
  None = -1,
  Document,
  Canvas,
}

export const textKeys = ['textColor', 'fontFamily', 'fontSize', 'lineHeight', 'textAlign', 'textBaseline'];

export interface Options {
  extDpiRatio?: number;
  color?: string;
  activeColor?: string;
  hoverColor?: string;
  anchorRadius?: number;
  anchorBackground?: string;
  dockColor?: string;
  dockBackground?: string;
  dragColor?: string;
  animateColor?: string;
  textColor?: string;
  fontFamily?: string;
  fontSize?: number;
  lineHeight?: number;
  textAlign?: string;
  textBaseline?: string;
  rotateCursor?: string;
  hoverCursor?: string;
  disableInput?: boolean;
  disableRotate?: boolean;
  disableSize?: boolean;
  disableAnchor?: boolean;
  disableWidth?: boolean;
  disableHeight?: boolean;
  anchorSize?: number;
  alwaysAnchor?: boolean;
  autoAnchor?: boolean;
  disableEmptyLine?: boolean;
  disableRepeatLine?: boolean;
  disableScale?: boolean;
  disableTranslate?: boolean;
  disableMoveOutParent?: boolean;
  disableDockLine?: boolean;
  playIcon?: string;
  pauseIcon?: string;
  fullScreenIcon?: string;
  loopIcon?: string;
  translateKey?: KeyType;
  scaleKey?: KeyType;
  minScale?: number;
  maxScale?: number;
  keydown?: KeydownType;
  viewPadding?: Padding;
  background?: string;
  grid?: boolean;
  gridColor?: string;
  gridSize?: number;
  rule?: boolean;
  ruleColor?: string;
}

export const defaultOptions: Options = {
  textColor: '#222222',
  fontFamily: '"Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial',
  fontSize: 12,
  lineHeight: 1.5,
  textAlign: 'center',
  textBaseline: 'middle',
  color: '#222222',
  activeColor: '#1890ff',
  hoverColor: '#fa541c',
  anchorRadius: 4,
  anchorBackground: '#fff',
  dockColor: '#fa541c',
  dockBackground: '#fa541c',
  dragColor: '#1890ff',
  rotateCursor: '/assets/img/rotate.cur',
  hoverCursor: 'pointer',
  minScale: 0.3,
  maxScale: 5,
  anchorSize: 5,
  keydown: KeydownType.Document,
  viewPadding: 0,
  gridSize: 10,
  gridColor: '#f3f3f3',
  ruleColor: '#888888',
};
