1. What problem does the context API help solve?

Context API allows you to send props to components in a single tree without having to drill props or set up a central state manager like redux

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are information coming from an event in the browser like input on a form or a button click. Reducers manage the action by allocating a specific case for each one, and then updating state accordingly. Store is a central file directory from which you can manage all these state driven actions and reducers outside of the context of props.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that is being used at multiple levels and branches of the application. This is usually something wide reaching that would be difficult or time consuming to do through prop drilling since you would have to include a behemoth of an app component to make it work. Component state is state that is localized to one component and the actions it needs to perform. This state only needs to exist inside of one particular component and doesn't need to be used elsewhere in the app

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk essentially intercepts all actions and parses it. Thunk checks to see if the action is a simple object or a function. If it's a function it will perform some type of operation on it and pass it on. If it's an object it will simply pass the action on to the reducer/components

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Weirdly I enjoy redux, because it makes sense conceptually more than a lot of the other things we're done. Keeping everything managed centrally allows for easier to apply logic inside components, however this comes with the massive downside of writing a small novel's worth of code to even set it up. I can definitely see how it would be useful inside of large applications, but for the projects we've been doing its been a little overkill (though this is obviously to make it easier for us to learn since it's hard to learn how something works when it's massive and complex).
