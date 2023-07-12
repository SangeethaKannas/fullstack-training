var timerId = null;
$("body").on("keydown", '.alphabet', function(e) {
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 116, 32, 37, 38, 39, 40]) === -1) {
        if (e.which < 65 || e.which > 90) {
            return false;
        }
    }
});
$("body").on("keydown", '.number', function(event) {
    if ($.inArray(event.keyCode, [46, 8, 9, 27, 13, 110, 116, 35, 36, 37, 38, 39, 40]) !== -1 || (event.keyCode === 65 && (event.ctrlKey === true || event.metaKey === true)) || (event.keyCode >= 35 && event.keyCode <= 40)) {
        return;
    }
    if ((event.shiftKey || (event.keyCode < 48 || event.keyCode > 57)) && (event.keyCode < 96 || event.keyCode > 105) || event.keyCode == 17 || event.keyCode == 2) {
        event.preventDefault();
    }
});
$("body").on("keydown", '.panCard, .pan-number', function(e) {
    var ref = $(this);
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 116, 35, 36, 37, 38, 39, 40]) === -1) {
        var len = ref.val().length;
        if (len > 9) {
            return false;
        }
    }
});
$("body").on("keydown", '.dl', function(e) {
    var ref = $(this);
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 116, 35, 36, 37, 38, 39, 40]) === -1) {
        var len = ref.val().length;
        if (len > 15) {
            return false;
        }
    }
});
$("body").on("keydown", '.passport', function(e) {
    var ref = $(this);
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 116, 35, 36, 37, 38, 39, 40]) === -1) {
        var len = ref.val().length;
        if (len > 8) {
            return false;
        }
    }
});
$("body").on("keydown", '.voter-id', function(e) {
    var ref = $(this);
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 116, 35, 36, 37, 38, 39, 40]) === -1) {
        var len = ref.val().length;
        if (len > 10) {
            return false;
        }
    }
});
$("body").on("keydown", '.aadhaar, .aadhar-number', function(e) {
    var ref = $(this);
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 116, 35, 36, 37, 38, 39, 40]) === -1) {
        var len = ref.val().length;
        if (len < 12) {
            if ((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
});
$("body").on("keydown", '.phone', function(e) {
    var ref = $(this);
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 116, 35, 36, 37, 38, 39, 40]) === -1) {
        var len = ref.val().length;
        if (len < 10) {
            if ((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
});
$("body").on("keydown", ".pin-code", function(e) {
    var ref = $(this);
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 116, 35, 36, 37, 38, 39, 40]) === -1) {
        var len = ref.val().length;
        if (len < 6) {
            if ((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
});
$("body").on("keydown", '.date-picker', function(e) {
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 116, 35, 36, 37, 38, 39, 40]) === -1) {
        if ((e.which < 48 || e.which > 57) && e.which != 189) {
            return false;
        }
    }
});
$("body").on("keydown", ".account-number", function(e) {
    var ref = $(this);
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 116, 35, 36, 37, 38, 39, 40]) === -1) {
        var len = ref.val().length;
        if (len < 18) {
            if ((e.which >= 48 && e.which <= 57) || (e.which >= 96 && e.which <= 105)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
});
$("body").on("keydown", '.ifsc-code', function(e) {
    var ref = $(this);
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 116, 35, 36, 37, 38, 39, 40]) === -1) {
        var len = ref.val().length;
        if (len > 10) {
            return false;
        }
    }
});
$("body").on("keydown", '.monthly-salary, .outgoing-emis', function(e) {
    var ref = $(this);
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 116, 35, 36, 37, 38, 39, 40]) === -1) {
        var len = ref.val().length;
        if (len < 1) {
            if (e.which == 48 || e.which == 96) {
                return false;
            }
        }
        if (len > 8) {
            return false;
        }
    }
});
$("body").on("keydown", "input[name=otp]", function(e) {
    var ref = $(this);
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 116, 35, 36, 37, 38, 39, 40]) === -1) {
        var len = ref.val().length;
        if (len > 3) {
            return false;
        }
    }
});
function hide_all_err(ref, err_cls, remove_cls) {
    ref.find("." + err_cls).css("display", "none");
    ref.find(".form-control").removeClass(remove_cls);
    ref.find(".btn").removeClass(remove_cls);
}
function hide_this_err(ref, err_cls, this_remove_cls, DOM='') {
    ref.siblings("." + err_cls).css("display", "");
    ref.removeClass(this_remove_cls);
    if (DOM == "button") {
        ref.parent(".dropdown-menu").siblings("." + err_cls).css("display", "");
        ref.parent(".dropdown-menu").siblings("button").removeClass(this_remove_cls);
        ref.parents(".select-color").siblings("." + err_cls).css("display", "");
    }
}
function hide_this_err_radio(ref, err_cls, DOM='') {
    if (DOM == "radio") {
        ref.parent("span").siblings("." + err_cls).css("display", "");
    }
}
function show_err_input(ref, DOM_name, err_message) {
    ref.find("input[name=" + DOM_name + "]").siblings(".error-class").css("display", "block");
    ref.find("input[name=" + DOM_name + "]").siblings(".error-class").text(err_message);
    ref.find("input[name=" + DOM_name + "]").addClass("err_margin_0");
}
function hide_err_input(ref, DOM_name) {
    ref.find("input[name=" + DOM_name + "]").siblings(".error-class").css("display", "none");
    ref.find("input[name=" + DOM_name + "]").siblings(".error-class").text("");
    ref.find("input[name=" + DOM_name + "]").removeClass("err_margin_0");
}
function show_err_input_dom(ref, DOM_name, err_message, DOM) {
    if (DOM == "button") {
        ref.find(DOM + "[name=" + DOM_name + "]").siblings(".error-class").css("display", "block");
        ref.find(DOM + "[name=" + DOM_name + "]").siblings(".error-class").text(err_message);
        ref.find(DOM + "[name=" + DOM_name + "]").addClass("err_margin_0");
    } else if (DOM == "radio") {
        ref.find("input[name=" + DOM_name + "]").parents(".custom-radio").siblings(".error-class").css("display", "block");
        ref.find("input[name=" + DOM_name + "]").parents(".custom-radio").siblings(".error-class").text(err_message);
        ref.find("input[name=" + DOM_name + "]").addClass("err_margin_0");
    } else if (DOM == "textarea") {
        ref.find(DOM + "[name=" + DOM_name + "]").siblings(".error-class").css("display", "block");
        ref.find(DOM + "[name=" + DOM_name + "]").siblings(".error-class").text(err_message);
        ref.find(DOM + "[name=" + DOM_name + "]").addClass("err_margin_0");
    }
}
function ajax_success_message(ref, ref_cls, success_message) {
    ref.find("." + ref_cls).text(success_message);
    ref.find("." + ref_cls).css("display", "block");
    ref.find("." + ref_cls).removeClass("response-error");
    ref.find("." + ref_cls).addClass("response-success");
}
function ajax_success_message_black(ref, ref_cls, success_message) {
    ref.find("." + ref_cls).text(success_message);
    ref.find("." + ref_cls).css("display", "block");
    ref.find("." + ref_cls).removeClass("response-error");
    ref.find("." + ref_cls).addClass("response-success-black");
}
function ajax_success_message1(ref, ref_cls, success_message) {
    ref.find("." + ref_cls).text(success_message);
    ref.find("." + ref_cls).css("display", "block");
    ref.find("." + ref_cls).removeClass("response-error");
    ref.find("." + ref_cls).addClass("response-success");
}
function ajax_error_message(ref, ref_cls, error_message) {
    if ($.type(error_message) == 'array') {
        $.each(error_message, function(key, value) {
            ref.find("." + ref_cls).append(value + "<br>");
        });
    } else if ($.type(error_message) == 'object') {
        error_message = $.parseJSON(error_message);
        $.each(error_message, function(key, value) {
            ref.find("." + ref_cls).append(value + "<br>");
        });
    } else {
        ref.find("." + ref_cls).text(error_message);
    }
    ref.find("." + ref_cls).css("display", "block");
    ref.find("." + ref_cls).removeClass("response-success");
    ref.find("." + ref_cls).addClass("response-error");
}
function hide_ajax_error(ref, response, response_error, response_success) {
    ref.find("." + response).text("");
    ref.find("." + response).css("display", "none");
    ref.find("." + response).removeClass(response_error);
    ref.find("." + response).removeClass(response_success);
}
function document_error_message(ref, ref_id, ref_cls, error_message, DOM) {
    ref.find("#" + ref_id + "").parents("." + ref_cls + "").find('.error-class').css('display', 'block');
    ref.find("#" + ref_id + "").parents("." + ref_cls + "").find('.error-class').text(error_message);
    if (DOM == 'button') {
        ref.find("button[name=" + ref_id + "]").parents("." + ref_cls + "").find('.error-class').css('display', 'block');
        ref.find("button[name=" + ref_id + "]").parents("." + ref_cls + "").find('.error-class').text(error_message);
    } else if (DOM == 'input') {
        ref.find("input[name=" + ref_id + "]").parents(".permanent-addr").find(".error-class").css('display', 'block');
        ref.find("input[name=" + ref_id + "]").parents(".permanent-addr").find(".error-class").text(error_message);
        ref.find("input[name=" + ref_id + "]").parents("." + ref_cls + "").find(".error-class").css('display', 'block');
        ref.find("input[name=" + ref_id + "]").parents("." + ref_cls + "").find(".error-class").text(error_message);
    }
}
function timer(ref, time, interval, sec_ref, color_code1, color_code2) {
    sec_ref.css("pointer-events", "none");
    var timerId = setInterval(()=>{
        if (time <= 0) {
            sec_ref.html('Resend OTP <i class="ajaxloader_a fa fa-circle-o-notch fa-spin"></i>');
            ref.html("");
            sec_ref.css("color", color_code2);
            sec_ref.css("pointer-events", "");
            clearInterval(timerId);
        } else {
            sec_ref.html('OTP Sent <i class="ajaxloader_a fa fa-circle-o-notch fa-spin"></i>' + '(' + time + ')');
            time = time - 1;
            sec_ref.css("color", color_code1);
        }
    }
    , interval);
}
function document_validation(ref, ref_id, doc1, doc_data) {
    var ext_array = ['pdf', 'PDF', 'jpg', 'JPG', 'jpeg', 'JPEG', 'png', 'PNG'];
    var ext_array_profile_pic = ['jpg', 'JPG', 'jpeg', 'JPEG', 'png', 'PNG'];
    var doc1_name = doc1.files[0].name;
    var doc1_size = doc1.files[0].size;
    doc1_ext = doc1_name.substring(doc1_name.lastIndexOf('.') + 1);
    if (doc_data.check_bank_statement == 1 && $.inArray(doc1_ext, ['pdf', 'PDF']) == -1) {
        ajax_error_message(ref_id, "response", "Document should have pdf extension.");
        doc1.value = '';
    }
    if (doc_data.document_name == 'profile_pic' && $.inArray(doc1_ext, ext_array_profile_pic) == -1) {
        ajax_error_message(ref_id, "response", "Document should have jpg, jpeg, png extension.");
        doc1.value = '';
    }
    if ($.inArray(doc1_ext, ext_array) == -1) {
        ajax_error_message(ref_id, "response", "Document should have jpg, jpeg, png, pdf extension.");
        doc1.value = '';
    } else if (doc1_size > 5242880) {
        ajax_error_message(ref_id, "response", "Document size should be less then 5MB.");
        doc1.value = '';
    } else {
        var doc1_f = doc1.files[0];
        if (doc1_f) {
            var doc1_r = new FileReader();
            var doc1_base64 = '';
            doc1_r.onloadend = function(e) {
                doc1_base64 = doc1_r.result;
                doc1_data = {
                    'document_field': doc_data.document_field,
                    'document_name': doc_data.document_name,
                    'document_string': doc1_base64
                }
                if (doc_data.other_doc_id != '' && doc_data.other_doc_id != undefined) {
                    doc1_data.other_doc_id = doc_data.other_doc_id;
                }
                if (doc_data.document_number != '') {
                    doc1_data.ovd_id = doc_data.document_number;
                }
                if (doc_data.ovd_number != '') {
                    doc1_data.ovd_number = doc_data.ovd_number;
                }
                upload_documents(ref, doc1_data, doc_data.class_name, doc1, e.target.result, doc1_ext);
            }
            ;
            doc1_r.readAsDataURL(doc1_f);
        }
    }
}
function upload_documents(ref, post_data, name, doc1, src, doc_ext) {
    $.ajax({
        url: 'uploadDocument',
        type: 'post',
        data: post_data,
        beforeSend: function() {
            ref.siblings(".custom-file-label").removeClass(name + "-upload");
            ref.siblings(".custom-file-label").removeClass(name + "-upload-error");
            ref.siblings(".custom-file-label").removeClass(name + "-upload-success");
            ref.siblings(".custom-file-label").addClass("doc-upload-loader");
        },
        success: function(response) {
            response = $.parseJSON(response);
            ref.siblings(".custom-file-label").removeClass("doc-upload-loader");
            ref_id = $("#" + ref.parents("form").attr("id") + "");
            if (response.http_code == 200) {
                if (name == 'utility') {
                    name = 'doc';
                }
                var ext_array = ['pdf', 'PDF'];
                ref.siblings(".custom-file-label").addClass(name + "-upload-success");
                ref.siblings("." + name + "-upload-success").html("<i class='fa fa-check-circle tick'></i>");
                if ($.inArray(doc_ext, ext_array) > -1) {
                    src = base_url + "assets/images/pdf_upload.png";
                    ref.siblings("." + name + "-upload-success").css("background", "url(" + src + ") no-repeat 33px 27px");
                    ref.siblings("." + name + "-upload-success").css("background-size", "50%");
                } else {
                    ref.siblings("." + name + "-upload-success").css("background", "url(" + src + ") no-repeat 0 0");
                    ref.siblings("." + name + "-upload-success").css("background-size", "100%");
                }
                ref.siblings("." + name + "-upload-success").css("border-bottom", "3px solid #009933");
                ref.attr('data-id', response.doc_id);
                ajax_success_message(ref_id, "response", "Document successfully uploaded.");
            } else {
                ref.siblings(".custom-file-label").addClass(name + "-upload-error");
                ajax_error_message(ref_id, "response", response.message);
                doc1.value = '';
            }
        },
        error: function() {
            ref.siblings(".custom-file-label").addClass(name + "-upload-error");
            ajax_error_message(ref_id, "response", "Something wrong. Please try again lator");
            doc1.value = '';
        }
    });
}
function document_validation_profile_pic(ref, base64, doc_data) {
    doc1_data = {
        'document_field': doc_data.document_field,
        'document_name': doc_data.document_name,
        'document_string': base64
    }
    upload_documents_profile_pic(ref, doc1_data, doc_data.class_name, base64);
}
function upload_documents_profile_pic(ref, post_data, name, src) {
    $.ajax({
        url: 'uploadDocument',
        type: 'post',
        data: post_data,
        beforeSend: function() {
            ref.find(".absolute-position").siblings("img").attr("src", base_url + "assets/images/loader-pro-pic.gif");
        },
        success: function(response) {
            response = $.parseJSON(response);
            ref.find(".absolute-position").find(".custom-file-label").removeClass("profile-upload-loader");
            if (response.http_code == 200) {
                ref.find(".absolute-position").siblings("img").attr("src", src);
                ref.find(".absolute-position").find(".custom-file-label").addClass(name + "-upload-success");
            } else {
                ref.find(".absolute-position").find(".custom-file-label").addClass(name + "-upload-error");
                ajax_error_message(ref, "response", response.message);
            }
        },
        error: function() {
            ref.find(".absolute-position").find(".custom-file-label").addClass(name + "-upload-error");
            ajax_error_message(ref, "response", "Something wrong. Please try again lator");
        }
    })
}
function upload_document_error(ref, DOM_name, err_message) {
    ref.find("input[name=" + DOM_name + "]").siblings(".error-class").css("display", "block");
    ref.find("input[name=" + DOM_name + "]").siblings(".error-class").text(err_message);
    ref.find("input[name=" + DOM_name + "]").addClass("err_margin_0");
}
var datepicker_date = new Date();
datepicker_date = datepicker_date.getFullYear();
datepicker_date_dob = datepicker_date - 18;
var datepicker_date = new Date();
var dd = String(datepicker_date.getDate()).padStart(2, '0');
var mm = String(datepicker_date.getMonth() + 1).padStart(2, '0');
var yyyy = datepicker_date.getFullYear();
var todayDate = mm + '-' + dd + '-' + yyyy;
$(".date-picker").datepicker({
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    changeYear: true,
    yearRange: "1950:" + datepicker_date,
    todayHighlight: true,
    maxDate: new Date(todayDate),
    defaultDate: yyyy + "-" + mm + "-" + dd,
});
$(".date-picker-dob").datepicker({
    dateFormat: "yy-mm-dd",
    changeMonth: true,
    changeYear: true,
    yearRange: "1950:" + datepicker_date_dob,
    todayHighlight: true,
    defaultDate: datepicker_date_dob + "-" + mm + "-" + dd,
});
function send_otp(ref, data, sec_ref) {
    var status = 0;
    ref.find(".ajaxloader_a").css("display", "inline-block");
    $.ajax({
        url: base_url + "resendOtp",
        type: 'post',
        data: data,
        async: false,
        beforeSend: function() {
            ref.find(".ajaxloader_a").css("display", "inline-block");
        },
        success: function(response) {
            response = $.parseJSON(response);
            if (response.http_code == 200) {
                ajax_success_message(ref, "response", response.message);
                timer(ref.find(".resend-timer"), 60, 1000, ref.find("." + sec_ref + " a"), "#807c7c", "#a52025");
                status = 1;
            } else {
                ajax_error_message(ref, "response", response.message);
            }
        },
        error: function() {
            ajax_error_message(ref, "response", "Something wrong. Please try again later");
        },
        complete: function() {
            ref.find(".ajaxloader_a").css("display", "none");
        }
    });
    return status;
}
$("body").on("focus", "#frm_register input[name=city], #frm_personalDetails input[name=city_namee], #frm_confirmBasiDetails input[name=city_namee], #frm_personalDetails input[name=permanent_city_name], #frm_basicDetails2 input[name=permanent_city_name], #frm_basicDetails2 input[name=city], #frm_professionalDetailsL40k input[name=city_namee], #frm_businessDetails input[name=city_namee], #frm_schedulePickup input[name=city_namee], .dash-verifyAddress-other-address-section input[name=city], #frm_reference .city", function() {
    $(this).autocomplete({
        source: base_url + "city"
    });
});
$("body").on("focus", "#frm_professionalDetailsL40k input[name=company_name], #frm_professionalDetailsM40k input[name=company_name]", function() {
    $(this).autocomplete({
        source: base_url + "company"
    });
});
function isMobile() {
    return /Mobi/.test(navigator.userAgent);
}
function getBrowserName() {
    if ((window.opr && window.opr.addons) || window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
        return 'Opera';
    }
    if (typeof InstallTrigger !== 'undefined') {
        return 'Firefox';
    }
    if (/constructor/i.test(window.HTMLElement) || (function(p) {
        return p.toString() === '[object SafariRemoteNotification]';
    }
    )(!window['safari'])) {
        return 'Safari';
    }
    if (false || document.documentMode) {
        return 'Internet Explorer';
    }
    if (!(document.documentMode) && window.StyleMedia) {
        return 'Microsoft Edge';
    }
    if (window.chrome) {
        return 'Chrome';
    }
}
function getOSName() {
    var os;
    if (isMobile()) {
        if (/Windows/.test(navigator.userAgent)) {
            os = 'Windows';
            if (/Phone 8.0/.test(navigator.userAgent)) {
                os += ' Phone 8.0';
            } else if (/Phone 10.0/.test(navigator.userAgent)) {
                os += ' Phone 10.0';
            }
        } else if (/Android/.test(navigator.userAgent)) {
            function androidVersion() {
                if (/Android/.test(navigator.appVersion)) {
                    var v = (navigator.appVersion).match(/Android (\d+).(\d+)/);
                    if (v == null || v == '') {
                        var v = (navigator.appVersion).match(/Android (\d+)/);
                    }
                    return v;
                }
            }
            var ver = androidVersion();
            os = ver[0];
        } else if (/iPhone;/.test(navigator.userAgent)) {
            function iOSversion() {
                if (/iP(hone|od|ad)/.test(navigator.appVersion)) {
                    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
                }
            }
            var ver = iOSversion();
            os = 'iOS ' + ver[0] + '.' + ver[1] + '.' + ver[2];
        } else if (/iPad;/.test(navigator.userAgent)) {
            function iOSversion() {
                if (/iP(hone|od|ad)/.test(navigator.appVersion)) {
                    var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
                    return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
                }
            }
            var ver = iOSversion();
            os = 'iOS ' + ver[0] + '.' + ver[1] + '.' + ver[2];
        } else if (/BBd*/.test(navigator.userAgent)) {
            os = 'BlackBerry';
        }
    } else {
        if (/Windows/.test(navigator.userAgent)) {
            os = 'Windows';
            if (/5.1;/.test(navigator.userAgent)) {
                os += ' XP';
            } else if (/6.0;/.test(navigator.userAgent)) {
                os += ' Vista';
            } else if (/6.1;/.test(navigator.userAgent)) {
                os += ' 7';
            } else if (/6.2/.test(navigator.userAgent)) {
                os += ' 8';
            } else if (/10.0;/.test(navigator.userAgent)) {
                os += ' 10';
            }
            if (/64/.test(navigator.userAgent)) {
                os += ' 64-bit';
            } else {
                os += ' 32-bit';
            }
        } else if (/Macintosh/.test(navigator.userAgent)) {
            os = 'Macintosh';
            if (/OS X/.test(navigator.userAgent)) {
                os += ' OS X';
            }
        }
    }
    return os;
}
function getBrowser() {
    return {
        os: getOSName(),
        browser: getBrowserName(),
        language: navigator.language,
        languages: navigator.languages,
        user_agent: navigator.userAgent,
        device: isMobile() ? 'Mobile' : 'Desktop',
        referrer: document.referrer || 'N/A',
        online: navigator.onLine,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        screen_resolution: screen.width + ' x ' + screen.height,
        cookie_enabled: navigator.cookieEnabled,
    };
}
$("body").on("click", ".popup-close", function() {
    $('.custom-popup').hide();
});
$("body").on("click", ".popup-close1", function() {
    $('.modal_app_download').hide();
});
function getSlot(hr) {
    var a = new Array();
    hr += 4;
    if (hr < 10) {
        hr = 10;
    }
    if (hr <= 16) {
        for (var i = hr, j = 19; (i + 3) <= j; i += 3) {
            var hrEnd = i + +3;
            var day = '';
            var hrTimeStart = '';
            var hrTimeEnd = '';
            var slotString = '';
            if (i <= 12) {
                hrTimeStart = i;
                if (i == 12) {
                    day = 'PM';
                } else {
                    day = 'AM';
                }
            } else {
                hrTimeStart = i - 12;
                day = 'PM';
            }
            slotString = hrTimeStart + ' ' + day
            if (hrEnd <= 12) {
                hrTimeEnd = hrEnd;
                if (hrEnd == 12) {
                    day = 'PM';
                } else {
                    day = 'AM';
                }
            } else {
                hrTimeEnd = hrEnd - 12;
                day = 'PM';
            }
            slotString = slotString + '-' + hrTimeEnd + ' ' + day;
            a.push(slotString);
        }
    }
    return a;
}
function getSlot1(hr) {
    if (hr <= 6) {
        slots = ["10 AM - 1 PM", "1 PM - 4 PM", "4 PM - 7 PM"];
    } else if (hr <= 9) {
        slots = ["1 PM - 4 PM", "4 PM - 7 PM"];
    } else if (hr <= 12) {
        slots = ["4 PM - 7 PM"];
    }
    return slots;
}
function formatDate(date) {
    var d = new Date(date)
      , month = '' + (d.getMonth() + 1)
      , day = '' + d.getDate()
      , year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;
    return [year, month, day].join('-');
}
var carouselHeight = $("#blogCarousel").find(".carousel-item").height();
$("#blogCarousel").find(".white-section").css("min-height", carouselHeight);
var max = 0;
$("#stashfinapp-ul li").each(function() {
    var h = $(this).height();
    max = h > max ? h : max;
});
$("#stashfinapp-ul li").css("min-height", max);
$("#stashfinapp-ul li").css("background-color", "#fff");
$("body").on("keydown, focus, focusout, click, change", "input[type=text], input[type=password], .textarea", function() {
    hide_this_err($(this), "error-class", "err_margin_0");
    var clsArr = ["user-name", "mobile-number", "monthly-salary", "outgoing-emis", "city", "email-id", "dob", "pan-number", "aadhar-number", "company-name", "resident", "moi", "total-exp", "employment-type", "designation", "rbs", "current-address", "pin-code", "official-address", "landmark", "trunover", "tob", "office-area", "bank-detail", "nature-of-business", "ifsc-code", "resident-type", "custom-date", "custom-time", "permanent-address", "ovd_number", "maritalStatus", "occupied-since", "maritalStatus", "bank-statement", "reference_relationship", "ref-city"]
    var ref = $(this);
    var cls = ref.attr("class");
    cls = cls.split(" ");
    var res = $.grep(cls, function(element) {
        return $.inArray(element, clsArr) !== -1;
    });
    if (ref.val() != '') {
        ref.addClass(res + "-select");
    } else {
        ref.removeClass(res + "-select");
    }
});
$("body").on("click", ".dropdown-item", function() {
    hide_this_err($(this), "error-class", "err_margin_0", "button");
    var clsArr = ["user-name", "mobile-number", "monthly-salary", "outgoing-emis", "city", "email-id", "dob", "pan-number", "aadhar-number", "company-name", "resident", "moi", "total-exp", "employment-type", "designation", "rbs", "current-address", "pin-code", "official-address", "landmark", "trunover", "tob", "office-area", "bank-detail", "nature-of-business", "ifsc-code", "resident-type", "custom-date", "custom-time", "month", "year", "ovd", "maritalStatus", "bank-statement", "reference_relationship", "ref-city"]
    var cls = $(this).parent("div").siblings("button").attr("class");
    cls = cls.split(" ");
    var res = $.grep(cls, function(e) {
        return $.inArray(e, clsArr) !== -1;
    });
    $(this).parent("div").siblings("button").addClass(res + "-select");
    $(this).parent("div").siblings("button").css("color", "#000");
});
$("body").on("change", "input[type=radio]", function() {
    hide_this_err_radio($(this), "error-class", "radio");
});
$("body").on("mouseenter", ".dropdown", function(e) {
    var ref = $(this);
    ref.addClass("show");
    ref.find(".dropdown-toggle").attr("aria-expanded", "true");
    ref.find(".dropdown-menu").addClass("show");
}).on("mouseleave", ".dropdown", function(e) {
    var ref = $(this);
    ref.removeClass("show");
    ref.find(".dropdown-toggle").attr("aria-expanded", "false");
    ref.find(".dropdown-menu").removeClass("show");
});
$("body").on("mouseenter, focus", ".custom-dropdown", function() {
    var ref = $(this);
    var h = ref.siblings(".dropdown-menu").height();
    if (h > 200) {
        ref.siblings(".dropdown-menu").css("height", "200px");
        ref.siblings(".dropdown-menu").css("overflow-y", "scroll");
    }
});
var showSendOtpBox = '\
                <div class="row">\
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-1">\
                        <button type="submit" class="btn btn-primary mb-3" name="btnSendOtp" id="frm_btnSendOtp">Send OTP <i class="ajaxloader_a fa fa-circle-o-notch fa-spin"></i></button>\
                    </div>\
                </div>\
                ';
