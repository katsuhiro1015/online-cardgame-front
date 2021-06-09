# online-cardgame-front

Online card game React front app

## プロジェクトの作成

```
$ docker-compose run --rm online-cardgame-front sh -c "npm install -g create-react-app && create-react-app react-app --template typescript"
```

## プロジェクトの起動と停止

起動

```
$ docker-compose up
```

停止

```
$ docker-compose stop
```

## 環境準備

```
$ npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
$ touch .prettierrc.js
```

.prettierrc.js

```
module.exports = {
  trailingComma: "es5",
  tabWidth: 4,
  printWidth: 100,
  singleQuote: true,
};
```

※ vscode に prettier code formatter を入れておく

package.json

```
    "eslintConfig": {
        "extends": [
            "react-app",
            "react-app/jest",
+           "plugin:@typescript-eslint/recommended",
+           "plugin:prettier/recommended"
        ]
    },
```

```
$ touch .editorconfig
```

.editorconfig

```
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false

[*.{yml,yaml}]
indent_size = 2
```

.vscode/setting.json

```
{
  "typescript.tsdk": "node_modules/typescript/lib",
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
}
```

## 整形

```
$ npx eslint --ext .ts,.tsx --ignore-path .gitignore . --fix
```

# npm install

styled component

```
$ npm install styled-components
$ npm --save-dev install @types/styled-components
```

router

```
$ npm install react-router-dom
$ npm --save-dev install @types/react-router-dom
```

axios

```
$ npm install axios
$ npm --save-dev install @types/axios
```

material-ui

```
$ npm install @material-ui/core
$ npm install @material-ui/icons
$ npm --save-dev install @types/material-ui
```
