import {baseUrl} from './variables.js';
import {fetchData} from './utils.js';
import {restaurantModal, restaurantRow} from './components.js';

const table = document.querySelector('table');
const modal = document.querySelector('dialog');

const menuUrl = (restaurant) => `${baseUrl}/${restaurant._id}/menu`;

const clearHighlight = () => {
  document.querySelectorAll('.restaurant-row').forEach((row) => {
    row.classList.remove('highlight');
  });
};

const showError = (message) => {
  modal.innerHTML = `
    <p>${message}</p>
    <form method="dialog">
      <button>Close</button>
    </form>
  `;
  modal.showModal();
};

const renderRestaurants = async () => {
  try {
    const restaurants = await fetchData(baseUrl);
    const sortedRestaurants = [...restaurants].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    sortedRestaurants.forEach((restaurant) => {
      const row = restaurantRow(restaurant);

      row.addEventListener('click', async () => {
        clearHighlight();
        row.classList.add('highlight');

        try {
          const menu = await fetchData(menuUrl(restaurant));
          modal.innerHTML = restaurantModal(restaurant, menu);
          modal.showModal();
        } catch (error) {
          showError(error.message);
        }
      });

      table.appendChild(row);
    });
  } catch (error) {
    console.error('An error occurred:', error);
  }
};

renderRestaurants();
