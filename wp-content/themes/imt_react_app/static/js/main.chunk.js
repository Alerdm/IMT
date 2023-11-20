(this["webpackJsonpimt_react_app"] = this["webpackJsonpimt_react_app"] || []).push([["main"],{

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_TopBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/TopBar */ "./src/components/TopBar.js");
/* harmony import */ var _components_FootBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/FootBar */ "./src/components/FootBar.js");
/* harmony import */ var _components_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Main */ "./src/components/Main.js");
/* harmony import */ var _components_Nosotros__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Nosotros */ "./src/components/Nosotros.js");
/* harmony import */ var _components_Topic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Topic */ "./src/components/Topic.js");
/* harmony import */ var _components_Publications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Publications */ "./src/components/Publications.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\App.js";










function App() {
  const [posts, setPosts] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    Promise.all([fetch('https://mundodeltrabajo.org/wp-json/wp/v2/posts?per_page=100&_fields=id,date,slug,title,categories,acf,yoast_head_json.og_image,content,tags'), fetch('https://mundodeltrabajo.org/wp-json/wp/v2/categories?per_page=100&_fields=id,name'), fetch('https://mundodeltrabajo.org/wp-json/wp/v2/tags?per_page=100&page=1&_fields=id,name'), fetch('https://mundodeltrabajo.org/wp-json/wp/v2/tags?per_page=100&page=2&_fields=id,name')]).then(([postResponse, categoriesResponse, tagsResponse1, tagsResponse2]) => Promise.all([postResponse.json(), categoriesResponse.json(), tagsResponse1.json(), tagsResponse2.json()])).then(([posts, categories, tags1, tags2]) => {
      // Crear un mapa de categorías y tags para buscar fácilmente por id
      let categoriesMap = {};
      categories.forEach(category => {
        categoriesMap[category.id] = category.name;
      });
      let tags = tags1.concat(tags2);
      let tagsMap = {};
      tags.forEach(tag => {
        tagsMap[tag.id] = tag.name;
      }); // Mapear los números de categorías en los nombres correspondientes

      let postsWithNames = posts.map(post => ({ ...post,
        categories: post.categories ? post.categories.map(categoryId => categoriesMap[categoryId]) : [],
        tags: post.tags ? post.tags.map(tagId => tagsMap[tagId]) : []
      }));
      setPosts(postsWithNames);
    }).catch(err => console.log(err));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TopBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Routes"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Main__WEBPACK_IMPORTED_MODULE_4__["default"], {
      posts: posts,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 40
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/noticias",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Publications__WEBPACK_IMPORTED_MODULE_7__["default"], {
      defaultSection: 'noticias',
      posts: posts,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 48
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/cursos",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Publications__WEBPACK_IMPORTED_MODULE_7__["default"], {
      defaultSection: 'cursos',
      posts: posts,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 46
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/articulos",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Publications__WEBPACK_IMPORTED_MODULE_7__["default"], {
      defaultSection: 'articulos',
      posts: posts,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 49
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/videos",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Publications__WEBPACK_IMPORTED_MODULE_7__["default"], {
      defaultSection: 'videos',
      posts: posts,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 46
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/nosotros",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Nosotros__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 48
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
    path: "/post/:slug/",
    element: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Topic__WEBPACK_IMPORTED_MODULE_6__["default"], {
      posts: posts,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 51
      }
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 15
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FootBar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/ActiveSection.js":
/*!*****************************************!*\
  !*** ./src/components/ActiveSection.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PublicationsFeed__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublicationsFeed */ "./src/components/PublicationsFeed.js");
/* harmony import */ var _PublicationsFeedVideos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PublicationsFeedVideos */ "./src/components/PublicationsFeedVideos.js");
/* harmony import */ var _PublicationsFeedCourses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PublicationsFeedCourses */ "./src/components/PublicationsFeedCourses.js");
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\components\\ActiveSection.js";





