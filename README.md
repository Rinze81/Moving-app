# Moving Mate

引っ越し比較・タスク・購入費用・メモをまとめる静的 Web アプリです。  
もともとの `localStorage` 中心構成を残しつつ、最小構成で Supabase に同期して 2 人で共有できるようにしています。

## 共有の考え方

- 共有単位は `shared_space`
- 1 つの `shared_space` に `properties / tasks / purchases / notes` をひも付け
- 画面上で `slug` または `共有コード` を入力すると同じデータに接続
- 接続していない間は従来どおり `localStorage` に保存
- 接続後はローカル保存を続けながら Supabase に同期

今回は最小構成なので、設定値や画像データはローカル寄りです。  
共有対象は `properties / tasks / purchases / notes` を優先しています。

## ファイル構成

- `index.html`: 画面本体
- `styles.css`: UI スタイル
- `app.js`: 既存ロジック + shared_space 接続 / Supabase 同期
- `config.example.js`: Supabase 設定の雛形
- `supabase/schema.sql`: テーブル / index / trigger / RLS

## Supabase の設定方法

1. Supabase プロジェクトの `Project URL` と `anon public key` を確認します。
2. `config.example.js` をコピーして `config.js` を作成します。
3. `config.js` に値を入れます。

```js
window.MOVING_MATE_CONFIG = {
  SUPABASE_URL: "https://YOUR_PROJECT.supabase.co",
  SUPABASE_ANON_KEY: "YOUR_SUPABASE_ANON_KEY"
};
```

`config.js` は `.gitignore` に入れてあるので、そのままコミットしない運用を想定しています。

## SQL の適用方法

1. Supabase Dashboard を開きます。
2. `SQL Editor` に [supabase/schema.sql](/C:/Users/FINE/Documents/Playground/supabase/schema.sql) の内容を貼ります。
3. 実行して、`shared_spaces / properties / tasks / purchases / notes` が作成されることを確認します。

## GitHub Pages で動かすときの注意

- GitHub Pages にはサーバー側の環境変数注入がないため、最初は `config.js` を手元やデプロイ工程で差し込むのが現実的です。
- `service role key` は絶対にフロントエンドへ置かないでください。
- この実装は `anon key` のみを使います。
- RLS は `x-shared-space-slug` / `x-shared-space-code` ヘッダーを見てアクセス範囲を絞る前提です。
- `slug` だけでも接続できる構成なので、実運用では推測しにくい `access_code` を併用するのをおすすめします。

## 無料枠での想定利用

- 利用人数: 2 人
- shared_space 数: まずは 1 つ
- データ量: 物件・タスク・購入費用・メモ中心
- 同時編集制御は未実装
- 競合時は最後に保存された内容が優先されやすい最小構成です

Free プランでも、今回の用途ならまず十分に試せる構成です。

## shared_space の使い方

1. アプリを開く
2. ダッシュボード上部の `共有スペース設定` に `shared_space 名` / `slug` / `共有コード` を入れる
3. 新規なら `新規作成`
4. 既存へ入るなら `接続する`
5. 既存のローカルデータを共有へ上げたい場合は `ローカルを共有へ反映`

接続後は、`properties / tasks / purchases / notes` の更新が Supabase に同期されます。  
接続状態と最終同期時刻は同じカード内で確認できます。

## 今回の実装での割り切り

- 共有対象は `properties / tasks / purchases / notes`
- 画面設定 (`movingDate`, `targetStation`, テーマ, フィルター状態) はローカル保存
- 画像は Supabase Storage にはまだ移していないため、この段階では共有対象外
- オフライン時はローカルに保存し、オンライン復帰後に再同期

## 将来 Auth を追加するなら

拡張しやすいポイントは次の通りです。

- `shared_spaces` に owner / member テーブルを追加する
- 現在の `slug / access_code` ベース接続を、`supabase.auth.getUser()` ベースへ差し替える
- RLS を `auth.uid()` で判定する方式へ移行する
- 画像を Supabase Storage に移し、`properties` にはファイル参照だけ持たせる
- Realtime を足して 2 人の編集反映を速くする
- 競合解決が必要になったら `updated_at` 比較や変更単位の細分化を入れる

今回はそこまで踏み込まず、静的アプリのまま「2 人で同じデータを見られる」ことを優先しています。
