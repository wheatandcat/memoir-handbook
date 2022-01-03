# ガイド

memoirはHandbookで、開発した機能のドキュメーテンションの管理をしている。<br/>
GitLabの[Handbook](https://about.gitlab.com/handbook/)の思想を参考に運用中。


## Handbookの編集ガイド

  - [Handbookを編集する](guide/01-local)



## ステージング環境と本番環境の運用ルール

ドキュメントサイトには、**ステージング環境**と**本番環境**が存在する。<br/>
運用ルールは以下を通りである。

|  環境  | ステージング環境  | 本番環境 |
| ---- | ---- | ---- |
|  デプロイタイミング  |  mainブランチにPushしたとき  | GitHubのtagをPushしたとき |
|  記載内容  |  リリース予定の機能も記載される  | リリースされている機能のみ記載される |
|  URL  |  https://wheatandcat.github.io/memoir-handbook/#/  | https://memoir-handbook-dot-memoir-review.an.r.appspot.com/#/ |
