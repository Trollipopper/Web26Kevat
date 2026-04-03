import {baseUrl} from './variables.js';
import {fetchData} from './utils.js';

const target = document.getElementById('target');
const filter = document.getElementById('company-filter');
const message = document.getElementById('message');

let restaurants = [];

const showMessage = (text) => {
  message.textContent = text;
};

const renderRestaurants = (company) => {
  target.innerHTML = '';

  const filtered =
    company === 'all'
      ? restaurants
      : restaurants.filter(
          ({company: restaurantCompany}) => restaurantCompany === company
        );

  filtered
    .map(({name, address}) => {
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${name}</td>
        <td>${address}</td>
      `;

      return row;
    })
    .forEach((row) => target.appendChild(row));
};

const loadRestaurants = async () => {
  try {
    showMessage('');
    const data = await fetchData(baseUrl);
    restaurants = data.restaurants ?? data;
    renderRestaurants(filter.value);
  } catch (error) {
    console.error(error);
    showMessage('Could not load restaurants.');
  }
};

filter.addEventListener('change', () => {
  try {
    renderRestaurants(filter.value);
    showMessage('');
  } catch (error) {
    console.error(error);
    showMessage('Filtering failed.');
  }
});

loadRestaurants();
