
/* eslint-disable no-prototype-builtins */
'use es6';

export function extend(out, ...args) {
  let key;
  let i = 0;
  out = out || {};

  while (i < args.length) {
    if (!args[i]) {
      i++;
      continue;
    }

    for (key in args[i]) {
      if (args[i].hasOwnProperty(key)) {
        out[key] = args[i][key];
      }
    }

    i++;
  }

  return out;
}
export function contains(list, item) {
  if (!item) {
    return false;
  }

  for (let i = 0; i < list.length; i++) {
    if (item.indexOf(list[i]) > -1) {
      return true;
    }
  }

  return false;
}
export function stringifyCookies(cookies) {
  let response = '';

  for (const cookie in cookies) {
    if (cookies.hasOwnProperty(cookie)) {
      response += `${cookie}=${cookies[cookie]};`;
    }
  }

  return response;
}

export function reverseString(str) = str.split('').reverse().join('')

const capStr = str.replace(/\w\S*/g, (w) =>(w.replace(/^\w/, c=> c.toUpperCase())));

const scrollToTop = window.scrollTo(0, 0)

const copy = navigator.clipboard.writeText(text)

//Generate random hex
const hexClr = () => '#' +Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, 0)

