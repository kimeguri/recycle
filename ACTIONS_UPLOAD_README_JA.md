# GitHub Actions方式で編集しやすくする手順

## いまの設定

GitHub Pages の Source は `GitHub Actions` にしてください。

## アップロードするもの

`recycle-actions-source-upload.zip` の中身を GitHub の `kimeguri/recycle` にアップロードします。

重要:

- `node_modules` はアップロードしません。
- `dist` はアップロードしません。
- `index-107ff042.js` や `index-fa314f2e.css` などの完成後ファイルは不要です。
- `.github/workflows/deploy.yml` は必須です。

## GitHub上で編集するファイル

主に編集するのはこれです。

```txt
src/App.tsx
```

商品名、価格、文章などは `src/App.tsx` に入っています。

編集後に `Commit changes` すると、GitHub Actions が自動でサイトを作り直します。

## 公開URL

```txt
https://kimeguri.github.io/recycle/
```
