# Essential

## Links

- Google font 

~~~
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600&family=Poppins:wght@400;500&display=swap');
~~~

- Remix icon

~~~
<link href="https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css" rel="stylesheet">
~~~

## CSS Variables
- header height

~~~
--header-height: 3.5rem;
~~~


- z-index

~~~
    --z-tooltip: 10;
    --z-fixed: 100;
~~~


### Font and typography
- font family
~~~
    --body-font: "Poppins", sans-serif;
    --second-font: "Montserrat", sans-serif;
~~~


- text size
~~~
    --biggest-font-size: 2.75rem;
    --h1-font-size: 1.5rem;
    --h2-font-size: 1.25rem;
    --h3-font-size: 1rem;
    --normal-font-size: .938rem;
    --small-font-size: .813rem;
    --smaller-font-size: .75rem;
~~~

- font weight

~~~
    --font-regular: 400;
    --font-medium : 500;
    --font-semi-bold: 600;
~~~

### Colors

~~~
     --title-color: hsl(0, 0%, 95%);
    --text-color: hsl(0, 0%, 70%);
    --text-color-light: hsl(0, 0%, 60%);
    --body-color: hsl(0, 0%, 0%);
    --container-color: hsl(0, 0%, 8%);
~~~


## Media query

### responsive typography
 - maybe I could try using clamp 
~~~
@media screen and (min-width: 1152px)
{
    :root {
        --biggest-font-size: 5.5rem;
        --h1-font-size: 2.5rem;
        --h2-font-size: 1.5rem;
        --h3-font-size: 1.25rem;
        --normal-font-size: 1rem;
        --small-font-size: .875rem;
        --smaller-font-size: .813rem;
    }
}
~~~