// index.js
const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer(function (req, res) {
    if (req.url === '/favicon.ico') {
        return;
    }
    const parseUrl = url.parse(req.url, true);

    // 路由1 /uploadForm    提交表单处理方法，在页面显示刚才表单内填写的内容
    // 路由2 /xssattack        xss 攻击接收浏览器发来的 cookie 接口
    // 路由3 /              返回一个表单
    if (parseUrl.pathname === '/uploadForm') {
        res.writeHead(200, {'content-Type':'text/html;charset=UTF-8'})
        const username = parseUrl.query.username;
        res.write(`<h>${username}</h>`);
        res.end();
    } else if (parseUrl.pathname === '/xssattack') {
        res.writeHead(200, {'content-Type':'text/html;charset=UTF-8'})
        const pw = parseUrl.query.password;
        console.log('password =======> ',pw)
        res.write(`i received message：${pw}`)
        res.end();
    } else {
        res.writeHead(200, {'content-Type':'text/html;charset=UTF-8', 'Set-Cookie': 'password=123'})
        res.write(`
            <form method="get" action="/uploadForm">
                <input type="text" style="width: 600px;" placeholder="输入用户名" name="username">
                <button type="submit">提交</button>
            </form>
        `)
        res.end();
    }
});

server.listen(3001, function () {
    console.log('server is starting on port 3001');
});