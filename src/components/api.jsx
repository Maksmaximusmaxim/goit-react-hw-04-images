import Notiflix from 'notiflix';
export const api = (search, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${search}&page=${page}&key=27737984-087ff865c77ff0cde11c21156&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(r => {
      if (r.ok) {
        return r.json();
      } else {
        Notiflix.Notify.info('картинок больше нет');
      }
    })

    .then(r => {
      const dates = r.hits.map(d => {
        const data = {
          id: d.id,
          largeImageURL: d.largeImageURL,
          webformatURL: d.webformatURL,
        };
        return data;
      });
      return dates;
    });
};
