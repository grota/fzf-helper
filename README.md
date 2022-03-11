# fzf-helper

fzf helper is a small nodejs project that I use on my personal machine to show a preview in fzf that shows the bindings of the current fzf invocation

Use the following snippet in you shell init files.

```
export FZF_DEFAULT_OPTS=--bind=\''alt-h:preview(node /path/to/fzf-helper/dist/tsc/main.js)'\'
```
