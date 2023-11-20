import React, { useState, useEffect } from 'react'
import PublicationsFeedCard from './PublicationsFeedCard'

function PublicationsFeed({ posts }) {
  const [sortedPosts, setSortedPosts] = useState(posts);
  const [uniqueAuthors, setUniqueAuthors] = useState([])
  const [authorSuggestions, setAuthorSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [dateOrder, setDateOrder] = useState(true);


  useEffect(() => {
    resetFilters();
  }, [posts]);

  const resetFilters = () => {
    setSortedPosts(posts);
    setInputValue('');
    const allAuthors = posts
      .flatMap((post) => [post.acf.autor1, post.acf.autor2, post.acf.autor3, post.acf.autor4])
      .filter((authors) => authors !== null)
      .flat();
    setUniqueAuthors([...new Set(allAuthors)])
    setAuthorSuggestions([...new Set(allAuthors)]);
    setDateOrder();
  };
  console.log(authorSuggestions)

  //Implementación para normalizar mayúsculas y acentos
  const removeAccents = (str) => {
    return str
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase();
  };

  //Acciones según el "value" que se encuentre en el <Input>
  const handleAuthorInputChange = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue); //Setea el inputValue según el target.value
    const filteredAuthors = uniqueAuthors.filter((author) =>
      removeAccents(author).includes(removeAccents(inputValue))
    );
    event.target.value === '' ? setShowSuggestions(false) : setShowSuggestions(true);
    setAuthorSuggestions(filteredAuthors);
    const filteredPosts = inputValue
      ? posts.filter((post) => {
        const authorFields = [post.acf.autor1, post.acf.autor2, post.acf.autor3, post.acf.autor4];
        return authorFields.some(
          (authorField) =>
            authorField && removeAccents(authorField).includes(removeAccents(inputValue))
        );
      })
      : posts;
    setSortedPosts(filteredPosts);
  };

  const toggleOrder = () => {
    setDateOrder(!dateOrder);
  
    // Ordenar los posts según el nuevo orden
    const sorted = [...sortedPosts].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
  
      if (dateOrder) {
        return dateB - dateA; // Orden descendente
      } else {
        return dateA - dateB; // Orden ascendente
      }
    });
  
    setSortedPosts(sorted);
  };

  //Implementación para 
  const selectAuthor = (selectedAuthor) => {
    setShowSuggestions(false);
    setInputValue(selectedAuthor);
    const filtered = posts.filter((post) => {
      const authorFields = [post.acf.autor1, post.acf.autor2, post.acf.autor3, post.acf.autor4];
      return authorFields.some(
        (authorField) =>
          authorField && removeAccents(authorField).includes(removeAccents(selectedAuthor))
      ) 
    });
    setSortedPosts(filtered);
  };

  return (
    <>
      <div className="sorting-options">
        <input
          type="text"
          placeholder="Filter by Author"
          value={inputValue}
          onInput={handleAuthorInputChange}
        />
        <button onClick={toggleOrder}>
         Ordenar {dateOrder ? 'Ascendente' : 'Descendente'}
        </button>
        {showSuggestions && authorSuggestions.length > 0 && (
          <ul className="author-suggestions">
            {authorSuggestions.map((author) => (
              <li key={author} onClick={() => selectAuthor(author)}>
                {author}
              </li>
            ))}
          </ul>
        )}
      </div>
      <ul className="publications-list">
        {sortedPosts.map((post) => (
          <li key={post.id} className={`${post.id} post-feed-card`}>
            <PublicationsFeedCard post={post} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default PublicationsFeed;