const ActiveSection = ({
  section,
  posts
}) => {
  // Mapea las secciones a las categorías correspondientes
  const sectionToCategory = {
    noticias: "Noticias",
    articulos: "Notas",
    videos: "Videos",
    cursos: "Cursos"
  }; // Obtiene la categoría correspondiente a la sección seleccionada

  const selectedCategory = sectionToCategory[section] || "Noticias"; // Filtra los posts según la categoría seleccionada

  const filteredPosts = posts.filter(post => post.categories.includes(selectedCategory)); // return (section === "Videos") ? <PublicationsFeedVideos section={section} posts={filteredPosts} /> 
  // : (section === "Cursos") ? <PublicationsFeedCourses section={section} posts={filteredPosts} />
  // : <PublicationsFeed section={section} posts={filteredPosts} />;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PublicationsFeed__WEBPACK_IMPORTED_MODULE_1__["default"], {
    section: section,
    posts: filteredPosts,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 10
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ActiveSection);

/***/ }),

/***/ "./src/components/Columna.js":
/*!***********************************!*\
  !*** ./src/components/Columna.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\components\\Columna.js";


function Columna(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columna",
    style: {
      paddingTop: '10px'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    style: {
      color: 'white',
      backgroundColor: 'grey'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, props.titulo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, "hola"));
}

/* harmony default export */ __webpack_exports__["default"] = (Columna);

/***/ }),

/***/ "./src/components/FootBar.js":
/*!***********************************!*\
  !*** ./src/components/FootBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\components\\FootBar.js";


function FootBar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footbar",
    style: {
      backgroundColor: 'black'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      fontSize: '1rem',
      color: 'white',
      margin: '11px auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, "Derechos Reservados \xA9 ", new Date().getFullYear())), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footbar-info-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footbar-info-section-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, "Locaci\xF3n"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 21
    }
  }, "telefono"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, "mail"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, "redes sociales")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footbar-info-section-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, "otros sitios")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footbar-info-section-box",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "Informacion extra"))));
}

/* harmony default export */ __webpack_exports__["default"] = (FootBar);

/***/ }),

/***/ "./src/components/Loading.js":
/*!***********************************!*\
  !*** ./src/components/Loading.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\components\\Loading.js";


function Loading() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "loading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "/imtwp/wp-content/themes/imt_react_app" + '/images/7.svg',
    alt: "loading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./src/components/Main.js":
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NewsCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsCarousel */ "./src/components/NewsCarousel.js");
/* harmony import */ var _Columna__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Columna */ "./src/components/Columna.js");
/* harmony import */ var _MainCourses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainCourses */ "./src/components/MainCourses.js");
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\components\\Main.js";





function Main({
  posts
}) {
  const hasActiveCategory = posts.some(post => post.categories.includes("Activos") || post.categories.includes("Inscripciones Activas"));
  const activeInscriptions = posts.filter(course => course.categories.includes("Inscripciones Activas"));
  const activeCourses = posts.filter(course => course.categories.includes('Activos'));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "news",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewsCarousel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    posts: posts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 35
    }
  })), hasActiveCategory && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "courses-news",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainCourses__WEBPACK_IMPORTED_MODULE_3__["default"], {
    courses: activeCourses,
    inscriptions: activeInscriptions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columnasMain",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Columna__WEBPACK_IMPORTED_MODULE_2__["default"], {
    titulo: "Esta es columna izquierda",
    posts: posts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Columna__WEBPACK_IMPORTED_MODULE_2__["default"], {
    titulo: "Esta es mi columna columna",
    posts: posts,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Main);

/***/ }),

/***/ "./src/components/MainCourses.js":
/*!***************************************!*\
  !*** ./src/components/MainCourses.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MainCoursesCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainCoursesCard */ "./src/components/MainCoursesCard.js");
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\components\\MainCourses.js";



