# SkillWarz 部署指南

本文档提供了 SkillWarz 网站的各种部署方式和详细步骤。

## 🚀 快速部署选项

### 1. GitHub Pages (推荐)

**步骤：**
1. 将代码推送到 GitHub 仓库
2. 进入仓库设置 (Settings)
3. 找到 "Pages" 选项
4. 选择 "Deploy from a branch"
5. 选择 `main` 分支和 `/ (root)` 目录
6. 点击 "Save"

**优点：**
- 免费托管
- 自动 HTTPS
- 全球 CDN
- 易于维护

### 2. Netlify

**步骤：**
1. 注册 Netlify 账户
2. 点击 "New site from Git"
3. 连接 GitHub 仓库
4. 设置构建命令：留空（静态网站）
5. 设置发布目录：`/` (根目录)
6. 点击 "Deploy site"

**优点：**
- 免费计划
- 自动部署
- 自定义域名
- 表单处理

### 3. Vercel

**步骤：**
1. 注册 Vercel 账户
2. 导入 GitHub 项目
3. 选择框架：Other
4. 设置根目录：`./`
5. 点击 "Deploy"

**优点：**
- 极速部署
- 自动 HTTPS
- 全球边缘网络
- 实时预览

## 🌐 传统服务器部署

### Apache 服务器

1. **上传文件**
   ```bash
   scp -r skillwarz/* user@your-server:/var/www/html/
   ```

2. **配置虚拟主机**
   ```apache
   <VirtualHost *:80>
       ServerName skillwarz.org
       DocumentRoot /var/www/html
       
       <Directory /var/www/html>
           AllowOverride All
           Require all granted
       </Directory>
   </VirtualHost>
   ```

3. **启用 HTTPS**
   ```bash
   sudo certbot --apache -d skillwarz.org
   ```

### Nginx 服务器

1. **上传文件**
   ```bash
   scp -r skillwarz/* user@your-server:/var/www/html/
   ```

2. **配置站点**
   ```nginx
   server {
       listen 80;
       server_name skillwarz.org;
       root /var/www/html;
       index index.html;
       
       location / {
           try_files $uri $uri/ =404;
       }
       
       # 缓存静态资源
       location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
           expires 1y;
           add_header Cache-Control "public, immutable";
       }
   }
   ```

3. **启用 HTTPS**
   ```bash
   sudo certbot --nginx -d skillwarz.org
   ```

## 📱 移动端优化

### PWA 支持

要添加 PWA 功能，创建以下文件：

1. **manifest.json**
   ```json
   {
     "name": "SkillWarz",
     "short_name": "SkillWarz",
     "description": "Online Gaming Platform",
     "start_url": "/",
     "display": "standalone",
     "background_color": "#1a1a1a",
     "theme_color": "#28a745",
     "icons": [
       {
         "src": "images/icon-192.png",
         "sizes": "192x192",
         "type": "image/png"
       },
       {
         "src": "images/icon-512.png",
         "sizes": "512x512",
         "type": "image/png"
       }
     ]
   }
   ```

2. **service-worker.js**
   ```javascript
   const CACHE_NAME = 'skillwarz-v1';
   const urlsToCache = [
     '/',
     '/css/style.css',
     '/js/script.js',
     '/images/'
   ];

   self.addEventListener('install', event => {
     event.waitUntil(
       caches.open(CACHE_NAME)
         .then(cache => cache.addAll(urlsToCache))
     );
   });
   ```

## 🔧 性能优化

### 1. 图片优化

- 使用 WebP 格式
- 压缩图片大小
- 实现懒加载
- 使用适当的图片尺寸

### 2. 代码优化

- 压缩 CSS 和 JavaScript
- 启用 Gzip 压缩
- 使用 CDN 加载外部资源
- 实现资源缓存

### 3. 服务器配置

**Apache (.htaccess)**
```apache
# 启用 Gzip 压缩
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# 缓存设置
<IfModule mod_expires.c>
    ExpiresActive on
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

**Nginx**
```nginx
# Gzip 压缩
gzip on;
gzip_vary on;
gzip_min_length 1024;
gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss application/json;

# 缓存设置
location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

## 🔒 安全配置

### 1. HTTPS 强制重定向

**Apache (.htaccess)**
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

**Nginx**
```nginx
server {
    listen 80;
    server_name skillwarz.org;
    return 301 https://$server_name$request_uri;
}
```

### 2. 安全头设置

**Apache (.htaccess)**
```apache
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"
Header always set Referrer-Policy "strict-origin-when-cross-origin"
```

**Nginx**
```nginx
add_header X-Content-Type-Options nosniff;
add_header X-Frame-Options DENY;
add_header X-XSS-Protection "1; mode=block";
add_header Referrer-Policy "strict-origin-when-cross-origin";
```

## 📊 监控和分析

### 1. Google Analytics

在 `index.html` 的 `<head>` 部分添加：

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 2. 错误监控

使用 Sentry 或其他错误监控服务：

```html
<script
  src="https://browser.sentry-cdn.com/7.x.x/bundle.min.js"
  integrity="sha384-..."
  crossorigin="anonymous"
></script>
<script>
  Sentry.init({
    dsn: "YOUR_DSN",
    environment: "production"
  });
</script>
```

## 🚨 故障排除

### 常见问题

1. **游戏无法加载**
   - 检查 iframe URL 是否有效
   - 确认目标网站允许嵌入
   - 检查浏览器控制台错误

2. **移动端显示问题**
   - 确认 viewport meta 标签正确
   - 测试不同设备尺寸
   - 检查 CSS 媒体查询

3. **性能问题**
   - 压缩图片和代码
   - 启用服务器缓存
   - 使用 CDN 加速

### 调试工具

- Chrome DevTools
- Lighthouse 性能测试
- GTmetrix 速度测试
- Google PageSpeed Insights

## 📞 技术支持

如果遇到部署问题，请：

1. 检查错误日志
2. 确认服务器配置
3. 测试本地环境
4. 联系技术支持

---

**注意**: 部署前请确保所有游戏 URL 都是有效的，并且目标网站允许 iframe 嵌入。 