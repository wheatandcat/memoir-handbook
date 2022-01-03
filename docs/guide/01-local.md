# Handbookを編集する

## 1. リポジトリをクローン

```bash
$ git clone https://github.com/wheatandcat/memoir-handbook
```

## 2. docsify-cliをインストール

```bash
$ npm i docsify-cli -g
```

## 3. ローカル環境を起動

```bash
$ docsify serve ./docs/
```

## 4. ローカル環境にアクセス

```bash
$ open http://localhost:3000/
```

## 5. Handbookを編集する

以下の2つのどちらかの方法で編集を行なう。
 - [方法1. WEBブラウザで編集する](guide/01-local?id=方法1-webブラウザで編集する)
 - [方法2. ローカル環境で編集する](guide/01-local?id=方法2-ローカル環境で編集する)


### 方法1. WEBブラウザで編集する

 - 1. [memoir-handbook](https://github.com/wheatandcat/memoir-handbook)を開く
 - 2. mainのブランチボタンをクリック
 - 3. inputにブランチ名を入力して、`Create branch`をクリック
   - ※ブランチ名はユニークな名前ならOK（例: wheatandcat-update-gide-01）
 - 4. 作成したブランチ名を選択して、編集したいファイルを開く（もし新規ファイルを追加する場合は`Add file`からファイルを追加）
 - 5. ファイルを開いた状態で`Edit this file`をクリック
 - 6. 修正したい内容を記載して`Commit changes`をクリック
 - 7. 4〜7を繰り返し修正したい内容を反映させる
 - 8. 上記の修正を確認したい場合は、ローカルのリポジトリで以下のコマンドを実行（※以下のコマンドはブランチ名をwheatandcat-update-gide-01にした際の例）
   - ```bash
     $ git reset --hard origin/wheatandcat-update-gide-01
     $ docsify serve ./docs/
     $ open http://localhost:3000/
     ```

### 方法2. ローカル環境で編集する

 - 1. 以下のコマンドでブランチを作成。※ブランチ名はユニークな名前ならOK（例: wheatandcat-update-gide-01）
    - ```bash
      $ git checkout -b wheatandcat-update-gide-01 origin/main
      ```
 - ２. 以下のコマンドでローカル環境を起動
    - ```bash
      $ docsify serve ./docs/
      ```
 - 3. 修正したい内容で各ファイルを修正
 - 4. 集成したファイルを以下のコマンドでcommit
    - ```bash
      $ git add *
      $ git commit -am "修正した内容を記載"
      ```
 - 5. 以下のコマンドで修正したブランチをpush（※以下のコマンドはブランチ名をwheatandcat-update-gide-01にした際の例）
    - ```bash
      $ git push origin wheatandcat-update-gide-01
      ```


## 6. Pull Requestを作成する

 - 1. [memoir-handbook](https://github.com/wheatandcat/memoir-handbook)を開く
 - 2. `Pull Requests`のタブを開く
 - 3. `New pull request`をクリック
 - 4. `base:main ← compare:作成したブランチ名`で`Create pull request`をクリック
 - 5. `Title`と`Body`に修正した内容を記載し、修正内容の差分を確認して`Create pull request`をクリック

## 7. Pull Requestをマージする

  - Pull Requestをレビューし問題なければ`Squash and merge`をクリック

## 8. ステージング環境に反映されている確認

 -  [ステージング環境](https://wheatandcat.github.io/memoir-handbook/#/)に修正が反映されているか確認