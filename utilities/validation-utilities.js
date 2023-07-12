function numeralsOnly(e) {
  var r = (e = e || event).charCode
    ? e.charCode
    : e.keyCode
    ? e.keyCode
    : e.which
    ? e.which
    : 0;
  return (
    !(r > 31 && (r < 48 || r > 57) && 46 != r) ||
    (alert("Enter Digit only in this field!"), !1)
  );
}

function isInteger(e) {
  var r;
  for (r = 0; r < e.length; r++) {
    var t = e.charAt(r);
    if (t < "0" || t > "9") return !1;
  }
  return !0;
}

function IsNumb_decimal(e) {
  if (((mystring = e.value), mystring.match(/^\d+$|^\d+\.\d{2}$/))) return !0;
  alert("Enter Digit ");
}

function isEmail(e) {
  if (((theValue = e.value), e.focus(), "" != theValue)) {
    var r,
      t = "";
    theValue = trim(theValue);
    var a = theValue.length;
    if (-1 == theValue.indexOf("@", 0))
      return alert("Email must contain @ "), !1;
    if (
      "@" == theValue.charAt(0) ||
      "@" == theValue.charAt(a) ||
      "@" == theValue.charAt(a - 1)
    )
      return alert("@ not allowed at start or end of email"), !1;
    if (
      "." == theValue.charAt(0) ||
      "." == theValue.charAt(a) ||
      "." == theValue.charAt(a - 1)
    )
      return alert("Dot(.) not allowed at start or end of email"), !1;
    if (
      ((r = theValue.indexOf("@", 0)),
      (dotat = theValue.indexOf(".", 0)),
      "." == theValue.charAt(dotat + 1) || "@" == theValue.charAt(dotat + 1))
    )
      return (
        alert(
          "Dot and @ are not allowed immediately following the dot in email"
        ),
        !1
      );
    if ("." == theValue.charAt(r + 1) || "@" == theValue.charAt(r + 1))
      return (
        alert("Dot and @ are not allowed immediately following the @ in email"),
        !1
      );
    if (-1 != theValue.indexOf("@", r + 1))
      return alert("Multiple @ are not allowed in email "), !1;
    if (-1 != theValue.indexOf(" ", 0))
      return alert("Blank spaces are not allowed in email"), !1;
    for (k = 0; k < a; ++k) {
      if ("@" == (t = theValue.substring(k, k + 1))) {
        if ("@" == theValue.substring(k, a)) return !1;
        if (-1 == theValue.indexOf(".", k))
          return alert("Invalid Email Id"), !1;
      }
      if ("." == t && "." == theValue.substring(k + 1, k + 2))
        return alert("Consecutive dots are not allowed in email"), k, !1;
      if (
        !(
          (t >= "a" && t <= "z") ||
          (t >= "A" && t <= "Z") ||
          (t >= "0" && t <= "9") ||
          "@" == t ||
          "." == t ||
          "_" == t ||
          "-" == t
        )
      )
        return alert("No special characters allowed except @, dot(.)"), !1;
    }
    for (var n = theValue.indexOf(".", r); n <= a; ++n)
      if (theValue.charAt(n) >= "0" && theValue.charAt(n) <= "9")
        return alert("Invalid domain name  "), !1;
  }
  return !0;
}

function maxLen(e, r, t) {
  if (parseInt(e.value.length) > parseInt(r))
    return alert(t + "\n [Current length is " + e.value.length), !1;
}

function req(objValue, strError) {
  return (
    0 != eval(objValue.value.length) ||
    ((strError && 0 != strError.length) ||
      (strError = objValue.name + " : Required Field"),
    objValue.focus(),
    alert(strError),
    (strError = ""),
    !1)
  );
}


function isValidURL(e) {
  return !!/^(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,4}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?$/.test(
    e
  );
}

function chkAlphaNum(objValue, strError) {
  var charpos = objValue.value.search("[^A-Za-z0-9' ']");
  if (objValue.value.length > 0 && charpos >= 0)
    return (
      (strError && 0 != strError.length) ||
        (strError = objValue.name + ": Only alpha-numeric characters allowed "),
      alert(
        strError + "\n [Error character position " + eval(charpos + 1) + "]"
      ),
      (strError = ""),
      objValue.focus(),
      !1
    );
}

function chkMinLen(objValue, cmdvalue, strError) {
  return (
    !(eval(objValue.value.length) < eval(cmdvalue)) ||
    ((strError && 0 != strError.length) ||
      (strError = objValue.name + " : " + cmdvalue + " characters minimum  "),
    alert(strError + "\n[Current length = " + objValue.value.length + " ]"),
    objValue.focus(),
    (strError = ""),
    !1)
  );
}

