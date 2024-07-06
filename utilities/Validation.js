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

export const openPopup = (url, features) => {
  const popup = openPopupUsingWindowOpen(url, features);
  if (popup && typeof popup.focus === 'function') {
    popup.focus();
  } else {
    if (!features || (typeof features === 'string' && !features.includes('noopener'))) {
      openPopupUsingTag(url);
    }
  }
};

const openPopupUsingWindowOpen = (url, features) => {
  return window.open(
    url,
    '_blank',
    typeof features === 'string' && features.length > 0 ? features : undefined
  );
};

const openPopupUsingTag = url => {
  const anchorElement = document.createElement('a');
  anchorElement.href = url;
  anchorElement.target = '_blank';
  const event = new MouseEvent('click', {
    view: window,
    bubbles: true,
    cancelable: true
  });
  anchorElement.dispatchEvent(event);
};
