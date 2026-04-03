export const restaurantRow = (restaurant) => {
  const {name, company} = restaurant;

  const row = document.createElement('tr');
  row.classList.add('restaurant-row');
  row.dataset.id = restaurant._id;
  row.innerHTML = `
    <td>${name}</td>
    <td>${company ?? ''}</td>
  `;

  return row;
};

export const restaurantModal = (restaurant, menu) => {
  const {name, address, postalCode, city, phone, company} = restaurant;
  const {courses = []} = menu;
  let menuHtml = '<ul>';

  courses.forEach((course) => {
    const {name: courseName, price, diets} = course;
    menuHtml += `<li>${courseName}, ${price ?? '?€'}. ${diets ?? ''}</li>`;
  });

  menuHtml += '</ul>';

  return `
    <h1>${name}</h1>
    <p>${address}</p>
    <p>${postalCode}, ${city}</p>
    <p>${phone}</p>
    <p>${company}</p>
    ${menuHtml}
    <form method="dialog">
      <button>Close</button>
    </form>
  `;
};
