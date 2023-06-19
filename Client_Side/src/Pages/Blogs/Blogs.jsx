import React from "react";
import Usetitle from "../../Hooks/Usetitle";

const Blogs = () => {
  Usetitle("Blogs");

  return (
    <div className="flex text-yellow-700 bg-pink-100 border-4 max-w-full m-10">
      <div className="w-5/12 ">
        <img
          className="w-4/6 rounded-xl mt-20 ml-20"
          src="https://media.tenor.com/p9G64IOxlckAAAAC/thinking-think.gif"
          alt=""
        />
      </div>
      <div className="w-7/12  p-4 space-y-4">
        <h2 className="font-serif font-bold">
          1. What is an access token and refresh token? How do they work and
          where should we store them on the client-side?
        </h2>
        <p className="text-justify">
          In authentication systems, an access token and a refresh token are
          widely used to give secure access to protected resources. After
          successful authentication, an access token is a credential that is
          issued to a client (usually a user or an application). It is a string
          of characters that represents the permission to access specified
          resources or conduct specific actions. The access token is often
          temporary and expires after a set amount of time.A refresh token is a
          credential granted during authentication that is used to receive a new
          access token when the current access token expires. It enables the
          client to request a fresh access token without having to
          re-authenticate the user. Refresh tokens are often more durable and
          have a longer expiration time than access tokens. How they work: An
          access token and refresh token pair are generated when a user logs in
          or authenticates with a server. To approve access to protected sites,
          the access token is given with each subsequent API request. If the
          access token is legitimate and has not expired, the server validates
          it and gives access to the requested resource.
        </p>
        <h2 className="font-serif font-bold">
          2. Compare SQL and NoSQL databases?
        </h2>
        <p className="text-justify">
          SQL (Structured Query Language) and NoSQL (Not Only SQL) databases
          differ in their data models, query languages, scalability, and use
          cases. The following is a comparison of SQL and NoSQL databases: SQL
          databases adhere to a strict, specified schema in which data is
          grouped into tables with rows and columns. Foreign key restrictions
          are used to enforce structured data with linkages between tables.
          NoSQL databases are schema-free and offer flexible data structures.
          They save data in a variety of formats like as key-value pairs,
          documents, column families, and graphs. NoSQL databases do not enforce
          rigid data entity relationships.
        </p>
        <h2 className="font-serif font-bold">
          3. What is express js? What is Nest JS?
        </h2>
        <p>
          Express.js is a Node.js web application framework that is both basic
          and flexible. It offers a straightforward yet powerful collection of
          tools for developing web apps and APIs. Express.js is intended to be
          agnostic, allowing developers to arrange their applications anyway
          they see suitable. Express.js is extensively used and supported by a
          big ecosystem of extensions and tools. Nest.js, on the other hand, is
          a forward-thinking TypeScript framework for developing scalable and
          efficient server-side applications. It is developed on top of
          Express.js, leveraging its features while adding abstractions and
          structure to the codebase. Nest.js adheres to the modular
          architecture, dependency injection, and decorator ideas that
          developers are familiar with from other frameworks like as Angular.
        </p>
        <h2 className="font-serif font-bold">
          4. What is MongoDB aggregate and how does it work?
        </h2>
        <p className="text-justify">
          The aggregate framework in MongoDB is a strong tool for performing
          complex data processing and analysis operations on the documents in a
          collection. It allows you to execute sophisticated computations,
          transformations, grouping, filtering, and other operations in an
          efficient and flexible manner. The aggregate framework operates on the
          input documents by processing a pipeline of steps. Each stage of the
          pipeline performs a specific action on the documents and delivers the
          results to the next level. The pipeline stages are conducted
          sequentially, and the final result is returned as the aggregate
          operation output.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
