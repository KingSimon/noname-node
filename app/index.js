'use strict';
(function () {
    //主程序存放目录
    var workPath = 'NoName/';
    localStorage.setItem('noname_workpath', workPath);
    //更新源配置
    var defaultLatest = 'https://github.com/libccy/noname/releases/latest';
    var github_site = 'libccy/noname';
    var github_latest = 'libccy/noname/releases/latest';
    var githubConf = [{
            key: 'ghproxy.net',
            desc: '[日本 大阪] - 缓存：无（或时间很短）',
            tip: '',
            url: 'https://ghproxy.net/https://raw.githubusercontent.com'
        }, {
            key: 'kgithub',
            desc: '[新加坡] - 该公益加速源由 [KGitHub] 提供 - 缓存：无（或时间很短）',
            tip: '',
            url: 'https://raw.kgithub.com'

        }, {
            key: 'fastgit',
            desc: '[德国] - 该公益加速源由 [FastGit] 提供 - 缓存：无（或时间很短）',
            tip: '',
            url: 'https://raw.fastgit.org',
            latest: 'https://hub.fastgit.org/libccy'
        }, {

            key: 'moeyy',
            desc: '[新加坡、香港、日本等]（CDN 不固定） - 缓存：无（或时间很短）- 10秒内只能请求3次',
            tip: '',
            url: 'https://github.moeyy.xyz/https://raw.githubusercontent.com'

        }, {
            key: 'gitmirror',
            desc: '[美国 Cloudflare CDN] - 该公益加速源由 [GitMirror] 提供 - 缓存：有 - 已屏蔽 .(zip|rar|7z|apk|ipa|exe|msi|m3u|m3u8|mp4|mp3) 等文件类型的加速',
            tip: '仅主程序',
            url: 'https://raw.gitmirror.com'
        }, {
            key: 'staticaly',
            desc: '[日本 东京] - 该公益加速源由 [Statically CDN] 提供 - 缓存：有 - 不支持大小超过 30 MB 的文件',
            tip: '仅主程序',
            url: 'https://cdn.staticaly.com/gh'
        }, {
            key: 'iqiq',
            desc: '[中国 香港] - 该公益加速源由 [iQDNS/iQZone] 提供 - 缓存：无（或时间很短）',
            tip: '',
            url: 'https://raw.iqiq.io'
        }, {
            key: 'njuu',
            desc: '[美国 拉斯维加斯] - 该公益加速源由 [LibraryCloud] 提供 - 缓存：无（或时间很短）',
            tip: '',
            url: 'https://raw.njuu.cf'
            //}, {
            //    key: 'ghproxy.com',
            //    desc: '[日本、韩国、德国等]（CDN 不固定） - 该公益加速源由 [ghproxy] 提供 - 缓存：无（或时间很短）',
            //    tip: '需要登录',
            //    url: 'https://ghproxy.com/https://raw.githubusercontent.com'
            //}, {
            //    key: 'fastly.jsdelivr',
            //    desc: '[日本 东京] - 该公益加速源由 [JSDelivr CDN] 提供 - 缓存：有 - 不支持大小超过 50 MB 的文件 - 不支持版本号格式的分支名（如 v1.2.3）',
            //    tip: '超过大小限制',
            //    url: 'https://fastly.jsdelivr.net/gh'
            //}, {
            //    key: 'gcore.jsdelivr',
            //    desc: '[移动走香港、电信走日本] - 该公益加速源由 [JSDelivr CDN] 提供 - 缓存：有 - 不支持大小超过 50 MB 的文件 - 不支持版本号格式的分支名（如 v1.2.3）',
            //    tip: '超过大小限制',
            //    url: 'https://gcore.jsdelivr.net/gh'
            //}, {
            //    key: 'cdn.jsdelivr',
            //    desc: '[新加坡、香港、日本等]（CDN 不固定） - 该公益加速源由 [ayao] 提供 - 缓存：有',
            //    tip: '超过大小限制',
            //    url: 'https://cdn.jsdelivr.ren/gh'
            //}, {
            //    key: 'jsdelivr.b-cdn',
            //    desc: '[香港、台湾、日本、新加坡等]（CDN 不固定） - 该公益加速源由 [rttwyjz] 提供 - 缓存：有',
            //    tip: '超过大小限制',
            //    url: 'https://jsdelivr.b-cdn.net/gh'

        },
    ];

    var mirrorConf = [{
            key: 'gitHub',
            name: 'GitHub',
            desc: 'Github 原生',
            tip: '需要代理',
            url: 'https://raw.githubusercontent.com/libccy/noname',
            latest: 'https://github.com/libccy/noname/releases/latest'
            //}, {
            //    key: 'gitLab',
            //    name: 'GitLab',
            //    desc: '需要登录',
            //    tip: '',
            //    url: 'https://gitlab.com/isgs/noname/raw/'
            //}, {
            //    key: 'coding',
            //    name: 'Coding',
            //    desc: '苏婆config镜像网址',
            //    tip: '需要登录',
            //    url: 'https://nakamurayuri.coding.net/p/noname/d/noname/git/raw'
            //}, {
            //   key: 'xuanwu',
            //   name: '玄武镜像',
            //   desc: '星城玄武镜像网址',
            //   tip: '需要登录',
            //   url: 'https://kuangthree.coding.net/p/nonamexwjh/d/nonamexwjh/git/raw'
        },
    ];
    var initGithubConf = function (site, lastest) {
        return githubConf.map(function (obj) {
            return {
                key: obj.key,
                name: obj.name || obj.key,
                desc: obj.desc,
                tip: obj.tip,
                url: obj.url + '/' + site,
                latest: obj.latest ? obj.latest + '/' + lastest : undefined,
            };
        });
    };
    var initSrcConf = function () {
        return initGithubConf(github_site, github_latest).concat(mirrorConf.slice(0));
    };

    var srcConf = initSrcConf();

    localStorage.setItem('noname_github', JSON.stringify(srcConf));

    var curSrcIdx = 0;
    if (localStorage.getItem('noname_inited'))
        return;
    var app = {
        initialize: function () {
            this.bindEvents();
        },
        bindEvents: function () {
            if (window.require && window.__dirname) {
                this.onDeviceReady();
            } else {
                var script = document.createElement('script');
                script.src = 'cordova.js';
                document.head.appendChild(script);
                document.addEventListener('deviceready', this.onDeviceReady, false);
            }
        },
        onDeviceReady: function () {

            var site = srcConf[curSrcIdx].url + '/master/';

            var button,
            changesite,
            changesitelist,
            help,
            version,
            versionnode;

            var req = function (url, onload, onerror, target) {
                var http = require('https');
                var opts = require('url').parse(encodeURI(url));
                opts.headers = {
                    'User-Agent': 'AppleWebkit'
                };
                opts.rejectUnauthorized = false;

                var timeout_wrapper = function (req) {
                    return function () {
                        retry++;
                        console.log('请求超时:' + opts.href);
                        req.abort();

                        if (retry < timeOutRetry) {
                            initReq();
                        } else {
                            console.log('达到超时最大次数');
                            onerror('达到超时最大次数');
                        }
                    }
                }
                var timeOutSet = 10 * 1000;
                var timeOutRetry = 3;
                var retry = 0;

                var initReq = function () {
                    var request = http.get(opts, function (response) {
                            clearTimeout(timeout);
                            console.log('[' + response.statusMessage + ']' + opts.href);
                            if (response.statusCode === 200) {
                                retry = 0;

                                let data = '';
                                //数据正在接收中...
                                response.on('data', (chunk) => {
                                    data += chunk;
                                });
                                //数据接收完成
                                response.on('end', () => {
                                    try {
                                        eval(data);

                                        if (target && !window[target] || !data) {
                                            throw ('err');
                                        }
                                    } catch (e) {
                                        onerror();
                                        return;
                                    }
                                    onload();
                                    if (target) {
                                        delete window[target];
                                    }

                                });

                            } else if (response.statusCode === 429) {
                                console.warn(`429 ${url}`);
                                timeout = setTimeout(fn, timeOutSet);
                            } else {
                                //fs.unlink(dest);
                                onerror();
                            }
                        });
                    request.on('error', function (e) {
                        console.log(e);
                    });
                    var fn = timeout_wrapper(request);
                    var timeout = setTimeout(fn, timeOutSet);
                };
                initReq();
            }

            var _req = function (url, onload, onerror, target) {
                var sScriptURL = url;
                var oReq = new XMLHttpRequest({
                        rejectUnauthorized: false
                    });
                if (onload)
                    oReq.addEventListener("load", function () {
                        if (this.status === 429) {
                            console.warn(`429 ${url}`);
                            setTimeout(() => {
                                req(url, onload, onerror, target)
                            }, 1000);
                        } else {
                            try {
                                eval(this.responseText);
                                if (target && !window[target]) {
                                    throw ('err');
                                }
                            } catch (e) {
                                onerror();
                                return;
                            }
                            onload();
                            if (target) {
                                delete window[target];
                            }
                        }
                    });
                if (onerror) {
                    oReq.addEventListener("error", onerror);
                    oReq.addEventListener("timeout", onerror);
                }

                oReq.open("GET", sScriptURL);
                //oReq.overrideMimeType("text/plain");
                //oReq.withCredentials = false;
                //oReq.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                try {
                    oReq.send();
                } catch (e) {
                    if (onerror)
                        onerror();
                }

            }

            //req = _req;

            var loading = false;

            var checkConnection = function () {
                loading = true;
                button.innerHTML = '正在连接';
                button.classList.add('disabled');
                versionnode.innerHTML = '';
                req(site + 'game/update.js', function () {
                    loading = false;
                    button.classList.remove('disabled');
                    button.innerHTML = '下载无名杀';
                    version = window.noname_update.version;
                    versionnode.innerHTML = 'v' + version;
                }, function () {
                    loading = false;
                    button.classList.add('disabled');
                    button.innerHTML = '连接失败';
                }, 'noname_update');
            };

            var dir;
            var ua = navigator.userAgent.toLowerCase();
            if (ua.indexOf('android') != -1) {
                dir = cordova.file.externalApplicationStorageDirectory;
            } else if (ua.indexOf('iphone') != -1 || ua.indexOf('ipad') != -1) {
                dir = cordova.file.documentsDirectory;
            }

            var update = function () {
                loading = true;
                button.innerHTML = '正在连接';
                button.classList.add('disabled');
                versionnode.innerHTML = '';
                req(site + 'game/source.js', function () {
                    loading = false;
                    button.remove();
                    changesite.remove();
                    help.remove();
                    versionnode.remove();

                    var prompt = document.createElement('div');
                    prompt.style.height = '40px';
                    prompt.style.top = 'calc(50% - 40px)';
                    prompt.style.lineHeight = '40px';
                    prompt.innerHTML = '正在下载游戏文件';
                    document.body.appendChild(prompt);

                    var progress = document.createElement('div');
                    progress.style.top = 'calc(50% + 20px)';
                    progress.style.fontSize = '20px';
                    progress.innerHTML = '0/0';
                    document.body.appendChild(progress);

                    var updates = window.noname_source_list;
                    delete window.noname_source_list;

                    updates.push('index.html');
                    var n1 = 0;
                    var n2 = updates.length;
                    progress.innerHTML = n1 + '/' + n2;
                    var finish = function () {
                        prompt.innerHTML = '游戏文件下载完毕';
                        progress.innerHTML = n1 + '/' + n2;
                        if (window.FileTransfer) {
                            localStorage.setItem('noname_inited', dir);
                        } else {
                            localStorage.setItem('noname_inited', 'nodejs');
                        }
                        setTimeout(function () {
                            window.location.reload();
                        }, 1000);
                    }
                    var downloadFile;
                    if (window.FileTransfer) {
                        downloadFile = function (url, folder, onsuccess, onerror) {
                            var fileTransfer = new FileTransfer();
                            var _url = site + url;
                            var _folder = dir + folder;
                            fileTransfer.download(encodeURI(_url), _folder, onsuccess, function (res) {
                                if (res.body == 'Too Many Requests') {
                                    console.warn(`429 ${url}`);
                                    setTimeout(function () {
                                        progress.innerHTML = `429 ${url}`;
                                        downloadFile(url, folder, onsuccess, onerror);
                                    }, 1000);
                                } else {
                                    onerror();
                                }
                            });
                        };
                    } else {
                        var fs = require('fs');
                        var http = require('https');
                        var path = require('path');
                        downloadFile = function (url, folder, onsuccess, onerror) {
                            url = site + url;
                            var dir = folder.split('/');
                            var str = '';
                            var download = function () {
                                var opts = require('url').parse(encodeURI(url));
                                opts.headers = {
                                    'User-Agent': 'AppleWebkit'
                                };
                                opts.rejectUnauthorized = false;

                                var timeout_wrapper = function (req) {
                                    return function () {
                                        retry++;
                                        console.log('请求超时:' + opts.href);
                                        req.abort();

                                        if (retry < timeOutRetry) {
                                            initReq();
                                        } else {
                                            console.log('达到超时最大次数');
                                            onerror('达到超时最大次数');
                                        }
                                    }
                                }
                                var timeOutSet = 30 * 1000;
                                var timeOutRetry = 3;
                                var retry = 0;

                                var initReq = function () {
                                    var dest = __dirname + '/' + folder;
                                    var file;
                                    try {

                                        file = fs.createWriteStream(dest);
                                    } catch (e) {
                                        console.log(e);
                                        onerror();
                                    }

                                    var request = http.get(opts, function (response) {
                                            clearTimeout(timeout);
                                            console.log('[' + response.statusMessage + ']' + opts.href);
                                            if (response.statusCode === 200) {
                                                retry = 0;
                                                var stream = response.pipe(file);
                                                stream.on('finish', function () {
                                                    stream.close(function () {
                                                        if (onsuccess)
                                                            onsuccess();
                                                    });
                                                });
                                                stream.on('error', function () {
                                                    //fs.unlink(dest);
                                                    if (onerror)
                                                        onerror();
                                                });
                                            } else if (response.statusCode === 429) {
                                                console.warn(`429 ${url}`);
                                                timeout = setTimeout(fn, timeOutSet);
                                            } else {
                                                //fs.unlink(dest);
                                                onerror();
                                            }
                                        });
                                    request.on('error', function (e) {
                                        console.log(e);
                                    });
                                    var fn = timeout_wrapper(request);
                                    var timeout = setTimeout(fn, timeOutSet);
                                };
                                initReq();

                            }
                            var access = function () {
                                if (dir.length <= 1) {
                                    download();
                                } else {
                                    str += '/' + dir.shift();
                                    fs.access(path.join(__dirname, str), function (e) {
                                        if (e) {
                                            try {
                                                fs.mkdir(path.join(__dirname, str), access);
                                            } catch (e) {
                                                console.log(e);
                                                onerror();
                                            }
                                        } else {
                                            access();
                                        }
                                    });
                                }
                            }
                            access();
                        };
                    }
                    var processLimit = 100;

                    var multiDownload = function (list, onsuccess, onerror, onfinish) {
                        var success = 0;
                        var successList = [];
                        var orgin = list.slice(0);
                        var len = list.length;
                        list = list.slice(0);
                        var download = function () {
                            if (list.length) {
                                var current = list.shift();
                                downloadFile(current, workPath + current, function () {
                                    successList.push(current);
                                    success++;
                                    if (onsuccess)
                                        onsuccess();
                                    download();
                                }, function () {
                                    if (onerror)
                                        onerror();
                                    //download();
                                });
                            } else {
                                function complement(a, b) {
                                    return a.filter(value => !b.includes(value)).concat(b.filter(value => !a.includes(value)));
                                }
                                var left = complement(orgin, successList);
                                if (left.length < 10)
                                    console.log('等待下载:', left);
                                if (len === success) {
                                    if (onfinish)
                                        onfinish();
                                }
                            }
                        }
                        for (var i = 0; i < Math.min(processLimit, len); i++) {
                            download();
                        }
                    };
                    var _multiDownload = function (list, onsuccess, onerror, onfinish) {
                        list = list.slice(0);
                        var download = function () {
                            if (list.length) {
                                var current = list.shift();
                                downloadFile(current, workPath + current, function () {
                                    if (onsuccess)
                                        onsuccess();
                                    download();
                                }, function () {
                                    if (onerror)
                                        onerror();
                                    //download();
                                });
                            } else {
                                if (onfinish)
                                    onfinish();
                            }
                        }
                        download();
                    };

                    multiDownload(updates, function () {
                        n1++;
                        progress.innerHTML = n1 + '/' + n2;
                    }, function (msg) {
                        prompt.innerHTML = '下载失败';
                        if (msg)
                            progress.innerHTML = msg;
                        button.innerHTML = '重启';
                        document.body.appendChild(button);
                        button.style.top = 'calc(50% + 60px)';
                        button.classList.remove('disabled');
                        button.onclick = function () {
                            window.location.reload();
                        };
                    }, function () {
                        setTimeout(finish, 1000);
                    });
                }, function () {
                    loading = false;
                    button.classList.add('disabled');
                    button.innerHTML = '连接失败';
                }, 'noname_source_list');
            }

            var link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'app/index.css';
            document.head.appendChild(link);

            button = document.createElement('div');
            button.id = 'button';

            var touchstart = function (e) {
                if (this.classList.contains('disabled'))
                    return;
                this.style.transform = 'scale(0.98)';
            };
            var touchend = function () {
                this.style.transform = '';
            };
            button.ontouchstart = touchstart;
            button.ontouchend = touchend;
            button.onmousedown = touchstart;
            button.onmouseup = touchend;
            button.onmouseleave = touchend;
            button.onclick = function () {
                if (button.classList.contains('disabled'))
                    return;
                update();
            };
            document.body.appendChild(button);
            document.ontouchmove = function (e) {
                e.preventDefault();
            };

            changesite = document.createElement('div');
            changesite.id = 'changesite';
            changesite.innerHTML = '下载源: GitHub';
            document.body.appendChild(changesite);

            versionnode = document.createElement('div');
            versionnode.id = 'version';
            help = document.createElement('div');
            help.id = 'help';
            help.innerHTML = '无法在线下载？';
            var helpnode = document.createElement('div');
            helpnode.id = 'noname_init_help';
            var helpnodetext = document.createElement('div');
            helpnode.appendChild(helpnodetext);
            help.onclick = function () {
                document.body.appendChild(helpnode);
            }

            var back = document.createElement('div');
            back.id = 'back';
            back.innerHTML = '返回';
            back.onclick = function () {
                helpnode.remove();
            };
            helpnode.appendChild(back);
            document.body.appendChild(help);
            document.body.appendChild(versionnode);
            checkConnection();

            if (window.FileTransfer) {
                window.tempSetNoname = dir;
            } else {
                window.tempSetNoname = 'nodejs';
            }

            changesitelist = document.createElement('div');
            changesitelist.id = 'changesitelist';
            document.body.appendChild(changesitelist);

            var initChangeList = function () {
                srcConf.forEach(function (item, idx) {
                    var itemNode = document.createElement('div');
                    var tip = item.tip;
                    var desc = item.desc;
                    var tipStr = tip ? '(' + tip + ')' : '';
                    itemNode.id = 'size' + idx;
                    itemNode.innerHTML = item.name + tipStr;
                    itemNode.setAttribute('title', desc);
                    itemNode.onclick = function () {
                        if (loading) {
                            alert('请等待其他操作完毕再切换下载源');
                        } else {
                            curSrcIdx = this.id.slice(4);
                            if (curSrcIdx >= srcConf.length)
                                curSrcIdx = 0;
                            site = srcConf[curSrcIdx].url + '/master/';
                            initChange();
                            checkConnection();
                        }
                        changesitelist.style.display = 'none';
                    };
                    changesitelist.appendChild(itemNode);
                });
                changesitelist.style.display = 'none';
            };
            initChangeList();
            var initChange = function () {
                var tip = srcConf[curSrcIdx].tip;
                var name = srcConf[curSrcIdx].name;
                var desc = srcConf[curSrcIdx].desc;
                var latest = srcConf[curSrcIdx].latest || defaultLatest;
                var tipStr = tip ? '(' + tip + ')' : '';
                changesite.innerHTML = '下载源: ' + name + tipStr;
                changesite.setAttribute('title', desc);

                helpnodetext.innerHTML =
                    '<div><ol><li>访问<a href="' + latest + '">' + latest + '</a>，下载zip文件' +
                    '<li>解压后将noname-master目录内的所有文件放入对应文件夹：<br>windows/linux：resources/app<br>mac：（右键显示包内容）contents/resources/app<br>android：android/data/com.widget.noname<br>ios：documents（itunes—应用—文件共享）' +
                    '<li>完成上述步骤后，<a href="javascript:localStorage.setItem(\'noname_inited\',window.tempSetNoname);window.location.reload()">点击此处</a></div>';

            };
            initChange();
            var nextCur = function () {
                if (loading) {
                    alert('请等待其他操作完毕再切换下载源');
                } else {
                    curSrcIdx++;
                    if (curSrcIdx === srcConf.length)
                        curSrcIdx = 0;
                    site = srcConf[curSrcIdx].url + '/master/';
                    initChange();
                    checkConnection();
                }
            };
            changesite.onclick = function () {
                if (changesitelist.style.display === 'block') {
                    changesitelist.style.display = 'none';
                } else {
                    changesitelist.style.display = 'block';
                }
            };
        }
    };

    setTimeout(function () {
        app.initialize();
    }, 100);
}
    ())
