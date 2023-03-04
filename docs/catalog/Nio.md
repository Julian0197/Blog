---
title: Nio实习
author: MSK
date: "2023-03-04"
---

# 蔚来实习

- 敏捷开发(2 周，礼拜四旧项目上线产品发布新项目，礼拜五开始细分内容开发实现并完成自测，再交给测试，第二个礼拜四发布)

- 代码管理：gerrit 并逐步使用 gitLab
  - [ ] 两者的基本使用方式和优缺点
  - [ ] 配置 SSO，无密码登录，本地生成秘钥
- 项目分工：Jira
  - [ ] 掌握基本使用
- git 命令
  - [ ] gerrit 提交代码命令
  - [ ] git 原理（stash,rebase,head,checkout）
  - [ ] 处理冲突（实际使用到再总结）
- powerpro 主项目，负责 Prime 物联模块
  - [ ] 看懂项目结构，组件封装
  - [ ] vscode 自带区分中英文，搞明白库和基本使用
  - [ ] 微前端部署子项目，部署流程
  - [ ] router-link 动态路由
  - [ ] local 和内地、海外怎么区分的
  - [ ] .env.local 到 test 项目中拿到 token，记录下来，项目可以在 test 环境下运行在本机
  - [ ] 弄清楚项目开发 dev，测试 test，预生产 stg 模式的产生过程
  - [ ] 看了下封装的 component，layout 组件，empty 组件等
  - [ ] web 基于 element-UI，小程序基于 vant
  - [ ] 一些指令（build，eslint）
- 后续自己学习
  - [ ] vim 指令
  - [ ] 自己去部署微前端
  - [ ] nodejs 学习，自己写接口

复习 mini-vue

- [ ] computed，toTO`watch`、`watchEffect`功能

- [ ] ref 和 reactive

  如果数据有关联用 reactive，独立数据如表单对象 form.xxx 用 raw

- [ ] toRefs，toRaw

- [ ] setup 构建过程，为什么数据用到要在 setup 中 return，`<script setup>`不用 return

- [ ] vue3 组合式 API，`defineComponent`

- [ ] `expose`,`emit`用法和实现

- [ ] props 属性传值

- [ ] ::v-deep

typescript

- [ ] @column
- [ ] count!: number 定义属性，不被初始化就能使用
- [ ] 静态监测

**powergo 物模型北向接口新增权限：**

- arco-design，cedar 组件代替 elment-ui，看组件内部逻辑，组件复用（按需引用）
- model-base 数据模型框架，内部实现，isChanged
