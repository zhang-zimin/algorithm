function longestSubstring(s) {
  let left = 0, max = 0
  const map = new Map()
  for (let right = 0; right < s.length; right++) {
    const char = s[right]
    if (map.has(char) && map.get(char) >= left) {
      left = map.get(char) + 1
    }
    map.set(char, right)
    max = Math.max(max, right - left + 1)
  }
  return max
}

const str1 = "abcd";
console.log('longestSubstring(\'abcd\')', longestSubstring(str1)); 