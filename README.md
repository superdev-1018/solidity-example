# murshidazher.com

Personal website


## Features

- [Hugo](https://gohugo.io/)
- [nvm](https://github.com/nvm-sh/nvm#installation-and-update)
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
