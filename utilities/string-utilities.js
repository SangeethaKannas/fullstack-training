export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const getCapitalizeString = (str) => {
  if (str) {
    const splitStr = str.toLowerCase().split(" ");
    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  }
  return str;
};

export const slugify = (string) => string.toLowerCase().replace(/\s+/g, "-");

var vowels =
  "(a(a|i|e|u)?)|(ee?)|(i)|(o(o|a)?)|(u)|(A(hh)?)|(E)|(I)|(O)|(U)|(H)";
var consonants =
  "(bh?)|(ch?)|(dh?)|(f)|(g)|(h)|(j)|(kh?)|(l)|(L)|(m)|(n(N|G|Y)?)|(N)|(p)|(q)|(r)|(R)|(sh?)|(th?)|(v)|(w)|(y)|(zh)";
var letter_codes = {
  "~a": "&#2949;",
  "~aa": "&#2950;",
  "~A": "&#2950;",
  "~ae": "&#2959;",
  "~E": "&#2959;",
  "~ai": "&#2960;",
  "~au": "&#2964;",
  "~e": "&#2958;",
  "~ee": "&#2952;",
  "~I": "&#2952;",
  "~i": "&#2951;",
  "~o": "&#2962;",
  "~oo": "&#2954;",
  "~U": "&#2954;",
  "~oa": "&#2963;",
  "~O": "&#2963;",
  "~u": "&#2953;",
  "~Ahh": "&#2947;",
  "~H": "&#2947;",
  "*": "&#3021;",
  a: "",
  Ahh: "&#2947;",
  H: "&#2947;",
  aa: "&#3006;",
  A: "&#3006;",
  ae: "&#3015;",
  E: "&#3015;",
  ai: "&#3016;",
  au: "&#3020;",
  e: "&#3014;",
  ee: "&#3008;",
  I: "&#3008;",
  i: "&#3007;",
  o: "&#3018;",
  oo: "&#3010;",
  U: "&#3010;",
  oa: "&#3019;",
  O: "&#3019;",
  u: "&#3009;",
  b: "&#2986;",
  bh: "&#2986;",
  p: "&#2986;",
  f: "&#2947;&#2986;",
  ch: "&#2970;",
  d: "&#2975;",
  t: "&#2975;",
  dh: "&#2980;",
  th: "&#2980;",
  g: "&#2965;",
  k: "&#2965;",
  kh: "&#2965;",
  c: "&#2965;",
  h: "&#3001;",
  j: "&#2972;",
  l: "&#2994;",
  L: "&#2995;",
  m: "&#2990;",
  n: "&#2985;",
  N: "&#2984;",
  nN: "&#2979;",
  nG: "&#2969;",
  nY: "&#2974;",
  r: "&#2992;",
  R: "&#2993;",
  s: "&#3000;",
  sh: "&#2999;",
  v: "&#2997;",
  w: "&#2997;",
  y: "&#2991;",
  zh: "&#2996;",
};

function split_word(word) {
  var syllables = new Array(0);
  var vowel_start_p = true;
  while (word.length) {
    re = new RegExp(vowels);
    var index = word.search(vowels);
    if (index == 0) {
      var matched = re.exec(word)[0];
      if (vowel_start_p) {
        syllables.push("~" + matched);
      } else {
        syllables.push(matched);
      }
      vowel_start_p = true;
      word = word.substring(matched.length);
    } else {
      re = new RegExp(consonants);
      var index = word.search(consonants);
      if (index == 0) {
        var matched = re.exec(word)[0];
        syllables.push(matched);
        vowel_start_p = false;
        word = word.substring(matched.length);
        var next = word.search(vowels);
        if (next != 0 || word.length == 0) syllables.push("*");
      } else {
        syllables.push(word.charAt(0));
        word = word.substring(1);
      }
    }
  }
  return syllables;
}

function match_code(syllable_mcc) {
  var matched = letter_codes[syllable_mcc];
  if (matched != null) return matched;
  return syllable_mcc;
}

function one_word(word_ow) {
  if (!word_ow) return "";
  var syllables_ow = split_word(word_ow);
  var letters_ow = new Array(0);
  for (var i_ow = 0; i_ow < syllables_ow.length; i_ow++) {
    letters_ow.push(match_code(syllables_ow[i_ow]));
  }
  return letters_ow.join("");
}
function many_words(sentence) {
  var regex = "((" + vowels + ")|(" + consonants + "))+";
  var words = new Array(0);
  while (sentence.length >= 1) {
    re = new RegExp("^``" + regex);
    var match = re.exec(sentence);
    if (match != null) {
      match = match[0];
      words.push("`");
      words.push(one_word(match.substring(2)));
      sentence = sentence.substring(match.length);
    } else {
      re = new RegExp("^`" + regex);
      match = re.exec(sentence);
      if (match != null) {
        match = match[0];
        words.push(match.substring(1));
        sentence = sentence.substring(match.length);
      } else {
        re = new RegExp("^" + regex);
        match = re.exec(sentence);
        if (match != null) {
          match = match[0];
          words.push(one_word(match));
          sentence = sentence.substring(match.length);
        } else {
          words.push(sentence.charAt(0));
          sentence = sentence.substring(1);
        }
      }
    }
  }
  return words.join("");
}

function print_many_words(index_pmw) {
  var text_pmw = many_words(document.convarea.many_words_text.value);
  var ans = "";
  while (text_pmw.length) {
    var unicode_chars = /&#[0-9]+;/;
    re = unicode_chars;
    var matche = re.exec(text_pmw);
    if (matche != null) {
      matche = matche[0];
      search = text_pmw.search(unicode_chars);
      ans += text_pmw.substring(0, search);
      ans += String.fromCharCode(matche.match(/[0-9]+/));
      text_pmw = text_pmw.substring(search + matche.length);
    } else {
      ans += text_pmw.substring(0);
      text_pmw = "";
    }
  }
  document.convarea.converted_text.value = ans;
  var html_txt = "";
  for (i = 0; i < ans.length; i++) {
    var unicode_character = ans.charCodeAt(i);
    switch (unicode_character) {
      case 32:
        html_txt += " ";
        break;
      case 10:
      case 13:
        html_txt += "<br/>\n";
        break;
      default:
        html_txt += "&#" + unicode_character + ";";
    }
  }
  document.convarea.html_text.value = html_txt;
}

function trim(e) {
  var r = e,
    t = 0;
  for (t = 0; t < r.length && " " == r.charAt(t); t++);
  for (t = (r = r.substring(t)).length; t > 0 && " " == r.charAt(t - 1); t--);
  return (r = r.substring(0, t));
}
