var phonetic={keymaps:{k:"ক",0:"০",1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",i:"ি",I:"ই",ii:"ী",II:"ঈ",e:"ে",E:"এ",U:"উ",u:"ু",uu:"ূ",UU:"ঊ",r:"র",WR:"ঋ",a:"া",A:"আ",ao:"অ",Ao:"অ",s:"স",t:"ট",K:"খ",kh:"খ",n:"ন",N:"ণ",T:"ত",Th:"থ",d:"ড",dh:"ঢ",b:"ব",bh:"ভ",v:"ভ",R:"ড়",Rh:"ঢ়",g:"গ",G:"ঘ",gh:"ঘ",h:"হ",NG:"ঞ",j:"জ",J:"ঝ",jh:"ঝ",c:"চ",ch:"ছ",C:"ছ",th:"ঠ",p:"প",f:"ফ",ph:"ফ",D:"দ",Dh:"ধ",z:"য",y:"য়",Ng:"ঙ",ng:"ং",l:"ল",m:"ম",sh:"শ",S:"ষ",O:"ও",ou:"জ",OU:"ঔ",Ou:"ঔ",Oi:"ঐ",OI:"ঐ",tt:"ৎ",H:"ঃ",".":"।","..":".",HH:"্‌",NN:"ঁ",Y:"্য",w:"্ব",W:"ৃ",wr:"ৃ",x:"ক্স",rY:"র‍্য",L:"ল",Z:"য",P:"প",V:"ভ",B:"ব",M:"ম",X:"ক্স",F:"ফ","+":"্","++":"+",o:"ো",oI:"ৈ",oU:"ৌ"},supportIntellisense:true,intellisense:function(e,t){var n="aIiUuoiiouueEiEu";if(n.indexOf(t)!=-1&&n.indexOf(e)!=-1||t==" "&&n.indexOf(e)!=-1){carry=t+e;if(carry=="ii"||carry=="uu")newkeystring=e;else newkeystring=e.toUpperCase();newcarry=t+newkeystring;mods={keystring:newkeystring,carry:newcarry};return mods}return false}}

var probhat={keymaps:{"`":"‍","~":"~",1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০","-":"-","=":"=","!":"!","@":"@","#":"#",$:"৳","%":"%","^":"^","&":"ঞ","*":"ৎ","(":"(",")":")",_:"_","+":"+",q:"দ",Q:"ধ",w:"ূ",W:"ঊ",e:"ী",E:"ঈ",r:"র",R:"ড়",t:"ট",T:"ঠ",y:"এ",Y:"ঐ",u:"ু",U:"উ",i:"ি",I:"ই",o:"ও",O:"ঔ",p:"প",P:"ফ","[":"ে","{":"ৈ","]":"ো","}":"ৌ","\\":"‌","|":"॥",a:"া",A:"অ",s:"স",S:"ষ",d:"ড",D:"ঢ",f:"ত",F:"থ",g:"গ",G:"ঘ",h:"হ",H:"ঃ",j:"জ",J:"ঝ",k:"ক",K:"খ",l:"ল",L:"ং",";":";",":":":",z:"য়",Z:"য",x:"শ",X:"ঢ়",c:"চ",C:"ছ",v:"আ",V:"ঋ",b:"ব",B:"ভ",n:"ন",N:"ণ",m:"ম",M:"ঙ",",":",","<":"ৃ",".":"।","..":"॥",">":"ঁ","/":"্","?":"?"},supportIntellisense:false}

var bijoy={keymaps:{0:"০",1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",a:"ৃ",A:"র্",d:"ি",D:"ী",s:"ু",S:"ূ",f:"া",F:"অ",g:"্",G:"।",h:"ব",H:"ভ",j:"ক",J:"খ",k:"ত",K:"থ",l:"দ",L:"ধ",z:"্র",Z:"্য",x:"ও",X:"ৗ",c:"ে",C:"ৈ",v:"র",V:"ল",b:"ন",B:"ণ",n:"স",N:"ষ",m:"ম",M:"শ",q:"ঙ",Q:"ং",w:"য",W:"য়",e:"ড",E:"ঢ",r:"প",R:"ফ",t:"ট",T:"ঠ",y:"চ",Y:"ছ",u:"জ",U:"ঝ",i:"হ",I:"ঞ",o:"গ",O:"ঘ",p:"ড়",P:"ঢ়","&":"ঁ",$:"৳","`":"‌","~":"‍","\\":"ৎ","|":"ঃ"},supportIntellisense:false}

$.browser.chrome=/chrome/.test(navigator.userAgent.toLowerCase());(function(e){var t;var n=1;var r=0;var i;var s="";var o="b";var u;var a="y";e.fn.bnKb=function(n){var r={switchkey:{webkit:"k",mozilla:"y",safari:"k",chrome:"k",msie:"y"},driver:phonetic};t=e.extend(r,n);o="b";u="";e(this).unbind("keypress keydown keyup");e(this).keyup(e.fn.bnKb.ku);e(this).keydown(e.fn.bnKb.kd);e(this).keypress(e.fn.bnKb.kp);if(e.browser.chrome)a=t.switchkey.chrome;else if(e.browser.safari||e.browser.safari)a=t.switchkey.webkit;else if(e.browser.msie)a=t.switchkey.msie;else if(e.browser.mozilla)a=t.switchkey.mozilla};e.fn.bnKb.kp=function(n){var r=n.which;var r=n.keyCode?n.keyCode:n.which;var a=String.fromCharCode(r);if(o=="e")return true;if(i)e("#stat").html("Not Processing");else{var f=u;u+=a;if(t.driver.supportIntellisense){var l=t.driver.intellisense(a,f);if(l){a=l.keystring;u=l.carry}}var c=t.driver.keymaps[u];if(c){e.fn.bnKb.iac(this,c,1);n.stopPropagation();return false}c=t.driver.keymaps[a];u=a;if(c){e.fn.bnKb.iac(this,c,0);n.stopPropagation();return false}s="";return true}};e.fn.bnKb.kd=function(e){var t=e.keyCode?e.keyCode:e.which;var n=String.fromCharCode(t).toLowerCase();if(t==17||t==224||t==91){i=true}if(i&&n==a){o=="b"?o="e":o="b"}};e.fn.bnKb.ku=function(e){var t=e.keyCode?e.keyCode:e.which;if(t==17||t==224||t==91){i=false}};e.fn.bnKb.iac=function(e,t,n){var r=e;var i=t;len=s.length;if(!n)len=0;if(document.selection){r.focus();sel=document.selection.createRange();if(r.value.length>=len){sel.moveStart("character",-1*len)}sel.text=i;sel.collapse(true);sel.select()}else{if(r.selectionStart||r.selectionStart==0){r.focus();var o=r.selectionStart-len;var u=r.selectionEnd;var a=r.scrollTop;o=o==-1?r.value.length:o;r.value=r.value.substring(0,o)+i+r.value.substring(u,r.value.length);r.focus();r.selectionStart=o+i.length;r.selectionEnd=o+i.length;r.scrollTop=a}else{var a=r.scrollTop;r.value+=i;r.focus();r.scrollTop=a}}s=i}})(jQuery)

function enablePhonetic(){$(".unijoy").bnKb({switchkey:{webkit:"k",mozilla:"y",safari:"k",chrome:"k",msie:"y"},driver:phonetic})}function enableProbhat(){$(".unijoy").bnKb({switchkey:{webkit:"k",mozilla:"y",safari:"k",chrome:"k",msie:"y"},driver:probhat})}function enableBijoy(){$(".unijoy").bnKb({switchkey:{webkit:"k",mozilla:"y",safari:"k",chrome:"k",msie:"y"},driver:bijoy})}$(document).ready(function(){$(".bangla").bnKb({switchkey:{webkit:"k",mozilla:"y",safari:"k",chrome:"k",msie:"y"},driver:phonetic})})