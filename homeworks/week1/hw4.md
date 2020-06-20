# HW1-hw4：跟你朋友介紹 Git
> 因為你的人實在是太好，時不時就會有朋友跑來找你來幫忙。
這次來的是一個叫做菜哥的朋友，會叫做菜哥是因為家裡賣菜，跟你認識的其他人同名的話純屬巧合。
菜哥：「就是啊，我最近有一個煩惱。因為我的笑話太多了，所以我目前都用文字檔記錄在電腦裡，可是變得越來越多之後很難紀錄，而且我的笑話是會演進的。會有版本一、版本二甚至到版本十，這樣我就要建立好多個不同的檔案，弄得我頭很痛，聽說你們工程師都會用一種程式叫做 Git 來做版本控制，可以教我一下嗎？」
就是這樣，在一陣尬聊之中你答應了菜哥的要求，要教他怎麼使用 Git 來管理他的笑話。
因此，你必須教他 Git 的基本概念以及基礎的使用，例如說 add 跟 commit，若是還有時間的話可以連 push 或是 pull 都講，菜哥能不能順利成為電視笑話冠軍，就靠你了！

## 什麼是 Git
* Git 是一種版本控制系統(Version Control System)，每次新增、刪除或修改檔案內容，都是一種版本。「版本控制」就是記錄這些所有狀態變化，讓以後可以隨時回到某個版本時候的狀態。
![git是什麼](https://img.onl/h8NF4A)
(圖片來源:[為你自己學 Git](https://gitbook.tw/))
* **Git 與其他版本控制系統的差異**
  * 分散式系統：
   軟體開發者可以共同參與一個軟體開發專案，但是不必在相同的網路系統下進行，且在沒有伺服器或網路的情況下仍可進行版控，待有網路時再與其他人同步。
   
  * 處理檔案的方式：
   其它版控系統 (CVS、SVN) 為集中式版控系統(Centralize 
   Version    Control)，處理方式是在每次版本變化的時候，記錄每次
   不一樣的地方。
   
   ![其它版本控制1](https://img.onl/Vi24Xz)
   (圖片來源:[為你自己學 Git](https://gitbook.tw/))
   
   ![其它版本控制2](https://img.onl/uE3ov)
   (圖片來源:[Lidemy [GIT101] Git 超新手入門](https://lidemy.com/courses/enrolled/379441))
   
   而 Git 則是像拍照(snapshot)一樣，在每次版本變化的時候，更新並記錄整個目錄跟檔案的樹狀結構。
   ![Git snapshot1](https://img.onl/tASruE)
   (圖片來源:[為你自己學 Git](https://gitbook.tw/))
   
   ![Git snapshot2](https://img.onl/FyFGTV)
(圖片來源:[Lidemy [GIT101] Git 超新手入門](https://lidemy.com/courses/enrolled/379441))
   

## 為什麼要學 Git
**Git 優點**

  1. 免費、開源
  2. 速度快、體積小：紀錄檔案內容的 snapshot ，可以快速切換版本。
  3. 分散式版控系統(Distributed Version Control)：在沒有伺服器或網路的情況下，仍可以使用。

**Git 缺點**

易學難精

## 如何使用Git
Git 的運作機制：
先思考自己怎麼做版本控制，以下列步驟做為比喻
  ```
  1. 需要新版本：開一個資料夾
  2. 不想加入版本控制：不要加入資料夾
  3. 避免協作檔案版本號衝突：用看似亂碼的東西當作資料夾名稱
  4. 知道新版本：用一個檔案夾存
  5. 知道版本順序：用一個檔案夾記錄歷史順序
  ```
其實 Git 只是幫你做這些事而已 
      
### Git 指令
* **git init** 
    git 版本控制的起手式，在 terminal 輸入 git init，電腦就會開始對該檔案進行版本控制
    ```
    1. 創一個新資料夾
    2. $ git init --> 開始版本控制
    3. $ ls -al --> 會看到副檔名為 .git 的隱藏檔案，表示 git 正在本版控制
    4. $ rm -r .git --> 取消版本控制
    5. ls -al --> 發現 .git 檔案消失
    6. 重複步驟 2. 就可以重新開始版本控制 
    ```
    ![git init](https://img.onl/KpIrLp)
    
* **git status** 
    確認本版控制狀態
  ![git status](https://img.onl/6RNCmn)

* **git add & git rm --cached**
    將檔案加入 & 取消版本控制
    ```
    1. 在資料夾中創立多個檔案
    2. $ git status --> 發現檔案皆未加入本版控制
    3. $ git add 檔名 --> 將該檔案加入版本控制
    4. $ git rm --cached 檔名 --> 取消該檔案之版本控制
    5. $ git add . --> 將該資料夾所有檔案加入版本控制
    6. 重複步驟 4. 將不想加入版本控制的檔案移出
    7. $ git status --> 發現版本狀態會區隔為 "staged" 及   
       "untracked" 
    ```
    ![git add](https://img.onl/Cz8QU0)

*  **git commit**
    新建一個版本
    ```
    1. $ git commit --> 進入 vim 視窗，輸入新建版本名稱，或者
    2. $ git commit -m "新建版本名稱" --> 出現修改後的變動內容
    3. $ git status --> 觀察檔案變化
    ```
    ![git commit](https://img.onl/6H8OfN)
    
*  **git commit -am '檔名'**
    git add + git commit 合併用法，將檔案加入版本控制並新建版本。
    (注意!此方法只適用於修改之前已經 add 過的檔案，若是新建的檔案必須先 add 再 commit)
* **git log**
   歷史紀錄
   ```
   $ git log --> 查看檔案修改歷史紀錄，按 q 離開
   $ git log --oneline --> 簡短顯示歷史紀錄
   ```
   ![git log](https://img.onl/60Yk10)
   
* **串連上述步驟**
    ```
    1. 建立一個資料夾
    2. $ git init --> 開始版本控制
    3. 在資料夾中新增幾個檔案
    4. $ git status --> 確認版本控制狀態
    5. $ git add --> 把需要版本控制的檔案加入 
    6. $ git commit --> 建立新版本
    7. $ git log --> 查看檔案修改歷史紀錄
    8. 修改資料夾中的某個檔案內容並儲存
    9. $ git status --> 查看版本控制狀態，會顯示步驟 8. 的資料夾被修改過，但尚未暫存，表示改變的版本還沒被加入版本控制中
    10. $ git add --> 將該檔案加入版本控制
    11. $ git status --> 確認該檔案已加入版本控制中
    12. $ git commit -m "" --> 正式將這次更改的內容新建一個版本
    13. $ git log --> 查看檔案修改歷史紀錄 

* **git checkout** 
  回到過去的版本
    ```
    $ git log --> 查看版本號並複製
    $ git checkout 版本號 --> 回到此版本的狀態
    $ git checkout master --> 回到最新版本的狀態
    ```
    ![版本號](https://img.onl/DbKoGP)
* **.gitignore**
  將跟版本控制無關，需要忽略的檔案都放在這裡 
    ```
    $ touch .gitignore --> 新增 .gitignore 檔案
    $ vim .gitignore --> 開啟 vim 並將需要歸檔的檔名輸入儲存
    $ git status --> 確認
    ```
* **git commit -am ""** 
  git add + git commit -m ""
    ```
    每次要建立新版本時， 都可以用 $ git add . 將全部檔案加入版本控制，再用 $ git commit -m "新建版本名稱" 確立新版本，或者
    直接輸入$ git commit -am "新建版本名稱" 系統會自動將全部在 staged 的檔案都加入版本控制，並建立新版本
    ```
* **git diff**
  查看新舊版本差異

### Branch 指令
為什麼需要 Branch ?
因為如果整個專案的進度都在同一條線上的話不好管理，也很容易產生衝突，因此需要建立不同分支分別管理不同方向的調整，最後再整合起來。
![without branch](https://img.onl/qVy5qU)

![branch](https://img.onl/2kcbUD)

barnch 的實作原理
![branch work1](https://img.onl/DAKwXs)

![branch work2](https://img.onl/yhqJj8)

**指令**
* **git branch -v**
查看目前有哪些 branch
* **git branch 名稱**
新增 branch 
`$ git branch new-feature`
* **git branch -d 名稱**
刪除 branch 
`$ git branch -d new-feature`
* **git checkout branch名稱**
切換到別的 branch 
`$ git checkout new-feature`
* **git merge branch名稱**
合併 branch
`git merge new-feature` --> 把 new-feature 合併進來現在的分支
確認合併完成之後就可以刪除 branch `git branch -d new-feature`
* **解決衝突**
當兩個 branch 更改了同一個檔案，合併時會遇到 conflict (衝突)，此時只能用手動更改的方式，將想留下的內容儲存，並且 commit 為新的版本
![git cinflict](https://img.onl/lhevI9)

    ![git resolve commit](https://img.onl/6r01hA)
## GitHub
* **Git:** 版本控制程式
* **GitHub:** 放 Git repository(專案的儲存庫)的地方
* **如何把 code 放上 GitHub?**
  GitHub 首頁右上 **+** --> new repository --> 填寫資料送出 --> 按照指示將 command line 輸入到 terminal 中就可以了
  ![new repository1](https://img.onl/8VTtC4)
  ![new repository2](https://img.onl/41ADB1)
* **Git push** 
    把電腦上更新的檔案同步到 GitHub 上
    
    若修改專案中的檔案
    ```
    1. 修改檔案
    2. commit 新版本
    3. $ git push origin master
    4. github repository 同步完成
    ```
    ![git puch](https://img.onl/2s42RO)
   
   若新增 branch
    ```
    1. $ git branch 名稱
    2. checkout 到新的 branch
    3. $ git push origin 名稱
    4. gitHub repository 同步完成
    ```    
    新增 branch 之後，可以直接在 GitHub 上 merge，只要按 merge request 就可以了。
    
* **Git pull** 
    把 GitHub 上的檔案同步到電腦上
    
    1. `$ git pull origin master`
    2. gitHub repository 檔案下載完成
    3. 如果遇到 conflict 情況一樣手動解決，方法跟 merge branch 遇到衝突時一樣，commit 完記得 push 回去 GitHub。

* **git clone**
    下載 GitHub 上的 repository 
    ```
    1. 按 Clone or download (右上綠色按鍵)
    2. 直接 download zip ，或
    3. clone with SHH，複製 command line
    4. terminal 上打 git clone 複製的內容
    5. 成功將 repository 複製到電腦裡
    ```
    更改下載內容後可以 commit 到自己的電腦中，但沒有權限 push 回去 GitHub，因為這不是自己的 repository，若想要自己開一個專案修改，可以按右上角 fork 複製成自己的 repository，再照上述步驟就可以 push 回去。

* **GitHub Pages**
在 repository 的頁面點選 setting --> 往下找到 GitHub Pages --> 可以啟用選項 --> save --> 複製系統提供的網址 --> 開新網頁貼上網址 --> 在網址最後加上 repository 裡面的檔案名稱 --> 可以展示靜態網頁（可選擇不同版型，同時展示網頁及程式碼，適合用來展示作品
 
* **GitHub flow**
專案管理步驟
https://guides.github.com/introduction/flow/
前提是店能中的最新版本需與 GitHub 上的最新版本同步，如果不同時需要先 pull 最新版本下來，否則無法順利編輯。
    1. Create a branch：
    新增 branch 並 checkout 到這個 branch
    2. Add commit：
    修改檔案內容後，commit 一個新版本，並 push 到 GitHub 上
    3. Open a Pull Request：
    系統會偵測有沒有新的 branch，按下 compare&pull request 鍵，或到 pull request 分頁按 New pull request，選擇要 merge 的 branch。再來按 Create pull request 描述更改的內容
    4. Discuss and review your code
    5. Deploy
    6. Merge：
    等 pull request 被 approve 之後，branch 就可以順利 merge，記得刪除 branch

## 狀況排除
* 修改 commit 名稱
`git commit --amend`，如果你已經 commit 而且又 push 了，那就乖乖認命吧，這種情形下你在 local 端改的話可能會造成其他人的困擾。最好的方法還是 push 之前先檢查一下，避免錯的東西被放到遠端。
* 後悔 commit
  * `git reset HEAD^ --hard` --> 回到上一個 commit 的狀態，新增的 commit 會被刪除，而且檔案修改的內容也會消失
  * `git reset HEAD^ --soft` --> 回到上一個 commit 的狀態，新增的 commit 會被刪除，但檔案修改的內容會保留
* 還沒 commit，但改的東西不要了
`git checkout -- 檔名` --> 檔案修改內容回到上一步
* 改 branch 名稱
`git branch -m 新branch名稱`
* 抓遠端 branch 
`git checkout branch名稱` --> 跟查看本端 branch 的方法一樣，即使 GitHub 上的 branch 不在本端依然可以讀取

## 實戰練習
> 教菜哥怎麼使用 Git 來管理他的笑話。你必須教他 Git 的基本概念以及基礎的使用，例如說 add 跟 commit，若是還有時間的話可以連 push 或是 pull 都講。
* 開始版本控制
    1. 打開 terminal
    3. `cd  joke-king`：切換到存放笑話的資料夾
    4. `git init`：開始版本控制
    5. `ls` ：列出資料夾裡的所有檔案
    6. `touch .gitignore`：創建 .gitignore 資料夾
    7. `vim .gitignore` ：輸入跟版本控制無關的檔案名稱，將它們都放進 .gitignore
    8. `git add .`：把檔案全部加入版本控制
    9. `git status` ：確認檔案都在 staged 裡面
    10. `git commit -m "first version"`：建立版本 first version

* 新增 branch
如果整個專案的進度都在同一條線上的話不好管理，也很容易產生衝突，因此需要建立不同分支分別管理不同方向的調整，最後再整合起來
    1. `git branch new-feature`：新增分支 new-feature
    2. `git checkout new-feature`：切換到分支 new-feature
    3. 更改檔案 joke_8.txt 並儲存
    4. `git commit -am "new-feature one"`：將 joke_8.txt 加入版本控制，並建立新版本 new-feature one

    * 合併 branch
    1. `git checkout master`：切換到 master
    2. `git merge new-feature`：把 new-feature 分支合併到 master 中
    3. `git log`：查看檔案版本是否已經合併
    4. `git branch -d new-feature`：刪除 new-feature 分支

* GitHub
    1. GitHub 新增 new repository
    2. 修改檔案內容或新增 branch
    3. `git push origin master`：將檔案同步到 GitHub 
    4. 在 GitHub 上發出 pull request
    5. 待 merge 許可通過後刪除 branch
    6. `git pull origin master`：下次要修改檔案之前先與 GitHub 上的版本同步

## References 
[Lidemy [GIT101] Git 超新手入門](https://lidemy.com/courses/enrolled/379441)
[為你自己學 Git](https://gitbook.tw)

