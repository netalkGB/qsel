# qsel

## Example
```
curl -Ls https://traininfo.jreast.co.jp/train_info/kanto.aspx |qsel '#direction_soubu > table > tbody > tr:nth-child(5) > td > p.status_text'
```

## build 
```
yarn nexe index.js
```