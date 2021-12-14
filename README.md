# 정규표현식(RegExp)

정규식, Regular Expression

## 역할

- 문자 검색(search)
- 문자 대체(replace)
- 문자 추출(extract)

## 테스트 사이트

https://regexr.com/

## 정규식 생성

```js
// 생성자
new RegExp("표현", "옵션") /
  //리터럴 방식
  표현 /
  옵션;

예제문자;
const str = `
010-1234-5678
regexp@gmail.com
https://www.naver.com
I love you
aabbccdd
`;
```

## 메소드

| 메소드  | 문법                               | 설명                             |
| ------- | ---------------------------------- | -------------------------------- |
| text    | `정규식.text(문자열)`              | 일치 여부(Boolean) 반환          |
| match   | `문자열.match(정규식)`             | 일치하는 문자의 배열(Array) 반환 |
| replace | `문자열.replace(정규식, 대체문자)` | 일치하는 문자를 대체             |

## 플래그(옵션)

| 플래그 | 설명                                        |
| ------ | ------------------------------------------- |
| g      | 모든 문자 일치(global)                      |
| i      | 영어 대소문자를 구분 않고 일치(ignore case) |
| m      | 여러 줄 일치(multi line)                    |
