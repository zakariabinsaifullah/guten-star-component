
# Guten Star Component

A simple React Component that allows you to showcase star rating in your project. The primary aim of this component is to help to showcase star rating in Custom Gutenberg Block Development.



## Installation
It is an npm package, so simply run the following command in your project terminal

```bash
$ npm i guten-star-component
```

it will take a few seconds to install this package in your project.

## Import
To use the package in your Gutenberg development project, first import the component like this:-
```
import StarRating from 'guten-star-component'
```
So, our component's name is **StarRating**

## Available Props

The component accepts two props, both are optional and have default values.

**total:** maximum amount of stars. Default value is: 5

**rating:** current or given value of rating. Default value is: 5



## General Example
To use the component, use it like this:-
```
<StarRating />
```

by default, it show total 5 stars rating, but you can pass your custom data, like this:-
```
<StarRating total={5} rating={4.5} />
```
Now, total 5 stars are visible but 4.5 stars are filled and one half is unfilled.


## How to use in Gutenberg
 You can easily use it in your Gutenberg development with attributes. Simply declar an attribtue like:-
 ```
 attributes: {
     userRating: {
         type: "number",
         default: 4.5
     }
 }
 ```

 Now take a RangeControl (Gutenebrg built-in Component) where we will be able to set userRating value, like this:-

 ```
 const { attributes, setAttributes } = props;
 const { userRating } = attributes;

 <RangeControl
    title="User Rating"
    value={ userRating }
    onChange={(v) => setAttributes({
        userRating: v
    })}
 />
 ```
 Now showcase your rating component in your edit.js/save.js function, for example:-

 ```
import StarRating from 'guten-star-component';

const { attributes } = props;
const { userRating } = attributes;

<StarRating
    total={5}
    rating{
        userRating
    }
/>
```

So, you are going to getting the following result for 4.5 userRating value.
![StarRating](https://i.postimg.cc/D0zcFHwq/example-1.png)

## License

[MIT](https://choosealicense.com/licenses/mit/)


## 🚀 About Me
I am Zakaria Binsaifullah, an expert in WordPress, Gutenberg & Shopify app development. [Our Website](https://gutenbergkits.com) related to Gutenberg Development.
