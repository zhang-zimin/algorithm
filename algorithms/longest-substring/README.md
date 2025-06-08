# 最长无重复字符子串 (Longest Substring Without Repeating Characters)

## 问题描述
给定一个字符串，找出其中不含有重复字符的最长子串的长度。

## 示例
```javascript
Input: "abcd"
Output: 4
```

## 实现思路
使用滑动窗口和哈希表来跟踪字符位置：
1. 使用 Map 存储字符及其位置
2. 维护一个滑动窗口，记录当前无重复字符的子串
3. 当遇到重复字符时，更新窗口的起始位置

## 复杂度分析
- 时间复杂度：O(n)，其中 n 是字符串的长度
- 空间复杂度：O(min(m, n))，其中 m 是字符集的大小

## 运行方法
```bash
node solution.js
``` 