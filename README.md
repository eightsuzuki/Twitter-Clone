# Twitter-Clone

https://twitter-clone-next-ibfs7avi4-eightsuzukis-projects.vercel.app/
こちらのサイトからデプロイしたものが見れます。デプロイしたものにはログイン機能は対応させていません。

## Description


学習目的で twitter（現 X）の主要機能を実装したクローンアプリです。以下の機能をサポートしています。

- Tweet (Post)
- Delete Tweet (Post)
- Comment & Like Tweet (Post)
- Signin & Signout using Google accounts

## App overview

### `/` Rootディレクトリー
　RootディレクトリーではTweet一覧、新規投稿フォーム、サイドバーのウィジェットが表示されます。

- `/` not Signed  
  未ログイン時はユーザーは新規投稿、Like、コメントを行うことができません。

<p align="center"> 
    <img width="400" alt="top page not signin" src="images/TopPageNotSignin.png"> 
</p>

- `/` Signed  
 ログイン時はユーザーは新規投稿、Like、コメントをすることができ、自分の投稿は出現するゴミ箱アイコンで削除することが可能になります。サイドバーに各種アイテムとログインしている自分のアカウントが表示されます。サイドバーのアイコンをクリックするとサインアウトすることができます。
<p align="center"> 
    <img width="400" alt="top page" src="images/TopPage.png"> 
</p>

### `/auth/signin` Auth ページ
NextAuthとFirebaseを使用してGoogleアカウントでSign inできるようになっています。
<p align="center"> 
    <img width="400" alt="auth page" src="images/AuthPage.png"> 
</p>

### `/posts/[id]` posts ページ
投稿をクリックすると投稿の詳細画面にいきコメントも見ることができます。
<p align="center"> 
    <img width="400" alt="postpage page" src="images/PostPage.png"> 
</p>

## DataModel

<p align="center"> 
    <img width="400" alt="Posts Data Model" src="images/dataModel/PostsDataModel.png"> 
</p>
<p align="center"> 
    <img width="400" alt="Comments Data Model" src="images/dataModel/CommentsDataModel.png"> 
</p>
<p align="center"> 
    <img width="400" alt="Likes Data Model" src="images/dataModel/LikesDataModel.png"> 
</p>

## Method
### Post　Component
1つのPostを表示するコンポーネントで、Postの情報を表示し、PostのLike、Commentの数を表示します。Deleteも可能です。
<p align="center"> 
    <img width="600" alt="Post Method" src="images/method/PostMethod.png"> 
</p>

<p align="center"> 
    <img width="300" alt="Post" src="images/Post.png"> 
</p>


### Comment　Component
Postに対するCommentを表示するコンポーネントで、Commentの情報を表示します。Deleteも可能です。
<p align="center"> 
    <img width="600" alt="Comment Method" src="images/method/CommentMethod.png"> 
</p>

<p align="center"> 
    <img width="300" alt="Comment" src="images/Comment.png"> 
</p>


### Comment Modal　Component
 Postに対するCommentを投稿するコンポーネントです。
<p align="center"> 
    <img width="600" alt="Comment Modal Method" src="images/method/CommentModalMethod.png"> 
</p>

<p align="center"> 
    <img width="300" alt="Comment Modal" src="images/CommentModal.png"> 
</p>

### Feed　Component
最新の投稿順に並べてPostを表示します。
<p align="center"> 
    <img width="600" alt="Feed Method" src="images/method/FeedMethod.png"> 
</p>

<p align="center"> 
    <img width="300" alt="Feed" src="images/Feed.png"> 
</p>

### Signin　Component
 NextAuth.JSとFirebaseを使用し認証します。getProviderで使用可能のproviderを取得します。今回のproviderはGoogleのみを指定しておりGoogle AccountでSign inできます。
<p align="center"> 
    <img width="600" alt="Signin Method" src="images/method/SigninMethod.png"> 
</p>

<p align="center"> 
    <img width="300" alt="Signin" src="images/Signin.png"> 
</p>

### Sidebar　Component
 サイドバーには、randomuserapi.comから取得したユーザー情報、saurav.techのNewsAPIを表示しています。
<p align="center"> 
    <img width="600" alt="Sidebar Method" src="images/method/SidebarMethod.png"> 
</p>

<p align="center"> 
    <img width="300" alt="Sidebar" src="images/Sidebar.png"> 
</p>

## Responsive Layout
このアプリはレスポンシブデザインになっており、Tailwind CSSを使用しています。
<p align="center"> 
    <img width="400" alt="top page not signin" src="images/TopPageResponsive.png"> 
</p>

## tech
- Next.js
- NextAuth.js
- Firebase
- Heroicons
- Moment.js
- Tailwind CSS
- Autoprefixer

## Getting Started

First, install modules and run the development server:

```bash
npm install --legacy-peer-deps
```
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Check firestore Datebase and storage expiry dates in firebase and change the rules if necessary.