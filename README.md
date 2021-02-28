# eslint-plugin-commented-exports

Forces exports to be commented

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-eslint-commented-exports`:

```
$ npm install eslint-plugin-eslint-commented-exports --save-dev
```


## Usage

Add `eslint-commented-exports` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "eslint-commented-exports"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "eslint-commented-exports/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





