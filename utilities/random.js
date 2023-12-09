clearLocalData

autoLogin() {
    let t = "";
    try {
        t = localStorage.getItem("token")
    } catch (e) { }
    if (t)
        try {
            localStorage.removeItem("token")
        } catch (e) { }
    return this.httpClient.post(this.url + "autoLogin", {
        token: t,
        timezoneOffset: (new Date).getTimezoneOffset()
    }, {
        headers: new Cc({
            "Content-Type": "application/json"
        })
    })
}


login(t) {
    return t.timezoneOffset = (new Date).getTimezoneOffset(),
        this.httpClient.post(this.url + "login", t, {
            headers: new Cc({
                "Content-Type": "application/json"
            })
        })
}


uploadFiles(t, e, o, c) {
    let r = new FormData;
    for (let d = 0; d < t.length; d++)
        r.append("file[]", t[d]);
    return o && r.append("requiredTypes", o.join(",")),
        c && r.append("maxFileSizeInMB", c + ""),
        r.append("clientId", e),
        this.httpClient.post(this.url + "uploads", r, {
            reportProgress: !0,
            observe: "events"
        })
}


putFileToS3PreSignedUrl(t, e) {
    return this.httpClient.put(t, e, {
        headers: new Cc({
            "Content-Type": "text/csv",
            "Access-Control-Allow-Origin": window.location.origin,
            "Access-Control-Allow-Methods": "PUT"
        })
    })
}

let o = document.createElement("a");
o.href = t,
    o.download = e,
    o.click()
                }
isValidFileFormat(t, e) {
    const o = t.substring(t.lastIndexOf("."));
    return !!e.split(",").map(r => r.trim()).includes(o) || (this.toast.showToast({
        type: "error",
        msg: "Invalid file format.",
        desc: `Only ${e} files are allowed`
    }),
        !1)
}




sortBasedOnField(t, e) {
    t.sort((o, c) => o[e] < c[e] ? -1 : o[e] > c[e] ? 1 : 0)
}



toAlphaNumeric(t) {
    return t.toLowerCase().replace(/[^a-z0-9]+/gi, "")
}


deepEqual(t, e) {
    const o = Object.keys
        , c = typeof t;
    return t && e && "object" === c && c === typeof e ? o(t).length === o(e).length && o(t).every(d => this.deepEqual(t[d], e[d])) : t === e
}


Input types
"color", "button", "checkbox", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"




///// Re captcha

const ait = new Nt("recaptcha-language")
    , oit = new Nt("recaptcha-base-url")
    , cit = new Nt("recaptcha-nonce-tag")
    , rit = new Nt("recaptcha-settings")
    , iit = new Nt("recaptcha-v3-site-key")
    , mit_loadScript = function lit(n, a, t, e, o) {
        window.ng2recaptchaloaded = () => {
            a(grecaptcha)
        }
            ;
        const c = document.createElement("script");
        c.innerHTML = "",
            c.src = `${e || "https://www.google.com/recaptcha/api.js"}?render=${n}&onload=ng2recaptchaloaded ${t}`,
            o && (c.nonce = o),
            c.async = !0,
            c.defer = !0,
            document.head.appendChild(c)
    };


let t = document.createElement("script");
t.type = "text/javascript",
    t.src = "https://accounts.google.com/gsi/client",
    document.getElementsByTagName("head")[0].appendChild(t);
let e = Math.round(1e12 * Math.random()) + "";
setTimeout(() => {
    let c = `<div id="g_id_onload" data-client_id="${this.oauthClientId}" data-context="signin" data-ux_mode="redirect" data-login_uri="https://${window.location.hostname + "/prismapi/google-oauth"}" data-nonce="${e}" data-auto_prompt="false"></div><div class="g_id_signin" data-type="standard" data-shape="pill" data-theme="filled_blue" data-size="medium" data-logo_alignment="left"></div>`;
    this.googleDiv.nativeElement.innerHTML = c
}
    , 0);
let o = this.ds.searchData("google-oauth", {
    setNonce: !0,
    nonce: e
}).subscribe(c => {
    o.unsubscribe()
}
    , c => {
        o.unsubscribe()
    }
)
                }
initMicrosoftIdentity() {
    this.weds.showDialog({
        type: "wait",
        title: "Initialising...",
        message: "Please wait while a single-sign-on is initiated"
    });
    let t = this.ds.searchData("microsoft-oauth", {
        initSSO: !0
    }).subscribe(e => {
        t.unsubscribe(),
            this.weds.closeDialog(),
            "Success" == e.status ? window.location.href = e.url : this.weds.showDialog({
                type: "generic",
                code: e.error.code
            })
    }
    )
}





