# murshidazher.com

Personal website


## Features

- [Hugo](https://gohugo.io/)
- [nvm](https://github.com/nvm-sh/nvm#installation-and-update)
- [autoprefixer](https://github.com/postcss/autoprefixer) - to use PostCSS vendor prefixes
- `omf install nvm` > `nvm install stable`
- remove the function from `~/.config/fish/config.fish`
- add this in ` ~/.config/fish/functions/nvm.fish`

```
$NVM_DIR="$HOME/.nvm"
function nvm
    fenv source $NVM_DIR/nvm.sh \; nvm $argv
end
```

- `refresh` to refresh the terminal
  - ex `nvm install 6.11.1`
- `node -v > .nvmrc`
- `nvm use` to use the file
- `husky` node version problem, see this [link](https://github.com/typicode/husky/issues/247) to upgrade `lint-staged`

