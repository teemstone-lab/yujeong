
/**
 * @roxi/routify 2.18.8
 * File generated Fri Apr 21 2023 17:37:43 GMT+0900 (대한민국 표준시)
 */

export const __version = "2.18.8"
export const __timestamp = "2023-04-21T08:37:43.809Z"

//buildRoutes
import { buildClientTree } from "@roxi/routify/runtime/buildRoutes"

//imports


//options
export const options = {}

//tree
export const _tree = {
  "name": "root",
  "filepath": "/",
  "root": true,
  "ownMeta": {},
  "absolutePath": "src/pages",
  "children": [
    {
      "isFile": false,
      "isDir": true,
      "file": "async",
      "filepath": "/async",
      "name": "async",
      "ext": "",
      "badExt": false,
      "absolutePath": "E:/project/yujeong/src/pages/async",
      "children": [],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/async"
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "html",
      "filepath": "/html",
      "name": "html",
      "ext": "",
      "badExt": false,
      "absolutePath": "E:/project/yujeong/src/pages/html",
      "children": [
        {
          "isFile": false,
          "isDir": true,
          "file": "components",
          "filepath": "/html/components",
          "name": "components",
          "ext": "",
          "badExt": false,
          "absolutePath": "E:/project/yujeong/src/pages/html/components",
          "children": [
            {
              "isFile": true,
              "isDir": false,
              "file": "Body.svelte",
              "filepath": "/html/components/Body.svelte",
              "name": "Body",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "E:/project/yujeong/src/pages/html/components/Body.svelte",
              "importPath": "../src/pages/html/components/Body.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/html/components/Body",
              "id": "_html_components_Body",
              "component": () => import('../src/pages/html/components/Body.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "ChartTab.svelte",
              "filepath": "/html/components/ChartTab.svelte",
              "name": "ChartTab",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "E:/project/yujeong/src/pages/html/components/ChartTab.svelte",
              "importPath": "../src/pages/html/components/ChartTab.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/html/components/ChartTab",
              "id": "_html_components_ChartTab",
              "component": () => import('../src/pages/html/components/ChartTab.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "Footer.svelte",
              "filepath": "/html/components/Footer.svelte",
              "name": "Footer",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "E:/project/yujeong/src/pages/html/components/Footer.svelte",
              "importPath": "../src/pages/html/components/Footer.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/html/components/Footer",
              "id": "_html_components_Footer",
              "component": () => import('../src/pages/html/components/Footer.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "Header.svelte",
              "filepath": "/html/components/Header.svelte",
              "name": "Header",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "E:/project/yujeong/src/pages/html/components/Header.svelte",
              "importPath": "../src/pages/html/components/Header.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/html/components/Header",
              "id": "_html_components_Header",
              "component": () => import('../src/pages/html/components/Header.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "HostTree.svelte",
              "filepath": "/html/components/HostTree.svelte",
              "name": "HostTree",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "E:/project/yujeong/src/pages/html/components/HostTree.svelte",
              "importPath": "../src/pages/html/components/HostTree.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/html/components/HostTree",
              "id": "_html_components_HostTree",
              "component": () => import('../src/pages/html/components/HostTree.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "TodoHeader.svelte",
              "filepath": "/html/components/TodoHeader.svelte",
              "name": "TodoHeader",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "E:/project/yujeong/src/pages/html/components/TodoHeader.svelte",
              "importPath": "../src/pages/html/components/TodoHeader.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/html/components/TodoHeader",
              "id": "_html_components_TodoHeader",
              "component": () => import('../src/pages/html/components/TodoHeader.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "TodoItem.svelte",
              "filepath": "/html/components/TodoItem.svelte",
              "name": "TodoItem",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "E:/project/yujeong/src/pages/html/components/TodoItem.svelte",
              "importPath": "../src/pages/html/components/TodoItem.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/html/components/TodoItem",
              "id": "_html_components_TodoItem",
              "component": () => import('../src/pages/html/components/TodoItem.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "TodoItem2.svelte",
              "filepath": "/html/components/TodoItem2.svelte",
              "name": "TodoItem2",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "E:/project/yujeong/src/pages/html/components/TodoItem2.svelte",
              "importPath": "../src/pages/html/components/TodoItem2.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/html/components/TodoItem2",
              "id": "_html_components_TodoItem2",
              "component": () => import('../src/pages/html/components/TodoItem2.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "TodoList.svelte",
              "filepath": "/html/components/TodoList.svelte",
              "name": "TodoList",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "E:/project/yujeong/src/pages/html/components/TodoList.svelte",
              "importPath": "../src/pages/html/components/TodoList.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/html/components/TodoList",
              "id": "_html_components_TodoList",
              "component": () => import('../src/pages/html/components/TodoList.svelte').then(m => m.default)
            },
            {
              "isFile": true,
              "isDir": false,
              "file": "TodoList2.svelte",
              "filepath": "/html/components/TodoList2.svelte",
              "name": "TodoList2",
              "ext": "svelte",
              "badExt": false,
              "absolutePath": "E:/project/yujeong/src/pages/html/components/TodoList2.svelte",
              "importPath": "../src/pages/html/components/TodoList2.svelte",
              "isLayout": false,
              "isReset": false,
              "isIndex": false,
              "isFallback": false,
              "isPage": true,
              "ownMeta": {},
              "meta": {
                "recursive": true,
                "preload": false,
                "prerender": true
              },
              "path": "/html/components/TodoList2",
              "id": "_html_components_TodoList2",
              "component": () => import('../src/pages/html/components/TodoList2.svelte').then(m => m.default)
            }
          ],
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": false,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/html/components"
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "todoApp.svelte",
          "filepath": "/html/todoApp.svelte",
          "name": "todoApp",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "E:/project/yujeong/src/pages/html/todoApp.svelte",
          "importPath": "../src/pages/html/todoApp.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/html/todoApp",
          "id": "_html_todoApp",
          "component": () => import('../src/pages/html/todoApp.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "wknd9_main.svelte",
          "filepath": "/html/wknd9_main.svelte",
          "name": "wknd9_main",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "E:/project/yujeong/src/pages/html/wknd9_main.svelte",
          "importPath": "../src/pages/html/wknd9_main.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/html/wknd9_main",
          "id": "_html_wknd9_main",
          "component": () => import('../src/pages/html/wknd9_main.svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "wknd10_AppTodo.svelte",
          "filepath": "/html/wknd10_AppTodo.svelte",
          "name": "wknd10_AppTodo",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "E:/project/yujeong/src/pages/html/wknd10_AppTodo.svelte",
          "importPath": "../src/pages/html/wknd10_AppTodo.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/html/wknd10_AppTodo",
          "id": "_html_wknd10_AppTodo",
          "component": () => import('../src/pages/html/wknd10_AppTodo.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/html"
    },
    {
      "isFile": true,
      "isDir": false,
      "file": "index.svelte",
      "filepath": "/index.svelte",
      "name": "index",
      "ext": "svelte",
      "badExt": false,
      "absolutePath": "E:/project/yujeong/src/pages/index.svelte",
      "importPath": "../src/pages/index.svelte",
      "isLayout": false,
      "isReset": false,
      "isIndex": true,
      "isFallback": false,
      "isPage": true,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/index",
      "id": "_index",
      "component": () => import('../src/pages/index.svelte').then(m => m.default)
    },
    {
      "isFile": false,
      "isDir": true,
      "file": "test",
      "filepath": "/test",
      "name": "test",
      "ext": "",
      "badExt": false,
      "absolutePath": "E:/project/yujeong/src/pages/test",
      "children": [
        {
          "isFile": true,
          "isDir": false,
          "file": "[slug].svelte",
          "filepath": "/test/[slug].svelte",
          "name": "[slug]",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "E:/project/yujeong/src/pages/test/[slug].svelte",
          "importPath": "../src/pages/test/[slug].svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/test/:slug",
          "id": "_test__slug",
          "component": () => import('../src/pages/test/[slug].svelte').then(m => m.default)
        },
        {
          "isFile": true,
          "isDir": false,
          "file": "array.svelte",
          "filepath": "/test/array.svelte",
          "name": "array",
          "ext": "svelte",
          "badExt": false,
          "absolutePath": "E:/project/yujeong/src/pages/test/array.svelte",
          "importPath": "../src/pages/test/array.svelte",
          "isLayout": false,
          "isReset": false,
          "isIndex": false,
          "isFallback": false,
          "isPage": true,
          "ownMeta": {},
          "meta": {
            "recursive": true,
            "preload": false,
            "prerender": true
          },
          "path": "/test/array",
          "id": "_test_array",
          "component": () => import('../src/pages/test/array.svelte').then(m => m.default)
        }
      ],
      "isLayout": false,
      "isReset": false,
      "isIndex": false,
      "isFallback": false,
      "isPage": false,
      "ownMeta": {},
      "meta": {
        "recursive": true,
        "preload": false,
        "prerender": true
      },
      "path": "/test"
    }
  ],
  "isLayout": false,
  "isReset": false,
  "isIndex": false,
  "isFallback": false,
  "meta": {
    "recursive": true,
    "preload": false,
    "prerender": true
  },
  "path": "/"
}


export const {tree, routes} = buildClientTree(_tree)

