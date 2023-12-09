export const convertTimezone = (date, tzString) => {
  return new Date(
      (typeof date === "string" ? 
      new Date(date) : 
      date)
      .toLocaleString("en-US", { timeZone: tzString }));
}

export const dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

export const monthNames = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

function daysInFebruary(e) {
  return e % 4 != 0 || (e % 100 == 0 && e % 400 != 0) ? 28 : 29;
}

function isDate(e, r) {
  var t = DaysArray(12),
    a = e.indexOf(dtCh),
    n = e.indexOf(dtCh, a + 1),
    o = e.substring(0, a),
    l = e.substring(a + 1, n),
    s = e.substring(n + 1);
  (strYr = s),
    "0" == o.charAt(0) && o.length > 1 && (o = o.substring(1)),
    "0" == l.charAt(0) && l.length > 1 && (l = l.substring(1));
  for (var u = 1; u <= 3; u++)
    "0" == strYr.charAt(0) && strYr.length > 1 && (strYr = strYr.substring(1));
  return (
    (month = parseInt(l)),
    (day = parseInt(o)),
    (year = parseInt(strYr)),
    -1 == a || -1 == n
      ? (alert("The date format should be : dd/mm/yyyy"), r.focus(), !1)
      : l.length < 1 || month < 1 || month > 12
        ? (alert("Please enter a valid month"), r.focus(), !1)
        : o.length < 1 ||
          day < 1 ||
          day > 31 ||
          (2 == month && day > daysInFebruary(year)) ||
          day > t[month]
          ? (alert("Please enter a valid day"), r.focus(), !1)
          : 4 != s.length || 0 == year || year < minYear || year > maxYear
            ? (alert(
              "Please enter a valid 4 digit year between " +
              minYear +
              " and " +
              maxYear
            ),
              r.focus(),
              !1)
            : (-1 == e.indexOf(dtCh, n + 1) &&
              0 != isInteger(stripCharsInBag(e, dtCh))) ||
            (alert("Please enter a valid date"), r.focus(), !1)
  );
}

function datecomp(e, r, t) {
  var a = e,
    n = a.substring(3, 5) + "/" + a.substring(0, 2) + "/" + a.substring(6, 10),
    o = new Date(n),
    l = r,
    s = l.substring(3, 5) + "/" + l.substring(0, 2) + "/" + l.substring(6, 10),
    u = new Date(s);
  return (
    !("" != o && "" != u && u < o) ||
    (alert("End Date should be greater then Start Date"), t.focus(), !1)
  );
}

function IsPreviousDate(e, r) {
  var t = e,
    a = t.substring(3, 5) + "/" + t.substring(0, 2) + "/" + t.substring(6, 10),
    n = new Date(a),
    o = new Date(),
    l = new Date(formatDate(o, "MM/DD/YYYY"));
  return (
    !("" != n && n < l) ||
    (alert("Selected Date Cannot Be Earlier Than Today"), r.focus(), !1)
  );
}

function IsFutureDate(e, r) {
  var t = e,
    a = t.substring(3, 5) + "/" + t.substring(0, 2) + "/" + t.substring(6, 10),
    n = new Date(a),
    o = new Date(),
    l = new Date(formatDate(o, "MM/DD/YYYY"));
  return (
    !("" != n && n > l) ||
    (alert("Selected Date Cannot Be Greator Than Today"), r.focus(), !1)
  );
}

function formatDate(e, r) {
  var t = r.toUpperCase();
  /^(M|MM|D|DD|YYYY)([\-\/]{1})(M|MM|D|DD|YYYY)(\2)(M|MM|D|DD|YYYY)$/.test(t) ||
    (t = "MM/DD/YYYY"),
    -1 == t.indexOf("M") && (t = "MM/DD/YYYY"),
    -1 == t.indexOf("D") && (t = "MM/DD/YYYY"),
    -1 == t.indexOf("YYYY") && (t = "MM/DD/YYYY");
  var a = "" + (e.getMonth() + 1),
    n = "0" + a;
  n = n.substring(n.length - 2, n.length);
  var o = "" + e.getDate(),
    l = "0" + o;
  l = l.substring(l.length - 2, l.length);
  var s = "" + e.getFullYear(),
    u = "/";
  -1 != t.indexOf("-") && (u = "-");
  var i = t.split(u),
    c = "";
  switch (i[0]) {
    case "M":
      c += a + u;
      break;
    case "MM":
      c += n + u;
      break;
    case "D":
      c += o + u;
      break;
    case "DD":
      c += l + u;
      break;
    case "YYYY":
      c += s + u;
  }
  switch (i[1]) {
    case "M":
      c += a + u;
      break;
    case "MM":
      c += n + u;
      break;
    case "D":
      c += o + u;
      break;
    case "DD":
      c += l + u;
      break;
    case "YYYY":
      c += s + u;
  }
  switch (i[2]) {
    case "M":
      c += a;
      break;
    case "MM":
      c += n;
      break;
    case "D":
      c += o;
      break;
    case "DD":
      c += l;
      break;
    case "YYYY":
      c += s;
  }
  return c;
}

function compareDates(e, r) {
  var t = parseInt(e.substring(0, 2), 10),
    a = parseInt(e.substring(3, 5), 10),
    n = parseInt(e.substring(6, 10), 10),
    o = parseInt(r.substring(0, 2), 10),
    l = parseInt(r.substring(3, 5), 10),
    s = parseInt(r.substring(6, 10), 10),
    u = new Date(n, a, t);
  if (new Date(s, l, o) < u)
    return alert("To date cannot be greater than from date"), !1;
}

const isleapYear = y => {
  if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) return 1;
  return 0;
};
const getDay = (y, m, d) => {
  var sum = 0;
  var month = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var i;
  month[2] = month[2] + Number(isleapYear(y));
  for (i = 1; i < y; i++) {
    sum = sum + Number(365) + Number(isleapYear(i));
  }
  for (i = 1; i < m; i++)
    sum = sum + Number(month[i]);
  sum = sum + Number(d);
  return sum % 7;
};

const convertDateFormat = preDate => {
  var weekDay = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wendesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var month = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  var str = preDate;
  var y, m, d;
  var i;
  var data = str.split('-');
  y = parseInt(data[0], 10);
  m = month[parseInt(data[1], 10)];
  d = data[2].split('T')[0];

  return (
    weekDay[getDay(y, parseInt(data[1], 10), Number(d))] +
    ', ' +
    m +
    ' ' +
    d +
    ', ' +
    y
  );
};

function formatDate(date: Date) : string {
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const formatted = formatDate(new Date())
console.log(formatted)