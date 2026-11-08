# 食材图鉴 / 食材図鑑 / Food Guide

一个免费的静态网站：输入食材名（中文 / 日文汉字・假名・罗马字 / 英文），并排显示中日英名称，以及各国家和地区的常见做法与新手也能照做的详细菜谱。界面和内容支持中文、日本語、English 切换。

- 收录 157 种食材（其中海鲜 136 种），554 道菜，每道都有中日英三语详细菜谱
- 纯静态页面，不需要服务器，也不调用任何 AI 接口

## 文件结构

| 路径 | 说明 |
| --- | --- |
| `index.html` | 网站主页面 |
| `data.js` | 打包后的数据（由 `src/` 生成，不要直接改） |
| `src/` | 数据源文件，按批次拆分 |
| `src/check.js` | 数据校验脚本 |
| `legacy/seafood/` | 早期的海鲜图鉴原型（依赖 Claude Artifact 环境，独立打开无法查询） |

## 重新生成数据

```bash
cd src
cat 00-base.js 1*.js 2*.js 3*.js 4*.js 5*.js 6*.js 8*.js 9*.js > ../data.js
cd ..
node src/check.js "$PWD/data.js"
```

## 本地预览

直接用浏览器打开 `index.html` 即可，或运行 `python3 -m http.server` 后访问 http://localhost:8000 。
