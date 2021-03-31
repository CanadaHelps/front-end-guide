
# Breaking Down the App Template SRC Folder Structure

This is the folder structure that we will use for building CHOUI applications.

```javascript
src
```
The application source root.

```javascript
˪ api
  ˪ <apiClientName>.ts
  ˪ ...

```
This folder contains API endpoint handlers, object mappers and necessary types to support them. If an API client is developed using swagger or is generalized enough to be used by multiple apps it belongs in its own CHOUI npm package and should not be included here.


```javascript
˪ components
  ˪ <ComponentName>.tsx
  ˪ ...

```
The components folder is for storing React JSX components and any closely coupled supporting code (types, helpers, higher order functions, etc.).

```javascript
˪ hooks
  ˪ <hookName>.ts
  ˪ ...

```
The hooks folder is for storing reusable hooks use across components. Anything highly specific should remain in the file with the component that utilizes it.

```javascript
˪ provider
  ˪ <providerName>.tsx
  ˪ ...

```
Context providers for those applications utilizing context.

```javascript
˪ reducers
  ˪ index.ts
  ˪ ...

```
Reducers for applications that utilize them (i.e. from the userReducer hook)

```
˪ messages
```

The application's localization messages.

```
˪ style
```

scss for the application


```
˪ utils
```

A catch-all, global folder for useful utilities that don't really belong anywhere else. The contents of this folder can often times be moved outside of the application and into `shared_libs` if a given utility is general enough.