function MainCourses({
  courses,
  inscriptions
}) {
  const renderTwoCourses = courses.length >= 2;
  const renderTwoInscriptions = inscriptions.length >= 2;
  const showSplitter = courses.length > 0 && inscriptions.length > 0;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderTwoInscriptions ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "courses-inscriptions-main-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, "Inscripciones Activas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "courses-inscriptions-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainCoursesCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    course: inscriptions[0],
    className: "course-card-l",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "splitter-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainCoursesCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    course: inscriptions[1],
    className: "course-card-r",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "courses-inscriptions-main-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, "Inscripciones Activas"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "courses-inscriptions-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainCoursesCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    course: inscriptions[0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }))), showSplitter && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "courses-inscriptions-splitter",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 24
    }
  }), renderTwoCourses ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "courses-inscriptions-main-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, "Cursos Activos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "courses-inscriptions-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainCoursesCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    course: courses[0],
    className: "course-card-l",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "splitter-line",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainCoursesCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    course: courses[1],
    className: "course-card-r",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "courses-inscriptions-main-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, "Cursos Activos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "courses-inscriptions-main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainCoursesCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    course: courses[0],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (MainCourses);

/***/ }),

/***/ "./src/components/MainCoursesCard.js":
/*!*******************************************!*\
  !*** ./src/components/MainCoursesCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\components\\MainCoursesCard.js";



function MainCoursesCard(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: `course-link ${props.className}`,
    to: `/post/${props.course.slug}/`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'course-link-div',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, props.course.title.rendered));
}

/* harmony default export */ __webpack_exports__["default"] = (MainCoursesCard);

/***/ }),

/***/ "./src/components/NewsCarousel.js":
/*!****************************************!*\
  !*** ./src/components/NewsCarousel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NewsCarouselCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NewsCarouselCard */ "./src/components/NewsCarouselCard.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/react/index.js");
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/swiper-bundle.css */ "./node_modules/swiper/swiper-bundle.css");
/* harmony import */ var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\components\\NewsCarousel.js";






function NewsCarousel(props) {
  const onlyPosts = props.posts.filter(post => !post.categories.includes('Cursos'));
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nov-carousel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_2__["Swiper"], {
    autoplay: {
      delay: 6000,
      disableOnInteraction: false
    },
    navigation: true,
    effect: "fade",
    modules: [swiper__WEBPACK_IMPORTED_MODULE_4__["Autoplay"], swiper__WEBPACK_IMPORTED_MODULE_4__["EffectFade"], swiper__WEBPACK_IMPORTED_MODULE_4__["Navigation"]],
    className: "mySwiperNews",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, onlyPosts.slice(0, 7).map(post => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_2__["SwiperSlide"], {
    className: "ss-news",
    key: post.slug,
    style: {
      backgroundImage: `url(${post.yoast_head_json.og_image[0].url})`
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 47
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewsCarouselCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    post: post,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 171
    }
  }), " "))));
}

/* harmony default export */ __webpack_exports__["default"] = (NewsCarousel);

/***/ }),

/***/ "./src/components/NewsCarouselCard.js":
/*!********************************************!*\
  !*** ./src/components/NewsCarouselCard.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\components\\NewsCarouselCard.js";



function NewsCarouselCard(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "news-link",
    to: `/post/${props.post.slug}/`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "news-link-card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 11
    }
  }, props.post.categories[0]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 11
    }
  }, props.post.title.rendered)));
}

/* harmony default export */ __webpack_exports__["default"] = (NewsCarouselCard);

/***/ }),

/***/ "./src/components/Nosotros.js":
/*!************************************!*\
  !*** ./src/components/Nosotros.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\components\\Nosotros.js";


function Nosotros(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '70%',
      paddingTop: '20px',
      marginLeft: 'auto',
      marginRight: 'auto',
      backgroundColor: '#6fcaf6'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, "Historia"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: "justify",
      marginLeft: '10%',
      marginRight: '10%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, " ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 86
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      fontSize: '1.3rem',
      textDecoration: 'underline solid black'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 89
    }
  }, "El INSTITUTO DEL MUNDO DEL TRABAJO"), " es un \xE1mbito de investigaci\xF3n, estudio, capacitaci\xF3n y de promoci\xF3n de pol\xEDticas p\xFAblicas fundado en el a\xF1o 1998 por el soci\xF3logo Lic. Julio Godio. Su principal campo de actuaci\xF3n es precisamente el mundo del trabajo, entendiendo por tal el integrado por el movimiento sindical, las empresas, las instituciones de innovaci\xF3n tecnol\xF3gica, las universidades y las instituciones del sistema internacional en general y particularmente la Organizaci\xF3n Internacional del Trabajo. Asimismo, el Instituto promueve el di\xE1logo social y pol\xEDtico en general y la negociaci\xF3n colectiva en particular. El Instituto es independiente de cualquier orientaci\xF3n pol\xEDtica y sindical. Promueve el fortalecimiento de las organizaciones sindicales, la promoci\xF3n de empresas productivas, el di\xE1logo y el mejoramiento de las relaciones  laborales y el respeto a los derechos fundamentales del trabajo, en el marco del desarrollo sostenible.")));
}

/* harmony default export */ __webpack_exports__["default"] = (Nosotros);

