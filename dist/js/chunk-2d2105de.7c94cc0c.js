(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2105de"],{b81c:function(a,e,n){"use strict";n.r(e);var t=function(){var a=this,e=a.$createElement;a._self._c;return a._m(0)},s=[function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("section",[n("p",[a._v("Berdasarkan XCode "),n("a",{attrs:{href:"https://developer.apple.com/documentation/xcode-release-notes/xcode-12_2-beta-release-notes"}},[a._v("Release notes")]),a._v(" kali ini mengatakan.")]),n("blockquote",[n("p",[a._v("The XCode 12.2 beta 2 release supports on-device debugging for iOS 9 and later, tvOS 9 and later, and watchOS 2 and later. Xcode 12.2 beta 2 requires a Mac with Apple silicon running macOS Big Sur 11 or later, or an Intel-based Mac running macOS Catalina 10.15.4 or later.")])]),n("p",[a._v("Saya tidak yakin apakah ini artinya dukungan XCode 12 Beta untuk iOS 8 "),n("strong",[a._v("sepenuhnya")]),a._v(" akan dihentikan? Tetapi sepertinya hal ini memang akan terjadi. Jika pada "),n("em",[a._v("project")]),a._v(" yang Anda kembangkan menggunakan CococaPods dan editor XCode yang Anda gunakan adalah versi 12 Beta serta menemukan "),n("em",[a._v("error")]),a._v(" yang sama.")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[a._v("The iOS Simulator deployment target "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v("'IPHONEOS_DEPLOYMENT_TARGET'")]),a._v(" is "),n("span",{pre:!0,attrs:{class:"hljs-built_in"}},[a._v("set")]),a._v(" to 8.0, but the range of supported deployment target versions is 9.0 to 14.0.99.\n")])]),n("p",[n("em",[a._v("Error warning")]),a._v(" seperti ini terlihat, dan ini terjadi karena dukungan untuk iOS 8 telah dicabut pada XCode 12 Beta, dan pada "),n("em",[a._v("project")]),a._v(" yang digunakan masih menggunakan "),n("strong",[a._v("Pod")]),a._v(" dengan "),n("em",[a._v("minimum deployment target")]),a._v("nya adalah iOS 8.")]),n("p",[a._v("Berikut adalah link "),n("a",{attrs:{href:"https://github.com/CocoaPods/CocoaPods/issues/7314"}},[a._v("Github Issue")]),n("em",[a._v("nya")]),a._v(". CocoaPods telah membahas sedikit tentang "),n("em",[a._v("issue")]),a._v(" ini dan masih "),n("em",[a._v("open issue")]),a._v(" di "),n("a",{attrs:{href:"https://github.com/CocoaPods/CocoaPods/issues/9884"}},[a._v("CococaPods")]),a._v(".")]),n("p",[a._v("Dan jika perbaikan yang telah Anda lakukan hanya dengan mengubah "),n("em",[a._v("minimum deployment target")]),a._v(" ke yang lebih tinggi dari iOS 8, maka "),n("em",[a._v("error")]),a._v(" ini masih akan tetap muncul.")]),n("p",[a._v("Menunggu "),n("em",[a._v("bugs")]),a._v(" ini diperbaiki oleh CocoaPods, Anda dapat menambahkan kode berikut ke "),n("code",{pre:!0},[a._v("Podfile")]),a._v(" sebagai salah satu solusinya.")]),n("pre",{pre:!0},[n("code",{pre:!0,attrs:{"v-pre":"",class:"language-swift"}},[a._v("post_install "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("do")]),a._v(" |installer|\n   installer.pods_project.targets.each "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("do")]),a._v(" |t|\n       t.build_configurations.each "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("do")]),a._v(" |bc|\n           "),n("span",{pre:!0,attrs:{class:"hljs-keyword"}},[a._v("if")]),a._v(" bc.build_settings["),n("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"IPHONEOS_DEPLOYMENT_TARGET"')]),a._v("] == "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"8.0"')]),a._v("\n             bc.build_settings["),n("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"IPHONEOS_DEPLOYMENT_TARGET"')]),a._v("] = "),n("span",{pre:!0,attrs:{class:"hljs-string"}},[a._v('"9.0"')]),a._v("\n           end\n       end\n   end\nend\n")])]),n("p",[a._v("Ini akan mengubah semua "),n("em",[a._v("target setting")]),a._v(" yang telah diterapkan di semua "),n("strong",[a._v("Pod")]),a._v(" dalam proyek Anda ke "),n("em",[a._v("deployment target")]),a._v(" versi 9. Tempatkan baris kode tersebut setelah target untuk "),n("em",[a._v("project")]),a._v(" yang Anda gunakan.")])])}],r=n("2877"),i={},o=Object(r["a"])(i,t,s,!1,null,null,null);e["default"]=o.exports}}]);