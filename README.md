# 数据结构与算法练习项目

这个项目我用来提升数据结构与算法的理解和应用能力。每个算法都包含详细的实现和测试用例。

## 项目结构

```
.
├── README.md
├── longestSubstring.js    # 最长无重复字符子串算法
├── twoNum.js             # 两数之和算法
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

### 2. 两数之和 (Two Sum)

- **文件**: `twoNum.js`
- **难度**: 简单
- **描述**: 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值的那两个整数，并返回它们的数组下标。
- **示例**:
  ```javascript
  Input: nums = [1,2,3,4,5,6,7], target = 8
  Output: [2,5]  // 因为 nums[2] + nums[5] = 3 + 5 = 8
  ```
- **实现思路**: 使用哈希表（Map）存储遍历过的数字及其索引，时间复杂度 O(n)，空间复杂度 O(n)。

## 如何运行

1. 确保已安装 Node.js 环境
2. 直接运行对应的 JavaScript 文件：
   ```bash
   node longestSubstring.js
   # 或
   node twoNum.js
   ```
