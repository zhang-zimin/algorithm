# 数据结构与算法练习项目

这个项目我用来提升数据结构与算法的理解和应用能力。每个算法都包含详细的实现和测试用例。

## 项目结构

```
.
├── README.md
├── longestSubstring.js    # 最长无重复字符子串算法
└── ...                    # 更多算法实现文件
```

## 已实现的算法

### 1. 最长无重复字符子串 (Longest Substring Without Repeating Characters)

- **文件**: `longestSubstring.js`
- **难度**: 中等
- **描述**: 给定一个字符串，找出其中不含有重复字符的最长子串的长度。
- **示例**:
  ```javascript
  Input: "abcd"
  Output: 4
  ```
- **实现思路**: 使用滑动窗口和哈希表来跟踪字符位置，时间复杂度 O(n)，空间复杂度 O(min(m, n))。

## 如何运行

1. 确保已安装 Node.js 环境
2. 直接运行对应的 JavaScript 文件：
   ```bash
   node longestSubstring.js
   ```

## 学习资源

- [LeetCode](https://leetcode.com/)
- [力扣](https://leetcode.cn/)
- [算法可视化](https://visualgo.net/) 