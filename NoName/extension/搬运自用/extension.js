game.import("extension", function (lib, game, ui, get, ai, _status) {
    return {
        name: "搬运自用",
        content: function (config, pack) {
            // 自动一键导入重启
            if (config.byzy_zdyjdrcq) {
                game.yjdrcqgn(true);
            }

            // 扩展导入完成后，再次重启时，检测扩展文件夹名是否正确，新增为防出现bug请修正的提示
            for (var i in lib.extensionPack) {
                if (!lib.config.extensions.contains(i)) {
                    alert("检测到扩展文件夹名不正确！\r将会引起很多跟路径相关的bug，而且这样导入的扩展无法在游戏内删除。\n\r为防出现bug，请修正扩展文件夹名为:\n游戏目录/extension/" + i);
                }
            }

        },
        precontent: function () {
            // 下面是一键导入的代码（搬运自特效测试扩展，删除原版导入助手的功能，已征得永远的萌新的修改许可）
            // 原理：根据extension目录下的扩展文件夹名写入游戏设置，完成后自动重启
            game.yjdrcqgn = function (bool) {
                var arr;
                game.getFileList("extension", function (fold, file) {
                    arr = Array.from(fold);
                    var f = function (array, ck) {
                        if (!Array.isArray(array) || array.length == 0)
                            return;
                        var fail = [],
                        rean = false;
                        while (array.length) {
                            var obj = array.shift();
							if (["coin", "boss", "wuxing", "cardpile"].contains(obj))
                                continue;
                            // 新增当扩展文件夹内缺少extension.js时报错提示
                            if (!lib.device) {
                                var workPath = localStorage.getItem('noname_workpath');
                                if (!lib.node.fs.existsSync(__dirname + '/extension/' + obj + '/' + 'extension.js')) {
                                    alert("本层文件夹内缺少 extension.js 文件:\n游戏目录/extension/" + obj + "\n\r请检查扩展文件夹的文件结构是否正确！");
                                    continue;
                                }
                            } else {
                                window.resolveLocalFileSystemURL(lib.assetURL + 'extension/' + obj + '/' + 'extension.js', function (entry) {
                                    // alert('导入成功');
                                }, function () {
                                    alert("本层文件夹内缺少 extension.js 文件:\n游戏目录/extension/" + obj + "\n\r请检查扩展文件夹的文件结构是否正确！");
                                });
                            }
                      
                            if (ck.indexOf(obj) == -1) {
                                fail.add(obj);
                                continue;
                            }
                            if (lib.config.extensions.indexOf(obj) > -1)
                                continue;
                            rean = true;
                            lib.config.extensions.add(obj);
                            game.saveConfig('extension_' + obj + '_enable', true);
                        }
                        if (fail.length == 0 && rean) {
                            game.saveConfig('extensions', lib.config.extensions);
                            if (bool == true)
                                game.reload();
                        }
                    };
                    f(arr, Array.from(fold));
                });
            };

        },
        config: {
            byzy_sysm: {
                name: '<div class="hth_menu">▶更新说明（点击后展开）</div>',
                clear: true,
                onclick: function () {
                    if (this.hth_more == undefined) {
                        var more = ui.create.div('.hth_more',
                                '<div style="border: 1px solid white;text-align:left"><div style="color:rgb(210,210,000); font-size:12px; line-height:14px; text-shadow: 0 0 2px black">' +
                                '1. 本扩展搬运（并魔改）一些扩展的优秀功能自用，在征得原作者同意后发布' +
                                '<br>' +
                                '<br>※ 一键导入重启功能<br>- 原作者为永远的萌新，搬运自特效测试扩展，已征得修改许可<br><span style=\"color:red\">- 【超级好用，强烈推荐！！！】</span><br>- 删除原版导入助手的功能（更多导入方法可下载特效测试扩展体验）<br>- 新增自动一键导入重启功能，默认设为自动开启<br>- 新增当扩展文件夹内缺少extension.js时报错提示<br>- 扩展导入完成后，再次重启时，检测（开启的扩展的）扩展文件夹名是否正确，新增为防出现bug请修正的提示；玩家需按提示逐个修正扩展文件夹名，都修改完成后重启才不会出现弹窗提示<br>- 教程如下，请点击展开下方【一键导入重启】查看↓' +
                                '<br>' +
                                '<br>2. 后续更新计划：<br>完善一键导入重启功能：检测到扩展文件夹名不正确时，直接修正<br>其他优秀功能搬运（并魔改）' +
                                '<br>');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.hth_more = more;
                        this.innerHTML = '<div class="hth_menu">▼更新说明（点击后折叠）</div>';
                    } else {
                        this.parentNode.removeChild(this.hth_more);
                        delete this.hth_more;
                        this.innerHTML = '<div class="hth_menu">▶更新说明（点击后展开）</div>';
                    };
                },
            },

            byzy_yjdrcqjc: {
                name: '<div class="hth_menu">▶一键导入重启（点击后展开）</div>',
                clear: true,
                onclick: function () {
                    if (this.hth_more == undefined) {
                        var more = ui.create.div('.hth_more',
                                '<div style="border: 1px solid white;text-align:left"><div style="color:rgb(210,210,000); font-size:12px; line-height:14px; text-shadow: 0 0 2px black">' +
                                '★ 前言<br>一句话概括无名杀游戏教程：安装客户端，并把代码和素材文件（含扩展）正确放到<span style=\"color:#0086FF\">游戏目录</span>里，开始游戏<br>其中，学会扩展导入更是游戏入门的基本功，在众多扩展导入方法（如万能导入、替身包导入法等）中，自动一键导入重启，是无名杀最好用的扩展导入方法，无需繁琐的步骤，玩家只需将（一至多个）扩展包解压成导入后的样子然后重启即可（扩展会自动完成导入重启）' +
                                '<br>' +
                                '<br>★ 原理<br>根据extension目录下的扩展文件夹名写入游戏设置，完成后自动重启' +
                                '<br>' +
                                '<br>★ 教程<br>一次可导入一至多个已放入 <span style=\"color:#0086FF\">游戏目录</span>/扩展目录 里的扩展，具体步骤为：' +
                                '<br>① 在文件管理器中操作：在 <span style=\"color:#0086FF\">游戏目录</span>/extension内 新建一至多个XXXX文件夹（即要安装的一至多个扩展XXXX，可前往extension.js中查看，通常在前几行，name: "XXXX"，或参考替身包的命名）；将要安装的扩展压缩包解压后的所有文件移入对应的XXXX文件夹内（本层文件夹内要包含extension.js）' +
                                '<br>② 在无名杀中操作：若开启自动一键导入重启开关，重启后，自动完成一至多个扩展的安装；若未开启自动一键导入重启开关，则需手动点击下方一键导入重启功能链接按钮，一键导入自动重启后，完成一至多个扩展的安装' +
                                '<br>' +
                                '<br>常用 <span style=\"color:#0086FF\">游戏目录</span> 有：' +
                                '<br>① 手机端' +
                                '<br>- 安卓玄武版<br>/Android/data/com.noname.xuanwu' +
                                '<br>- 无名杀诗笺版<br>/Android/data/com.noname.shijian' +
                                '<br>- 无名杀增强版（可选）<br>私有目录<br>/Android/data/com.widget.noname.cola/files/<br>XXXXXXXXXXXXXX<br>SD卡Document目录<br>/Documents/noname/XXXXXXXXXXXXXX' +
                                '<br>- 由理版<br>/Android/data/yuri.nakamura.noname_android' +
                                '<br>② 电脑端' +
                                '<br>- 无名杀Windows64位（防白屏版，感谢cocominimum）、由理版<br>/noname/resources/app' +
                                '<br>- 无名杀win64位安装程序（诗笺打包）<br>/无名杀/resources/app');
                        this.parentNode.insertBefore(more, this.nextSibling);
                        this.hth_more = more;
                        this.innerHTML = '<div class="hth_menu">▼一键导入重启（点击后折叠）</div>';
                    } else {
                        this.parentNode.removeChild(this.hth_more);
                        delete this.hth_more;
                        this.innerHTML = '<div class="hth_menu">▶一键导入重启（点击后展开）</div>';
                    };
                },
            },

            byzy_zdyjdrcq: {
                name: "自动一键导入重启",
                intro: "开启后每次重启自动执行一键导入重启功能：只需将一至多个解压好的扩展文件夹（注意检查文件夹名和内部文件结构是否正确）放入 <span style=\"color:#0086FF\">游戏目录</span>/extension/ 内，重启后即可自动完成扩展导入。",
                init: true,
            },

            "byzy_yjdrcqgn": {
                "name": "<span style='text-decoration: underline;'>一键导入重启功能</span>",
                "clear": true,
                onclick: function () {
                    game.yjdrcqgn(true);
                },
            },

        },
        help: {},
        package: {
            character: {
                character: {},
                translate: {},
            },
            card: {
                card: {},
                translate: {},
                list: [],
            },
            skill: {
                skill: {},
                translate: {},
            },
            intro: "",
            author: "无名玩家<br>搬运：<span class='bluetext'>棘手怀念摧毁</span>",
            diskURL: "",
            forumURL: "",
            version: "1.02",
        },
        files: {
            "character": [],
            "card": [],
            "skill": []
        }
    }
})
