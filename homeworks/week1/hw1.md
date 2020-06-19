# 寫作業 & 交作業流程

## 寫作業
1. 透過課程連結將 GitHub 上的 Lidemy/mentor-program-4th-panoopan clone 到電腦裡
2. 新開一個 branch(Ex:week1) 並 checkout 到這個 branch 中 
3. 進入 mentor-program-4th-panoopan 中的 homeworks 資料夾
4. 開始將作業寫在指定的檔案中
5. 記得將修改過的檔案 add 並 commit
**==一定要在新開的 branch 中寫作業！！！！==**

## 交作業
**==一週的作業要每個都寫好再一起發 PR！！！！==**
1. 寫完當週全部作業
2. `git push origin week1` 將 local(自己電腦) 的 branch 推到遠端(GitHub)去
3. 在 GitHub Lidemy/mentor-program-4th-panoopan 頁面上到 “pull requests”按 Compare & pull request(如果沒出現就按 New pull request)
5. 往下滑檢視更新的內容與要繳交的作業內容相符，確認後打主旨與內容，按 Create pull request
6. 到學習系統上的『作業列表』按『新增作業』，選擇第幾週並勾選問題
7. 複製 PR 連結（第 5. 步驟按 Create pull request 之後的網頁畫面），並貼上送出作業
8. 作業列表顯示作業
9. 等待助教改完作業，並將遠端的 branch merge 到遠端的 master
10. 到 “pull requests”頁面確認 branch 已顯示  merged，表示作業改完了
11.  `git checkout master`在 local 切換到 master 
12.  `git pull origin master`把 local 的 master 與遠端的 master 同步
13.  `git branch -d week1`把 local 的 branch 刪除

![ＨＷ流程](https://img.onl/KeiOda)

## 與我的 master 同步
1. 在 mentor-program-4th-panoopan 資料夾 checkout 到 master
2. `git status` 確認沒有進行中的東西
3. 到 GitHub mentor-program-4th 按 clone 複製網址
4. `git pull 網址 master`把新的改動拉下來
5. :wq 離開 vim 視窗
6. `git push origin master`與遠端(mentor-program-4th-panoopan)的 master 同步

## References
[[MTR04] 寫作業與交作業流程](https://lidemy.com/courses/932146/lectures/17312878)


