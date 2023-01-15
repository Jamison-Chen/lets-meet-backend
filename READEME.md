# Let's Meet

## 環境要求

---

* [Git 2.35 +](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

* [MongoDB @6.0](https://www.mongodb.com/docs/manual/installation/)

## 建置開發環境

---

### 步驟一：安裝套件

```sh
npm install
```

### 步驟二：初始化資料庫

```sh
```

## 常用指令

---

### 在開發環境中啟動 server

```sh
npm run dev

# 或

npx nodemon ./src/index.ts
```

>在開發環境中，本專案使用 nodemon 達到「程式更動時，自動重啟 server」的效果。
>
>在開發環境中，本專案使用 ts-node 達到「即時編譯 TypeScript」的效果，這與 `tsc -w` 不同的是：後者會產出編譯完的 JavaScript，但前者不會。

## 建置正式環境

---
