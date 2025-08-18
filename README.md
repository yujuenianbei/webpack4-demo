# Webpack Demo Project

这是一个使用 Webpack 构建的示例项目。

## 项目简介

本项目演示了如何使用 Webpack 来打包一个简单的 Web 应用程序。它包含了以下功能：
- 使用 Lodash 库
- 加载 CSS 文件
- 处理图片和字体文件
- 设置开发服务器
- 模块热替换 (Hot Module Replacement)

## 运行项目

### 安装依赖

在项目根目录下，运行以下命令安装所需依赖：

```bash
npm install
```

### 开发模式

Webpack 提供了多种方式来运行和开发项目：

1.  **构建项目**: 运行 `npm run start` 或 `npm run watch` 来构建项目。构建后的文件将输出到 `dist` 目录。
2.  **启动开发服务器**: 运行 `npm run wpserver` 启动一个带有热替换功能的开发服务器。访问 `http://localhost:8080` 查看应用。
3.  **启动自定义服务器**: 运行 `npm run server` 启动一个基于 Express 的自定义服务器。访问 `http://localhost:3000` 查看应用。

### 生产构建

要为生产环境构建项目，请修改 `webpack.config.js` 中的 `mode` 为 `production`，然后运行：

```bash
npm run start
```
