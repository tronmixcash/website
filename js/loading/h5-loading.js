class Loading{constructor(){$("body").before('\n\t\t<div class="potato_loading hide">\n\t\t\t<div class="potato_loading_zhe"></div>\n\t\t\t<div class="potato_loading1 potato_loading2">\n\t\t\t\t<div class="potato_loading1_Icon"></div>\n\t\t\t\t<p class="potato_loading1_title">loading...</p>\n\t\t\t</div>\n\t\t\t<div class="potato_loading1 potato_loading3">\n\t\t\t\t<p class="potato_loading1_title potato_loading3_title"></p>\n\t\t\t</div>\n\t\t</div>')}loadingShow=t=>{$(".potato_loading").removeClass("hide"),setTimeout((()=>{$(".potato_loading_zhe").addClass("potato_loading_zhe_tr"),$(".potato_loading2").addClass("potato_loading_zhe_tr"),$(".potato_loading2 .potato_loading1_title").text(t)}),30)};loadingHide=()=>{$(".potato_loading_zhe").removeClass("potato_loading_zhe_tr"),$(".potato_loading2").removeClass("potato_loading_zhe_tr"),setTimeout((()=>{$(".potato_loading").addClass("hide")}),360)};loadingFun=(t,o)=>{this.loadingShow(t),setTimeout((()=>{this.loadingHide()}),o)};tispShow=()=>{$(".potato_loading").removeClass("hide"),setTimeout((()=>{$(".potato_loading3").addClass("potato_loading_zhe_tr")}),30)};tispHide=()=>{$(".potato_loading3").removeClass("potato_loading_zhe_tr"),setTimeout((()=>{$(".potato_loading").addClass("hide")}),360)};tispFun=(t,o)=>{this.tispShow(),$(".potato_loading3_title").html(t),setTimeout((()=>{this.tispHide()}),o)}}window.loading=new Loading;