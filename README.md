## 輸出結果
見此專案中的 xxx-demo.png

## 執行方式
如果有 node 環境
```bash
git clone xxx
cd xxx
node index.js
# 修改 index.js 中 calculateRestHolders函式的參數
# calculateRestHolders(10, 99) // 韭菜數量，割韭菜次數
```
如果沒有 node 環境
```bash
git clone xxx
open index.html by browser and see result by devtool console
# 修改 index.html 中 calculateRestHolders函式的參數
# calculateRestHolders(10, 99) // 韭菜數量，割韭菜次數
```

## 解題思路
### 理解題目與前提
1. 一開始不了解割韭菜對於使用者持有的幣會有什麼影響
2. 觀看範例輸入輸出之後推敲：割韭菜等於放消息給韭菜
3. 韭菜收到消息會根據持有比特幣的情況賣出或買入(手上有就賣，手上沒有就買)
4. 首先將韭菜數量以及割韭菜的數量當做可變動的參數輸入
5. 考慮到沒有使用者介面，就算有，如果放消息的次數多了，一個一個輸入也很麻煩，所以放消息的範圍以亂數計算得出

### 大方向總結
> 產生一個放消息給韭菜的陣列，以這個陣列對持有幣的韭菜進行運算，持有為 `true`, 不持有為 `false`, 最後計算 `true` 的數量

### 程式撰寫
1. 寫一個代表放消息給哪些韭菜的函式 `generateRandomCuttedList`，此函式回傳陣列 `expectedCuttedList`，陣列中的數量代表割韭菜次數，子陣列中的值代表範圍，最小值不小於 1, 最大值不可超過韭菜數量
ex. 當韭菜數量為 100， 割韭菜次數為 5
```js
...
[
  [1, 100],
  [2, 50],
  [5, 10],
  [55, 66],
  [70, 88],
]
```
2. 將韭菜數量轉換成布林值的陣列 `leeks`，true 代表持有，false 代表沒持有，一開始都是持有的
ex. 當韭菜數量為5
```js
[true, true, true, true, true]
```
3. forEach `expectedCuttedList`，在 `leeks` 當中找到對應的韭菜，如果韭菜的值為 true, 值改為 false, 反之亦然。
4. 計算 leeks 中值為 true 的數量
5. 給執行函式 `calculateRestHolders` 加上驗證防呆 `inputIsValid`
