---
draft: false
title: FEInterviewQuestions Videoteam
date: 2019-07-22T08:15:57.376Z
category: Web
tags:
  - KKStream
---
## CSS

### 1. Please illustrate an image of CSS box model.

![CSS Box Model](https://i.imgur.com/9inmNt8.png)

- **Content**_(藍色)_ - 內容文字
- **Padding**_(綠色)_ - 文字周圍的邊框, 也會是 `background` 包含的區域
- **Border**_(黃色)_ - 外框, 時常拿來配合做出特殊的形狀(e.g. 三角形), 還有排版需求上常常用 `box-sizing: border-box`, 就是讓 `width`, `height` 是 `content + padding + border` 的大小.
- **Margin**_(橘色)_ - 透明的最外框.

### 2. How would you approach fixing browser-specific styling issues? (Browser compatibility)

- 不支援過於過時的瀏覽器(e.g. IE), 私心來說我並沒有經歷過這段痛苦的時期

- 在 html 中加入 IE meta:

```html
<meta http-equiv="X-UA-Compatible" content="ie=edge">
```

- 看 https://caniuse.com/, 是否要使用的 `CSS` rule 有在預期支援的瀏覽器中

- 使用 `vendor prefix`:

```css
  -moz-*
  -webkit-*
  -o-*
```

- 使用 `CSS` 關鍵字 `@supports` 來向後兼容

```css
  @supports (display: flex) {
    div {
      display: flex;
    }
  }

  @supports not (display: flex) {
    div {
      float: left;
    }
  }
```

### 3. What's the difference between inline and inline-block?

最主要的差異是 `inline` 不能設定 `width` 及 `height`.

[![Edit wizardly-franklin-7oddz](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/wizardly-franklin-7oddz?fontsize=14)

<iframe src="https://codesandbox.io/embed/wizardly-franklin-7oddz?fontsize=14" title="wizardly-franklin-7oddz" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

### 4. Given an image photo.jpg which is 100x100, can you add html and css (no js) so that when the user hovers over the right half, a right arrow appears and when the user hover over the left half, a left arrow appears?

[![Edit zen-grass-7no9y](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/zen-grass-7no9y?fontsize=14)

<iframe src="https://codesandbox.io/embed/zen-grass-7no9y?fontsize=14" title="zen-grass-7no9y" allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>


## JS

### 1. What's the difference between a variable that is: null, undefined or undeclared? and how would you go about checking for any of these states?

- `undeclared` 是該變數未被宣告, 如果調用變數會拋出 `ReferenceError`,  例如:

```js
console.log(a); //ReferenceError
```

- `undefined` 是該變數被宣告(declared), 但是未被附值, 例如:

```js
let a;
console.log(a); // undefined
console.log(!!a); // false
```

- `null` 是該變數被宣告, 且被附值, 但該值為空值, 例如:

```js
let a = null;
console.log(a); // null
console.log(!!a); // false, 跟 undefined 一樣
```

---

- 只要使用 `===` 就可以辨別 `null` 和 `undefined`:

```js
let foo;
let bar = null;

console.log(foo === undefined, foo === null); // true, false
console.log(bar === undefined, bar === null); // false, true
```

- 如果想辨別 `undeclared` 可以用 try/catch:

```js
try {
  foo;
} catch (e) {
  console.log(e instanceof ReferenceError); // true
}
```

### 2. Could you explain what’s the favour(difference) of Linked List and Array ?


| Property    | Length    | In memory   |
| ----------- | --------- | ----------- |
| Array       | Fixed     | Continuous  |
| Linked List | Variable  | Distributed |


| Time Complexity | Add    | Remove | Insert | Get    | Find   |
| --------------- | ------ | ------ | ------ | ------ | ------ |
| Array           | $O(N)$ | $O(N)$ | $O(1)$ | $O(1)$ | $O(N)$ |
| Linked List     | $O(1)$ | $O(1)$ | $O(N)$ | $O(N)$ | $O(N)$ |

> Add, Remove 不包含找插入位子的複雜度

1. **Add:** 新增一個 element 到 list, Array 需要重新調整大小.
2. **Remove:** 新增一個 element 從 list, Array 需要重新調整大小.
3. **Insert:** 取代一個在 index 上的值, Linked List 需要從頭找到 index.
4. **Get:** 取一個 index 上的值, Linked List 需要從頭找到 index.
5. **Find:** 找一值在 list 中的 index.

實際上, 複雜度還取決於實做的目標, 例如維護一個 Sorted List:

```js
[ 1, 4, 6, 8, 12, 18]
```

Find 的複雜度就為:

| Time Complexity | Find   |
| --------------- | ------ |
| Array           | $O(logN)$ |
| Linked List     | $O(N)$ |

## Coding

### 1. Implement a function that remove duplicate words

```diff
input = "tony goes to park the park\npark, but is is, tire, tire\t tire";
output = "tony goes to park the park\n, but is , tire, \t ";
```

> 你好, output 的部份我認為第二個 `park`, 也應該被刪除的, 所以我的結果會依照下面的輸出結果.

```diff
input = "tony goes to park the park\npark, but is is, tire, tire\t tire";
-output = "tony goes to park the park\n, but is , tire, \t ";
+output = "tony goes to park the \n, but is , tire, \t ";
```

```js

/**
 * @param {string} str
 * @return {string}
 */
function removeDuplicateWords(str) {
  const words = new Set();

  // Keep separators
  const patterns = str.split(/([\n\t\s,])/g);

  return patterns
    .filter(pattern => {
      // pattern is word
      if (pattern.match(/\w+/) && words.has(pattern))
          return false;

      words.add(pattern);

      return true;
    })
    .join('');
}

```

**更正**: 刪除 _連續_ 重複的字

```js

/**
 * @param {string} str
 * @return {string}
 */
function removeContinuousDuplicateWords(str) {
  let prevWord = '';

  // Keep separators
  const patterns = str.split(/([\n\t\s,])/g);

  return patterns
    .filter(pattern => {
      let result = true;

      // pattern is word
      if (pattern.match(/\w+/)) {
        if (pattern === prevWord) {
          result = false;
        }
        prevWord = pattern;
      }

      return result;
    })
    .join('');
}


```

### 2. Find highest (max1) and second highest (max2) numbers from given array. (algorithm)

```js
input: [11, 70, 45, 33, 63, 85]
output: max1=85, max2=70
```

```js
/**
 * @param {number[]} numbers
 * @return {number[]} [max1, max2]
 */
function findTopTwoLarge(numbers) {
  if (numbers.length === 0) {
    return [null, null];
  }
  if (numbers.length === 1) {
    return [numbers[0], null];
  }

  return numbers
    .reduce((result, n) => {
      let [ max1, max2 ] = result;

      if (n > max1) {
        [ max1, max2 ] = [ n, max1 ];
      } else if (n > max2) {
        [ max1, max2 ] = [ max1, n ];
      }

      return [ max1, max2 ];
    }, [-Infinity, -Infinity]);
}

```