/***/ }),

/***/ "./src/components/Publications.js":
/*!****************************************!*\
  !*** ./src/components/Publications.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActiveSection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActiveSection */ "./src/components/ActiveSection.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\components\\Publications.js";




const Publications = ({
  defaultSection,
  posts
}) => {
  const location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["useLocation"])();
  const [section, setSection] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(defaultSection !== null && defaultSection !== void 0 ? defaultSection : 'noticias');
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    // Actualiza la sección basada en la ruta actual
    const path = location.pathname;

    if (path === '/noticias') {
      setSection('noticias');
    } else if (path === '/articulos') {
      setSection('articulos');
    } else if (path === '/cursos') {
      setSection('cursos');
    } else if (path === '/videos') {
      setSection('videos');
    }
  }, [location.pathname]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "publications-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: '/noticias',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: section === 'noticias' ? 'active' : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 32
    }
  }, "Noticias")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: '/articulos',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: section === 'articulos' ? 'active' : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 33
    }
  }, "Articulos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: '/videos',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: section === 'videos' ? 'active' : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 30
    }
  }, "Videos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    to: '/cursos',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: section === 'cursos' ? 'active' : '',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 30
    }
  }, "Cursos"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ActiveSection__WEBPACK_IMPORTED_MODULE_1__["default"], {
    section: section,
    posts: posts,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Publications);

/***/ }),

/***/ "./src/components/PublicationsFeed.js":
/*!********************************************!*\
  !*** ./src/components/PublicationsFeed.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PublicationsFeedCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublicationsFeedCard */ "./src/components/PublicationsFeedCard.js");
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\components\\PublicationsFeed.js";



function PublicationsFeed({
  posts
}) {
  const [sortedPosts, setSortedPosts] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(posts);
  const [uniqueAuthors, setUniqueAuthors] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [authorSuggestions, setAuthorSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [showSuggestions, setShowSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [inputValue, setInputValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [dateOrder, setDateOrder] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const listHeight = showSuggestions && authorSuggestions.length > 0 ? authorSuggestions.length * 24 + 'px' : '0';
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    resetFilters();
  }, [posts]);

  const resetFilters = () => {
    setSortedPosts(posts);
    setInputValue('');
    const allAuthors = posts.flatMap(post => [post.acf.autor1, post.acf.autor2, post.acf.autor3, post.acf.autor4]).filter(authors => authors !== null && authors !== "").flat();
    setUniqueAuthors([...new Set(allAuthors)]);
    setAuthorSuggestions([...new Set(allAuthors)]);
    setDateOrder();
  };

  console.log(authorSuggestions); //Implementación para normalizar mayúsculas y acentos

  const removeAccents = str => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }; //Acciones según el "value" que se encuentre en el <Input>


  const handleAuthorInputChange = event => {
    const inputValue = event.target.value;
    setInputValue(inputValue); //Setea el inputValue según el target.value

    const filteredAuthors = uniqueAuthors.filter(author => removeAccents(author).includes(removeAccents(inputValue)));
    event.target.value === '' ? setShowSuggestions(false) : setShowSuggestions(true);
    setAuthorSuggestions(filteredAuthors);
    const filteredPosts = inputValue ? posts.filter(post => {
      const authorFields = [post.acf.autor1, post.acf.autor2, post.acf.autor3, post.acf.autor4];
      return authorFields.some(authorField => authorField && removeAccents(authorField).includes(removeAccents(inputValue)));
    }) : posts;
    setSortedPosts(filteredPosts);
  };

  const toggleOrder = () => {
    setDateOrder(!dateOrder); // Ordenar los posts según el nuevo orden

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
  }; //Implementación para 


  const selectAuthor = selectedAuthor => {
    setShowSuggestions(false);
    setInputValue(selectedAuthor);
    const filtered = posts.filter(post => {
      const authorFields = [post.acf.autor1, post.acf.autor2, post.acf.autor3, post.acf.autor4];
      return authorFields.some(authorField => authorField && removeAccents(authorField).includes(removeAccents(selectedAuthor)));
    });
    setSortedPosts(filtered);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sorting-options",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "Filter by Author",
    value: inputValue,
    onInput: handleAuthorInputChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "material-symbols-rounded",
    onClick: toggleOrder,
    style: dateOrder ? {
      transform: 'rotateX(180deg)'
    } : {
      transform: 'rotateX(0deg)'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, "sort"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "author-suggestions",
    style: {
      height: listHeight
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }, authorSuggestions.map(author => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: author,
    onClick: () => selectAuthor(author),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  }, author)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "publications-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, sortedPosts.map(post => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: post.id,
    className: `${post.id} post-feed-card`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PublicationsFeedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    post: post,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (PublicationsFeed);

/***/ }),

