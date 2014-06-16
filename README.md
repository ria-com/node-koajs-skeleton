node-koajs-skeleton
===================

A simple [Koajs Application Skeleton](https://github.com/ria-com/node-koajs-skeleton)

quick start
===========

**Checkout node-koajs-skeleton:**

```sh
$ git clone https://github.com/ria-com/node-koajs-skeleton
```

**Make your own new project:**

```sh
$ mv node-koajs-skeleton my_new_project
$ cd my_new_project
$ rm -rf .git
```

**Edit package.json:**

```sh
$ vi package.json
```

**Edit config/* files:**

```sh
$ vi config/default.js
```

simple test
===========

**Make your own spec-file for testing and start test:**

```sh
$ cd my_new_project
$ npm install
$ npm test
```


customize your application
==========================

**Choose your template system**

By default, implemented support [Ect](http://ectjs.com/) (by speed reasons)

[Consolidate](https://github.com/visionmedia/consolidate.js/): A list of all support template system

__NOTE__: you must still install the engines you wish to use, add them to your package.json dependencies.


roadmap
=======

   * Add authorization helper skeleton
   * Add logger helper skeleton
   * Add comments to skeleton code
