
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
The components folder is for storing React JSX components and any closely coupled supporting code.

```javascript
  ˪ types
    ˪ <NameOfType>.ts
     ...
```

Use the types folder for types shared between the various components that are _component specific_ (i.e. props/function arguments). If a type doesn't need to be shared define it in the file that uses it.

```javascript
  ˪ hooks
     ˪ <HookName>.ts
     ...
```

Reusable hooks that can be shared between components that do not deal in global state. If the hook is specific to a given component - define it locally within that component.

```javascript
  ˪ shared
    ˪ <ComponentName>.tsx
    ...
```

Components shared across this app, but not abstract enough to be pulled out of the application entirely and added to `shared_libs` or another library inside of `shared_libs`.
```javascript

  ˪ <organizational_folder>
    ˪ <ComponentName>.tsx
    ...
```
Too many files in this directory? Make logical sub-folders to group them.

```javascript
˪ state
```
The directory is intended to house code related to the global state of the application. It is intentionally kept separate from the rest of the application because the elements within are by their nature reusable and strive to be agnostic of specific component concerns.

```javascript
   ˪ <duck|state_node_name>
```

Divide this directory up based on the major nodes of the state tree. If the state for the application isn't that complex this directory may not be necessary.

 ```javascript
    ˪ actions
```
For action creators.

```javascript
      ˪ helpers
```
I am finding more and more that we need specific state helpers that we can use to glue bits of code together.

```javascript
      ˪ reducers
```
For reducers
```javascript
      ˪ types
```
Types specific to this specific duck/state node

```javascript
   ˪ shared
   ...
```
The same thing as a specific duck/state node but for code that is shared between ducks/nodes. If it can be abstracted out of the application it should go into `shared_libs`.

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