var showResendOtpBox = '\
                <div class="row">\
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\
                        <span class="send-link">\
                            <a href="javascript:void(0)" id="resend_otp">Send OTP <i class="ajaxloader_a fa fa-circle-o-notch fa-spin"></i><span class="resend-timer"></span></a>\
                            <input type="hidden" name="resend_otp_flag" id="resend_otp_flag" value="1">\
                        </span>\
                    </div>\
                </div>\
                <div class="row">\
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\
                        <label class="lblPwdOtp">OTP</label>\
                        <input type="password" class="form-control mb-4 pl-2" name="otp" autocomplete="off">\
                        <p class="error-class"></p>\
                    </div>\
                </div>\
                <div class="row">\
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-1">\
                        <button type="submit" class="btn btn-primary mb-4" name="btnLogin">Login <i class="ajaxloader fa fa-circle-o-notch fa-spin"></i></button>\
                    </div>\
                </div>\
                ';
var showPwdBox = '\
                <div class="row">\
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\
                        <label class="lblPwdOtp">Password</label>\
                        <input type="password" class="form-control mb-4 pl-2" name="password" autocomplete="off">\
                        <p class="error-class"></p>\
                    </div>\
                </div>\
                <div class="row">\
                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-1">\
                        <button type="submit" class="btn btn-primary mb-2" name="btnLogin">Login <i class="ajaxloader fa fa-circle-o-notch fa-spin"></i></button>\
                    </div>\
                </div>\
                ';
