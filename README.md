# ember-toggle-helper [![Build Status](https://travis-ci.org/poteto/ember-toggle-helper.svg?branch=master)](https://travis-ci.org/poteto/ember-toggle-helper) [![npm version](https://badge.fury.io/js/ember-toggle-helper.svg)](https://badge.fury.io/js/ember-toggle-helper)

## This addon has been deprecated and is no longer maintained
The `toggle` helper has been merged into [`ember-composable-helpers`](https://github.com/DockYard/ember-composable-helpers#toggle), please use that instead. You can specify to `only` import the `toggle` helper if you wish.

---

Dead simple toggle helper.

```
ember install ember-toggle-helper
```

## Usage

Use the `toggle` helper as an action.

```hbs
<button {{action (toggle this "isExpanded")}}>
  {{if isExpanded "I am expanded" "I am not"}}
</button>
```

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
