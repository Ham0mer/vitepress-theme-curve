---
title: 壁纸
aside: false
card: true
---

<script setup>
import Bing from "@/views/Bing.vue"
</script>

<Bing />

> bing接口

### 接口文档

##### GET_IMAGE 获取当天图片

请求方法: `GET`

默认地址: `https://bing.dogb.cn/api/getImage` 

参数(query): 无。

请求示例:

```GET
https://bing.dogb.cn/api/getImage
```

返回示例: 直接返回当天图片，可直接用作图片URL。



##### GET_LIST 获取图片列表

请求方法: `GET`

默认地址: `https://bing.dogb.cn/api/getList` 

参数(query):

| Key         | Value  | 说明         |
| ----------- | ------ | ------------ |
| pageSize    | Number | 每页数据条数 |
| currentPage | Number | 目标页数     |

请求示例:

```GET
https://bing.dogb.cn//api/getList?pageSize=3&currentPage=2
```

返回示例:

```json
{
    "totle": 10,
    "list": [
        {
            "id": 7,
            "title": "亚伯拉罕湖中的树，加拿大艾伯塔 (© Coolbiere/Getty Images)",
            "date": "2021-04-15",
            "base64": "data:image/jpeg;base64,/9j/4AAQSkZJ...",
            "url": {
                "hd": "https://bing.dogb.cn/img/2021/04/15/2021-04-15_hd.jpg",
                "uhd": "https://bing.dogb.cn/img/2021/04/15/2021-04-15_uhd.jpg",
                "gaussian": "https://bing.dogb.cn/img/2021/04/15/2021-04-15_hd_gaussian_20.jpg",
                "greyscale": "https://bing.dogb.cn/img/2021/04/15/2021-04-15_hd_greyscale.jpg",
                "thumbnail": "https://bing.dogb.cn/img/2021/04/15/2021-04-15_hd_thumbnail_480_270.jpg"
            },
            "color": {
                "Muted": "#5182ac",
                "Vibrant": "#24a3c8",
                "DarkMuted": "#314257",
                "LightMuted": "#93aecb",
                "DarkVibrant": "#115d7b",
                "LightVibrant": "#7ec2de"
            },
            "timestamp": "2021-04-15T08:34:50.000Z"
        },
        // more...
    ]
}
```



##### GET_INFO 获取图片详情

请求方法: `GET`

默认地址: `https://bing.dogb.cn/api/getInfo` 

参数(query):

| Key  | Value  | 说明   |
| ---- | ------ | ------ |
| id   | Number | 数据ID |

请求示例:

```GET
https://bing.dogb.cn/api/getInfo?id=1
```

返回示例:

```javascript
{
    "info": {
        "id": 1,
        "title": "塞勒斯堡的玉米迷宫，宾夕法尼亚州，美国 (© Alex Potemkin/Getty Images)",
        "date": "2023-10-23",
        "base64": "data:image/jpeg;base64,/9j/4AAQSk...",
        "url": {
            "hd": "/img/2023/10/23/2023-10-23_hd.jpg",
            "uhd": "/img/2023/10/23/2023-10-23_uhd.jpg",
            "greyscale": "/img/2023/10/23/2023-10-23_hd_greyscale.jpg",
            "thumbnail": "/img/2023/10/23/2023-10-23_hd_thumbnail_480_270.jpg",
            "gaussian": "/img/2023/10/23/2023-10-23_hd_gaussian_20.jpg"
        },
        "color": {
            "Vibrant": "#dd9413",
            "DarkVibrant": "#70600e",
            "LightVibrant": "#e9c36b",
            "Muted": "#3c6c4c",
            "DarkMuted": "#4e4c32",
            "LightMuted": "#856314"
        },
        "timestamp": "2023-10-23T01:09:30.000Z"
    }
}
```