function AO(n) {
    let a = n.value;
    return a && /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a) ? null : {
        error: "Invalid email address"
    }
}
function Fit(n) {
    let t = n.value.split(",")
        , e = !0;
    return t.map(o => {
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(o.trim()) || (e = !1)
    }
    ),
        e ? null : {
            error: "Invalid email address"
        }
}
function v7(n) {
    let a = n.value;
    return !a || a.length < 8 ? {
        error: "Password needs to have minimum 8 characters with upper case, lower case, numeric & special characters"
    } : a.search(/[A-Z]/) < 0 || a.search(/[a-z]/) < 0 || a.search(/[0-9]/) < 0 || a.replace(/[a-z,0-9]/gi, "").length < 1 ? {
        error: "Password needs to have upper case, lower case, numeric & special characters"
    } : null
}
function Lit(n) {
    return a => a.parent && a.parent.value && a.value === a.parent.controls[n].value ? null : {
        error: "Passwords need to match"
    }
}
function Hit(n) {
    let a = n.value;
    if (!a)
        return {
            mobileValid: !1
        };
    var t = a.v || a || "";
    return (t = t.replace(/[^\d]+/gi, "")).length > 10 && (t = t.replace(/^(91|0)/, "")),
        t.length > 10 && (t = t.replace(/^(\+*91)/, "")),
        t.length < 8 || t.length > 12 ? {
            mobileValid: !1
        } : null
}
function w7(n) {
    return /^#*[0-9A-F]{6}$/i.test(n.value) ? null : {
        error: "Invalid HEX color code"
    }
}
function no(n, a = 0) {
    return t => {
        let e = t.value;
        return e ? (e = e.trim().replace(/<\/?[^>]+>/gi, ""),
            e.length < n ? {
                error: "Minimum of " + n + " character" + (1 == n ? "" : "s") + " required"
            } : a && e.length > a ? {
                error: "Maximum of " + a + " character" + (1 == a ? "" : "s") + " allowed"
            } : null) : null
    }
}
function Jy(n) {
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(n.value) ? null : {
        error: "Invalid URL"
    }
}
function Yit(n) {
    let a = n.value;
    if (!a)
        return null;
    let t = a.split(",")
        , e = !0;
    return t.map(o => {
        (function jit(n) {
            return !/^[a-z]+[0-9,\-]*[a-z]+\.{1,1}[a-z]{2,}$/i.test(n.trim())
        }
        )(o) && (e = !1)
    }
    ),
        e ? null : {
            error: "Invalid domain name"
        }
}

//////////////Key board event handling

_handleKeydown(t) {
    this.disabled || (this.panelOpen ? this._handleOpenKeydown(t) : this._handleClosedKeydown(t))
}
_handleClosedKeydown(t) {
    const e = t.keyCode
        , o = 40 === e || 38 === e || 37 === e || 39 === e
        , c = 13 === e || 32 === e
        , r = this._keyManager;
    if (!r.isTyping() && c && !jo(t) || (this.multiple || t.altKey) && o)
        t.preventDefault(),
            this.open();
    else if (!this.multiple) {
        const d = this.selected;
        r.onKeydown(t);
        const p = this.selected;
        p && d !== p && this._liveAnnouncer.announce(p.viewValue, 1e4)
    }
}
_handleOpenKeydown(t) {
    const e = this._keyManager
        , o = t.keyCode
        , c = 40 === o || 38 === o
        , r = e.isTyping();
    if (c && t.altKey)
        t.preventDefault(),
            this.close();
    else if (r || 13 !== o && 32 !== o || !e.activeItem || jo(t))
        if (!r && this._multiple && 65 === o && t.ctrlKey) {
            t.preventDefault();
            const d = this.options.some(p => !p.disabled && !p.selected);
            this.options.forEach(p => {
                p.disabled || (d ? p.select() : p.deselect())
            }
            )
        } else {
            const d = e.activeItemIndex;
            e.onKeydown(t),
                this._multiple && c && t.shiftKey && e.activeItem && e.activeItemIndex !== d && e.activeItem._selectViaInteraction()
        }
    else
        t.preventDefault(),
            e.activeItem._selectViaInteraction()
}



const loginDurationOptions = [{
    title: "4 Hours",
    time: 14400
}, {
    title: "1 Day",
    time: 86400
}, {
    title: "1 Week",
    time: 597800
}, {
    title: "30 Days",
    time: 2562e3
}],

    id: Math.round(1e6 * Math.random()),


        calculatePageNumbers(t) {
    t && (this.data = t),
        this.data.totalDataCnt = 1 * this.data.totalDataCnt;
    let e = this.pageNumber;
    this.numPages = [e],
        e > 1 && this.numPages.splice(0, 0, e - 1),
        e + 1 <= Math.ceil(this.data.totalDataCnt / this.limit) && this.numPages.push(e + 1),
        this.numPages.length < 3 && e + 2 <= Math.ceil(this.data.totalDataCnt / this.limit) ? this.numPages.push(e + 2) : this.numPages.length < 3 && e > 2 && this.numPages.splice(0, 0, e - 2),
        this.endOfRange = Math.min(this.pageNumber * this.limit, this.data.totalDataCnt),
        this.startOfRange = Math.max((this.pageNumber - 1) * this.limit + 1, 1)
}
onLimitChange(t) {
    this.pageNumber = 1,
        this.limit = t.value,
        this.ds.updateLimit(),
        this.onPaginationEvent.emit({
            type: "getData"
        })
}
onPageNumberClick(t) {
    this.pageNumber != t && (this.pageNumber = t,
        this.ds.updatePageNumber(this.pageNumber),
        this.onPaginationEvent.emit({
            type: "getData"
        }))
}
onNextPrev(t) {
    "first" == t && (this.pageNumber = 1),
        "next" == t && this.pageNumber++,
        "prev" == t && this.pageNumber--,
        "last" == t && (this.pageNumber = Math.ceil(this.data.totalDataCnt / this.limit)),
        this.ds.updatePageNumber(this.pageNumber),
        this.onPaginationEvent.emit({
            type: "getData"
        })
}


downloadFile(t) {
    let e = document.createElement("a");
    e.href = "data:text/csv;base64," + window.btoa(t),
        e.setAttribute("download", this.data.title + "_template.csv"),
        document.body.appendChild(e),
        e.click(),
        document.body.removeChild(e)
}

width: window.innerWidth < 900 ? .95 * window.innerWidth + "px" : Math.min(1200, .95 * window.innerWidth) + "px",
    height: window.innerWidth < 900 ? .9 * window.innerHeight + "px" : Math.min(700, .95 * window.innerHeight) + "px",
