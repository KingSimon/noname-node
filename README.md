※【无名杀】完全免费

※如非法倒卖用于牟利将承担法律责任 开发团队将追究到底

※主目录的unins000.exe是卸载程序

※内置【拖拽读取】扩展，可以把没有设置密码的zip，7z或单个extension.js文件导入到无名杀中，只需要把文件拖拽到游戏窗口内即可导入

※内置【在线更新】扩展，扩展开启时，游戏更新几乎0崩溃

※游戏目录的Home文件夹请勿删除！！！里面存放的是此应用的缓存文件！！！

※如果你有【完整包】，那么请安装后先打开一次游戏再用【完整包】覆盖

※本应用程序从v1.43开始降低对【假装无敌】和【概念武将】的限制，不再强制关闭而是进行安全性提醒

※若不看上面的提示，询问的内容将不予解答

v1.6更新提示：
1.【应用配置】扩展v1.4更新，“扩展文件改变重启”功能排除【武将界面】扩展

2.【在线更新】扩展v1.51更新，优化文本内容

3.【拖拽读取】扩展v2.0更新，去除导入7z功能，添加导入带密码的zip功能。并且可以识别简单的文件夹嵌套的压缩包

注:要把【拖拽读取】扩展放置到其他的电脑版无名杀使用，请在应用根目录的main.js中
的BrowserWindow构造函数中的webPreferences属性添加: nodeIntegrationInWorker: true

4.本版本开始使用chromium 112版本，将不兼容windows7，8， 8.1操作系统

v1.5更新提示：
1.【应用配置】扩展v1.3更新，新增“报错时显示错误代码”功能

2.【在线更新】扩展v1.48更新，更新内容我忘了

v1.44更新提示：
1.【应用配置】扩展v1.22更新，调整屏幕功能每次启动只调整一次了

2.【在线更新】扩展v1.47更新，屏蔽实时显示每个文件详细下载进度的功能

3.经部分人反馈，安装程序在部分win11电脑上不能运行，所以从此版本开始，我将尝试使用压缩包的方式发布(需要卸载原安装程序，但是数据不会消失)，然后覆盖到相同目录

1. 从v1.44开始停止对【假装无敌】和【概念武将】的限制

v1.43更新提示：
1.【在线更新】扩展v1.46更新，优化大部分功能

2. 优化全屏的部分问题，现在可以用f11退出全屏

3. 本应用程序从v1.43开始降低对【假装无敌】和【概念武将】的限制，不再强制关闭而是进行安全性提醒

4. 修正部分typings代码声明文件

5. 注释掉部分无用代码

v1.42更新提示：
1.【在线更新】扩展v1.3更新，不兼容1.8无名杀（由理兼容版），覆盖游戏内自动检测更新的功能，提供代码声明文件

2.【应用配置】扩展v1.21更新，优化修改window.onerror

3.【拖拽读取】扩展v1.81更新，修复一个导入时的bug

4.修正部分typings代码声明文件，添加cordova-plugin-dialogs.d.ts代码提示


v1.41更新提示：
1.【在线更新】扩展v1.28更新，取消了导入后自动修改更新地址

2.【应用配置】扩展v1.2更新，新增【扩展热更新】和【新扩展写法】功能，修复【修改配置无效】的bug

3.【拖拽读取】扩展v1.78及v1.8更新，修复导入时不显示进度的bug，兼容识别【应用配置】中提供的新扩展框架

4. 修改/增加部分菜单栏内容（不影响游戏）

5. 新增typings文件夹，用于存放无名杀的代码声明文件，若你想写扩展时获得代码提示，请在extension.js的开头添加:

/// <reference path="../../typings/index.d.ts" />

注：新扩展的写法可以参考 extension/应用配置/extension_demo.js ，新写法的扩展目前只能通过【拖拽读取】扩展导入


v1.40更新提示：
1.【在线更新】扩展v1.25更新

2.【应用配置】扩展v1.12更新，优化游戏内的报错弹窗

3.内置无名杀全教程V10.0完整版


v1.39更新提示：
1.暂时屏蔽通过链接下载扩展的功能（nonameSKill:?extensionName=扩展名）

2.从此版本开始，将不兼容扩展【概念武将】和【假装无敌】

3.【拖拽读取】扩展v1.77更新，支持导入.7z格式的压缩包

4.【在线更新】扩展v1.22更新，还原github更新地址，添加github镜像和玄武镜像更新地址，覆盖游戏内原更新方式

5.若你使用的是v1.37的安装包，请更换至v1.381及以上的安装包

注意：v1.381及以上的安装包可能不兼容windows 7，windows 7 用户请尝试v1.36的安装包


v1.381更新提示：
1.撤销上个版本的更新

2.若你使用的是v1.37的安装包，请更换至v1.381的安装包

3.注意：v1.381的安装包不兼容windows 7，window 7 用户请尝试v1.36的安装包

4.内置无名杀全教程V9.9完整版


v1.38更新提示：
1.main.js中对部分代码的顺序进行调整，修复某些代码执行太晚而失效的问题

2.通过【应用配置】扩展修复【制作扩展-选择武将图片】时闪退的问题


v1.37更新提示：
1.修复【应用配置】修改过的alert不会堵塞进程的bug

2.新增 菜单栏-操作 创建快捷方式

3.新增 菜单栏-反馈

4.新增 菜单栏-操作-打开无名杀目录

5.【应用配置】扩展里可以设置是否修改原生alert和confirm了（变得更美观）

6.【拖拽读取】扩展v1.75更新

7.【在线更新】扩展v1.2更新

8.Electron升级至 V16.0.0 （需要重新安装），支持中文控制台，使用remote模块需要改用require('@electron/remote')


v1.36更新提示：
1.【应用配置】扩展将自动导入并保存【拖拽读取】，【在线更新】和【应用配置】三个内置扩展，
修复了某些情况下内置扩展丢失的问题（只要不是打开一次游戏前就拿完整包覆盖）

2.取消第一次进入游戏提示【是否下载图片和字体素材】？（约175MB）

3.可以通过点击输入框-点击菜单栏-操作-emoji选取或window.showEmojiPanel()唤起emoji选择器


v1.35更新提示：
1.修复窗口销毁后按esc报错的问题

完善了免费提示

1.内置【在线更新】扩展V1.18版本

2.内置无名杀全教程V9.8完整版


v1.34更新提示：
1.修复游戏崩溃后初始界面无限重启的bug


v1.33更新提示：
1.修复下载扩展的一处代码错误

2.全屏时隐藏菜单栏（需要用esc退出全屏）

3.内置无名杀全教程v9.7版本


v1.3更新提示：
1.可以通过 菜单栏 -> 操作 -> 检查应用更新 热更新无名杀本体了

2.增加 nonameSkill 协议

可以通过访问 nonameSkill:?extensionName=扩展名 链接直接下载指定扩展

3.如果你有【完整包】，那么请安装后先打开一次游戏再用【完整包】覆盖

4.游戏内可以使用【在线更新】扩展更新游戏，彻底防止更新崩溃

5.修复了游戏崩溃后，不显示初始页面而一直反复弹窗的问题

6.内置无名杀全教程v9.5版本


v1.25更新提示：
1.游戏目录的Home文件夹请勿删除！！！里面存放的是此应用的缓存文件！！！

2.内置无名杀全教程v9.4版本
