# ReactJs.Net-Demo
This boiler template is based off of the provided [React.JS](https://github.com/reactjs/React.NET/tree/master/src/React.Sample.Webpack.CoreMvc) sample code with various cleanup and ways of spliting up components.
***

Getting the Boiler Template running

In terminal -
```
npm i
```
Right click on Solution and restore NuGet Packages. If that doesn't work, proceed with the bottom commands.
In Package Manager Console in VS -
```
Install-Package React.AspNet
Install-Package React.Router
```

In order for the project to correctly hit the api controller, you will need to set your project localhost in the solution properties to the same as the api call url. (Currently we ended up with localhost:9456)

Then run it
