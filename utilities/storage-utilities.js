///// Local Storage utilities
export default class StorageBrowser {
  /** **************************************
   *       CHECK BROWSER SUPPORT
   *****************************************  */

  // check browser support Not Local Storage
  isSupportLS() {
    try {
      if (window.localStorage !== undefined) {
        return true;
      }
    } catch (err) {
      console.log("Local Storage is not Supported");
      return false;
    }
  }

  // check browser support Not Local Storage
  isSupportCS() {
    try {
      // Create cookie
      document.cookie = "cookietest=1";
      const ret = document.cookie.indexOf("cookietest=") !== -1;
      // Delete cookie
      document.cookie = "cookietest=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
      return ret;
    } catch (e) {
      return false;
    }
  }

  /** **************************************
   *          SET  STORAGE
   *****************************************  */

  // Set LocalStorage
  setStorageLs(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
  }

  // Set LocalStorage
  setStorageLsNonJson(name, data) {
    localStorage.setItem(name, data);
  }

  // Set Cookies
  setStorageCS(name, value) {
    document.cookie = data;
    const d = new Date();
    d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
    const expires = `expires=${d.toUTCString()}`;
    document.cookie = `${name}=${value};${expires};path=/`;
  }

  // Set Session
  setStorageSS() {}

  /** **************************************
   *          GET  STORAGE
   *****************************************  */

  // Get LocalStorage
  getStorageLS(name) {
    const value = localStorage.getItem(name);
    if (!value) return value;
    return JSON.parse(value);
  }

  getStorageLSnonJson(name) {
    const value = localStorage.getItem(name);
    if (!value) return value;
    return JSON.parse(value);
  }

  // Get Cookies
  getStorageCS(cname) {
    const name = `${cname}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  // Get Session
  getStorageSS() {}

  /** **************************************
   *          CHECK   STORAGE BY NAME
   *****************************************  */

  //  Check Local Storage by name

  checkStorageLS(name) {}

  //  Check Cookies by name

  checkStorageCS(name) {
    return getStorageCS(name) == "" ? false : getStorageCS(name);
  }

  // Clear Session Storage By name

  checkStorageSS(name) {}

  /** **************************************
   *          CLEAR   STORAGE
   *****************************************  */

  // Clear Cookies
  clearStorageLS() {
    localStorage.clear();
  }

  // Clear Cookies
  clearStorageCS() {}

  // Clear Session
  clearStorageSS() {}
}
