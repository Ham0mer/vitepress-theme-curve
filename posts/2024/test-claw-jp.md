---
title: 【VDS测评】黑五4刀/月ClawCloud 日本G口 2C2G40G1T
tags: [测评]
categories: [主机测评]
date: 2024-11-23
description: ClawCloud 日本G口 2C2G40G1T 4刀/月
articleGPT: ClawCloud日本VPS测评，包含配置和性能数据。
cover: https://pp.qwq.gs/i/2024/11/23/xedg9l.png
---

## 套餐详情
|  名称  |   vCpu   |   内存  |   硬盘 | 带宽  | 流量 | IP | 价格      |
| :----: | :------: | :----: | :----: | :-----: | :----: | :--: | :---------: |
|   黑五日本   | 2 vCpu | 2 GB | 40 GB| 1 Gbps| 1 TB | V4 | ~~10\$~~ 4$/mo |

## 配置详情
```bash
CPU 型号          : Intel(R) Xeon(R) Platinum 8269CY CPU @ 2.50GHz
CPU 核心数        : 2
CPU 频率          : 2500.090 MHz
CPU 缓存          : L1: 32.00 KB / L2: 1.00 MB / L3: 35.75 MB
AES-NI指令集      : ✔ Enabled
VM-x/AMD-V支持    : ❌ Disabled
内存              : 370.95 MiB / 1.93 GiB
Swap              : [ no swap partition or swap file detected ]
硬盘空间          : 2.05 GiB / 39.21 GiB
启动盘路径        : /dev/vda1
系统在线时间      : 0 days, 4 hour 45 min
负载              : 0.11, 0.17, 0.20
系统              : Debian GNU/Linux 12 (bookworm) (x86_64)
架构              : x86_64 (64 Bit)
内核              : 6.1.0-26-cloud-amd64
TCP加速方式       : cubic
虚拟化架构        : KVM
NAT类型           : Full Cone
IPV4 ASN          : AS45102 Alibaba (US) Technology Co., Ltd.
IPV4 位置         : Tokyo / Tokyo / JP
```

## CPU测试
```bash
CPU 测试中 (Fast Mode, 1-Pass @ 5sec)
1 线程测试(单核)得分: 		882 Scores
2 线程测试(多核)得分: 		1455 Scores
```

## 内存测试
```bash
内存测试 Test (Fast Mode, 1-Pass @ 5sec)
单线程读测试:		18028.03 MB/s
单线程写测试:		14376.15 MB/s
```

## 磁盘fio读写测试
|Block Size | 4k(IOPS) | 64k(IOPS)|
|  :------:   | :-------:  | :--------: |
|Read       | 83.01 MB/s   (20.7k) | 354.87 MB/s   (5.5k)|
|Write      | 83.23 MB/s   (20.8k) | 356.74 MB/s   (5.5k)|
|Total      | 166.24 MB/s  (41.5k) | 711.62 MB/s  (11.1k)|
                 
|Block Size | 512k          (IOPS) | 1m            (IOPS)|
|  :------:   | :-------:  | :--------: |
|Read       | 353.62 MB/s    (690) | 331.24 MB/s    (323)|
|Write      | 372.41 MB/s    (727) | 353.31 MB/s    (345)|
|Total      | 726.03 MB/s   (1.4k) | 684.55 MB/s    (668)|

## 流媒体
![流媒体](https://pp.qwq.gs/i/2024/11/23/x788un.svg)

## 三网回程路由
```bash
广州电信 58.60.188.222
1.03 ms 	* RFC1918
3.43 ms 	* RFC1918
52.67 ms 	* 中国 香港
2.71 ms 	AS2914 日本 东京都 东京 gin.ntt.net
10.40 ms 	AS2914 [NTT-BACKBONE] 日本 东京都 东京 gin.ntt.net
256.69 ms 	AS2914 [NTT-BACKBONE] 日本 东京都 东京 gin.ntt.net
211.81 ms 	AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn 电信
164.02 ms 	AS4134 [CHINANET-BB] 中国 广东 广州 www.chinatelecom.com.cn 电信
120.45 ms 	AS4134 中国 广东 深圳 福田区 www.chinatelecom.com.cn 电信
广州联通 210.21.196.6
102.30 ms 	* DOD
1.35 ms 	* RFC1918
2.60 ms 	* RFC1918
2.40 ms 	* 中国 香港
2.45 ms 	AS10099 [CUG-BACKBONE] 日本 东京都 东京 chinaunicomglobal.com
2.63 ms 	AS10099 [CUG-BACKBONE] 日本 东京都 东京 chinaunicomglobal.com 联通
38.26 ms 	AS4837 [CU169-BACKBONE] 中国 上海 chinaunicom.cn 联通
33.86 ms 	AS4837 [CU169-BACKBONE] 中国 上海 chinaunicom.cn 联通
126.15 ms 	AS17816 [UNICOM-GD] 中国 广东省 广州市 chinaunicom.cn 联通
63.74 ms 	AS17623 [APNIC-AP] 中国 广东 深圳 chinaunicom.cn 联通
60.76 ms 	AS17623 [APNIC-AP] 中国 广东 深圳 宝安区 chinaunicom.cn 联通
广州移动 120.196.165.24
1.13 ms 	* RFC1918
2.15 ms 	* RFC1918
3.33 ms 	AS58453 [CMI-INT] 日本 东京都 东京 cmi.chinamobile.com 移动
61.49 ms 	AS58453 [CMI-INT] 中国 香港 cmi.chinamobile.com
63.58 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
87.79 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
66.39 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
66.80 ms 	AS9808 [CMNET] 中国 广东 广州 chinamobileltd.com 移动
66.30 ms 	AS56040 [APNIC-AP] 中国 广东 深圳 gd.10086.cn 移动
```