function chkMaxLen(objValue, cmdvalue, strError) {
  return (
    !(eval(objValue.value.length) > eval(cmdvalue)) ||
    ((strError && 0 != strError.length) ||
      (strError = objValue.name + " : " + cmdvalue + " characters minimum  "),
    alert(strError + "\n[Current length = " + objValue.value.length + " ]"),
    objValue.focus(),
    (strError = ""),
    !1)
  );
}

function chkDesc(objValue, strError) {
  var charpos = objValue.value.search("[^A-Za-z0-9-_\\/ ]");
  return (
    !(objValue.value.length > 0 && charpos >= 0) ||
    ((strError && 0 != strError.length) ||
      (strError = objValue.name + ":characters allowed are 0-9,- and ,"),
    alert(strError + "\n [Error character position " + eval(charpos + 1) + "]"),
    objValue.focus(),
    !1)
  );
}

function chkDesc1(objValue, strError) {
  var charpos = objValue.value.search("[^0-9., ]");
  return (
    !(objValue.value.length > 0 && charpos >= 0) ||
    ((strError && 0 != strError.length) ||
      (strError = objValue.name + ": characters allowed are 0-9,- and,"),
    alert(strError + "\n [Error character position " + eval(charpos + 1) + "]"),
    objValue.focus(),
    !1)
  );
}

function chkNum(objValue, strError) {
  var charpos = objValue.value.search("[^0-9]");
  return (
    !(objValue.value.length > 0 && charpos >= 0) ||
    ((strError && 0 != strError.length) ||
      (strError = objValue.name + ": Only digits allowed "),
    alert(strError + "\n [Error character position " + eval(charpos + 1) + "]"),
    (strError = ""),
    objValue.focus(),
    !1)
  );
}

function chkNumeric(objValue, strError) {
  var charpos = objValue.value.search("[^0-9 . 0-9]");
  return (
    !(objValue.value.length > 0 && charpos >= 0) ||
    ((strError && 0 != strError.length) ||
      (strError = objValue.name + ": Only digits allowed "),
    alert(strError + "\n [Error character position " + eval(charpos + 1) + "]"),
    (strError = ""),
    objValue.focus(),
    !1)
  );
}

function chkNum1(objValue, strError) {
  var charpos = objValue.value.search("[^0-9 -]");
  return (
    !(objValue.value.length > 0 && charpos >= 0) ||
    ((strError && 0 != strError.length) ||
      (strError = objValue.name + ": Only digits allowed "),
    alert(strError + "\n [Error character position " + eval(charpos + 1) + "]"),
    (strError = ""),
    objValue.focus(),
    !1)
  );
}

function chkAlpha(objValue, strError) {
  var charpos = objValue.value.search("[^A-Za-z' '/&]");
  return (
    !(objValue.value.length > 0 && charpos >= 0) ||
    ((strError && 0 != strError.length) ||
      (strError = objValue.name + ": Only Charecter allowed "),
    alert(strError + "\n [Error character position " + eval(charpos + 1) + "]"),
    (strError = ""),
    objValue.focus(),
    !1)
  );
}

    function persent(e, r) {
      return !(e.value > 100) || (alert(r), e.focus(), !1);
    }

    function chkPassMatch(e, r, t) {
      return e.value == r.value || (alert(t), e.focus(), (t = ""), !1);
    }

    function SetDec(objvalue, str, places) {
      var ValidChars = "0123456789.",
        IsNumber = !0,
        Char;
      for (i = 0; i < str.length && 1 == IsNumber; i++)
        if (((Char = str.charAt(i)), -1 == ValidChars.indexOf(Char)))
          return (
            (IsNumber = !1),
            alert("Percentage should be Numeric"),
            objvalue.focus(),
            !1
          );
      return str > 100 || str < 0
        ? (alert("Percentage should be less than 100 and not be negative "),
          objvalue.focus(),
          !1)
        : (-1 != str.indexOf(".") &&
            (str =
              places > 0
                ? str.substring(
                    0,
                    eval(str.indexOf(".")) + eval(places) + eval(1)
                  )
                : str.substring(0, str.indexOf("."))),
          alert("only two decimal places are allowed"),
          objvalue.focus(),
          !1);
    }


/***************************
 *
 *
 *        Reg Exes
 *
 *
 * ************************* */

var regexName = /[^A-Za-z\s]/g;
var regexAlphaNumeric = /[^0-9A-Za-z\s]/g;
var regexNumber = /[^0-9]/g;
var regexNumberExist = /[0-9]/g;
var regexAddress = /[^A-Za-z0-9\s.,-/]/g;
var regexMobileN = /^([6789]{1})?([0-9]{9})$/g;
var regexPanN =
  /^([A-Z]{3})?([CPHFATBLJG]{1})?([A-Z]{1})?([0-9]{4})?([A-Z]{1})$/g;
