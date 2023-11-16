/**
 * Internal dependencies
 */
import "./style.scss";

const StarRating = ({ total = 5, rating = 5 }) => {
  const fraction = Math.round((rating - Math.floor(rating)) * 10) / 10;
  const filled = Math.floor(rating);
  const empty = total - Math.ceil(rating);

  const fillItems = [];
  for (let i = 0; i < filled; i++) {
    fillItems.push(i);
  }

  const emptyItems = [];
  for (let j = 0; j < empty; j++) {
    emptyItems.push(j);
  }

  return (
    <div className="gkits-star-rating">
      {filled > 0 && (
        <>
          {fillItems &&
            fillItems.map((item, index) => {
              return (
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.23 48.44" key={index}>
                  <path
                    d="M49.05,21.06a1.9,1.9,0,0,0,.46-2A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.5,31.66v.86L9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2l-2.39-14.2V31.69Z"
                    transform="translate(-0.39 -0.78)"
                  />
                </svg>
              );
            })}
        </>
      )}
      {fraction > 0 && (
        <>
          {fraction === 0.1 && (
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.23 48.44">
              <path
                d="M49.51,19.1A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.62,31.78,9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2L38.36,31.85,49.05,21.06A1.9,1.9,0,0,0,49.51,19.1ZM36.94,30.44a1.89,1.89,0,0,0-.53,1.67l2.49,15-13-7a1.88,1.88,0,0,0-1.84,0l-13,7,2.49-15a1.89,1.89,0,0,0-.53-1.67L7,24.33V19.08l10.05-1.51a1.93,1.93,0,0,0,1.45-1.08L25,2.83,31.5,16.5A1.94,1.94,0,0,0,33,17.57l14.58,2.19Z"
                transform="translate(-0.39 -0.78)"
              />
            </svg>
          )}
          {fraction === 0.2 && (
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.23 48.44">
              <path
                d="M49.51,19.1A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.62,31.78,9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2L38.36,31.85,49.05,21.06A1.9,1.9,0,0,0,49.51,19.1ZM36.94,30.44a1.89,1.89,0,0,0-.53,1.67l2.49,15-13-7a1.88,1.88,0,0,0-1.84,0L11.5,46.94V44.76l2.09-12.65a1.89,1.89,0,0,0-.53-1.67L11.5,28.86V18.4l5.55-.83a1.93,1.93,0,0,0,1.45-1.08L25,2.83,31.5,16.5A1.94,1.94,0,0,0,33,17.57l14.58,2.19Z"
                transform="translate(-0.39 -0.78)"
              />
            </svg>
          )}
          {fraction === 0.3 && (
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.23 48.44">
              <path
                d="M49.51,19.1A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.5,31.66v.86L9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2L38.36,31.85,49.05,21.06A1.9,1.9,0,0,0,49.51,19.1ZM36.94,30.44a1.89,1.89,0,0,0-.53,1.67l2.49,15-13-7a1.88,1.88,0,0,0-1.84,0L16,44.49V17.73l1.05-.16a1.93,1.93,0,0,0,1.45-1.08L25,2.83,31.5,16.5A1.94,1.94,0,0,0,33,17.57l14.58,2.19Z"
                transform="translate(-0.39 -0.78)"
              />
            </svg>
          )}
          {fraction === 0.4 && (
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.23 48.44">
              <path
                d="M49.51,19.1A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.5,31.66v.86L9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2L38.36,31.85,49.05,21.06A1.9,1.9,0,0,0,49.51,19.1ZM36.94,30.44a1.89,1.89,0,0,0-.53,1.67l2.49,15-13-7a1.88,1.88,0,0,0-1.84,0L20.5,42V12.28L25,2.83,31.5,16.5A1.94,1.94,0,0,0,33,17.57l14.58,2.19Z"
                transform="translate(-0.39 -0.78)"
              />
            </svg>
          )}
          {fraction === 0.5 && (
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.23 48.44">
              <path
                d="M49.51,19.1A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.5,31.66v.86L9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2L38.36,31.85,49.05,21.06A1.9,1.9,0,0,0,49.51,19.1ZM36.94,30.44a1.89,1.89,0,0,0-.53,1.67l2.49,15-13-7a1.89,1.89,0,0,0-.92-.24v-37L31.5,16.5A1.94,1.94,0,0,0,33,17.57l14.58,2.19Z"
                transform="translate(-0.39 -0.78)"
              />
            </svg>
          )}
          {fraction === 0.6 && (
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.23 48.44">
              <path
                d="M49.51,19.1A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.5,31.66v.86L9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2L38.36,31.85,49.05,21.06A1.9,1.9,0,0,0,49.51,19.1ZM36.94,30.44a1.89,1.89,0,0,0-.53,1.67l2.49,15L29.5,42V12.31l2,4.19A1.94,1.94,0,0,0,33,17.57l14.58,2.19Z"
                transform="translate(-0.39 -0.78)"
              />
            </svg>
          )}
          {fraction === 0.7 && (
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.23 48.44">
              <path
                d="M49.51,19.1A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.5,31.66v.86L9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2L38.36,31.85,49.05,21.06A1.9,1.9,0,0,0,49.51,19.1ZM36.94,30.44a1.89,1.89,0,0,0-.53,1.67l2.49,15L34,44.49V17.73l13.53,2Z"
                transform="translate(-0.39 -0.78)"
              />
            </svg>
          )}
          {fraction === 0.8 && (
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.23 48.44">
              <path
                d="M49.51,19.1A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.5,31.66v.86L9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2L38.36,31.85,49.05,21.06A1.9,1.9,0,0,0,49.51,19.1Zm-11,9.77V18.4l9,1.36Z"
                transform="translate(-0.39 -0.78)"
              />
            </svg>
          )}
          {fraction === 0.9 && (
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.23 48.44">
              <path
                d="M49.05,21.06a1.9,1.9,0,0,0,.46-2A1.93,1.93,0,0,0,48,17.8L33.3,15.63,26.74,1.88a1.93,1.93,0,0,0-3.48,0l-6.5,13.71L2,17.8A1.93,1.93,0,0,0,.49,19.1a1.9,1.9,0,0,0,.46,2L11.5,31.66v.86L9.1,47a1.9,1.9,0,0,0,.79,1.88,1.89,1.89,0,0,0,1.11.36,2,2,0,0,0,.92-.23l13-7.14L38.08,49a1.93,1.93,0,0,0,2.82-2l-2.39-14.2V31.69Zm-6,3.25V19.08l4.52.68Z"
                transform="translate(-0.39 -0.78)"
              />
            </svg>
          )}
        </>
      )}
      {empty > 0 && (
        <>
          {emptyItems &&
            emptyItems.map((item, index) => {
              return (
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 49.23 48.44" key={index}>
                  <path
                    d="M49.62,18.85a1.9,1.9,0,0,0-1.54-1.29L33.4,15.38,26.84,1.63a1.92,1.92,0,0,0-3.47,0L16.86,15.34,2.13,17.56a1.92,1.92,0,0,0-1.08,3.25L11.73,31.53,9.21,46.73A1.93,1.93,0,0,0,11.1,49a2,2,0,0,0,.92-.23L25.07,41.6l13.11,7.14a1.93,1.93,0,0,0,2.82-2L38.46,31.6l10.7-10.79A1.92,1.92,0,0,0,49.62,18.85ZM37,30.19a1.94,1.94,0,0,0-.53,1.67L39,46.9l-13-7a1.88,1.88,0,0,0-1.84,0l-13,7,2.5-15a1.94,1.94,0,0,0-.53-1.67L2.57,19.51l14.59-2.19a2,2,0,0,0,1.45-1.08L25.08,2.58,31.6,16.25a2,2,0,0,0,1.45,1.07l14.58,2.19Z"
                    transform="translate(-0.49 -0.53)"
                  />
                </svg>
              );
            })}
        </>
      )}
    </div>
  );
};

export default StarRating;