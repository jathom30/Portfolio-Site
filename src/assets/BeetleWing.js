import React, { Component } from 'react';

export default class BeetleWing extends Component {
  render() {
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width="682.466" height="435.334" viewBox="0 0 682.466 435.334">
        <defs>
          <filter id="shadow">
          <feGaussianBlur in="SourceGraphic" stdDeviation="0" />
          </filter>
        </defs>
        <circle fill="#36599D" cx="340.838" cy="218.127" r="199.179"/>
        <path style={ { filter: 'url(#shadow)' } } id="beetle-wings" fill="#6FADF7" d="M619.967 22.61c-3.562-9.474-41.132-2.117-56.508 2.948-15.375 5.065-57.778 32.826-63.742 37.536-5.694 4.499-22.793 34.816-43.697 58.937-1.485-2.03-3.979-4.226-8.168-5.37 1.605-5.667-8.608-7.788-8.608-7.788s.398-5.557-10.248-7.378c-.582-4.338-9.428-6.149-9.428-6.149s-2.103-3.909-7.378-3.279c2.158-1.772.82-2.46.82-2.46s15.119-3.399 11.888-9.018c11.179-2.988 9.018-5.739 9.018-5.739s8.289-.865 10.658-3.689c.882-3.854-2.05-4.51-2.05-4.51s5.708-4.852 11.067-6.558c-5.277-1.363-3.689-4.099-3.689-4.099s-7.192 7.196-10.508 7.196c-6.633-13.152-11.989 3.475-10.397 5.511-5.385-1.508-5.501 5.382-5.329 6.969-5.545-5.39-9.351 5.333-11.067 6.558-6.715 2.462-8.608 6.149-8.608 6.149s-2.771-1.022-4.099-.41c-3.501-4.648-11.926-3.149-14.347-5.329-2.421-4.466-6.449-2.187-8.609-2.87-2.161-.682-.681-3.855-2.05-4.099 7.094-4.932 4.058-6.985 1.23-7.789-3.857-.803-6.559 4.509-6.559 4.509s-7.605 1.216-9.428 2.87c-.107-6.466-3.009-5.984-7.391-6.969-4.168-.936-8.715.504-11.708.43-3.66.074-7.753-1.365-11.921-.43-4.382.985-7.39.503-7.497 6.969-1.823-1.654-9.481-2.87-9.481-2.87s-2.729-5.312-6.586-4.509c-2.828.803-5.877 2.856 1.217 7.789-1.369.243.104 3.417-2.056 4.099-2.161.683-6.192-1.597-8.612 2.87-2.42 2.179-10.848.68-14.349 5.329-1.328-.612-4.1.41-4.1.41s-1.894-3.687-8.609-6.149c-1.715-1.226-5.522-11.948-11.068-6.558.173-1.587.057-8.478-5.329-6.969 1.591-2.036-3.764-18.663-10.397-5.511-3.316 0-10.508-7.196-10.508-7.196s1.588 2.736-3.689 4.099c5.359 1.707 11.068 6.558 11.068 6.558s-2.932.656-2.05 4.51c2.369 2.824 10.658 3.689 10.658 3.689s-2.162 2.75 9.018 5.739c-3.231 5.619 11.888 9.018 11.888 9.018s-1.337.688.82 2.46c-5.276-.63-7.378 3.279-7.378 3.279s-8.847 1.812-9.428 6.149c-10.646 1.822-10.248 7.378-10.248 7.378s-10.214 2.122-8.608 7.788c-4.19 1.144-6.684 3.34-8.168 5.37-20.904-24.121-38.003-54.438-43.697-58.937-5.963-4.71-48.366-32.47-63.742-37.536-15.375-5.065-52.946-12.421-56.508-2.948-3.562 9.475 9.563 26.958 12.225 32.741 8.481 20.161 26.906 30.211 26.258 37.413 1.472 21.219 19.777 24.018 19.932 28.499.155 4.481-3.696 2.214.416 7.428 22.467 14.028 19.077 31.985 38.528 45.036 19.45 13.053 62.779 17.09 71.406 19.701.304.094.659.143 1.042.168.087 2.346 2.901 3.982-.417 6.078-.382-.295-7.824.195-10.711.266-2.889.074-9.199-2.25-4.433 5.725-2.064.488-8.459-6.738-10.888.35-1.683-.754-1.564-.949-3.762-2.283s-8.735-4.9-6.805 2.521c-1.517 1.855-11.514-1.334-12.46 2.355 2.235-.672 4.016 2.057 2.501 5.359 2.062-2.15 9.803-5.498 12.492-1.621 1.271 1.143-5.139 3.467 1.477 6.258s10.491-7.393 18.026-6.002c5.002 2.264 10.759-7.945 16.604-5.23.669.215 1.799.178 3.268-.426-.71 1.787-1.38 3.496-1.991 5.076-2.859 7.604-8.274 23.23-11.599 38.146-.867 4.299-2.538 12.096-2.836 21.611.021.559.005 1.057-.031 1.512-.156 10.357 1.39 22.551 7.327 34.402 11.704 23.68 25.546 34.311 31.79 32.244l12.962-28.43c1.095 1.496 2.1 2.721 2.949 3.549 5.488 5.359 1.541 14.686 10.394 16.428-.792 4.535-13.208 14.939-2.083 15.822-1.116 1.797-6.804 4.91-6.804 4.91s-5.065 2.969 1.012 4.615c-1.795 2.062-16.603 5.76-2.771 10.523-.563 2.133-2.863 5.771-8.885 7.992 4.205-1.789 3.529 4.918 3.529 4.918s7.115-2.566 8.953-10.666c7.999.57-.606-6.768 5.421-9.211 6.027-2.441-2.587-9.891 2.839-9.988 5.427-.102 4.257-14.32 7.21-14.525 2.953-.203 3.495-.83 2.712-4.588s1.117-15.154-8.573-21.289c-3.375-1.418-7.195-5.311-10.751-9.791l5.873-12.881c4.315 10.131 9.583 18.574 15.977 23.867 31.297 25.91 42.041 19.496 42.041 19.496s10.531 6.414 41.828-19.496c6.348-5.256 11.58-13.615 15.863-23.65l5.773 12.664c-3.556 4.48-7.375 8.373-10.751 9.791-9.689 6.135-7.79 17.531-8.573 21.289s-.241 4.385 2.711 4.588c2.954.205 1.784 14.424 7.21 14.525 5.427.098-3.187 7.547 2.84 9.988 6.027 2.443-2.578 9.781 5.421 9.211 1.838 8.1 8.953 10.666 8.953 10.666s-.676-6.707 3.529-4.918c-6.022-2.221-8.322-5.859-8.885-7.992 13.832-4.764-.976-8.461-2.771-10.523 6.077-1.646 1.012-4.615 1.012-4.615s-5.688-3.113-6.804-4.91c11.124-.883-1.292-11.287-2.083-15.822 8.854-1.742 4.906-11.068 10.394-16.428.85-.828 1.854-2.053 2.949-3.549l12.962 28.43c6.244 2.066 20.085-8.564 31.79-32.244 5.937-11.852 7.483-24.045 7.327-34.402-.036-.455-.052-.953-.031-1.512-.298-9.516-1.969-17.312-2.837-21.611-3.324-14.916-8.739-30.543-11.598-38.146-.61-1.58-1.28-3.289-1.991-5.076 1.468.604 2.598.641 3.268.426 5.844-2.715 11.601 7.494 16.604 5.23 7.535-1.391 11.41 8.793 18.026 6.002s.206-5.115 1.477-6.258c2.689-3.877 10.43-.529 12.492 1.621-1.515-3.303.266-6.031 2.501-5.359-.946-3.689-10.944-.5-12.46-2.355 1.93-7.422-4.607-3.855-6.805-2.521-2.197 1.334-2.079 1.529-3.762 2.283-2.428-7.088-8.824.139-10.888-.35 4.767-7.975-1.544-5.65-4.433-5.725-2.887-.07-10.33-.561-10.711-.266-3.318-2.096-.504-3.732-.417-6.078.383-.025.739-.074 1.042-.168 8.626-2.611 51.956-6.648 71.406-19.701 19.451-13.051 16.062-31.008 38.528-45.036 4.111-5.214.261-2.946.415-7.428.155-4.481 18.462-7.279 19.933-28.499-.648-7.202 17.776-17.252 26.257-37.413 2.659-5.784 15.782-23.267 12.22-32.741zm-346.844 92.384c.805-3.596 3.771-19.991 6.062-21.39 3.202-.343 4.117-2.522 4.117-2.522s7.548-.037 13.838-4.84c4.803.343 7.548-1.419 7.548-1.419h3.717s-4.003 3.706-1.801 8.567c-13.81-1.887-18.285 12.116-20.443 15.519-4.789 8.206-3.888 20.607-3.316 22.666-5.375-3.775-7.434-1.6-8.692 1.26-7.091 1.372-1.835-14.246-1.03-17.841zm-37.288 5.356c5.409.464 10.248-8.609 10.248-8.609s5.197.625 7.789-6.148c6.595-1.169 8.959-6.951 8.959-6.951s2.287 1.258 4.158 0c.27 2.173-9.762 28.477 2.869 39.139 1.423 9.631 11.888 10.441 11.888 10.441s-1.013.008-2.55.209c-5.338-.369-26.976-2.928-47.546-20.34 1.435-1.221 2.992-3.505 4.185-7.741zM414.65 98.642c1.871 1.258 4.158 0 4.158 0s2.364 5.781 8.959 6.951c2.592 6.773 7.789 6.148 7.789 6.148s4.839 9.073 10.248 8.609c1.192 4.236 2.75 6.521 4.186 7.742-20.571 17.412-42.208 19.971-47.546 20.34-1.537-.201-2.55-.209-2.55-.209s10.464-.811 11.888-10.441c12.63-10.663 2.598-36.967 2.868-39.14zm-37.7-13.819s2.745 1.762 7.548 1.419c6.29 4.803 13.838 4.828 13.838 4.828s.915 2.185 4.117 2.528c2.29 1.399 5.256 17.797 6.062 21.393.805 3.596 6.062 19.219-1.029 17.846-1.258-2.858-3.317-5.031-8.692-1.257.572-2.059 1.473-14.454-3.317-22.66-2.158-3.402-6.633-17.416-20.443-15.529 2.202-4.86-1.801-8.568-1.801-8.568h3.717z"/>
      </svg>
    );
  }
}