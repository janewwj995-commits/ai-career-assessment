# AI时代职业结构风险自测

一个简单的静态网站，用于评估AI时代的职业结构风险。

## 本地开发

```bash
# 方法1：使用Python
python3 -m http.server 8080

# 方法2：使用npm（需要先安装Node.js）
npm run dev
```

然后在浏览器中打开：http://localhost:8080

## 部署方案

### 方案1：Vercel（推荐，5分钟部署）

1. 将代码推送到 GitHub/GitLab
2. 访问 [vercel.com](https://vercel.com) 并登录
3. 点击 "New Project"
4. 导入您的仓库
5. 点击 "Deploy"
6. 完成！获得免费域名（如 xxx.vercel.app）

### 方案2：Netlify

1. 将代码推送到 GitHub/GitLab
2. 访问 [netlify.com](https://netlify.com) 并登录
3. 点击 "Add new site" → "Import an existing project"
4. 导入您的仓库
5. 点击 "Deploy site"
6. 完成！获得免费域名（如 xxx.netlify.app）

### 方案3：传统服务器

1. 上传所有文件到服务器
2. 配置 Nginx/Apache 指向 index.html
3. 配置 HTTPS

## 文件说明

- `index.html` - 主页面
- `style.css` - 样式文件
- `script.js` - JavaScript逻辑
- `vercel.json` - Vercel部署配置
- `netlify.toml` - Netlify部署配置
- `package.json` - 项目配置

## 项目结构

```
.
├── index.html          # 主页面
├── style.css           # 样式文件
├── script.js           # JavaScript逻辑
├── vercel.json         # Vercel配置
├── netlify.toml        # Netlify配置
├── package.json        # 项目配置
└── README.md           # 说明文档
```

## 技术栈

- 纯 HTML5 + CSS3 + JavaScript
- 无需任何框架
- 响应式设计，支持移动端

## 许可证

MIT
