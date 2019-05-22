# Gatsby ecommerce practice

## 🚀 Note from practice(important!)

1.  **Create a Gatsby site.**
```
gatsby new storepractice  https://github.com/gatsbyjs/gatsby-starter-default
```

2. **Install SASS.**

```
npm i --save node-sass gatsby-sass-plugin
 - Actually didn't use, just used golabl css system
 - Module CSS is bit easier 
```

3. **Install gatsby-background-image.**

```
npm i --save gatsby-background-image
```

5. **Install gatsby-source-contentful**

```
npm i --save gatsby-background-image
 - Make sure create .env.development(API token and spaceId)
 - Make sure you set enviroment :edit variable on Netlify 
```

4. hooks system

```
failed it :(, refactor after completed 
```

5. new Set() and Array.from

```
I understand so far, 
new Set() : return object 
Array.from() : return Array
ex)

const items = [{category:"juice", title:"...."},
 {category:"juice", title:"...."},
 {category:"tea", title:"...."},
 {category:"tea", title:"...."}];

const mapItems = items.map(items =<{
    return items.category
}>) 

const set1 = new Set(mapItems)
set1 -> Set(2) {"juice","tea"}

const arrayCategory = Array.from(set1)
arrayCategory -> (2) ["juice","tea"]


```