import { isArray, isString } from './utils';

export const classnames = (...args: any[]): string => {
  const cssClass = args.reduce((cssClass, value) => {
    if (!value) {
      return cssClass;
    } else if (isArray(value)) {
      cssClass += value.join(' ');
    } else if (isString(value)) {
      cssClass += value;
    } else if (typeof value === 'object') {
      Object.keys(value).forEach(cssKey => {
        if (value[cssKey]) {
          cssClass += `${cssKey} `;
        }
      });
      cssClass = cssClass.trim();
    }
    cssClass += ' ';
    return cssClass;
  }, '');

  return cssClass.trim();
};