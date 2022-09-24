(()=>{var t={882:()=>{window.formatWeb3=new class{constructor(){}formatAmount(t,e=18){if(!t)return"0";const n=(t=new BigNumber(t,10).toString(10)).substring(0,t.length-e)||"0",o=t.substring(t.length-e).padStart(e,"0").substring(0,e);return this.trimTrailingZeroes(`${n}.${o}`)}cleanupAmount(t){return t.replace(/,/g,"").trim()}trimLeadingZeroes(t){return""===(t=t.replace(/^0+/,""))?"0":t}parseAmount(t="1",e=18){if(!t)return"0";const n=(t=this.cleanupAmount(t)).split("."),o=n[0],a=n[1]||"";if(n.length>2||a.length>e)throw new Error(`Cannot parse '${t}' as bignumber`);return this.trimLeadingZeroes(o+a.padEnd(e,"0"))}trimTrailingZeroes(t){return t.replace(/\.?0*$/,"")}toFixed(t,e){let n=isNaN(t)||!t?0:t;const o=isNaN(e)||!e?0:e;n=this.getFullNum(n);const a=(n+"").split(".");let s=a.length>1?a[1]:"";return s.length>o?s=s.substr(0,o):s+=Array(o-s.length+1).join("0"),a[0]+(""==s?"":"."+s)}getFullNum(t){if(isNaN(t))return t;const e=String(t);return/e/i.test(e)?Number(t).toFixed(18).replace(/\.?0+$/,""):t}accMul(t,e){return t&&e?new BigNumber(t).times(new BigNumber(e)).toString():"0"}accAdd(t,e){return new BigNumber(t).plus(new BigNumber(e)).toFixed()}accSub(t,e){return new BigNumber(t).minus(new BigNumber(e)).toFixed()}accDiv(t,e){return t&&e?new BigNumber(t).div(new BigNumber(e)).toFixed():"0"}}},735:()=>{/msie [6|7|8|9]/i.test(navigator.userAgent)||(new WOW).init(),window.showhash=function(t,e){let n="Transaction Hash "+connweb3.shortAccount(e);return loading.loadingFun(t,7e4),t+"<br>"+n},window.successToast=function(t,e,n){$(".toast-close").trigger("click"),$.Toast(t,e,"success",{has_icon:!0,has_close_btn:!0,fullscreen:!1,timeout:n,sticky:!1,has_progress:!0,rtl:!1})},window.errorToast=function(t){$.Toast("info",t,"info",{has_icon:!0,has_close_btn:!0,fullscreen:!1,timeout:1e4,sticky:!1,has_progress:!0,rtl:!1})},window.copystr=function(t){var e=document.createElement("input");e.value=t,document.body.appendChild(e),e.onfocus=function(t){t.preventDefault()},e.select(),document.execCommand("Copy"),e.blur(),document.body.removeChild(e),loading.tispFun("copied",2e3)}},886:()=>{"use strict";window.connweb3=new class{constructor(t){this.tronMixAddress=t,this.max256="115792089237316195423570985008687907853269984665640564039457584007913129639935",this.locked=!1,this.fullHost="https://api.trongrid.io",this.apikeyItems=[],this.apikeyItems.push("b34529f3-f866-4439-807e-cc5f435b1e24"),this.apikeyItems.push("a675fb83-243e-449c-b48f-22969796364b"),this.apikeyItems.push("eb4970d0-4da2-4a9e-91d7-6282b99b1b51"),this.apikeyNumber=0}static tronWeb;static TronMixAbi;static selectedAccount;getTronWeb(){var t=setInterval((async()=>{window.tronWeb&&null!=window.tronWeb.defaultAddress.base58&&0!=window.tronWeb.defaultAddress.base58&&(clearInterval(t),console.log("tronWeb successfully detected!"))}),10)}async init(){this.getTronWeb(),this.apikeyNumber=Math.floor(Math.random()*this.apikeyItems.length);var t=this.apikeyItems[this.apikeyNumber];this.tronWeb=new TronWeb({fullHost:this.fullHost,headers:{"TRON-PRO-API-KEY":t},privateKey:"14E522B08495D224A32314C6CFD9A1E9B0066E696880EB179EBD1EDA71310E3F"}),await this.refreshAccountData()}async onConnect(){location.reload()}async onDisconnect(){this.tronWeb=null,this.selectedAccount=null,$(".content .tips .text").text("Please connect wallet"),$(".content .btn").hide(),$(".content .btn_connect").show()}async fetchAccountData(){tronWeb.defaultAddress.base58&&(this.selectedAccount=tronWeb.defaultAddress.base58,$(".content .tips .text").text("My address:"+this.shortAccount(this.selectedAccount)))}async refreshAccountData(){await this.fetchAccountData()}setLock(t){this.locked=t}shortAccount(t,e=6,n=4){return t?t.substring(0,e)+"..."+t.substring(t.length-n):""}getTronMixAbi(){return new Promise(((t,e)=>{let n,o;$.ajaxSettings.async=!1,$.getJSON("/js/abis/implementation.json",(function(o,a){"success"==a?(n=o,t()):e()})),$.getJSON("/js/abis/tronmix.json",(function(n,a){"success"==a?(o=n,t()):e()})),$.ajaxSettings.async=!0,this.TronMixAbi=o.concat(n)}))}async getTokenContract(t){return await this.tronWeb.contract().at(t)}async getTronMixContract(){return await this.tronWeb.contract(this.TronMixAbi,this.tronMixAddress)}async getTokenInfo(t){return"USDT"==t?["TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",6]:["",0]}async balanceOf(t,e){const n=await this.getTokenContract(t);let o=await n.symbol().call(),a=await n.decimals().call(),s=await n.balanceOf(e).call();return s=this.tronWeb.toDecimal(s),[s,a,o]}getRandomString(t=32){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=e.length;let o="";for(let a=0;a<t;a++)o+=e.charAt(Math.floor(Math.random()*n));return o}createPassword(){let t=this.getRandomString(),e=tronWeb.utils.code.stringToBytes(t);return e="0x"+e.join(""),e.length%2==1&&(e+="0"),tronWeb.utils.ethersUtils.keccak256(e)}}("TNAv46VZ1GQrWJAXhiw6NsogDR9HUDFaRG"),$((function(){window.addEventListener("message",(function(t){t.data.message&&"tabReply"==t.data.message.action&&(!1===t.data.message.data.data.address&&(connweb3.setLock(!0),connweb3.onDisconnect(),console.log("Account is locked")),1==connweb3.locked&&t.data.message.data.data.address&&(connweb3.setLock(!1),console.log("Account is unlocked"),connweb3.onConnect()),connweb3.selectedAccount&&t.data.message.data.data.address&&connweb3.selectedAccount!=t.data.message.data.data.address&&(console.log("switch account"),setTimeout((function(){connweb3.onConnect()}),3e3))),t.data.message&&t.data.message.action,t.data.message&&"setNode"==t.data.message.action&&("_"==t.data.message.data.node.chain?console.log("setNode","tronLink currently selects the main chain"):console.log("setNode","tronLink currently selects the side chain"),t.data.message&&"connect"==t.data.message.action&&console.log("connect event",t.data.message.isTronLink),t.data.message&&"disconnect"==t.data.message.action&&console.log("disconnect event",t.data.message.isTronLink),t.data.message&&"accountsChanged"==t.data.message.action&&(console.log("accountsChanged event",t.data.message),console.log("current address:",t.data.message.data.address)),t.data.message&&"connectWeb"==t.data.message.action&&(console.log("connectWeb event",t.data.message),console.log("current address:",t.data.message.data.address)),t.data.message&&"acceptWeb"==t.data.message.action&&console.log("acceptWeb event",t.data.message),t.data.message&&"disconnectWeb"==t.data.message.action&&console.log("disconnectWeb event",t.data.message),t.data.message&&"rejectWeb"==t.data.message.action&&console.log("rejectWeb event",t.data.message))}))}))}},e={};function n(o){var a=e[o];if(void 0!==a)return a.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,n),s.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";async function t(){if($(".content .btn").hide(),connweb3.selectedAccount){let t=$("#token").val(),e=(await connweb3.getTokenInfo(t))[0];await async function(t){if(!connweb3.selectedAccount)return void $(".content .tips .text").text("Please connect wallet");const e=await connweb3.getTokenContract(t);let n=await e.allowance(connweb3.selectedAccount,connweb3.tronMixAddress).call();n=connweb3.tronWeb.toDecimal(n),0==n?$(".content .btn_approve").fadeIn("slow"):($(".content .btn_deposit").fadeIn("slow"),$(".content .btn_withdraw").fadeIn("slow"))}(e)}else $(".content .btn_connect").fadeIn("slow")}n(735),n(882),n(886),window.addEventListener("load",(async()=>{await connweb3.init(),await connweb3.getTronMixAbi(),await t(),connweb3.selectedAccount&&$("#receivingAddress").val(connweb3.selectedAccount)})),$((function(){$(".content .btn_connect").fadeIn("slow"),$("#tooltips_amount").pt({width:"auto",position:"r",arrow:!1,content:"To improve privacy, use a fixed amount"}),$(".naver li").click((async function(){$(this).siblings().removeClass("on"),$(this).addClass("on")})),$(".menu_deposit").click((async function(){$(".content .deposit").show(),$(".content .withdraw").hide(),$(".content .deposit .depositing").show(),$(".content .deposit .deposited").hide(),await t()})),$(".menu_withdraw").click((async function(){$(".content .deposit").hide(),$(".content .withdraw").show(),$(".content .withdraw .withdrawing").show(),$(".content .withdraw .withdrawalSucceeded").hide(),await t()})),$("#token").change((async function(){await t()})),$(".btn_connect").click((async function(){await connweb3.onConnect()})),$(".btn_approve").click((async function(){let e=$("#token").val(),n=(await connweb3.getTokenInfo(e))[0];await async function(e){if(!connweb3.selectedAccount)return void $(".content .tips .text").text("Please connect wallet");let n=!1,o=[{type:"address",value:connweb3.tronMixAddress},{type:"uint256",value:connweb3.max256}],a=await tronWeb.transactionBuilder.triggerSmartContract(e,"approve(address,uint256)",{feeLimit:1e9,callValue:0,shouldPollResponse:!0},o).catch((t=>(console.log("err1",t),!1))),s=await tronWeb.trx.sign(a.transaction).catch((t=>(console.log("err2",t),!1)));if(await tronWeb.trx.sendRawTransaction(s).then((t=>{let e=t.txid;$(".content .tips .text").html(showhash("Authorizing, please wait ...",e)),$(".content .btn_approve").addClass("btn_disable"),n=!0})).catch((t=>{console.log(t)})),1==n){let e=s.txID,n=async function(e){await window.tronWeb.trx.getConfirmedTransaction(e).then((async e=>{$(".content .btn_approve").removeClass("btn_disable"),"SUCCESS"===e.ret[0].contractRet?(successToast("Confirmed","Successful transaction",5e3),$(".content .tips .text").text("Authorization succeeded"),await t()):(console.log(e),$(".content .tips .text").text("transaction failed")),loading.loadingHide()})).catch((t=>{console.log(t),setTimeout((function(){n(e)}),5e3)}))};setTimeout((function(){n(e)}),5e4)}}(n)})),$(".btn_deposit").click((async function(){let t=$("#token").val(),e=$("input[name='amount']:checked").val(),n=await connweb3.getTokenInfo(t),o=n[0],a=n[1];e=formatWeb3.parseAmount(e,a),await async function(t,e){if(!connweb3.selectedAccount)return void $(".content .tips .text").text("Please connect wallet");let n=!1,o=connweb3.createPassword(),a=tronWeb.utils.ethersUtils.keccak256(o);var s=connweb3.tronMixAddress;let c=[{type:"address",value:t},{type:"bytes32",value:a},{type:"uint256",value:e}],i=await tronWeb.transactionBuilder.triggerSmartContract(s,"deposit(address,bytes32,uint256)",{feeLimit:1e9,callValue:0,shouldPollResponse:!0},c).catch((t=>(console.log("err1",t),!1))),r=await tronWeb.trx.sign(i.transaction).catch((t=>(console.log("err2",t),!1)));if(await tronWeb.trx.sendRawTransaction(r).then((t=>{let e=t.txid;$(".content .tips .text").html(showhash("Depositing, please wait ...",e)),$(".content .btn_deposit").addClass("btn_disable"),n=!0})).catch((t=>{console.log(t)})),1==n){let t=r.txID,e=async function(t){await window.tronWeb.trx.getConfirmedTransaction(t).then((t=>{$(".content .btn_deposit").removeClass("btn_disable"),"SUCCESS"===t.ret[0].contractRet?(successToast("Confirmed","Successful transaction",5e3),$(".content .tips .text").text("Successful deposit"),$(".content .deposit .depositing").hide(),$(".content .deposit .deposited").show(),$("#depositPassword").val(o)):(console.log(t),$(".content .tips .text").text("transaction failed")),loading.loadingHide()})).catch((n=>{console.log(n),setTimeout((function(){e(t)}),5e3)}))};setTimeout((function(){e(t)}),5e4)}}(o,e)})),$(".btn_withdraw").click((async function(){let t=$("#withdrawalsPassword").val(),e=$("#receivingAddress").val();await async function(t,e){if(!connweb3.selectedAccount)return void $(".content .tips .text").text("Please connect wallet");let n=!1;var o=connweb3.tronMixAddress;let a=[{type:"bytes",value:t},{type:"address",value:e}],s=await tronWeb.transactionBuilder.triggerSmartContract(o,"withdraw(bytes,address)",{feeLimit:1e9,callValue:0,shouldPollResponse:!0},a).catch((t=>(console.log("err1",t),!1))),c=await tronWeb.trx.sign(s.transaction).catch((t=>(console.log("err2",t),!1)));if(await tronWeb.trx.sendRawTransaction(c).then((t=>{let e=t.txid;$(".content .tips .text").html(showhash("Withdrawing, please wait ...",e)),$(".content .btn_withdraw").addClass("btn_disable"),n=!0})).catch((t=>{console.log(t)})),1==n){let t=c.txID,e=async function(t){await window.tronWeb.trx.getConfirmedTransaction(t).then((t=>{$(".content .btn_withdraw").removeClass("btn_disable"),"SUCCESS"===t.ret[0].contractRet?(successToast("Confirmed","Successful transaction",5e3),$(".content .tips .text").text("Withdrawal succeeded"),$(".content .withdraw .withdrawing").hide(),$(".content .withdraw .withdrawalSucceeded").show()):(console.log(t),$(".content .tips .text").text("transaction failed")),loading.loadingHide()})).catch((n=>{console.log(n),setTimeout((function(){e(t)}),5e3)}))};setTimeout((function(){e(t)}),5e4)}}(t,e)})),$("#toCopy").click((async function(){let t=$("#depositPassword").val();copystr(t)}))}))})()})();