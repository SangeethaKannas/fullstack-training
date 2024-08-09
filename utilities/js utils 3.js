function _typeof(e) {
    "@babel/helpers - typeof";
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    }
        : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
    )(e)
}
function _aload(e) {
    "use strict";
    e = e || window.document.querySelectorAll("[data-aload]"),
        void 0 === e.length && (e = [e]);
    var t, n = 0, i = e.length;
    for (n; i > n; n += 1)
        t = e[n],
            t["LINK" !== t.tagName ? "src" : "href"] = t.getAttribute("data-aload"),
            t.removeAttribute("data-aload");
    return e
}
!function (e) {
    var t = {
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ã": "A",
        "Å": "A",
        "Æ": "A",
        "Č": "C",
        "Ć": "C",
        "Ç": "C",
        "Đ": "Dj",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ë": "E",
        "Î": "I",
        "Ï": "I",
        "Ì": "I",
        "Í": "I",
        "Ñ": "N",
        "Ô": "O",
        "Ò": "O",
        "Ó": "O",
        "Õ": "O",
        "Œ": "OE",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ü": "U",
        "Ŕ": "R",
        "Š": "S",
        "Ý": "Y",
        "Ž": "Z",
        "à": "a",
        "á": "a",
        "â": "a",
        "ã": "a",
        "ä": "a",
        "å": "a",
        "æ": "ae",
        "ç": "c",
        "č": "c",
        "ć": "c",
        "đ": "dj",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ë": "e",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ï": "i",
        "ð": "o",
        "ñ": "n",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "õ": "o",
        "ö": "o",
        "œ": "oe",
        "ŕ": "r",
        "š": "s",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "u",
        "ÿ": "y",
        "ý": "y",
        "ž": "z",
        "&": "et",
        "€": "euros",
        $: "dollars",
        "®": "(R)",
        "©": "(c)",
        "²": "2",
        "ø": "o",
        "Ø": "O",
        "þ": "b",
        "Þ": "B",
        "ß": "Ss"
    }
        , n = /[ÀÁÂÃÅÆČĆÇĐÈÉÊËÎÏÌÍÑÔÒÓÕŒÙÚÛÜŔŠÝŽàáâãäåæçčćđèéêëìíîïðñòóôõöœŕšùúûüÿýž&€$®©²øØþÞß]/g
        , i = window.location.host
        , o = -1 !== i.indexOf("labellevie.com") || -1 !== i.indexOf("labellevie.paris") || "localhost:8080" === i
        , a = -1 !== i.indexOf("bamcourses.com") || "localhost:8084" === i
        , s = -1 !== i.indexOf("frichtimarket.com") || "localhost:8086" === i
        , r = -1 !== i.indexOf("frichtievents.com") || "localhost:8088" === i
        , l = -1 !== i.indexOf("frichti.co") || -1 !== i.indexOf("frichti.eu") || "localhost:8090" === i
        , c = -1 === i.indexOf("preprod") && (-1 !== i.indexOf("labellevie.com") || -1 !== i.indexOf("bamcourses.com") || -1 !== i.indexOf("frichtimarket.com") || -1 !== i.indexOf("frichtievents.com") || -1 !== i.indexOf("frichti.co") || -1 !== i.indexOf("frichti.eu"))
        , u = /iphone|ipod|ipad|android|webos|blackberry|fennec|mobile|iemobile|iris|kindle|opera m(ob|in)i|palm( os)?|windows (ce|phone)|nexus/i.test(navigator.userAgent.toLowerCase())
        , d = {
            street_number: "short_name",
            route: "long_name",
            postal_code: "short_name",
            locality: "long_name"
        }
        , p = {
            types: ["geocode"],
            componentRestrictions: {
                country: "fr"
            }
        };
    window.APP = window.APP || {},
        APP.UTILS = {
            isProd: function () {
                return c
            },
            isMobile: function () {
                return u
            },
            isSite: function (e) {
                return "labellevie" === e ? o : "bamcourses" === e ? a : "frichti" === e ? s : "fevents" === e ? r : "fco" === e && l
            },
            isLabelleVie: function () {
                return this.isSite("labellevie")
            },
            isBamCourses: function () {
                return this.isSite("bamcourses")
            },
            isFrichti: function () {
                return this.isSite("frichti")
            },
            isFrichtiEvents: function () {
                return this.isSite("fevents")
            },
            isFrichtiCo: function () {
                return this.isSite("fco")
            },
            getSiteBaseUrl: function () {
                var e = "";
                if (e = this.isBamCourses() ? "https://www.bamcourses.com" : this.isFrichti() ? "https://www.frichtimarket.com" : this.isFrichtiEvents() ? "https://www.frichtievents.com" : this.isFrichtiCo() ? "https://www.frichti.co" : "https://www.labellevie.com",
                    !this.isProd()) {
                    var t = "www"
                        , n = window.location.host.split(".");
                    4 === n.length && "preprod" === n[1] && (t = n[0]),
                        e = e.replace("www", t + ".preprod")
                }
                return e
            },
            getSiteName: function () {
                return this.isBamCourses() ? "Bam courses" : this.isFrichti() ? "Frichti market" : this.isFrichtiEvents() ? "Frichti events" : this.isFrichtiCo() ? "Frichti" : "La belle vie"
            },
            getSiteTitle: function () {
                return this.isBamCourses() ? "Bam courses : Vos courses livrées, MOINS CHÈRES qu'au supermarché." : this.isFrichti() ? "Frichti market : Des courses & des plats aussi frais que vous ! Livrés en 1h30 en moyenne." : this.isFrichtiEvents() ? "Frichti events : Des courses & des plats aussi frais que vous ! Livrés en 1h30 en moyenne." : this.isFrichtiCo() ? "Frichti : Faites-vous livrer des plats maison et de saison ainsi que vos courses trop fraîches chez vous ou au bureau en moins de 20 minutes, 7/7." : "La belle vie : Changez votre vision des courses"
            },
            getSiteCookieDomain: function () {
                return APP.UTILS.isBamCourses() ? ".bamcourses.com" : APP.UTILS.isFrichti() ? ".frichtimarket.com" : APP.UTILS.isFrichtiEvents() ? ".frichtievents.com" : APP.UTILS.isFrichtiCo() ? ".frichti.co" : ".labellevie.com"
            },
            preventEvent: function (e) {
                e && e.preventDefault && (e.preventDefault(),
                    e.stopPropagation())
            },
            deepClone: function (e) {
                return JSON.parse(JSON.stringify(e))
            },
            aload: function () {
                _aload()
            },
            stripetags: function (t) {
                return e("<div />").html(t).text()
            },
            slugify: function (e) {
                return e.toString().toLowerCase().replace(/\s+/g, "-").replace(n, function (e) {
                    return t[e]
                }).replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            pad: function (e, t) {
                return t = t || 2,
                    ("0000000000".substring(0, t) + e).substring(("" + e).length)
            },
            isValidEmail: function (e) {
                return /^([a-zA-Z0-9_\-\.\+]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e)
            },
            isValidPhoneNumber: function (e) {
                return /^(?:(?:\+|00)[1-9]{2,3}|0)\s*[1-9][0-9 \-\(\)\.]{7,32}$/.test(e)
            },
            formatPrice: function (e, t) {
                return t = "undefined" == typeof t ? 2 : t,
                    Number((parseFloat(e) || 0).toFixed(t)).toLocaleString("fr-FR", {
                        minimumFractionDigits: t
                    })
            },
            formatRawAddress: function (e) {
                return [e.street_number, e.street + ",", e.postal_code, e.city].join(" ")
            },
            formatFullAddress: function (e) {
                var t = "";
                return e.name ? t = e.name : (e.user = e.user || {},
                    t = [e.firstname || e.user.first_name || "", e.lastname || e.user.last_name || ""].join(" "),
                    e.company && (t = e.company + ", " + t)),
                    [t + ",", e.street_number, e.street + ",", e.postal_code, e.city].join(" ")
            },
            formatDate: function (e, t) {
                var n = new Date(e)
                    , i = "".concat(APP.UTILS.pad(n.getDate(), 2), "/").concat(APP.UTILS.pad(n.getMonth() + 1, 2), "/").concat(n.getFullYear());
                return t && (i += " à ".concat(APP.UTILS.pad(n.getHours(), 2), ":").concat(APP.UTILS.pad(n.getMinutes(), 2))),
                    i
            },
            getLastIndexProductInLocation: function (e) {
                var t = e.lastIndexOf("/b/p/");
                return -1 === t && (t = e.lastIndexOf("/p/")),
                    t
            },
            pushState: function (e) {
                try {
                    window.history.replaceState ? window.history.replaceState(null, null, "#" + e) : window.location.hash = "#" + e
                } catch (t) {
                    window.location.hash = "#" + e
                }
            },
            cleanState: function (e) {
                try {
                    window.history.replaceState ? window.history.replaceState({}, null, e || "/") : window.location.hash = ""
                } catch (t) {
                    window.location.hash = ""
                }
            },
            formShowErrors: function (t, n) {
                var i = null;
                return e.each(t, function (e, t) {
                    var o = n.find(".error." + e);
                    o.removeClass("hidden").text(t),
                        !i && (i = o),
                        ["optin", "optin_email", "optin_push", "optin_sms"].indexOf(e) !== -1 && n.find("." + e + " .input-switch").addClass("switch-error"),
                        o.closest(".input").addClass("input-error")
                }),
                    i
            },
            formClearErrors: function (e) {
                e.find(".error").addClass("hidden").empty(),
                    e.find(".input-error").removeClass("input-error"),
                    e.find(".input-switch").removeClass("switch-error")
            },
            formatProduct: function (e) {
                return e.objectID = e.objectID || e.id,
                    e.name = e.selling_name,
                    e.brand_slug = APP.UTILS.slugify(e.brand || ""),
                    e.primeur = e.primeur || !1,
                    e.is_frozen = e.is_frozen || !1,
                    e.unlimited_stocks = e.unlimited_stocks ? 1 : 0,
                    e.slug = APP.UTILS.slugify(e.selling_name),
                    e.slugname = e.slug,
                    e.price = parseFloat(e.price).toFixed(2),
                    e.price_text = e.price > 0 ? String(e.price).replace(".", ",") + " €" : "GRATUIT",
                    e.quantity = "kg" === e.unit_notation.trim() ? e.pack_unit_notation : "",
                    e.notation = e.pack_unit_notation,
                    "1000g" === e.notation && (e.notation = "1kg"),
                    e.notation = APP.UTILS.formatProductNotation(e),
                    e.picture_thumbnail_url = e.picture_thumbnail_url || "/statics/images/pixel.png",
                    e.picture_thumbnail_big_url = e.picture_thumbnail_big_url || e.picture_thumbnail_url,
                    e.thumbnail = e.picture_thumbnail_url,
                    e.label_unit_notation_listing = e.label_unit_notation_listing,
                    e.can_not_be_added_to_an_order_by_the_client = e.can_not_be_added_to_an_order_by_the_client || !1,
                    e.is_on_sale && (e.price_origin = +parseFloat(100 * +e.price / (100 - e.sale_rate)).toFixed(2)),
                    e.public_link = "/produit/" + e.id + "/" + e.slugname,
                    e
            },
            formatProductNotation: function (e) {
                return e.notation = e.pack_unit_notation,
                    "1000g" === e.notation && (e.notation = "1kg"),
                    "weight" === e.selling_method ? "Env. " + e.notation : "La pièce"
            },
            autocomplete: null,
            $placesForm: null,
            initAutocomplete: function (t, n) {
                if (!0 === t && "undefined" != typeof window.google && google.maps && google.maps.places) {
                    if (n && n.length)
                        i = n;
                    else {
                        var i = e("input.add-autocomplete").filter(function (e, t) {
                            return !!t.closest("#popin-modal.show")
                        });
                        if (i.length || (i = e("input.add-autocomplete").filter(function (e, t) {
                            return !t.closest(".modal-templates")
                        })),
                            !i.length)
                            return
                    }
                    var o = i.first();
                    APP.UTILS.$placesForm = o.closest("#address-form, .autocomplete-address-form"),
                        APP.UTILS.autocomplete = new google.maps.places.Autocomplete(o[0], p),
                        APP.UTILS.autocomplete.addListener("place_changed", APP.UTILS.fillInAddress)
                }
            },
            fillInAddress: function () {
                if (APP.UTILS.autocomplete && APP.UTILS.$placesForm) {
                    var t = APP.UTILS.autocomplete.getPlace()
                        , n = {
                            formatted_address: t.formatted_address
                        };
                    for (var i in d)
                        e('[data-place="' + i + '"]', APP.UTILS.$placesForm).removeAttr("disabled").val("");
                    for (var o = 0; o < t.address_components.length; o++) {
                        var a = t.address_components[o].types[0];
                        if (d[a]) {
                            var s = t.address_components[o][d[a]];
                            e('[data-place="' + a + '"]', APP.UTILS.$placesForm).val(s),
                                n[a] = s
                        }
                    }
                    return e(window).trigger("autocomplete-address-selcted", n),
                        !1
                }
            },
            newCartPage: function () {
                return this.isFrichti() || this.isFrichtiCo()
            },
            debounce: function (e, t, n) {
                var i;
                return function () {
                    var o = this
                        , a = arguments
                        , s = function () {
                            i = null,
                                n || e.apply(o, a)
                        }
                        , r = n && !i;
                    clearTimeout(i),
                        i = setTimeout(s, t),
                        r && e.apply(o, a)
                }
            }
        }
}(jQuery);
var _ajax = function (e, t, n, i, o) {
    var a = Object.assign({
        method: e,
        url: t,
        success: function (e) {
            o(null, e)
        },
        error: function (e) {
            var t = e.responseJSON || {};
            o(t.error || t.errors || {}, t)
        }
    }, i || {});
    return ["POST", "PUT", "PATCH", "DELETE"].indexOf(e) !== -1 && (a.data = n || {}),
        $.ajax(a)
};
APP.REQUEST = {
    get: function (e, t) {
        return _ajax("GET", e, null, {}, t)
    },
    post: function (e, t, n) {
        return _ajax("POST", e, t, {}, n)
    },
    put: function (e, t, n) {
        return _ajax("PUT", e, t, {}, n)
    },
    patch: function (e, t, n) {
        return _ajax("PATCH", e, t, {}, n)
    },
    "delete": function (e, t, n) {
        return _ajax("DELETE", e, t, {}, n)
    }
},
    APP.USER = {
        csrfnamesalt: "_wYuZjspTTCNvyoN4",
        csrfvaluesalt: "_jDWPYFHUAkgy3RFte",
        _user: null,
        _cards: null,
        get: function () {
            return this._user
        },
        set: function (e) {
            Object.assign(this._user || {}, APP.UTILS.deepClone(e))
        },
        reset: function () {
            this._user = null,
                this._cards = null
        },
        getCards: function () {
            return this._cards
        },
        setCards: function (e) {
            this._cards = e
        },
        resetCards: function () {
            this._cards = null
        },
        newsletterSubscribe: function (e, t) {
            return APP.REQUEST.post("/api/newsletter/subscribe", {
                email: e
            }, t)
        }
    },
    APP.CacheManager = function () {
        this._local = {}
    }
    ,
    APP.CacheManager.prototype.set = function (e, t, n) {
        this._local[e] = {
            html: t,
            ttl: (new Date).getTime() + n
        }
    }
    ,
    APP.CacheManager.prototype.get = function (e) {
        return this._local[e].html
    }
    ,
    APP.CacheManager.prototype.has = function (e) {
        return void 0 !== this._local[e]
    }
    ,
    APP.CacheManager.prototype.expire = function (e) {
        return this._local[e] ? Math.max(0, this._local[e].ttl - (new Date).getTime()) : 0
    }
    ,
    APP.CacheManager.prototype.del = function (e) {
        delete this._local[e]
    }
    ,
    function (e) {
        function t(t, n) {
            if ("alert" === n) {
                var i = "Message"
                    , o = t;
                return "object" === _typeof(t) && t.message && (t.title && (i = t.title),
                    o = t.message),
                    void r(o, i)
            }
            c.html(t),
                c.addClass("active show"),
                c.find(".mod-window.fullscreen,.window.fullscreen").length && c.addClass("fullscreen"),
                e("body").addClass("modal"),
                (n || e.noop)(c)
        }
        function n(t, n) {
            u.html(t),
                u.addClass("active show"),
                e("body").addClass("modal-cart"),
                (n || e.noop)(u)
        }
        function i(t, n) {
            d.html(t),
                d.addClass("active show"),
                e("body").addClass("modal-user"),
                (n || e.noop)(d)
        }
        function o(t) {
            t && c.empty(),
                e("body").removeClass("modal"),
                c.removeClass("fullscreen active show"),
                c.off("user-infos-added"),
                c.off("address-added"),
                c.off("cart-confirmed"),
                c.off("card-added"),
                c.off("default-address-added"),
                c.off("default-postalcode-added"),
                c.trigger("modal:hide")
        }
        function a() {
            u.empty(),
                e("body").removeClass("modal-cart"),
                u.removeClass("fullscreen active show")
        }
        function s() {
            d.empty(),
                e("body").removeClass("modal-user"),
                d.removeClass("fullscreen active show")
        }
        function r(t, n) {
            c.html(e("#alert-template").html()),
                c.addClass("fullscreen active show"),
                e("body").addClass("modal"),
                t && c.find(".message").html(t),
                n && c.find(".title").html(n)
        }
        function l() {
            e("body").removeClass("modal"),
                c.removeClass("fullscreen active show"),
                c.find(".message").html(""),
                c.find(".title").html("Message")
        }
        var c = e("#popin-modal")
            , u = e("#popin-cart-modal")
            , d = e("#popin-user-modal");
        e.modal = function () {
            var u = e.makeArray(arguments)
                , d = u.shift();
            switch (d) {
                case "show":
                    return t.apply(null, u);
                case "show-cart":
                    return n.apply(null, u);
                case "show-user":
                    return i.apply(null, u);
                case "hide":
                    return o.apply(null, u);
                case "hide-cart":
                    return a.apply(null, u);
                case "hide-user":
                    return s.apply(null, u);
                case "alert":
                    return r.apply(null, u);
                case "close":
                    return l.apply(null, u);
                case "is-showed":
                    return c.hasClass("show");
                case "is-alert":
                    return !!c.find(".mod-window.alert,.window.alert").length;
                case "is-product":
                    return c.hasClass("show") && c.find(".mod-window").hasClass("product");
                default:
                    return {
                        $modal: c
                    }
            }
        }
    }(jQuery),
    function (e) {
        e(document).on("click", "#popin-modal.show .close, #popin-modal.show .js-closemodal", function (t) {
            APP.UTILS.preventEvent(t),
                e.modal("hide")
        }),
            e("body").on("focus", "input", function () {
                var t = e(this);
                t.next(".error:not(.form-error)").addClass("hidden"),
                    t.closest(".input").removeClass("input-error")
            }),
            e(document).on("keydown", "input", function (t) {
                13 !== t.which || e(this).closest("form.autosubmit").length || APP.UTILS.preventEvent(t)
            }),
            e(document).on("click", ".zopim-support", function (e) {
                return "undefined" != typeof $zopim && $zopim.livechat && $zopim.livechat.window && $zopim.livechat.window.show(),
                    APP.UTILS.preventEvent(e),
                    !1
            }),
            e(document).on("click", "#app-announcements button", function (t) {
                return APP.UTILS.preventEvent(t),
                    e("#app-announcements").remove(),
                    !1
            }),
            e(document).on("click", "#popin-cart-modal, #popin-user-modal", function (t) {
                var n = null;
                if (e(t.target).is("#popin-cart-modal") && (n = "hide-cart"),
                    e(t.target).is("#popin-user-modal") && (n = "hide-user"),
                    n)
                    return APP.UTILS.preventEvent(t),
                        e.modal(n),
                        !1
            }),
            e(document).on("keydown", function (t) {
                if (27 === t.which) {
                    APP.UTILS.preventEvent(t);
                    var n = null;
                    return e("#popin-cart-modal").hasClass("show") && (n = "hide-cart"),
                        e("#popin-user-modal").hasClass("show") && (n = "hide-user"),
                        n && e.modal(n),
                        !1
                }
            }),
            e(document).on("click", "#newsletter-email button", function (t) {
                function n(e) {
                    s.addClass("success").text(e),
                        r.val(""),
                        o()
                }
                function i(e) {
                    a.addClass("disabled"),
                        s.addClass("fail").text(e),
                        o()
                }
                function o() {
                    setTimeout(function () {
                        a.removeClass("disabled"),
                            s.removeClass("success fail").text("")
                    }, 5e3)
                }
                APP.UTILS.preventEvent(t);
                var a = e(this)
                    , s = e("#newsletter-email .newsletter-email-message")
                    , r = e('#newsletter-email input[name="email"]');
                if (!r.length || !r.val())
                    return i("L'email est requis");
                s.removeClass("success fail").text(""),
                    r.removeClass("input-error");
                var l = r.val().trim();
                return APP.UTILS.isValidEmail(l) ? (a.addClass("inprogress"),
                    void APP.USER.newsletterSubscribe(l, function (e, t) {
                        a.removeClass("inprogress"),
                            t = t || {},
                            "OK" === t.status ? n(t.message || "Votre inscription à la newsletter est bien prise en compte.") : i(t.errors || "Une erreur empêche votre inscription à la newsletter !")
                    })) : (r.addClass("input-error"),
                        i("L'email est incorrecte"))
            }),
            APP.UTILS.aload(),
            window.onerror = window.onerror || function (t, n, i, o, a) {
                "object" === _typeof(t) && (t = JSON.stringify(t).slice(0, 250));
                var s = {
                    url: n,
                    message: t,
                    line_number: i,
                    column_number: o
                };
                return APP.REQUEST.post("/api/jslogger", s, e.noop),
                    !1
            }
    }(jQuery),
    function (e) {
        function t(e) {
            var t = new Date;
            t.setMonth(t.getMonth() + 6),
                e = 1;
            var n = APP.UTILS.getSiteCookieDomain();
            document.cookie = "cookiecmp=" + e + "; domain=" + n + "; path=/; expires=" + t.toUTCString()
        }
        function n(n, i, o) {
            if (t(i === !1 ? "0" : "1"),
                i === !0 && window.EA_epmSetAllowAll)
                EA_epmSetAllowAll();
            else if (i === !1 && window.EA_epmSetDenyAll)
                EA_epmSetDenyAll();
            else if (window.EA_epmGet && window.EA_epmSet) {
                var a = EA_epmGet();
                a.forEach(function (e, t) {
                    var i;
                    "mandatory" === e.name || "functionnal" === e.name ? i = !0 : "analytics" === e.name ? i = n.indexOf("perf") !== -1 : "advertising" === e.name && (i = n.indexOf("advert") !== -1),
                        a[t].allowed = i,
                        a[t].denied = !i
                }),
                    EA_epmSet(a)
            }
            if (window.EA_epmEnd && EA_epmEnd(),
                window.EA_push) {
                var s = [];
                i === !0 ? s = ["mandatory", "functionnal", "analytics", "advertising"] : i === !1 ? s = ["mandatory", "functionnal"] : (s = ["mandatory", "functionnal"],
                    n.indexOf("perf") !== -1 && s.push("analytics"),
                    n.indexOf("advert") !== -1 && s.push("advertising"));
                var r = ["enopagedt", "1", "consent", s.join("_") + (o || "")];
                EA_push(r)
            }
            e.post("/profil/confidentiality", {
                accept: n
            }),
                e("#confidentiality").remove(),
                e.modal("hide"),
                e.models.user.confidentiality_settings = n,
                e.models.user.show_confidentiality = 0
        }
        e(document).on("click", "button#confidentiality-accept-all, button#confidentiality-accept-all-preferences, button#confidentiality-accept-all-preferences-in-content", function (e) {
            return APP.UTILS.preventEvent(e),
                n("funct|perf|advert", !0),
                !1
        }),
            e(document).on("click", "button#confidentiality-refuse-all", function (e) {
                return APP.UTILS.preventEvent(e),
                    n("refuse", !1, "-continuer-sans-accepter-pop1"),
                    !1
            }),
            e(document).on("click", "button#confidentiality-refuse-all-preferences", function (e) {
                return APP.UTILS.preventEvent(e),
                    n("refuse", !1, "-tout-refuser-pop2"),
                    !1
            }),
            e(document).on("click", "#popin-modal .confidentiality-settings #confidentiality-save-preferences", function (t) {
                APP.UTILS.preventEvent(t);
                var i = ["funct"];
                return e('#popin-modal .confidentiality-settings input[type="checkbox"]').each(function () {
                    var t = e(this)
                        , n = t.val()
                        , o = t.is(":checked");
                    o && i.push(n)
                }),
                    n(i.join("|") || "NO", null, 1 === i.length ? "-confirmer-selection-pop2" : ""),
                    !1
            }),
            e(document).on("click", "#confidentiality button#confidentiality-settings, #subheader .o-user-menu .confidentiality-settings, footer .confidentiality-settings", function (t) {
                APP.UTILS.preventEvent(t),
                    e.modal("show", e("#confidentiality-settings-template").html(), function (t) {
                        var n = t.find("#confidentiality-settings-sections");
                        n.find(".confidentiality-section .choice.analytics, .section-link .choice.analytics").html('<label class="input-switch"><input type="checkbox" value="perf"> <span class="slider round"></span></label>'),
                            n.find(".confidentiality-section .choice.advertising, .section-link .choice.advertising").html('<label class="input-switch"><input type="checkbox" value="advert"> <span class="slider round"></span></label>'),
                            APP.UTILS.isMobile() && n.find(".confidentiality-accept-all-wrap").html('<button class="o-button plain" type="button" id="confidentiality-accept-all-preferences-in-content">Tout accepter</button>');
                        var i = e.models.user.confidentiality_settings;
                        n.find('input[type="checkbox"]').each(function () {
                            var t = e(this)
                                , n = i.indexOf(t.val()) !== -1;
                            t.prop("checked", n)
                        })
                    })
            }),
            e(document).on("click", "#popin-modal .confidentiality-settings .mod-title .close, #popin-modal .confidentiality-settings .mod-title .js-closemodal", function (t) {
                var n = e.models.user.show_confidentiality;
                n && (APP.UTILS.preventEvent(t),
                    e.modal("show", e("#confidentiality-template").html()))
            }),
            e(document).on("click", "#popin-modal .confidentiality-settings #confidentiality-settings-menu a", function (t) {
                APP.UTILS.preventEvent(t);
                var n = e("#popin-modal .confidentiality-settings");
                n.find("#confidentiality-settings-menu a").removeClass("active"),
                    n.find("#confidentiality-settings-sections .confidentiality-section").removeClass("active");
                var i = e(t.currentTarget);
                i.addClass("active"),
                    n.find('#confidentiality-settings-sections .confidentiality-section[data-section="' + i.data("section") + '"]').addClass("active")
            }),
            e("body").on("click", "#popin-modal .confidentiality-settings #confidentiality-settings-sections .section-link > div:first-child", function (t) {
                APP.UTILS.preventEvent(t);
                var n = e(t.currentTarget).closest(".section-link")
                    , i = n.hasClass("active")
                    , o = e("#popin-modal .confidentiality-settings #confidentiality-settings-sections");
                o.find(".section-link").removeClass("active"),
                    n.toggleClass("active", !i)
            })
    }(jQuery);
