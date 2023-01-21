# Rick-Morty

Rick &amp; Morty characters repository

# Domain-Drive Design (DDD) file structure

The selected file structure for project is the next:

```
├── tests
│   └── unit
│       ├── repository
│       ├── shared
│       ├── router
│       ├── store
│       ├── views
│       └─ ...
│
├── src
│   ├── auth
│   │   ├── repository
│   │   ├── services
│   │   ├── support
│   │   ├── views
│   │   └─ ...
│   │
│   ├── shared
│   │   ├── store
│   │   ├── assets
│   │   ├── global-config
│   │   ├── router
│   │   ├── components
│   │   ├── support
│   │   │   ├── constants
│   │   │   └── models
│   │   └─ ...
│   │
│   ├── App.vue
│   └── main.ts
│
...
```