/***/ "./src/components/PublicationsFeedCard.js":
/*!************************************************!*\
  !*** ./src/components/PublicationsFeedCard.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\components\\PublicationsFeedCard.js";



function PublicationsFeedCard({
  post
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: `/post/${post.slug}/`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: `ost-feed-card-img ${post.categories}`,
    src: post.yoast_head_json.og_image[0].url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }), post.title.rendered), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "material-symbols-outlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, "calendar_month"), post.acf.fecha);
}

/* harmony default export */ __webpack_exports__["default"] = (PublicationsFeedCard);

/***/ }),

/***/ "./src/components/PublicationsFeedCourses.js":
/*!***************************************************!*\
  !*** ./src/components/PublicationsFeedCourses.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PublicationsFeedCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublicationsFeedCard */ "./src/components/PublicationsFeedCard.js");
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\components\\PublicationsFeedCourses.js";



function PublicationsFeed({
  posts
}) {
  const [sortedPosts, setSortedPosts] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(posts);
  const [uniqueAuthors, setUniqueAuthors] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [authorSuggestions, setAuthorSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [showSuggestions, setShowSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [inputValue, setInputValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [dateOrder, setDateOrder] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    resetFilters();
  }, [posts]);

  const resetFilters = () => {
    setSortedPosts(posts);
    setInputValue('');
    const allAuthors = posts.flatMap(post => [post.acf.autor1, post.acf.autor2, post.acf.autor3, post.acf.autor4]).filter(authors => authors !== null).flat();
    setUniqueAuthors([...new Set(allAuthors)]);
    setAuthorSuggestions([...new Set(allAuthors)]);
    setDateOrder();
  };

  console.log(authorSuggestions); //Implementación para normalizar mayúsculas y acentos

  const removeAccents = str => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }; //Acciones según el "value" que se encuentre en el <Input>


  const handleAuthorInputChange = event => {
    const inputValue = event.target.value;
    setInputValue(inputValue); //Setea el inputValue según el target.value

    const filteredAuthors = uniqueAuthors.filter(author => removeAccents(author).includes(removeAccents(inputValue)));
    event.target.value === '' ? setShowSuggestions(false) : setShowSuggestions(true);
    setAuthorSuggestions(filteredAuthors);
    const filteredPosts = inputValue ? posts.filter(post => {
      const authorFields = [post.acf.autor1, post.acf.autor2, post.acf.autor3, post.acf.autor4];
      return authorFields.some(authorField => authorField && removeAccents(authorField).includes(removeAccents(inputValue)));
    }) : posts;
    setSortedPosts(filteredPosts);
  };

  const toggleOrder = () => {
    setDateOrder(!dateOrder); // Ordenar los posts según el nuevo orden

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
  }; //Implementación para 


  const selectAuthor = selectedAuthor => {
    setShowSuggestions(false);
    setInputValue(selectedAuthor);
    const filtered = posts.filter(post => {
      const authorFields = [post.acf.autor1, post.acf.autor2, post.acf.autor3, post.acf.autor4];
      return authorFields.some(authorField => authorField && removeAccents(authorField).includes(removeAccents(selectedAuthor)));
    });
    setSortedPosts(filtered);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sorting-options",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "Filter by Author",
    value: inputValue,
    onInput: handleAuthorInputChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: toggleOrder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, "Ordenar ", dateOrder ? 'Ascendente' : 'Descendente'), showSuggestions && authorSuggestions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "author-suggestions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, authorSuggestions.map(author => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: author,
    onClick: () => selectAuthor(author),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, author)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "publications-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, sortedPosts.map(post => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: post.id,
    className: `${post.id} post-feed-card`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PublicationsFeedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    post: post,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (PublicationsFeed);

