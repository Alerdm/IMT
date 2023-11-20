import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import FootBar from './components/FootBar'
import Main from './components/Main'
import Nosotros from './components/Nosotros'
import Topic from "./components/Topic";
import Publications from "./components/Publications";
import "./App.css";

function App() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
      Promise.all([
        fetch('https://mundodeltrabajo.org/wp-json/wp/v2/posts?per_page=100&_fields=id,date,slug,title,categories,acf,yoast_head_json.og_image,content,tags'),
        fetch('https://mundodeltrabajo.org/wp-json/wp/v2/categories?per_page=100&_fields=id,name'),
        fetch('https://mundodeltrabajo.org/wp-json/wp/v2/tags?per_page=100&page=1&_fields=id,name'),
        fetch('https://mundodeltrabajo.org/wp-json/wp/v2/tags?per_page=100&page=2&_fields=id,name')
      ])
      .then(([postResponse, categoriesResponse, tagsResponse1, tagsResponse2]) => 
        Promise.all([postResponse.json(), categoriesResponse.json(), tagsResponse1.json(), tagsResponse2.json()])
      )
      .then(([posts, categories, tags1, tags2]) => {

        // Crear un mapa de categorías y tags para buscar fácilmente por id
        let categoriesMap = {};
        categories.forEach(category => {
          categoriesMap[category.id] = category.name;
        });
        let tags = tags1.concat(tags2)

        let tagsMap = {};
        tags.forEach(tag => {
          tagsMap[tag.id] = tag.name;
        });

        // Mapear los números de categorías en los nombres correspondientes
        let postsWithNames = posts.map(post => ({
          ...post,
          categories: post.categories ? post.categories.map(categoryId => categoriesMap[categoryId]) : [],
          tags: post.tags ? post.tags.map(tagId => tagsMap[tagId]) : [],
        }));
        
        setPosts(postsWithNames);
      })
      .catch(err => console.log(err));
    }, []);

  
  return (
    <BrowserRouter>
        <TopBar />
        <div className="content-center">
          <Routes>            
              <Route path="/" element={<Main  posts={posts} />} />
              <Route path="/noticias" element={<Publications defaultSection={'noticias'} posts={posts} />} />
              <Route path="/cursos" element={<Publications defaultSection={'cursos'} posts={posts} />} />
              <Route path="/articulos" element={<Publications defaultSection={'articulos'} posts={posts} />} />
              <Route path="/videos" element={<Publications defaultSection={'videos'} posts={posts} />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/post/:slug/" element={<Topic  posts={posts} />} />
          </Routes>
        </div>    
        <FootBar />
    </BrowserRouter>
  );
}

export default App;