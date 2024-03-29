const displayError = (error) => {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      return 'Permission Denied';
    case error.POSITION_UNAVAILABLE:
      return 'Position Unavailable';
    case error.TIMEOUT:
      return 'Request timed out';
    case error.UNKNOWN_ERROR:
      return 'Unknown error';
    default:
      return 'Unknown error';
  }

}

const getLocation = (location) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(location, displayError);
  } else {
    console.error('Geolocation is not supported by this browser.');
  }
};

const getParamValue = (name) => {
  if (name != null && name != "" && name.replace(/\s+/g, '') != "") {
    var url = new URL(window.location.href);
    return url.searchParams.get(name);
  }
  return null;

}