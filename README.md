# SkillWarz - Online Gaming Platform

SkillWarz.org 是一个现代化的在线游戏聚合平台，提供数百款免费在线游戏，支持多设备访问和响应式设计。

## 🌟 主要特性

- **游戏聚合**: 通过 iframe 嵌入各种在线游戏
- **响应式设计**: 完美适配 PC、平板和移动设备
- **游戏分类**: Action、Strategy、Casual、Racing 四大分类
- **现代化 UI**: 深色主题，绿色主色调 (#28a745)
- **即时游戏**: 无需下载，浏览器直接运行
- **全屏模式**: 支持游戏全屏体验
- **移动端优化**: 触摸友好的交互设计

## 🎮 游戏分类

- **Action**: 动作游戏，包括射击、格斗等
- **Strategy**: 策略游戏，包括塔防、棋类等
- **Casual**: 休闲游戏，包括益智、消除等
- **Racing**: 竞速游戏，包括赛车、漂移等

## 🛠️ 技术栈

- **前端**: HTML5, CSS3, 原生 JavaScript
- **UI 框架**: Bootstrap 5
- **图标**: Font Awesome 6
- **响应式**: 移动优先设计
- **浏览器兼容**: 现代浏览器支持

## 📁 项目结构

```
skillwarz/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   └── script.js       # JavaScript 功能
├── images/             # 图片资源目录
└── README.md           # 项目说明
```

## 🚀 快速开始

1. **克隆项目**
   ```bash
   git clone https://github.com/yourusername/skillwarz.git
   cd skillwarz
   ```

2. **本地运行**
   - 使用任何 HTTP 服务器（如 Live Server）
   - 或直接在浏览器中打开 `index.html`

3. **部署**
   - 上传到任何 Web 服务器
   - 支持 GitHub Pages、Netlify、Vercel 等

## 🎯 核心功能

### 游戏展示
- 游戏卡片网格布局
- 鼠标悬停效果
- 游戏缩略图和分类标签

### 分类过滤
- 动态分类切换
- 实时游戏过滤
- 平滑动画效果

### 游戏嵌入
- iframe 游戏加载
- 模态框展示
- 全屏模式支持

### 响应式设计
- 移动端优化
- 触摸友好交互
- 自适应布局

## 📱 移动端特性

- 触摸优化的游戏卡片
- 手势支持
- 移动端友好的导航
- 优化的游戏体验

## 🎨 设计特色

- **深色主题**: 护眼的深色背景
- **绿色主色调**: #28a745 品牌色
- **现代 UI**: 简洁美观的界面设计
- **动画效果**: 流畅的交互动画
- **图标系统**: Font Awesome 图标

## 🔧 自定义配置

### 添加新游戏
在 `js/script.js` 中的 `games` 数组添加新游戏：

```javascript
{
    id: 13,
    name: "New Game",
    thumbnail: "path/to/thumbnail.jpg",
    iframeUrl: "https://game-url.com",
    category: "action"
}
```

### 修改主题色
在 `css/style.css` 中修改 CSS 变量：

```css
:root {
    --primary-color: #your-color;
    --primary-dark: #your-dark-color;
}
```

### 添加新分类
1. 在 HTML 中添加分类按钮
2. 在 JavaScript 中添加分类逻辑
3. 在 CSS 中添加分类样式

## 🌐 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📄 许可证

MIT License - 详见 LICENSE 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📞 联系我们

- 网站: https://skillwarz.org
- 邮箱: contact@skillwarz.org
- GitHub: https://github.com/skillwarz

---

**SkillWarz** - 让游戏更简单，让快乐更纯粹！ 🎮✨
