# Gulp-playground

### What is Lumber?
Lumber is a starter project using Jekyll, as well as most of what's considered an 'atom' in material ui, as well as bootstrap. Lumber was designed to get you off the ground as quick as possible, instead of having to re-write or recycle markup, it's all there already!

### Depndancies

- Node (https://nodejs.org/en/ v8.11.3)
- Jekyll (gem install jekyll)
- Gulp (npm i -g gulp)

### How to use?
Lumber relies on Jekyll includes, as well as passing props to them. For instance, `{% include 1-atoms/bootstrap/btn.html text = 'Hello' type = 'primary'}` will render out a bootstrap primary button. You can use the button as you would a normal one, except a few things are made easier.

If you want to control a modal, use the following

`{% include 1-atoms/bootstrap/btn.html text = 'Hello' type = 'primary' modal = 'modalId'}`

If you'd like to control a collapse, add it as a prop

`{% include 1-atoms/bootstrap/btn.html text = 'Hello' type = 'primary' collapse = 'collapseId'}`

Includes also support booleans for some props, so you can `closemodal = ''` or `disabled = ''`, which would close the modal currently open, or make the button disabled.

**Tip**
While viewing any page in the browser, pressing **option + s** (alt + s) will invoke docs for all atoms, including all available props and notes where necessary! These details are available within each file as well, but are much nicer to check out in the browser!
