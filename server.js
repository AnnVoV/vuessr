const fs = require('fs');
const path = require('path');
const express = require('express');
const server = express();
server.use(express.static('dist')); //静态文件目录
const bundle = fs.readFileSync(path.resolve(__dirname, 'dist/server.js'), 'utf-8');

// 根据template 和 bundle 生成一个Render 实例
const renderer = require('vue-server-renderer').createBundleRenderer(bundle, {
    template: fs.readFileSync(path.resolve(__dirname, 'dist/index.ssr.html'), 'utf-8')
});

const context = {
    title: 'Vue SSR demo', // default title，
    state: {
        test: 'handle by server',
        foo: 'handle foo by server',
        bar: 'handle bar by server',
    }
}

server.get('/index', (req, res) => {
    renderer.renderToString(context, (err, html) => {
        if (err) {
            console.log(err);
            res.status(500).end('服务器内部错误');
            return;
        }
        // 输出最终的Html
        res.end(html);
    })
});

server.listen(8002, () => {
    console.log('后端渲染服务器启动，端口号为：8002');
});