var showOtpPwdConfpwdBox = '\
                            <div class="row">\
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\
                                    <span class="send-link">\
                                        <a href="javascript:void(0)" id="resend_otp">Send OTP <i class="ajaxloader_a fa fa-circle-o-notch fa-spin"></i><span class="resend-timer"></span></a>\
                                        <input type="hidden" name="resend_otp_flag" id="resend_otp_flag" value="1">\
                                    </span>\
                                </div>\
                            </div>\
                            <div class="row">\
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\
                                    <label class="lblPwdOtp">OTP</label>\
                                    <input type="password" class="form-control mb-4 pl-2" name="txtOtp" autocomplete="off">\
                                    <p class="error-class"></p>\
                                </div>\
                            </div>\
                            <div class="row">\
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\
                                    <label class="lblPwdOtp">Password</label>\
                                    <input type="password" class="form-control mb-4 pl-2" name="txtPassword" autocomplete="off">\
                                    <p class="error-class"></p>\
                                </div>\
                            </div>\
                            <div class="row">\
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\
                                    <label class="lblPwdOtp">Confirm Password</label>\
                                    <input type="password" class="form-control mb-4 pl-2" name="txtConfPassword" autocomplete="off">\
                                    <p class="error-class"></p>\
                                </div>\
                            </div>\
                            <div class="row">\
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-1">\
                                    <button type="submit" class="btn btn-primary mb-2" name="btnSubmit">Submit <i class="ajaxloader fa fa-circle-o-notch fa-spin"></i></button>\
                                </div>\
                            </div>\
                            ';
