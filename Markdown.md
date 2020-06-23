# Markdownの書き方


```markdown
# 見出し1
## 見出し2
### 見出し3 
#### 見出し4
##### 見出し5
###### 見出し6
```
# 見出し1
## 見出し2
### 見出し3 
#### 見出し4
##### 見出し5
###### 見出し6

```markdown
- リスト1
    - ネスト リスト1_1
        - ネスト リスト1_1_1
        - ネスト リスト1_1_2
    - ネスト リスト1_2
- リスト2
- リスト3
```

- リスト1
    - ネスト リスト1_1
        - ネスト リスト1_1_1
        - ネスト リスト1_1_2
    - ネスト リスト1_2
- リスト2
- リスト3

```markdown
1. 番号付きリスト1
    1. 番号付きリスト1_1
    1. 番号付きリスト1_2
1. 番号付きリスト2
1. 番号付きリスト3
```

1. 番号付きリスト1
    1. 番号付きリスト1_1
    1. 番号付きリスト1_2
1. 番号付きリスト2
1. 番号付きリスト3

```markdown
> お世話になります。xxxです。
> 
> ご連絡いただいた、バグの件ですが、仕様です。
```
> お世話になります。xxxです。
> 
> ご連絡いただいた、バグの件ですが、仕様です。

```markdown
> お世話になります。xxxです。
> 
> ご連絡いただいた、バグの件ですが、仕様です。
>> お世話になります。 yyyです。
>> 
>> あの新機能バグってるっすね
```
> お世話になります。xxxです。
> 
> ご連絡いただいた、バグの件ですが、仕様です。
>> お世話になります。 yyyです。
>> 
>> あの新機能バグってるっすね

```markdown
 # Tab
    class Hoge
        def hoge
            print 'hoge'
        end
    end

---

    # Space
    class Hoge
      def hoge
        print 'hoge'
      end
    end
```
 # Tab
    class Hoge
        def hoge
            print 'hoge'
        end
    end

---

    # Space
    class Hoge
      def hoge
        print 'hoge'
      end
    end


```markdown
インストールコマンドは `gem install hoge` です
```
インストールコマンドは `gem install hoge` です

```markdown
normal *italic* normal
normal _italic_ normal
normal **bold** normal
normal __bold__ normal
normal ***bold*** normal
normal ___bold___ normal
```
normal *italic* normal

normal _italic_ normal

normal **bold** normal

normal __bold__ normal

normal ***bold*** normal 

normal ___bold___ normal


```markdown
***
___
---
*    *    *
```
***

___

---

*    *    *

```markdown
[Google先生](https://www.google.co.jp/)

[google]:https://www.google.co.jp/
[こっちからgoogle][google]
その他の文章
[こっちからもgoogle][google]
```
[Google先生](https://www.google.co.jp/)

[google]:https://www.google.co.jp/
[こっちからgoogle][google]
その他の文章
[こっちからもgoogle][google]
