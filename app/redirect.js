'use strict';
(function () {
    var workPath = localStorage.getItem('noname_workpath');

    //if (!localStorage.getItem('noname_freeTips')) {
    //	alert("【无名杀】属于个人开发软件且【完全免费】，如非法倒卖用于牟利将承担法律责任 开发团队将追究到底");
    //	localStorage.setItem('noname_freeTips', true);
    //}
    var inited = localStorage.getItem('noname_inited');
    var loadFailed = function () {
        localStorage.removeItem('noname_inited');
        localStorage.removeItem('noname_freeTips');
        window.location.reload();
    };
    var loadFailed2 = function () {
        localStorage.removeItem('noname_inited');
        localStorage.removeItem('noname_freeTips');
        document.head.removeChild(base);
    };
    var _load = function (src, onload, onerror) {
        var script = document.createElement('script');
        script.src = 'game/' + src + '.js';
        script.onload = onload;
        script.onerror = function () {
            alert('在载入' + 'game/' + src + '.js时发生错误');
            onerror();
        };
        document.head.appendChild(script);
    };

    var checkfile = function (src) {
        var filePath = __dirname + '/' + workPath + src;
        var fs = require('fs');
        if (fs.existsSync(filePath)) {
            var stat = fs.statSync(filePath);
            if (stat.size > 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }

    var isNode = typeof window.process == 'object' && typeof window.require == 'function';

    var load = function (src, onload, onerror) {
        if (isNode) {
            if (checkfile(src)) {
                _load('game/' + src + '.js', onload, onerror);
            } else {
                alert('在载入' + 'game/' + src + '.js时发生错误');
                if (onerror)
                    onerror();
            }
        } else {
            _load(src, onload, onerror);
        }
    };

    var base = document.createElement('base');
    base.href = workPath;
    document.head.appendChild(base);

    var fail = inited ? loadFailed : loadFailed2;

    if (isNode) {
        if (inited && checkfile('index.html')) {
            window.location.href = window.location.href + '/../' + workPath + 'index.html';
            // window.location.href = 'file:///' + __dirname + '/' + workPath + 'index.html';
        } else {
            fail();
        }
    } else {
        if (inited) {
            //localStorage.setItem('noname_inited', 'nodejs');
            window.location.href = window.location.href + '/../' + workPath + 'index.html';
        }

        //load('update', function () {
        //    load('config', function () {
        //        load('package', function () {
        //            load('game', function () {
        //                if (!localStorage.getItem('noname_inited')) {
        //                    localStorage.setItem('noname_inited', 'nodejs');
        //                    window.location.reload();
        //                }
        //            }, fail);
        //        }, fail);
        //    }, fail);
        //}, fail);
    }

}
    ());
