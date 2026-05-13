# prd-review-kit

产品需求文档（PRD）审核工作流 Skill，适用于 Hermes Agent。

## 功能

- 交互式 PRD 审核，支持飞书文档在线读取
- 三档审核结论：合格 / 需优化 / 需重写
- 自动对照 PRD 必备结构（概述/需求范围/功能详情/配置项设计）
- 审核结果表格化回写飞书文档

## 安装

```bash
npx prd-review-kit
```

安装后，下次审核 PRD 时将自动加载此 skill。

## 使用

在 Hermes Agent 中提供飞书文档链接即可触发审核流程：

```
审核这个PRD：https://xxx.feishu.cn/wiki/xxx
```

## 文件结构

```
SKILL.md                      # 审核工作流定义
references/
  ops_web_standard.md         # 运营中台审核标准
  standards_generic.md        # 通用审核标准
```
