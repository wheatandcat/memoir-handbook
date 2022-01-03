# memoir Handbook

■ ステージング環境
https://wheatandcat.github.io/memoir-handbook/#/

■ 本番環境
https://memoir-handbook-dot-memoir-review.an.r.appspot.com/#/

## インストール

```bash
$ npm i docsify-cli -g
```


## ローカル起動


```bash
$ docsify serve ./docs/
```

## textlint


```bash
$ yarn textlint
```

## 本番環境デプロイ

```bash
$ git checkout main
$ git pull --ff-only origin main
$ git tag -a v1.0.0 -m 'リリース内容'
$ git push origin v1.0.0
```

## 環境変数設定


```bash
$ base64 -i gcpServiceAccount.json | pbcopy
```

```bash
$ base64 -i app.yaml | pbcopy
```




## デザイン
 - Icons by [Icons8](https://icons8.jp/)