/***/ }),

/***/ "./src/components/PublicationsFeedVideos.js":
/*!**************************************************!*\
  !*** ./src/components/PublicationsFeedVideos.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PublicationsFeedCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PublicationsFeedCard */ "./src/components/PublicationsFeedCard.js");
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\components\\PublicationsFeedVideos.js";



function PublicationsFeed({
  posts
}) {
  const [sortedPosts, setSortedPosts] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(posts);
  const [uniqueAuthors, setUniqueAuthors] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [authorSuggestions, setAuthorSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [showSuggestions, setShowSuggestions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [inputValue, setInputValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [dateOrder, setDateOrder] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    resetFilters();
  }, [posts]);

  const resetFilters = () => {
    setSortedPosts(posts);
    setInputValue('');
    const allAuthors = posts.flatMap(post => [post.acf.autor1, post.acf.autor2, post.acf.autor3, post.acf.autor4]).filter(authors => authors !== null).flat();
    setUniqueAuthors([...new Set(allAuthors)]);
    setAuthorSuggestions([...new Set(allAuthors)]);
    setDateOrder();
  };

  console.log(authorSuggestions); //Implementación para normalizar mayúsculas y acentos

  const removeAccents = str => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }; //Acciones según el "value" que se encuentre en el <Input>


  const handleAuthorInputChange = event => {
    const inputValue = event.target.value;
    setInputValue(inputValue); //Setea el inputValue según el target.value

    const filteredAuthors = uniqueAuthors.filter(author => removeAccents(author).includes(removeAccents(inputValue)));
    event.target.value === '' ? setShowSuggestions(false) : setShowSuggestions(true);
    setAuthorSuggestions(filteredAuthors);
    const filteredPosts = inputValue ? posts.filter(post => {
      const authorFields = [post.acf.autor1, post.acf.autor2, post.acf.autor3, post.acf.autor4];
      return authorFields.some(authorField => authorField && removeAccents(authorField).includes(removeAccents(inputValue)));
    }) : posts;
    setSortedPosts(filteredPosts);
  };

  const toggleOrder = () => {
    setDateOrder(!dateOrder); // Ordenar los posts según el nuevo orden

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
  }; //Implementación para 


  const selectAuthor = selectedAuthor => {
    setShowSuggestions(false);
    setInputValue(selectedAuthor);
    const filtered = posts.filter(post => {
      const authorFields = [post.acf.autor1, post.acf.autor2, post.acf.autor3, post.acf.autor4];
      return authorFields.some(authorField => authorField && removeAccents(authorField).includes(removeAccents(selectedAuthor)));
    });
    setSortedPosts(filtered);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "sorting-options",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "Filter by Author",
    value: inputValue,
    onInput: handleAuthorInputChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: toggleOrder,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, "Ordenar ", dateOrder ? 'Ascendente' : 'Descendente'), showSuggestions && authorSuggestions.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "author-suggestions",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 11
    }
  }, authorSuggestions.map(author => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: author,
    onClick: () => selectAuthor(author),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }, author)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "publications-list",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 7
    }
  }, sortedPosts.map(post => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    key: post.id,
    className: `${post.id} post-feed-card`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 11
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_PublicationsFeedCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    post: post,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 13
    }
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (PublicationsFeed);

