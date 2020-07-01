# Exercice Redux

## Créer un nouveau projet todo-redux 

En reprenant soit votre code, soit la correction (plus simple car TodoForm est un composant controllé)

## Installer redux

`npm install redux react-redux`

## Le state 

Le state devra avoir cette forme là

```
{
  newTodo: 'Achet',
  todos: [{
    id: 1,
    title: 'Acheter du pain',
    completed: false,
  }, {
    id: 2,
    title: 'Aller au sport',
    completed: true,
  }, {
    id: 3,
    title: 'Utiliser Redux',
    completed: false,
  }],
}
```

## Créer store

Reprendre le code de hello-redux dans index.js

Prévoir des valeurs initiales (comme avec count)

## Ecrire le reducer se basant sur les actions TODO_ADD, TODO_CHANGE

Créer les constantes TODO_ADD, TODO_CHANGE

Traiter TODO_CHANGE. L'action TODO_CHANGE ressemblera à :

```
{
  type: 'TODO_CHANGE',
  payload: 'Ache'
}
```

Traiter TODO_ADD. L'action TODO_ADD ressemblera à :

```
{
  type: 'TODO_ADD',
  payload: {
    id: 123,
    title: 'Acheter du pain',
    completed: false,
  }
}
```

Attention à penser à créer un nouveau state, et un nouveau tableau dans le cas de TODO_ADD (changement immuable)

Avec l'extension Redux Devtools, tester via le bouton dispatch que les reducer fonctionne

## Ecrire les versions connectées des composants TodoForm et TodoList

Ecrire la fonction mapStateToProps (les clés retournées sont les props des composant TodoForm : newTodo, TodoList: todos)

Si possible rechercher dans le state avec un selecteur (selectors.js)

Pour TodoForm il y aura un mapDispatchToProps avec 2 clés :
- onTodoChange
- onTodoAdd

Qui doit dispatcher les actions correspondant (celle testées via l'extension)

Si possible créer les actions via des actions creators (actions.js)

## Optionnel (TODO_DELETE)  