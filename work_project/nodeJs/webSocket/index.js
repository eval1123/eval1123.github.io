// 使用nodeJs开发webSocket服务

let ws = require('nodejs-websocket');   // 导入webSocket包

// 创建ws服务.
let server = ws.createServer(connect => {
    console.log('有用户连接上来了');
}).listen(3000, () => {
    console.log('ws服务启动成功');
});