/***/ }),

/***/ "./src/components/TopBar.js":
/*!**********************************!*\
  !*** ./src/components/TopBar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\components\\TopBar.js";



function TopBar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tb-top",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logoslider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "logos",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: '/',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "logo",
    src: "/imtwp/wp-content/themes/imt_react_app" + '/images/IMT_LOGO1.png',
    alt: "Logo IMT",
    width: "120",
    height: "60",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 29
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "logo",
    src: "/imtwp/wp-content/themes/imt_react_app" + '/images/IMT_LOGO2.png',
    width: "154",
    height: "60",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 29
    }
  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light",
    style: {
      padding: '0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid",
    style: {
      padding: '0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent",
    style: {
      padding: '0',
      justifyContent: 'center',
      background: 'linear-gradient(#24ABFF 0%, #0E4466 100%'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "navbar-nav",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "nav-link active link",
    "aria-current": "page",
    to: '/',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 33
    }
  }, "Inicio")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "nav-link dropdown-toggle link",
    to: '/publicaciones',
    id: "navbarDropdown",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 33
    }
  }, "Publicaciones"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "dropdown-menu",
    "aria-labelledby": "navbarDropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "dropdown-item",
    to: '/noticias',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 41
    }
  }, "Noticias")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "dropdown-item",
    to: '/articulos',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 41
    }
  }, "Art\xEDculos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "dropdown-item",
    to: '/videos',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 41
    }
  }, "Videos")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    className: "dropdown-divider",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 41
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "dropdown-item",
    to: '/cursos',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 41
    }
  }, "Cursos")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 29
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "nav-link dropdown-toggle link",
    id: "navbarDropdown",
    role: "button",
    "data-bs-toggle": "dropdown",
    "aria-expanded": "false",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  }, "Quienes Somos"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "dropdown-menu",
    "aria-labelledby": "navbarDropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 33
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "dropdown-item",
    to: '/autoridades',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 41
    }
  }, "Autoridades")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 37
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "dropdown-item",
    to: '/nosotros/',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 41
    }
  }, "Nosotros")))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (TopBar);

/***/ }),

/***/ "./src/components/Topic.js":
/*!*********************************!*\
  !*** ./src/components/Topic.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loading */ "./src/components/Loading.js");
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\components\\Topic.js";




function Topic(props) {
  const {
    slug
  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useParams"])();
  const data = props.posts.filter(post => post.slug === `${slug}`).shift();
  console.log(data);

  if (data) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "topic",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "topic-head",
      style: {
        backgroundImage: `url(${data.yoast_head_json.og_image[0].url})`
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "topic-title-and-author",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 21
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "topic-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      style: {
        fontSize: '3.5rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 29
      }
    }, " ", data === null || data === void 0 ? void 0 : data.title.rendered, " ")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "topic-author-and-date",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      style: {
        margin: '15px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 29
      }
    }, " ", data === null || data === void 0 ? void 0 : data.acf.autor1, " "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      style: {
        margin: '15px'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 29
      }
    }, " ", data === null || data === void 0 ? void 0 : data.acf.fecha, " ")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "topic-separator",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "topic-text",
      dangerouslySetInnerHTML: {
        __html: data === null || data === void 0 ? void 0 : data.content.rendered
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }
    }));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Topic);

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "C:\\xampp\\htdocs\\imtwp\\wp-content\\themes\\imt_react_app\\react-src\\src\\index.js";





const root = Object(react_dom_client__WEBPACK_IMPORTED_MODULE_1__["createRoot"])(document.getElementById('root'));
root.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }
}))); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\imtwp\wp-content\themes\imt_react_app\react-src\src\index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",0]]]);
//# sourceMappingURL=main.chunk.js.map