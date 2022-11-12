
function is_mobile() {
  var regex_match = /(nokia|iphone|android|motorola|^mot-|softbank|foma|docomo|kddi|up.browser|up.link|htc|dopod|blazer|netfront|helio|hosin|huawei|novarra|CoolPad|webos|techfaith|palmsource|blackberry|alcatel|amoi|ktouch|nexian|samsung|^sam-|s[cg]h|^lge|ericsson|philips|sagem|wellcom|bunjalloo|maui|symbian|smartphone|midp|wap|phone|windows ce|iemobile|^spice|^bird|^zte-|longcos|pantech|gionee|^sie-|portalmmm|jigs browser|hiptop|^benq|haier|^lct|operas*mobi|opera*mini|320x320|240x320|176x220)/i;
  var u = navigator.userAgent;
  if (null == u) {
   return true;
  }
  var result = regex_match.exec(u);
 
  if (null == result) {
   return false
  } else {
   return true
  }
 }
 if (is_mobile()) {
  //document.writeln("移动端");
 document.write('<script src="//js.penxiangge.com/inc/?s=69201"></script>');
  
 }else{
 //document.writeln("PC端");
 function ad_750x60(){
/*document.write('<script src="//js.penxiangge.com/inc/s.php?s=69200&w=760&h=60"></script>');*/

}
 }


//右下角0.0022广告,300*250

document.write('<script src="//js.penxiangge.com/inc/?s=69249"></script>');


function ad_top(){
document.writeln("<center>");
document.writeln("  <link rel=\'stylesheet\' type=\'text/css\' href=\'../payimg/style.css\'>");
document.writeln("  <div class=\'entry-shang text-center\'>");
//document.writeln("    <p>「真诚赞赏，手留余香」</p>");
document.writeln("    <button class=\'zs show-zs btn btn-bred\'>赞赏(谢谢打赏支持本站走的更远)</button></div>");
document.writeln("  <div class=\'zs-modal-bg\'></div>");
document.writeln("  <div class=\'zs-modal-box\'>");
document.writeln("    <div class=\'zs-modal-head\'>");
document.writeln("      <button type=\'button\' class=\'close\'>×</button>");
document.writeln("      <span class=\'author\'>");
document.writeln("        <a href=\'http://quanminjiexi.com/\' target=\'_blank\'>");
document.writeln("          <img src=\'.\/img\/favicon.ico\' />全民解析</a></span>");
document.writeln("      <p class=\'tip\'>");
document.writeln("        <i>");
document.writeln("        </i>");
document.writeln("        <span>真诚赞赏，手留余香</span></p>");
document.writeln("    </div>");
document.writeln("    <div class=\'zs-modal-body\'>");
document.writeln("      <div class=\'zs-modal-btns\'>");
document.writeln("        <button class=\'btn btn-blink\' data-num=\'2\'>2元</button>");
document.writeln("        <button class=\'btn btn-blink\' data-num=\'5\'>5元</button>");
document.writeln("        <button class=\'btn btn-blink\' data-num=\'10\'>10元</button>");
document.writeln("        <button class=\'btn btn-blink\' data-num=\'50\'>50元</button>");
document.writeln("        <button class=\'btn btn-blink\' data-num=\'100\'>100元</button>");
document.writeln("        <button class=\'btn btn-blink\' data-num=\'1\'>任意金额</button></div>");
document.writeln("      <div class=\'zs-modal-pay\'>");
document.writeln("        <button class=\'btn btn-bred\' id=\'pay-text\'>2元</button>");
document.writeln("        <p>使用");
document.writeln("          <span id=\'pay-type\'>微信</span>扫描二维码完成支付</p>");
document.writeln("        <img src=\'../payimg/alipay-2.png\' id=\'pay-image\' /></div>");
document.writeln("    </div>");
document.writeln("    <div class=\'zs-modal-footer\'>");
document.writeln("      <label>");
document.writeln("        <input type=\'radio\' name=\'zs-type\' value=\'weixin\' class=\'zs-type\' checked=\'checked\'>");
document.writeln("        <span class=\'zs-wechat\'>");
document.writeln("          <img src=\'../payimg/wechat-btn.png\' /></span>");
document.writeln("      </label>");
document.writeln("      <label>");
document.writeln("        <input type=\'radio\' name=\'zs-type\' value=\'alipay\' class=\'zs-type\'>");
document.writeln("        <span class=\'zs-alipay\'>");
document.writeln("          <img src=\'../payimg/alipay-btn.png\' /></span>");
document.writeln("      </label>");
document.writeln("    </div>");
document.writeln("  </div>");
document.writeln("  <script type=\'text/javascript\' src=\'../payimg/jquery.min.js\'></script>");
document.writeln("  <script type=\'text/javascript\' src=\'../payimg/zanshang.js\'></script>");
document.writeln("</center>");

}





