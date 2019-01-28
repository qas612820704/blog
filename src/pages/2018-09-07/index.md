---
title: "如何在 react 的數字 input 加入逗號"
cover: /Daily.jpeg
category: react
date: "2018-09-07"
tags:
  - react
  - js
draft: false
---

![Image](demo.gif)

```jsx
class Foo extends Component {
  state = {
    price: 100,
  }

  onPriceChange = (e) => {
    const priceWithComma = e.target.value;
    const price = parseInt(priceWithComma.split(',').join(''), 10);
    this.setState({ price });
  }

  render() {
    return (
      <input
        value={this.state.price.toLocaleString()}
        onChange={this.onPriceChange}
      />
    );
  }
}
```
