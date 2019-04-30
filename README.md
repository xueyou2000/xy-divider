| ![IE](https://github.com/alrra/browser-logos/blob/master/src/edge/edge_48x48.png?raw=true) | ![Chrome](https://github.com/alrra/browser-logos/blob/master/src/chrome/chrome_48x48.png?raw=true) | ![Firefox](https://github.com/alrra/browser-logos/blob/master/src/firefox/firefox_48x48.png?raw=true) | ![Opera](https://github.com/alrra/browser-logos/blob/master/src/opera/opera_48x48.png?raw=true) | ![Safari](https://github.com/alrra/browser-logos/blob/master/src/safari/safari_48x48.png?raw=true) |
| ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| IE 10+ ✔                                                                                   | Chrome 31.0+ ✔                                                                                     | Firefox 31.0+ ✔                                                                                       | Opera 30.0+ ✔                                                                                   | Safari 7.0+ ✔                                                                                      |

![NPM version](http://img.shields.io/npm/v/xy-divider.svg?style=flat-square)
![node version](https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square)
![npm download](https://img.shields.io/npm/dm/xy-divider.svg?style=flat-square)

[![xy-divider](https://nodei.co/npm/xy-divider.png)](https://npmjs.org/package/xy-divider)

# xy-divider

分割线组件

## 安装

```bash
# yarn
yarn add xy-divider classNames
```

## 使用例子

```tsx
import React from "react";
import ReactDOM from "react-dom";
import Divider from "xy-divider";
ReactDOM.render(<Divider dashed={true}>分割线</Divider>, container);
```

## API

| 属性        | 说明             | 类型                    | 默认值       |
| ----------- | ---------------- | ----------------------- | ------------ |
| dashed      | 是否虚线         | boolean                 | false        |
| children    | 内容             | React.ReactNode         | 无           |
| type        | 水品还是垂直类型 | "horizontal"/"vertical" | "horizontal" |
| orientation | 分割线标题的位置 | "left"/"right"/"center" | "center"     |

## 开发

```sh
yarn run start
```

## 例子

http://localhost:6006

## 测试

```
yarn run test
```

## 开源许可

xy-divider is released under the MIT license.
