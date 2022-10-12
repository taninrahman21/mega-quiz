import React from 'react';

const Blogs = () => {
  return (
    <div>
      <h1 className='text-center mt-8 text-3xl'>Here is some <span className='text-red-700 font-bold'>HOT</span> Questions about React</h1>
      <div className='mt-5 px-10'>
        <div className='mb-3'>
          <h1 className='text-2xl font-semibold'>Queation: 1. What is purpose of React Router?</h1>
          <p>ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route.</p>
        </div>
        <div className='mb-3'>
          <h1 className='text-2xl font-semibold'>Queation: 2. How does context Api works?</h1>
          <p>React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. Consumer as it so happens is a component that consumes and uses the state.</p>
        </div>
        <div>
          <h1 className='text-2xl font-semibold'>Queation: 3. What is useRef() hook in React?</h1>
          <p>The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.</p>
        </div>
      </div>
    </div>
  );
};

export default Blogs;