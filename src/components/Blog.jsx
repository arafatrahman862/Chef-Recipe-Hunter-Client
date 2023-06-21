import React from 'react';
import Navbar from './Navbar';

const Blog = () => {
    return (
        <div className='p-8 text-black'>
            <p className='text-center text-4xl font-semibold underline'>Blog</p>
            <p className='text-3xl font-semibold py-3'>Tell us the differences between uncontrolled and controlled components?</p>
            <p>In React, a component is a reusable piece of code that can be rendered in different parts of an application. Components can be either controlled or uncontrolled depending on how they manage their state.

                An uncontrolled component is a component that manages its own state internally, without any input from the parent component or other external sources. This means that the parent component has no control over the state of the uncontrolled component, and cannot directly modify its state. An example of an uncontrolled component is an HTML input field that has its own internal state, such as a text input field that stores the user's input locally.</p>

                <p className='text-3xl font-semibold py-3'>How to validate React props using PropTypes?</p>
                <p>When developing a React application, you’ll need to structure and define your props to avoid bugs and errors. Just like a function might have mandatory arguments, a React component might require a prop to be defined, otherwise, it will not render properly. Forgetting to pass a required prop into a component that needs it could cause your app to behave unexpectedly.</p>

                <p className='text-3xl font-semibold py-3'>Tell us the difference between nodejs and express js?

</p>
                <p>Node.js is a runtime environment that allows developers to run JavaScript code on the server-side. It provides a non-blocking, event-driven model that enables developers to build scalable, high-performance applications. With Node.js, developers can create server-side applications, command-line tools, and even desktop applications using JavaScript.</p>
                <p className='text-3xl font-semibold py-3'>What is a custom hook, and why will you create a custom hook?</p>
                <p>A custom hook is a reusable function that encapsulates some common logic that can be shared across different React components. Custom hooks allow developers to abstract complex logic into a single, reusable function and use it in different parts of their application. Custom hooks also help to reduce code duplication, improve code organization, and make code more modular and testable.</p>
        </div>
    );
};

export default Blog;