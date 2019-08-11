module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-trailing-spaces": 1,//一行结束后面不要有空格
    "no-extra-semi": 2,//禁止多余的冒号
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
}
