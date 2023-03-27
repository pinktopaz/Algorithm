/여기 안에 정규식을 써주면 됨/옵션
ex. /abc/gm

---

### 정규식 옵션

- g : 해당하는 문자열에서 정규식에 해당하는 모든 덩어리를 찾아줌
- m : multiline / 줄바꿈이 있는 경우 한 문장 단위로 정규식에 해당하는 덩어리를 찾아줌. 이 옵션이 없을 경우 줄바꿈이 있는 전체 문자열에서 하나의 덩어리 만을 찾아줌
- i : 대소문자 무시

---

### 정규식 문법

1. 그룹과 범위

   - | : 또는 ex. /a|b/gm : 문자열에서 a 또는 b를 모두 찾아줌
   - () : 괄호 안에 있는 글자를 하나의 덩어리로 인식
     ex. /(abcd)/gm : abcd를 모두 찾아줌, 만약 a 혹은 b 혹은 c 혹은 d로 하고 싶으면 /(a|b|c|d)/gm
   - [] : 괄호 안의 문자들을 하나하나씩 인식
     ex. /[abcd]/gm : a 혹은 b 혹은 c 혹은 d를 찾아줌
     ex2. [a-z] : a부터 z까지를 모두 찾아줌
   - [^] : 부정 문자셋, 괄호의 어떤 문자가 아닐 때
     ex. [^a-za-z] : a-zA-z 빼고 모든 것을 찾아줌
   - ?: : 그룹으로 관리하지 않는다는 건데 밑에 문제를 보면 더 잘 이해가 됨

2. 수량과 관련

   - ? : 있거나 없거나
     ex. /gra?y/gm : gry, gray 모두 찾아줌
   - - : 있거나 없거나 많거나
       ex. /gra\*y/gm : gry, gray, graay 모두 찾아줌
   - - : 하나 또는 많이
       ex. /gra+y/gm : gray, graay, graaaaay ...
   - {n} : n번 반복
     ex. /gra{3}y/gm : graaay 찾아줌
   - {min, } : 최소 min번 반복
     ex. /gra{2,}y/gm : graay, graaay...
   - {min, max} : 최소, 그리고 최대
     ex. /gra{2,3}y/gm : graay, graaay

3. 경계

   - \b : 단어 경계
     ex. /\bYa/ : Ya로 시작하는 단어의 Ya를 찾아줌
     ex2. /Ya\b/ : Ya로 끝나는 단어의 Ya를 찾아줌
   - \B : 단어경계가 아님
     ex. /\BYa/ : Ya가 들어간 단어에서 시작의 Ya를 제외한 덩어리를 찾아줌 (YaYaYa에서 뒤에 YaYa)
     ex2. /Ya\B/ : Ya가 들어간 단어에서 끝의 Ya를 제외한 덩어리를 찾아줌
   - ^ : 문장의 시작
     ex. /^Ya/gm : 문장에서 시작하는 Ya를 찾아줌 (Ya YaYa Ba 에서 맨 처음 Ya)
   - $ : 문장의 끝
     ex. /^Ya/gm : 문장에서 끝의 Ya를 찾아줌
     $\rightarrow$ 여기서 m 설정 안해주면 줄 바꿈 있는 경우에 Ya가 들어간 중간의 어떤 문장 잡아내지 못하고 전체 문자열의 맨 뒤에 있는 Ya만 찾음

4. character classes

- . : 모든 문자열 선택 ex././
- \ : 특수문자 .,[ 등이 있는지 찾고 싶을 때 ex./\.\[/
- \d : 숫자 ex. /\d{3}/ : 숫자 세자리
- \D : 숫자가 아님
- \w : 문자
- \W : 문자가 아님
- \s : 공백
- \S : 공백이 아님

---

### 퀴즈

```javascript
dream.coder.ellie@gmail.com
hello@daum.net
hello@daum.co.kr

010-898-0893
010 898 0893
010.898.0893
010-405-3412
02-878-8888

https://www.youtu.be/-ZClicWm0zM
https://youtu.be/-ZClicWm0zM
youtu.be/-ZClicWm0zM
```

1. 상단 문자열에서 전화번호만 선택하고 싶다면?
   : /\d{2,3}[-.\s]\d{3}[-.\s]\d{4}/gm
2. 상단 문자열에서 이메일만 선택하고 싶다면?
   : /[a-zA-Z0-9._+-]+@[a-zA-Z0-9]+\.[a-zA-Z0-9.]+/gm
3. 세가지 다른 유튜브 주소에서 아이디만 가져오고 싶다면?
   : regex = /(?:https?:\/\/)?(?:www\.)?youtu.be\/([a-zA-Z0-9-]{11})/gm
   ?: 로 인해 그룹 3개 중에 뒤에 있는 ([a-zA-Z0-9-]{11}) 이 부분만 그룹으로 캡쳐가 되어서
   url.match(regex)를 했을 때 1번 인덱스에 그룹으로 캡쳐가된 아이디가 들어오게 된다!