var regexEmailN = /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
var regexAadhaarN = /^([1-9]{1})([0-9]{11})$/g;
var regexCompanyName = /[^A-Za-z0-9-.&()\s]/g;
var regexCityPinN = /^([0-9]{6})$/g;
var regexIfscCodeN = /^[A-Za-z]{4}[0]{1}[A-Za-z0-9]{6}$/g;
var regexDateN = /^[0-9]{4}[-]{1}[0-9]{2}[-]{1}[0-9]{2}$/g;
var regexRefNoN = /^([SEse]{2})([A-za-z0-9]{2})([0-9]*)/g;
var regexAmountN = /^\d{0,}(\.\d{0,2})?$/g;
var regexDLN = /^[A-Z]{2}[0-9]{2}[0-9]{4}[0-9]{7}$/g;
var regexPassportN = /^[A-Z]{1}[0-9]{7}$/g;
var regexVoterIdN = /^[A-Z]{3}[0-9]{7}$/g;
var regexPasswordN =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;


  export const parseAndValidateNumber = (
  numVal,
  { negataive = false, decimal = false, numDecimals = null, blankStringValid = false } = {}
) => {
  let stringNum = numVal;
  if (typeof numVal !== 'string') {
    if (typeof numVal !== 'number') {
      return null;
    }
    stringNum = numVal.toString();
  }

  if (blankStringValid && stringNum.trim() === '') {
    return '';
  }

  let truncateRegExString = '^';
  let validateRegExString = '^';
  if (negataive) {
    truncateRegExString += '-?';
    validateRegExString += '-?';
  }
  // Create two capturing groups for truncate string
  // this will remove decimals beyond two decimals and will also remove leading zeros
  truncateRegExString += '(0*)?(\\d*';
  validateRegExString += '\\d*';

  if (decimal) {
    // Allow the decimal pattern to repeat at most two times
    // this ensures that if user puts a decimal in the position before the current position
    // then the values can be truncated accordingly
    validateRegExString += '(?:\\.\\d*){0,2}';
    truncateRegExString += '(?:\\.\\d';
    let numRepeats = '*';
    if (typeof numDecimals === 'number') {
      numRepeats = `{0,${numDecimals}}`;
    }

    truncateRegExString += `${numRepeats})?`;
  }

  truncateRegExString += ')';
  validateRegExString += '$';

  const validateNumRegex = new RegExp(validateRegExString);
  const validateMatchResult = stringNum.match(validateNumRegex);
  if (!Array.isArray(validateMatchResult) || validateMatchResult.length === 0) {
    return null;
  }

  const truncateNumRegex = new RegExp(truncateRegExString);
  const matchResult = stringNum.match(truncateNumRegex);

  // Match result should always match here because the validate regex is a superset of the match regex
  if (!Array.isArray(matchResult) || matchResult.length === 0) {
    console.warn('unexpected number validation error');
    return null;
  }

  let parsedNum = matchResult[2] || '';

  // leading zeroes
  let zeroGroup = matchResult[1];

  if (zeroGroup) {
    // No number apart from 0, assing it for the result
    if (!parsedNum) {
      parsedNum = '0';
    }

    // First charcter is a . and 0 exists, add a leading 0 to match user input
    if (parsedNum.charAt(0) === '.') {
      parsedNum = `0${parsedNum}`;
    }
  }

  // . is the only character in the string, add a leading 0
  if (parsedNum.indexOf('.') === parsedNum.length - 1 && parsedNum.length === 1) {
    parsedNum = `0${parsedNum}`;
  }

  return parsedNum || null;
};



// @flow
/* eslint-disable no-bitwise */

const AD_REPLACER_R = /(a)(d)/gi;

/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */
const charsLength = 52;

/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */
const getAlphabeticChar = (code: number): string =>
  String.fromCharCode(code + (code > 25 ? 39 : 97));

/* input a number, usually a hash and convert it to base-52 */
export default function generateAlphabeticName(code: number): string {
  let name = '';
  let x;

  /* get a char and divide by alphabet-length */
  for (x = Math.abs(code); x > charsLength; x = (x / charsLength) | 0) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, '$1-$2');
}




function required(value) {
  return value ? undefined : "Required";
}

const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const number = (value) =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;
const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined;
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email address"
    : undefined;
const phone = (value) =>
  value && value.length !== 10 ? "Must be 10 digits" : undefined;
const username = (value) =>
  value && value.length < 4 ? "Must be at least 4 characters long" : undefined;
const password = (value) =>
  value && value.length < 6 ? "Must be at least 6 characters long" : undefined;

export {
  required,
  maxLength,
  number,
  minValue,
  email,
  phone,
  username,
  password,
};
