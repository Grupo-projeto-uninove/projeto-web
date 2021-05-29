/**
 * @preserve cookie-warn.js
 *
 * Copyright 2016, Tamas Schalk (github.com/schalkt)
 * Licensed under the MIT
 *
 * @version 1.0.2
 *
 */

/**
 * USAGE:
 *
 *    <script
 *      id="cookieWarn"
 *        data-text="Our website uses cookies."
 *        data-button="Ok"
 *        data-info="More info"
 *        data-link="http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm"
 *        data-expire="1"
 *        data-style="#cookieWarnBox a { color: #ff0000; }"
 *        type="text/javascript"
 *        src="../cookie-warn.min.js">
 *    </script>
 *
 * OR
 *
 *    <div
 *        id="cookieWarn"
 *        data-text="Our website uses cookies."
 *        data-button="Ok"
 *        data-info="More info"
 *        data-link="http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm"
 *        data-expire="1"
 *        data-style="#cookieWarnBox a { color: #ff0000; }">
 *    </div>
 *
 */

(function (fn) {

    "use strict";

    // set or get cookie
    var cookie = function (name, value, days) {

        if (value === undefined) {

            var i, x, y, cookies = document.cookie.split(";");

            for (i = 0; i < cookies.length; i++) {
                x = cookies[i].substr(0, cookies[i].indexOf("="));
                y = cookies[i].substr(cookies[i].indexOf("=") + 1);
                x = x.replace(/^\s+|\s+$/g, "");
                if (x == name) {
                    return y;
                }
            }

        } else {

            days = days ? days : 365;
            var expire = new Date();
            expire.setDate(expire.getDate() + days);
            value = value + ((days == null) ? "" : "; expires=" + expire.toGMTString());
            document.cookie = name + "=" + value;

        }

    };


    // if cookie true return
    if (cookie(fn)) {
        return;
    }

    // warning box close function
    window[fn] = {

        close: function (expire) {

            // set the cookie
            cookie(fn, true, expire);

            // remove warning box
            var obj = document.getElementById('cookieWarnBox');

            if (obj) {
                obj.parentNode.removeChild(obj);
            }

        }

    };

    document.addEventListener('DOMContentLoaded', function () {

        var data, lang, tag, text, button, link, expire, css, style, style1, style2, style3, body, wbox, info, more;

        // get parameters
        tag = document.getElementById('cookieWarn');
        lang = document.documentElement.lang;
        data = JSON.parse(tag.getAttribute('data-lang-' + lang).replace(/'/g, '"'));

        if (!data) {
            return;
        }

        text = data.text;
        button = data.button;
        link = data.link;
        more = data.more;
        expire = parseInt(tag.getAttribute('data-expire'));
        style = tag.getAttribute('data-style');

        style1 = '#cookieWarnBox {position:fixed;z-index:1000;line-height:24px;bottom:0;left:0;right:0;text-align:center;padding:10px;font-size:16px;}';
        style2 = '#cookieWarnBox span {text-transform:uppercase;cursor:pointer;padding:3px 14px;margin-left:10px;}';
        css = {

            type: 'text/css', style: document.createElement('style'),
            content: style1 + style2 + style3 + style,
            append: function () {

                this.style.type = this.type;
                this.style.appendChild(document.createTextNode(this.content));
                document.head.appendChild(this.style);

            }
        };

        css.append();

        // create warning box
        wbox = document.createElement('div');
        wbox.setAttribute("id", "cookieWarnBox");
		wbox.setAttribute("class", "bg_dark");
        wbox.setAttribute("style", style.box);
        info = (link && more) ? ' <a target="_blank" class="bold" href="' + link + '">' + more + '</a> ' : '';
        button = '<span id="cookieWarnClose" class="btn btn-new" onclick="' + fn + '.close(' + expire + ');">' + button + '</span>';
        wbox.innerHTML = '<p>' + text + info + button + '</p>';

        // append to body
        body = document.getElementsByTagName("body")[0];
        body.appendChild(wbox);

    }, false);


})('cookieWarn');

