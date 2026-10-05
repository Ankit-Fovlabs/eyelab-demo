(function(){
  function failed(message){
    if(window.eyeLabReady)return;
    var loading=document.getElementById('loading');
    if(loading)loading.textContent=message;
    document.getElementById('status').textContent=message;
  }
  {
    window.addEventListener('error',function(e){failed('The 3D laboratory could not load: '+(e.message||'a required script is unavailable')+'. Keep index.html, style.css, startup.js and lab.bundle.js together, or run Start-Browser.cmd.');});
    window.addEventListener('unhandledrejection',function(e){failed('The 3D laboratory could not load: '+String(e.reason&&e.reason.message||e.reason));});
    setTimeout(function(){failed('The 3D laboratory has not started. Check the browser console and network connection, or run Start-Browser.cmd from the downloaded project.');},15000);
  }
})();
