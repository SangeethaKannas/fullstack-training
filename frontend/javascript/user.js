confirmCode(r0, H0) {
    return this.multiFactorCodeSending = !0,
    this.http.post(`/multifactor/users/${r0}`, H0).pipe((0,
    b0.b)(q1=>{
        q1.auth && this.saveTokenToLocalStorage(q1.auth.token, q1.auth.refreshToken);
        
        this.saveUserAndEmit(D1),
        //Toaster Message
    }
    , ()=>{
        this.multiFactorCodeHandled$.next(!1)
    }
    ))
}
confirmCodeAndUpdateUserSettigns(r0) {
    return this.http.post("/multifactor/user-settings/code", r0).pipe((0,
    b0.b)(H0=>{
        this.getUserAndRedirect(H0, "2FA")
    }
    ))
}
confirmCodeLogin(r0) {
    return this.http.post("/auth/token/code", r0).pipe((0,
    b0.b)(H0=>{
        this.getUserAndRedirect(H0, "2FA")
    }
    ))
}
resendCode() {
    return this.http.post("/multifactor/settings/code", {}).pipe((0,
    L0.K)(r0=>{
        const H0 = this.translateService.instant("TRACKER.ENTRY_MESSAGES.ERROR");
        return this.toaster.error(r0.error?.message || H0),
        Y0.E
    }
    ))
}
resendCodeWithAction(r0) {
    return this.http.post("/multifactor/settings/code", r0).pipe((0,
    L0.K)(H0=>{
        const q1 = this.translateService.instant("TRACKER.ENTRY_MESSAGES.ERROR");
        return this.toaster.error(H0.error?.message || q1),
        Y0.E
    }
    ))
}
resendCodeLogin(r0) {
    return this.http.post("/multifactor/code", r0).pipe((0,
    L0.K)(H0=>{
        const q1 = this.translateService.instant("GLOBAL.UPDATE_FAILED_ERROR_MESSAGE");
        return this.toaster.error(H0.error?.message || q1),
        Y0.E
    }
    ))
}
switchWorkspace(r0, H0) {
    return this.http.post(`auth/token/code/workspace/${r0}`, {
        multiFactorToken: H0
    }).pipe((0,
    b0.b)(q1=>{
        this.getUserAndRedirect(q1)
    }
    ), (0,
    L0.K)(q1=>{
        const D1 = this.translateService.instant("TRACKER.ENTRY_MESSAGES.ERROR");
        return this.toaster.error(q1.error?.message || D1),
        Y0.E
    }
    ))
}
redirectAfterLogin(r0) {
    this.loginWithCode2FaRequired$.next(null),
    this.setDisplayBannedWsInfo(l1);
    const H0 = i1.f.getRedirectUrl();
    return this.metaTagsService.removeLanguageMetaTags(),
    this.broadcastService.publish({
        type: v.n.LOGGED_IN
    }),
    H0 ? (i1.f.clearRedirectionUrl(),
    this.router.navigateByUrl(H0)) : this.router.navigate([r0?.url || "tracker"], {
        fragment: r0?.fragment || ""
    })
}
login(r0, H0, q1=!1) {
    const D1 = JSON.stringify({
        email: r0,
        password: H0
    });
    return this.http.post("/auth/token", D1).pipe((0,
    b0.b)(C1=>{
        C1.multiFactorToken ? C1.multiFactorToken && q1 && this.router.navigate(["login"]) : this.getUserAndRedirect(C1)
    }
    ), (0,
    L0.K)(C1=>(this.error.next(new d0.o(C1)),
    (0,
    Q0._)(C1))))
}
getUserAndRedirect(r0, H0="") {
    this.getUserById(r0.id).subscribe(q1=>{
        window.dataLayer?.push({
            event: "login",
            user_id: r0.id,
            time_zone: q1?.settings?.timeZone,
            method: "Email",
            value: H0
        }),
        this.getAnalyticsService().addEvent(new l.s6({
            event: "login",
            uevent: "login",
            method: "Email",
            value: H0
        })),
        this.uiSettingsService.setSettings(_1.O.USER_MULTI_FACTOR_ACTIVATION_STATUS, null),
        this.uiSettingsService.setSettings(_1.O.MULTI_FACTOR_TOKEN, null),
        this.redirectAfterLogin()
    }
    , q1=>{
        this.saveTokenToLocalStorage("", ""),
        this.error.next(new d0.o(q1))
    }
    ),
    this.getPermissionsForUser()
}
loginWithExchange(r0) {
    const H0 = JSON.stringify({
        exchangeToken: r0
    });
    return this.http.post("/auth/exchange", H0)
}
loginAsAdmin(r0, H0) {
    const q1 = {
        headers: new p.WM({
            "Content-Type": "application/json",
            "Sub-Domain-Name": H0
        })
    };
    return this.http.post(`/auth/token/${r0}`, {}, H0 ? q1 : {})
}
confirmPassword(r0, H0) {
    const q1 = JSON.stringify({
        email: r0,
        password: H0
    });
    return this.http.post("/auth/token", q1).pipe((0,
    b0.b)({
        error: ()=>{
            this.toaster.pop("error", this.translateService.instant("SERVICES.AUTHENTIFICATION.PASSWORD.CONFIRM.ERROR_MESSAGE"))
        }
    }))
}
refreshToken(r0) {
    const H0 = JSON.stringify({
        refreshToken: r0
    });
    return this.http.post("/auth/token/refresh", H0)
}
saveTokenToLocalStorage(r0, H0) {
    r0 && localStorage.setItem("token", r0),
    H0 ? localStorage.setItem("refreshToken", H0) : localStorage.removeItem("refreshToken"),
    this.tokenChange$.next(r0)
}
forgotPassword(r0) {
    const H0 = JSON.stringify({
        email: r0
    });
    this.http.post("/password-reset-tokens/", H0).subscribe(()=>{
        this.toaster.pop("success", this.translateService.instant("SERVICES.AUTHENTIFICATION.PASSWORD.RESET.SUCCESS_MESSAGE"))
    }
    , q1=>{
        this.error.next(new d0.o(q1))
    }
    )
}
fetchUser() {
    return this.http.get("/v1/user").pipe((0,
    w0.U)(r0=>new I0.n(this.centUSDConverter.setAllHourlyRatesFromUSDToCent(r0))), (0,
    b0.b)(r0=>this.saveUserAndEmit(r0)))
}
getUserById(r0) {
    const H0 = new G.x;
    return this.http.get(`/users/${r0}/`).subscribe(q1=>{
        const D1 = new I0.n(this.centUSDConverter.setAllHourlyRatesFromUSDToCent(q1));
        this.getUser(),
        this.saveUserAndEmit(D1),
        this.getUserById$.next(D1),
        H0.next(D1)
    }
    , q1=>{
        this.logout(),
        H0.error(q1),
        this.getUserError.next(new d0.o(q1)),
        this.error.next(new d0.o(q1))
    }
    ),
    H0
}
signup(r0, H0, q1, D1, C1) {
    (0,
    p0.sQ)(!0, !0);
    const c1 = g0.tz.guess()
      , P0 = {
        key: r0,
        secret: H0,
        timeZone: c1,
        currentLang: q1.code.toUpperCase()
    };
    D1 && (P0.affiliateTracking = {
        clickId: D1.clickId,
        campaignId: D1.campaignId,
        publisherId: D1.publisherId
    }),
    C1 && (P0.attributionTracking = {
        source: C1.source,
        medium: C1.medium,
        attribution: C1.attribution,
        campaign: C1.campaign,
        keyword: C1.keyword,
        baseUrl: C1.baseUrl
    });
    const T0 = JSON.stringify(P0);
    return this.http.post("/auth/", T0).pipe((0,
    b0.b)(s1=>{
        this.getUserById(s1.id).pipe((0,
        j0.q)(1)).subscribe(()=>{
            window.dataLayer?.push({
                event: "sign_up",
                user_id: s1.id,
                time_zone: c1,
                method: "Email"
            }),
            this.getAnalyticsService().addEvent(new l.s6({
                event: "sign_up",
                uevent: "sign_up",
                method: "Email"
            })),
            this.redirectAfterLogin()
        }
        ),
        this.affiliateTrackingService.clearData(),
        this.attributionTrackingService.clearData(),
        localStorage.setItem("bannerClicked", "false"),
        localStorage.setItem("isNew", "true")
    }
    , s1=>{
        this.error.next(s1)
    }
    ))
}
signupWithInvitation(r0, H0, q1, D1, C1) {
    const c1 = g0.tz.guess()
      , P0 = JSON.stringify({
        invitationCode: r0,
        password: H0,
        timeZone: c1,
        name: q1,
        newsletter: D1,
        lang: C1
    });
    return this.http.post(`/invitations/${r0}`, P0).pipe((0,
    b0.b)(T0=>{
        this.getUserById(T0.id).pipe((0,
        j0.q)(1)).subscribe(s1=>{
            this.redirectAfterLogin()
        }
        ),
        localStorage.setItem("isNew", "true"),
        localStorage.setItem("bannerClicked", "false"),
        this.registrationFinished.next(!0)
    }
    , T0=>{
        this.toaster.pop("error", T0.error && T0.error.message || this.translateService.instant("SERVICES.AUTHENTIFICATION.SIGN_UP.ERROR_MESSAGE"))
    }
    ))
}
getInvitationLink(r0, H0) {
    return this.http.get(`/invitations/${H0}/${r0}`, {
        responseType: "text"
    })
}
emailVerification(r0, H0) {
    const q1 = JSON.stringify({
        newsletter: H0
    });
    this.http.post(`/email-verification/${r0}`, q1).subscribe(D1=>{
        this.getUserById(D1.id).subscribe(C1=>{
            this.redirectAfterLogin()
        }
        ),
        this.registrationFinished.next(!0)
    }
    , D1=>{
        this.error.next(D1)
    }
    )
}
resetPassword(r0, H0) {
    const q1 = JSON.stringify({
        newPassword: H0
    });
    this.http.post(`/password-reset-tokens/${r0}`, q1).subscribe(D1=>{
        this.login(D1.key, H0, !0).subscribe()
    }
    , D1=>{
        this.error.next(D1)
    }
    )
}
passwordResetTokenExists(r0) {
    return this.http.get(`/password-reset-tokens/${r0}`)
}
checkInvitation(r0) {
    return this.http.get(`/invitations/${r0}`).pipe((0,
    w0.U)(H0=>new E(H0)))
}
resendVerifyEmail() {
    const r0 = this.getUser();
    this.http.put(`/auth/resendVerifyEmail/${r0.id}`, {}).subscribe(()=>{
        this.toaster.pop("success", this.translateService.instant("SERVICES.AUTHENTIFICATION.EMAIL.VERIFICATION.SUCCESS_MESSAGE"))
    }
    , q1=>{
        this.error.next(q1)
    }
    )
}
resendVerifyEmailPreferences() {
    const r0 = this.getUser();
    this.http.put(`/auth/resendVerifyEmail/${r0.id}`, {}).subscribe(()=>{
        this.toaster.pop("success", this.translateService.instant("SERVICES.AUTHENTIFICATION.EMAIL_PREFERENCES.VERIFICATION.SUCCESS_MESSAGE") + " " + r0.email)
    }
    , q1=>this.toaster.pop("error", q1?.error?.message || this.translateService.instant("SERVICES.AUTHENTIFICATION.EMAIL_PREFERENCES.VERIFICATION.ERROR_MESSAGE")))
}
saveUserAndEmit(r0) {
    const H0 = this.originalOwnerService.getOwner()
      , q1 = this.subdomainService.isSubdomainNotSelfhosted();
    H0 && H0.workspaceId && q1 && (r0.defaultWorkspaceId = H0.workspaceId,
    r0.activeWorkspaceId = H0.workspaceId),
    this.userInstance = r0,
    this.user.next(r0),
    localStorage.setItem(a0.USER, r0.toJson())
}
logout() {
    const r0 = this.isLoggedIn()
      , H0 = localStorage.getItem(a.l4)
      , q1 = this.getToken();
    let D1 = this.getRefreshToken();
    const c1 = {
        headers: {},
        body: JSON.stringify({
            token: q1,
            refreshToken: D1
        })
    };
    "null" === D1 && (D1 = ""),
    q1 && D1 ? (this.sendAnalytic(),
    this.http.delete("/auth/tokens", c1).subscribe(()=>{
        this.clearLocalStorageAndRedirectToLoginPage(r0, H0)
    }
    , ()=>{
        this.clearLocalStorageAndRedirectToLoginPage(r0, H0)
    }
    )) : this.clearLocalStorageAndRedirectToLoginPage(r0, H0)
}
sendAnalytic() {
    M.X.environment.enableInternalAnalytics && (0,
    h0.X)(()=>localStorage.getItem("token"), ()=>"x-auth-token", ()=>`${M.X.environment.analyticsUrl}/events`, "web")
}
clearLocalStorageAndRedirectToLoginPage(r0, H0) {
    const q1 = this.clkTranslate.getLanguageFromLS();
    (0,
    p0.sQ)(),
    q1 && this.clkTranslate.saveLanguageToLS(q1),
    this.pumbleService.unmountPumble(),
    sessionStorage.removeItem(f0.Ee),
    this.userInstance = null,
    this.router.navigateByUrl("/login"),
    this.onLogout$.next(!0),
    this._defaultWorkspaceId = "",
    this.permissionData$.next(null),
    H0 && r0 && (window.location.href = H0),
    this.broadcastService.publish({
        type: v.n.LOGGED_OUT
    })
}
getToken() {
    return localStorage.getItem(a.kj)
}
getRefreshToken() {
    return localStorage.getItem(a.N1)
}
getUser() {
    if (this.userInstance)
        return this.userInstance;
    const r0 = localStorage.getItem("user");
    return r0 ? (this.userInstance = new I0.n(JSON.parse(r0)),
    this.userInstance) : null
}
isLoggedIn() {
    return !!localStorage.getItem("token")
}
getUserDefaultWorkspaceId() {
    return this.getUser() ? this.getUser().defaultWorkspaceId : null
}
socialLogin(r0, H0, q1, D1) {
    const C1 = g0.tz.guess()
      , c1 = JSON.stringify({
        provider: r0,
        token: H0,
        email: q1,
        timeZone: C1,
        workspaceId: D1
    });
    this.http.post("/auth/google", c1).subscribe(P0=>{
        P0.isNew && (this.registrationFinished.next(!0),
        localStorage.setItem("isNew", "true"),
        localStorage.setItem("bannerClicked", "false")),
        this.getUserById(P0.id).subscribe(()=>{
            this.redirectAfterLogin().then(()=>location.reload())
        }
        )
    }
    , P0=>{
        this.error.next(P0)
    }
    )
}
canChange() {
    this.http.get("/auth/hasPassword").subscribe(r0=>{
        this.canChangePassword.next(r0.canChangePassword)
    }
    , r0=>{
        this.error.next(r0)
    }
    )
}
changePassword(r0, H0, q1) {
    const D1 = this.getToken()
      , C1 = JSON.stringify({
        oldPassword: r0,
        newPassword: H0,
        newPasswordRepeated: q1,
        token: D1
    });
    return this.http.put("/auth/password", C1).pipe((0,
    b0.b)(c1=>{
        this.saveTokenToLocalStorage(c1.token, c1.refreshToken),
        this.toaster.pop("success", this.translateService.instant("SERVICES.AUTHENTIFICATION.PASSWORD.CHANGE.SUCCESS_MESSAGE"))
    }
    , c1=>{
        this.toaster.pop("error", c1.error && c1.error.message || this.translateService.instant("SERVICES.AUTHENTIFICATION.PASSWORD.CHANGE.ERROR_MESSAGE")),
        this.error.next(c1)
    }
    ))
}
setPassword(r0, H0) {
    const q1 = JSON.stringify({
        newPassword: r0,
        retypedNewPassword: H0
    });
    return this.http.put("/auth/setPassword", q1).pipe((0,
    b0.b)(()=>{
        this.toaster.pop("success", this.translateService.instant("SERVICES.AUTHENTIFICATION.PASSWORD.SET.SUCCESS_MESSAGE"))
    }
    , D1=>{
        this.toaster.pop("error", D1.error && D1.error.message || this.translateService.instant("SERVICES.AUTHENTIFICATION.PASSWORD.SET.ERROR_MESSAGE")),
        this.error.next(D1)
    }
    ))
}
changeEmail(r0, H0, q1) {
    return this.http.put(`/users/${H0}/email`, {
        email: r0,
        passwordConfirm: q1
    }).pipe((0,
    b0.b)(()=>{
        this.toaster.pop("success", this.translateService.instant("SERVICES.AUTHENTIFICATION.EMAIL.CHANGE.SUCCESS_MESSAGE.TITLE"), this.translateService.instant("SERVICES.AUTHENTIFICATION.EMAIL.CHANGE.SUCCESS_MESSAGE.MESSAGE"))
    }
    , C1=>{
        this.error.next(C1),
        this.toaster.pop("error", C1.error && C1.error.message || this.translateService.instant("SERVICES.AUTHENTIFICATION.EMAIL.VALIDATION.ERROR_MESSAGE"))
    }
    ))
}
loginWithCode(r0, H0, q1, D1, C1, c1) {
    const P0 = this.clkTranslate.getLanguageFromLS()
      , T0 = {
        code: r0,
        timeZone: g0.tz.guess(),
        state: H0,
        nonce: q1,
        redirectURI: D1,
        lang: P0 || V.ZP.code
    };
    return C1 && (T0.affiliateTracking = {
        clickId: C1.clickId,
        campaignId: C1.campaignId,
        publisherId: C1.publisherId
    }),
    c1 && (T0.attributionTracking = {
        source: c1.source,
        medium: c1.medium,
        attribution: c1.attribution,
        campaign: c1.campaign,
        keyword: c1.keyword,
        baseUrl: c1.baseUrl
    }),
    this.http.post("/auth/code", T0).pipe((0,
    b0.b)(s1=>{
        s1.multiFactorToken ? (this.logout(),
        this.loginWithCode2FaRequired$.next(s1)) : (this.loginWithCode2FaRequired$.next(null),
        this.getUserById(s1.id).subscribe(()=>{
            this.googleUser$.next(s1),
            s1.isNew && (localStorage.setItem("isNew", "true"),
            localStorage.setItem("bannerClicked", "false")),
            this.affiliateTrackingService.clearData(),
            this.attributionTrackingService.clearData(),
            this.redirectAfterLogin()
        }
        ))
    }
    , s1=>{
        this.codeError.next(s1.error),
        this.router.navigate(["/login"])
    }
    ))
}
getLoginSettings() {
    return this.http.get("/system-settings/login-settings").pipe((0,
    b0.b)(r0=>{
        const H0 = new n0({
            active: r0.saml2Settings && r0.saml2Settings.active,
            request: r0.saml2Settings && r0.saml2Settings.samlRequest,
            saml2URL: r0.saml2Settings && r0.saml2Settings.loginUrl,
            forceSAML2: r0.saml2Settings && r0.saml2Settings.forceSAML2,
            logoutUrl: r0.saml2Settings && r0.saml2Settings.logoutUrl
        })
          , q1 = new f1(r0.oAuthConfiguration)
          , D1 = new S0(r0.ldapLoginSettings);
        this.loginSettings.next(new C(D1,q1,H0,r0.autoLogin,r0.logoURL,r0.loginPreferences))
    }
    , r0=>{
        console.error(r0.error && r0.error.code, r0),
        this.loginSettingsError.next(r0),
        this.error.next(r0)
    }
    ))
}
checkConfirmationCode(r0) {
    this.http.get(`/email-verification/${r0}`).subscribe(H0=>{
        this.accountVerificationExist.next(H0)
    }
    , H0=>{
        this.error.next(H0)
    }
    )
}
getPermissionsForUser(r0) {
    if (!(r0 = r0 || this._defaultWorkspaceId || this.getUserDefaultWorkspaceId()))
        return (0,
        F0.of)();
    if (this.gettingPermissions)
        return this.permissionData$;
    const H0 = new G.x
      , q1 = this.getUser().id;
    return this.gettingPermissions = !0,
    this.getUserRolesRequest(r0, q1).pipe((0,
    w0.U)(D1=>D1.userRoles.map(C1=>new f.u(C1)))).subscribe(D1=>{
        const C1 = new Q(r0,q1,D1);
        this.permissionData = C1,
        this.emitPersmissionData(),
        H0.next(C1),
        this.gettingPermissions = !1
    }
    , D1=>{
        this.permissionFailed$.next(!1),
        this.toaster.pop("error", this.translateService.instant("GLOBAL.GET_PERMISSIONS_ERROR_MESSAGE")),
        H0.error(D1),
        this.gettingPermissions = !1
    }
    ),
    H0
}
getUserRolesRequest(r0, H0) {
    return this.http.get(`/workspaces/${r0}/users/${H0}/roles`)
}
clearPermissionDataCache() {
    a0._CLEAR_PERMISSION_DATA_CACHE$.next(!0)
}
emitPersmissionData() {
    const {isAdmin: r0, isOwner: H0} = this.permissionData;
    this.permissionData$.next(this.permissionData),
    this.setIsAdminOrOwner(r0 || H0),
    this.isUserAdmin.next(r0 || H0)
}
projectIsCreated(r0, H0, q1) {
    q1 && q1.hasFeature(D.A.MANAGER_ROLE) && this.permissionData.updateOnCreateProject(r0, H0) && this.emitPersmissionData()
}
isUserAdminOnWorkspace(r0) {
    const H0 = this.getUser().id;
    return r0 ? this.getUserRolesRequest(r0, H0).pipe((0,
    w0.U)(q1=>{
        const D1 = q1.userRoles.map(C1=>new f.u(C1));
        return new Q(r0,H0,D1)
    }
    )) : (0,
    F0.of)()
}
loginAs(r0) {
    const H0 = new G.x;
    return this.http.post(`/auth/token/${r0}/workspaces/${this._defaultWorkspaceId}/`, {}).subscribe(q1=>{
        const D1 = {
            token: localStorage.getItem("token") || "",
            refreshToken: localStorage.getItem("refreshToken") || "",
            workspaceId: this._defaultWorkspaceId,
            user: this.userInstance
        };
        (0,
        p0.sQ)(),
        this.originalOwnerService.setOwner(D1),
        this.userInstance.id = q1.id,
        this.saveTokenToLocalStorage(q1.token, q1.refreshToken),
        this.getUserById(q1.id).subscribe(()=>{
            this.redirectAfterLogin().then(()=>location.reload())
        }
        , ()=>{
            const C1 = this.originalOwnerService.getOwner();
            (0,
            p0.sQ)(),
            this.saveTokenToLocalStorage(C1.token, C1.refreshToken),
            this.saveUserAndEmit(C1.user),
            location.reload()
        }
        ),
        H0.next(q1)
    }
    , q1=>{
        H0.error(q1)
    }
    ),
    H0
}
switchBackToAccount() {
    const r0 = this.originalOwnerService.getOwner();
    if (!r0)
        return;
    const H0 = {
        user: new I0.n(JSON.parse(this.userInstance.toJson())),
        token: localStorage.getItem("token"),
        refreshToken: localStorage.getItem("refreshToken")
    };
    (0,
    p0.sQ)(),
    this.userInstance.id = r0.user.id,
    this.saveTokenToLocalStorage(r0.token, r0.refreshToken),
    this.getUserById(r0.user.id).subscribe(()=>{
        this.router.navigate(["workspaces", r0.workspaceId, "settings"], {
            fragment: "accounts"
        }).then(()=>location.reload())
    }
    , ()=>{
        (0,
        p0.sQ)(),
        this.saveTokenToLocalStorage(H0.token, H0.refreshToken),
        this.originalOwnerService.setOwner(r0),
        this.saveUserAndEmit(H0.user),
        location.reload()
    }
    )
}
isAdminOrOwner() {
    return "true" === localStorage.getItem("isAdminOrOwner")
}
setIsAdminOrOwner(r0) {
    localStorage.setItem("isAdminOrOwner", r0.toString())
}
loginOwner(r0, H0) {
    const q1 = JSON.stringify({
        email: r0,
        password: H0
    });
    return this.http.post("/auth/token/owner", q1).pipe((0,
    b0.b)(D1=>{
        D1.multiFactorToken || this.handleLoginOwner(D1)
    }
    , D1=>{
        this.error.next(D1)
    }
    ))
}
switchWorkspaceOwner(r0, H0) {
    return this.http.post(`auth/token/code/workspace/${r0}`, {
        multiFactorToken: H0
    }).pipe((0,
    b0.b)(q1=>{
        this.handleLoginOwner(q1)
    }
    ), (0,
    L0.K)(q1=>{
        const D1 = this.translateService.instant("TRACKER.ENTRY_MESSAGES.ERROR");
        return this.toaster.error(q1.error?.message || D1),
        Y0.E
    }
    ))
}
confirmCodeOwner(r0) {
    return this.http.post("/multifactor/user-settings/code", r0).pipe((0,
    b0.b)(H0=>{
        this.handleLoginOwner(H0)
    }
    ))
}
confirmCodeLoginOwner(r0) {
    return this.http.post("/auth/token/code", r0).pipe((0,
    b0.b)(H0=>{
        this.handleLoginOwner(H0)
    }
    ))
}
handleLoginOwner({id: r0}) {
    this.getUserById(r0).subscribe(()=>{
        this.redirectAfterLogin()
    }
    , H0=>{
        this.saveTokenToLocalStorage("", ""),
        this.error.next(H0)
    }
    ),
    this.getPermissionsForUser()
}
isAdminActingAsUser() {
    const r0 = localStorage.getItem("token");
    return !!r0 && !!this.jwtHelper.decodeToken(r0).adminActingAsUser
}
setWsTwoFactorRequired(r0) {
    this._wsTwoFactorRequired$.next(r0)
}
setDeactivatedUser(r0) {
    this._wsDeactivatedUser$.next(r0)
}
getAnalyticsService() {
    return this.injector.get(m0.y)
}
}
a0._CLEAR_PERMISSION_DATA_CACHE$ = new G.x,
a0.USER = "user",
a0.TOKEN = "token",
a0.ADMIN_TOKEN = "adminToken",
a0.ADMIN_PANEL_PATHNAME = "/admin",
a0.DEFAULT_WORKSPACE$ = new c0.X(null),
