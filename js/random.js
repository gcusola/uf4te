var posts=["posts/zip伪加密.html","posts/明文攻击.html","posts/gif图片的拆分和拼图.html","posts/流量分析.html","posts/内存取证.html","posts/【catctf】catcatcat.html","posts/隐写术.html","posts/压缩包密码爆破.html","posts/【catctf】catchcat.html","posts/【catctf】miao.html","posts/【攻防世界】glance-50.html","posts/【攻防世界】hit-the-core.html","posts/【攻防世界】banmabanma.html","posts/杂项中加密和编码方式的特点.html","posts/【攻防世界】misc-pic-again.html","posts/【攻防世界】适合作为桌面.html","posts/android逆向与动态调试.html","posts/js逆向.html","posts/python逆向.html","posts/smc代码自修改.html","posts/二进制文件相似性.html","posts/ida中加密算法特征与解密.html","posts/大端序和小端序.html","posts/常见脱壳方法.html","posts/花指令.html","posts/【bjdctf-2nd】r2t4.html","posts/【asis-ctf-2016】b00ks.html","posts/【buuctf】hitcontraining-uaf.html","posts/【buuctf】linkctf-2018-7-babypie1.html","posts/【ciscn-2023】烧烤摊儿.html","posts/【ctfwiki】rop栈溢出漏洞合集.html","posts/【gdouctf-2023】random.html","posts/【gdouctf-2023】easy-pwn.html","posts/【gdouctf-2023】真男人下120层.html","posts/【ciscn-2023】funcanary.html","posts/【hdctf-2023】keep-on.html","posts/【iscc-2023】login.html","posts/【iscc-2023】三个愿望.html","posts/【gdouctf-2023】shellcode.html","posts/【plaidctf-2015】plaiddb.html","posts/【star-ctf-2018】babystack.html","posts/【wustctf-2020】name-your-cat.html","posts/【华为杯-2023】ez-ssp.html","posts/【攻防世界】cgpwn2.html","posts/【攻防世界】cgfsb.html","posts/【你想有多pwn】fmt-test2.html","posts/【攻防世界】guess-num.html","posts/【攻防世界】int-overflow.html","posts/【攻防世界】hello-pwn.html","posts/【攻防世界】level0.html","posts/【攻防世界】level2.html","posts/【攻防世界】level3.html","posts/【攻防世界】repeater.html","posts/【攻防世界】string.html","posts/【攻防世界】when-did-you-born.html","posts/【蓝桥杯-2024】fd.html","posts/bypass安全机制.html","posts/linux下的保护机制.html","posts/plt表和got表.html","posts/pwn中64位程序的堆栈平衡.html","posts/pwn中程序的libc问题.html","posts/函数调用栈.html","posts/pwntools与exp技巧.html","posts/堆基础.html","posts/栈溢出漏洞与rop.html","posts/栈迁移.html","posts/格式化字符串漏洞与利用.html","posts/沙箱绕过与orw.html","posts/堆相关漏洞与利用.html","posts/【bjdctf】easy.html","posts/【buuctf】simplerev.html","posts/【ciscn-2023】babyre.html","posts/cnvd-2013-11625复现.html","posts/【gdouctf-2023】tea.html","posts/【bjdctf】encode.html","posts/【gdouctf-2023】doublegame.html","posts/【gwctf】pyre.html","posts/【gdouctf-2023】l-s.html","posts/【hgame】easyasm.html","posts/【iscc-2023】convert.html","posts/【iscc-2023】justdoit.html","posts/【iscc-2023】pull-the-wool-over-people-s-eyes.html","posts/【iscc-2023】变形记.html","posts/【nisactf】ezpython.html","posts/【nisactf】sign-ezc.html","posts/【nisactf】string.html","posts/【nssctf】jump-by-jump.html","posts/【nssctf】jump-by-jump-revenge.html","posts/【nssctf】wordy.html","posts/【swpuctf】astjs.html","posts/【swpuctf】老鼠走迷宫.html","posts/【安洵杯-2023】babythread.html","posts/【安洵杯-2023】ez-cpp.html","posts/【安洵杯-2023】ezr3.html","posts/【攻防世界】babyre.html","posts/【攻防世界】babyxor.html","posts/【攻防世界】reversing-x64elf-100.html","posts/【攻防世界】replace.html","posts/【攻防世界】bad-python.html","posts/【攻防世界】crypt.html","posts/【攻防世界】ereere.html","posts/【攻防世界】gametime.html","posts/【攻防世界】logmein.html","posts/【攻防世界】simple-check-100.html","posts/【楚慧杯-2023】level-one.html","posts/elf文件.html","posts/【楚慧杯-2023】level-up.html","posts/gcc编译过程.html","posts/ctf逆向中的脚本.html","posts/ctf杂项中的脚本.html","posts/ubuntu虚拟机网络图标消失.html","posts/vm虚拟机显示-“未能开启xxx-vmx”.html","posts/从物理机拖到linux虚拟机中的文件消失了？.html","posts/记录一些vm虚拟机磁盘压缩回收与拆分合并.html","posts/运行程序显示-“由于找不到-xxx-dll，无法继续执行代码”.html","posts/多架构与交叉编译.html","posts/linux基本操作命令.html","posts/iot环境搭建与固件分析.html","posts/iot固件仿真与gdbserver远程调试.html","posts/ollydbg的基础和使用.html","posts/gdb的基础和使用.html","posts/ida中的一些数据类型.html","posts/ida中的一些c语言函数.html","posts/ida新版与旧版的api变更.html","posts/ubuntu16-04虚拟机环境搭建.html","posts/ida的基础和使用.html","posts/cpu与寄存器.html","posts/汇编基础知识.html","posts/内存与寄存器.html","posts/ubuntu22-04虚拟机环境搭建.html","posts/汇编程序设计.html","posts/汇编指令系统.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}