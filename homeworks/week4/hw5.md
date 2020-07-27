## 請以自己的話解釋 API 是什麼
* API(Application Programming Interface) = 應用程式介面
* 透過 API，可以讓雙方交換資料，在應用程式、資料庫和裝置之間串連，傳送資料並創造連結。
* 以便利商店為例，店面就像平常我們看的到的網頁或是應用程式，陳列在架上的商品就是數據，後面的倉庫就是資料庫。而 API 則是店員的角色，負責把倉庫裡的商品擺放到架上，並且知道商品的擺放位置，而閱讀 API 文件就像是詢問店員哪種商品放在哪裡，依照店員的指示，就可以拿到所需的商品，這就是串接 API 的方法。

## 請找出三個課程沒教的 HTTP status code 並簡單介紹
> 資訊回應 (Informational responses, 100–199)
* 100 Continue
此臨時回應表明，目前為止的一切完好，而用戶端應當繼續完成請求、或是在已完成請求的情況下，忽略此資訊。
* 101 Switching Protocol
此狀態碼乃為用戶端 Upgrade 請求標頭發送之回應、且表明伺服器亦切換中。
* 102 Processing (WebDAV)
此狀態碼表明伺服器收到並處理請求中，但目前未有回應。
* 103 Early Hints
此狀態碼主要與 Link 標頭有關：它能讓用戶代理（user agent）能在伺服器準備回應前能 preloading 資源。

> 成功回應 (Successful responses, 200–299)
* 205 Reset Content
伺服器成功處理了請求，但沒有返回任何內容。與204回應不同，此回應要求請求者重設文件視圖。
* 206 Partial Content
伺服器已經成功處理了部分GET請求。
* 207 Multi-Status (WebDAV)
代表之後的訊息體將是一個XML訊息，並且可能依照之前子請求數量的不同，包含一系列獨立的回應代碼。
* 208 Multi-Status (WebDAV)
DAV繫結的成員已經在（多狀態）回應之前的部分被列舉，且未被再次包含。

> 重定向 (Redirects, 300–399)
* 307 Temporary Redirect
伺服器發送此回應來使客戶端保持請求方法不變向新的地址發出請求。 與 302 Found 相同，差別在於客戶端不許變更請求方法。例如，應使用另一個 POST 請求來重複發送 POST 請求。
* 308 Permanent Redirect
請求和所有將來的請求應該使用另一個URI重複。 307和308重複302和301的行為，但不允許HTTP方法更改。

> 用戶端錯誤 (Client errors, 400–499)
* 405 Method Not Allowed
伺服器理解此請求方法，但它被禁用或不可用。有兩個強制性方法：GET 與 HEAD，永遠不該被禁止、也不該回傳此錯誤碼。
* 409 Conflict
表示請求與伺服器目前狀態衝突。
* 413 Payload Too Large
請求的實體資料大小超過了伺服器定義的上限，伺服器會關閉連接或返回一個 Retry-After 回應頭。

> 伺服器端錯誤 (Server errors, 500–599)
* 505 HTTP Version Not Supported
請求使用的 HTTP 版本不被伺服器支援。
* 507 Insufficient Storage（WebDAV；RFC 4918）
伺服器無法儲存完成請求所必須的內容。這個狀況被認為是臨時的。
* 508 Loop Detected （WebDAV；RFC 5842）
伺服器在處理請求時陷入無窮迴圈。

(參考資料:[維基百科](HTTP狀態碼)、[MDN](https://developer.mozilla.org/zh-TW/docs/Web/HTTP/Status))


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

Base URL: https://www.foodponda.com
    | 說明           | Method | path | 參數 | 範例  |
    | --------------| ------ | ---- | ---- | ---- |
    | 回傳所有餐廳資料 | GET    |/stores| _limit:限制回傳資料數量 |/stores?_limit=5
    | 回傳單一餐廳資料 | GET    | /stores/:id | 無 | /stores/10 |
    | 新增餐廳        | POST   | /stores | name: 店名 |   無   |
    | 刪除餐廳        | DELETE | /stores/:id | 無 |    無  |
    | 更改餐廳        | PATCH  | /stores/:id| name: 店名 | 無     |