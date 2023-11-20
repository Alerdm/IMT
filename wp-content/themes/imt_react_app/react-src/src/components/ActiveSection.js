import React from 'react';
import PublicationsFeed from './PublicationsFeed';
import PublicationsFeedVideos from './PublicationsFeedVideos'
import PublicationsFeedCourses from './PublicationsFeedCourses'

const ActiveSection = ({section, posts}) => {
  // Mapea las secciones a las categorías correspondientes
  const sectionToCategory = {
    noticias: "Noticias",
    articulos: "Notas",
    videos: "Videos",
    cursos: "Cursos",
  };

  // Obtiene la categoría correspondiente a la sección seleccionada
  const selectedCategory = sectionToCategory[section] || "Noticias";

  // Filtra los posts según la categoría seleccionada
  const filteredPosts = posts.filter((post) =>
    post.categories.includes(selectedCategory)
  );
  // return (section === "Videos") ? <PublicationsFeedVideos section={section} posts={filteredPosts} /> 
  // : (section === "Cursos") ? <PublicationsFeedCourses section={section} posts={filteredPosts} />
  // : <PublicationsFeed section={section} posts={filteredPosts} />;
  return <PublicationsFeed section={section} posts={filteredPosts} />;
}

export default ActiveSection