var showotpLogin = '\
                            <div class="row">\
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">\
                                    <span class="send-link">\
                                        <a href="javascript:void(0)" id="resend_otp">Send OTP <i class="ajaxloader_a fa fa-circle-o-notch fa-spin"></i><span class="resend-timer"></span></a>\
                                        <input type="hidden" name="resend_otp_flag" id="resend_otp_flag" value="1">\
                                    </span>\
                                </div>\
                            </div>\
                            ';
var showLoginButtion = '\
                            <div class="row">\
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-1">\
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-1">\
                                        <button type="submit" class="btn btn-primary mb-4" name="btnLogin">Login <i class="ajaxloader fa fa-circle-o-notch fa-spin"></i></button>\
                                    </div>\
                                </div>\
                            </div>\
                            ';
var showgenrateButtion = '\
                            <div class="row">\
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-1">\
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-1">\
                                    <button name="" type="button" id="submit_refer">Generate your Referral Code</button\
                                    </div>\
                                </div>\
                            </div>\
                            ';
var showcliButton = '\
                            <div class="row">\
                                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-1">\
                                    <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center mt-1">\
                                    <button name="" type="button" id="submit_otp">Verify OTP</button\
                                    </div>\
                                </div>\
                            </div>\
                            ';
function showPwdOtpBox(ref, data) {
    if (data.fieldName == "email") {
        ref.find(".show-pwdOtpBox").html(showResendOtpBox);
    } else if (data.fieldName == "phone") {
        ref.find(".show-pwdOtpBox").html(showSendOtpBox);
    }
}
function loginSendOtp(ref) {
    var data = {
        "phone": ref.find("input[name=emailPhone]").val()
    }
    alert(data.phone);
    if (data.phone == '') {
        show_err_input(ref, "emailPhone", "*Required");
    } else if (!data.phone.match(regexMobileN)) {
        show_err_input(ref, "emailPhone", "*Invalid mobile number (start with 6, 7, 8, 9)");
    } else {
        otpStatus = send_otp(ref, data, "send-link");
        if (otpStatus == 1) {
            setTimeout(function() {
                ref.find("input[name=emailPhone]").attr("readonly", "readonly");
                ref.find(".show-pwdOtpBox").html(showResendOtpBox);
                timer(ref.find(".resend-timer"), 60, 1000, ref.find(".send-link a"), "#807c7c", "#a52025");
            }, 50);
        }
    }
}
function showPwdOtpBoxForgotPwd(ref, data) {
    ref.find(".show-pwdOtpBox").html(showSendOtpBox);
}
function ForgotPwdSendOtp(ref, data, ref_id) {
    $('#frm_btnSendOtp').attr("disabled", true);
    $.ajax({
        url: base_url + "resendOtpForgotPwd",
        type: "post",
        data: data,
        beforeSend: function() {
            ref.find(".ajaxloader_a").css("display", "inline-block");
        },
        success: function(response) {
            response = $.parseJSON(response);
            if (response.http_code == 200) {
                ajax_success_message(ref, "response", response.message);
                ref.find(".show-pwdOtpBox").html(showOtpPwdConfpwdBox);
                setTimeout(function() {
                    timer(ref.find(".resend-timer"), 60, 1000, ref.find(".send-link a"), "#807c7c", "#a52025");
                }, 50);
            } else {
                ajax_error_message(ref, "response", response.message);
            }
        },
        error: function() {
            ajax_error_message(ref, "response", "Something wrong. Please try again later");
        },
        complete: function() {
            ref.find(".ajaxloader_a").css("display", "");
        }
    });
}
function calculateEMI() {
    var ref = $("#loan_calculator");
    var loanAmount = ref.find("input[name=ranLoanAmount]").val();
    var numberOfMonths = ref.find("input[name=ranTenure]").val();
    var rateOfInterest = ref.find("input[name=ranInterestRate]").val();
    var monthlyInterestRatio = (rateOfInterest / 100) / 12;
    var top = Math.pow((1 + monthlyInterestRatio), numberOfMonths);
    var bottom = top - 1;
    var sp = top / bottom;
    var emi = ((loanAmount * monthlyInterestRatio) * sp);
    var full = numberOfMonths * emi;
    var interest = full - loanAmount;
    var int_pge = (interest / full) * 100;
    var emi_str = emi.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var full_str = full.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    var int_str = interest.toFixed(2).toString().replace(/,/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    ref.find("input[name=monthlyEmi]").val(emi_str);
    ref.find("input[name=totalInterest]").val(int_str);
    ref.find("input[name=payableAmount]").val(full_str);
    ref.find("input[name=effectiveIntrestRate]").val(int_pge.toFixed(2) + " %");
}
function getCookie(name) {
    var data = {};
    var cookies = document.cookie.split(';');
    $.each(cookies, function(key, value) {
        c = $.trim(value).split("=");
        data[c[0]] = c[1];
    });
    return data[name];
}
function getParams(url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
}
;function fun_clear_ovd_no(ref) {
    var ref_form = $("#frm_personalDetails");
    hide_all_err(ref_form, "error-class", "err_margin_0");
    hide_ajax_error(ref_form, "response", "response-error", "response-success");
    ref_form.find("input[name=ovd_number]").val("");
    ref_form.find("input[name=ovd_number]").removeClass("dl");
    ref_form.find("input[name=ovd_number]").removeClass("passport");
    ref_form.find("input[name=ovd_number]").removeClass("voter-id");
    ref_form.find("input[name=ovd_number]").removeClass("aadhaar");
    var placeHolder = 'Officially Valid ID Number';
    if (ref.text == 'Driving Licence') {
        placeHolder = 'Driving Licence Number';
        className = 'dl';
    } else if (ref.text == 'Passport') {
        placeHolder = 'Passport Number';
        className = 'passport';
    } else if (ref.text == 'Voter ID Card') {
        placeHolder = 'Voter ID Card Number';
        className = 'voter-id';
    } else if (ref.text == 'Aadhaar Card') {
        placeHolder = 'Aadhaar Card Number';
        className = 'aadhaar';
    }
    ref_form.find("input[name=ovd_number]").attr('placeholder', placeHolder);
    ref_form.find("input[name=ovd_number]").addClass(className);
}
function loginExpired(message) {
    if (message == 'Login expired! Please re-login.') {
        window.location.href = base_url + "logout";
    }
}
function calculateMoratoriumEMI() {
    var ref = $("#moratorium_loan_calculator");
    var loanAmount = ref.find("input[name=l_Amount]").val();
    var numberOfMonths = ref.find("input[name=l_Tenure]").val();
    var rateOfInterest = (ref.find("input[name=l_RateOfInterest]").val()) / 12;
    var t_int = loanAmount * (rateOfInterest / 100);
    var t_os = parseInt(loanAmount) + parseInt(t_int);
    var f_m_int = t_os * (parseInt(rateOfInterest) / 100);
    var m_fee = 354;
    var f_m_loss = m_fee + parseInt(f_m_int);
    var s_m_t_int = (t_os + f_m_int) * (rateOfInterest / 100);
    var s_m_loss = f_m_loss + s_m_t_int + m_fee;
    var t_m_t_int = (t_os + f_m_int + s_m_t_int) * (rateOfInterest / 100);
    var t_m_loss = f_m_loss + s_m_loss + t_m_t_int + m_fee;
    ref.find("input[name=mFee]").val(m_fee);
    ref.find("input[name=firstMonInt]").val(Math.round(f_m_int));
    ref.find("input[name=secondMonInt]").val(Math.round(s_m_t_int));
    ref.find("input[name=thirdMonInt]").val(Math.round(t_m_t_int));
    ref.find("input[name=firstMonLoss]").val(Math.round(f_m_loss));
    ref.find("input[name=secondMonLoss]").val(Math.round(s_m_loss));
    ref.find("input[name=thirdMonLoss]").val(Math.round(t_m_loss));
}
function chk_phoneEmail(ref, data) {
    var status = 0;
    $.ajax({
        url: base_url + "chk_phoneEmail",
        type: 'post',
        data: data,
        async: false,
        success: function(response) {
            response = $.parseJSON(response);
            if (response.http_code == 200) {
                ref.find('.login_buttion').html(showLoginButtion);
                $(".show-pwdOtpBox").css("display", "block");
                $("#login_forgotpass").css("display", "block");
                $("#btnLoginContinue").css("display", "none");
                $("#btnLoginContinuea").css("display", "none");
                $("#not_registered").css("display", "none");
            } else {
                ajax_error_message(ref, "response", response.message);
            }
        },
        error: function() {
            ajax_error_message(ref, "response", "Something wrong. Please try again later");
        },
    });
}
function document_validation_elev8(ref, ref_id, doc1, doc_data) {
    var ext_array = ['jpg', 'JPG', 'jpeg', 'JPEG', 'png', 'PNG'];
    var ext_array_profile_pic = ['jpg', 'JPG', 'jpeg', 'JPEG', 'png', 'PNG'];
    var doc1_name = doc1.files[0].name;
    var doc1_size = doc1.files[0].size;
    doc1_ext = doc1_name.substring(doc1_name.lastIndexOf('.') + 1);
    if (doc_data.check_bank_statement == 1 && $.inArray(doc1_ext, ['pdf', 'PDF']) == -1) {
        ajax_error_message(ref_id, "response", "Document should have pdf extension.");
        doc1.value = '';
    }
    if (doc_data.document_name == 'profile_pic' && $.inArray(doc1_ext, ext_array_profile_pic) == -1) {
        ajax_error_message(ref_id, "response", "Document should have jpg, jpeg, png extension.");
        doc1.value = '';
    }
    if ($.inArray(doc1_ext, ext_array) == -1) {
        ajax_error_message(ref_id, "response", "Document should have jpg, jpeg, png extension.");
        doc1.value = '';
    } else if (doc1_size > 5242880) {
        ajax_error_message(ref_id, "response", "Document size should be less then 5MB.");
        doc1.value = '';
    } else {
        var doc1_f = doc1.files[0];
        if (doc1_f) {
            var doc1_r = new FileReader();
            var doc1_base64 = '';
            doc1_r.onloadend = function(e) {
                doc1_base64 = doc1_r.result;
                doc1_data = {
                    'document_field': doc_data.document_field,
                    'document_name': doc_data.document_name,
                    'document_string': doc1_base64
                }
                if (doc_data.other_doc_id != '' && doc_data.other_doc_id != undefined) {
                    doc1_data.other_doc_id = doc_data.other_doc_id;
                }
                if (doc_data.document_number != '') {
                    doc1_data.ovd_id = doc_data.document_number;
                }
                if (doc_data.ovd_number != '') {
                    doc1_data.ovd_number = doc_data.ovd_number;
                }
                upload_documents(ref, doc1_data, doc_data.class_name, doc1, e.target.result, doc1_ext);
            }
            ;
            doc1_r.readAsDataURL(doc1_f);
        }
    }
}
$(document).ready(function() {
    localStorage.removeItem("Y29weXZhbHVl");
});
window.onload = ()=>{
    $('body').on('paste', 'input, textarea', function(e) {
        setTimeout(function() {
            var element_id = $(e.currentTarget).attr('id');
            if (element_id == undefined || element_id == 'undefined' || element_id == '') {
                var element_id = $(e.currentTarget).attr('name');
            }
            var value_key = 'Y29weXZhbHVl';
            var stored = localStorage.getItem(value_key);
            if (stored === '' || stored === null) {
                var copy_value1 = '"' + element_id + '"' + ":" + '"' + 1 + '"';
                copy_value1 = '"source":"web",' + copy_value1;
                localStorage.setItem(value_key, copy_value1);
            } else {
                var copy_value2 = stored + ',"' + element_id + '"' + ":" + '"' + 1 + '"';
                localStorage.setItem(value_key, copy_value2);
            }
        }, 0);
    });
}
