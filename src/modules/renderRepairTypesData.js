import tabs from './tabs';
import tabsSlider from './tabsSlider';

const renderRepairTypesData = url => {

  const renderDate = dateData => {
    const repairTypesDate = document.querySelector('.js-repair-types-date'),
      dateParts = dateData.date.split('.'),
      date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0])
        .toLocaleString('ru', {
          day: 'numeric', month: 'long', year: 'numeric'
        });

    repairTypesDate.textContent = date;
  };

  const renderTitles = titles => {
    const typeList = document.querySelector('.nav-list-popup-repair'),
      titleTemplate = document.querySelector('.js-repair-types-title');

    titles.forEach(({ title }, i) => {
      const titleBlock = titleTemplate.content.cloneNode(true),
        titleText = titleBlock.querySelector('.button_o');

      titleText.textContent = title;

      if (i === 0) titleText.classList.add('active');

      typeList.append(titleBlock);
    });
  };

  const renderTypes = (types, table) => {
    const typeTemplate = document.querySelector('.js-repair-types-item');

    types.forEach(({ typeService, units, cost }) => {
      const type = typeTemplate.content.cloneNode(true),
        typeName = type.querySelector('.repair-types-name'),
        typeUnits = type.querySelector('.js-repair-types-units'),
        typeCost = type.querySelector('.js-repair-types-cost');

      typeName.textContent = typeService;
      typeUnits.innerHTML = units.replace(/\d/g, match => `<sup>${match}</sup>`);
      typeCost.textContent = `${cost} руб.`;

      table.append(type);
    });
  };

  const renderTables = priceLists => {
    const tableList = document.querySelector('.popup-repair-types-content-table'),
      tableTemplate = document.querySelector('.js-repair-types-table');

    priceLists.forEach(({ priceList }, i) => {
      const table = tableTemplate.content.cloneNode(true),
        tableWrap = table.querySelector('.popup-repair-types-content-table__list'),
        tableBody = table.querySelector('tbody');

      renderTypes(priceList, tableBody);

      if (i === 0) tableWrap.classList.add('visible-content-table');

      tableList.append(table);
    });
  };

  const getData = async url => {
    const response = await fetch(url);

    if (response.status !== 200) throw new Error('Error! Response status: ' + response.status);

    const data = await response.json();

    renderDate(data[0]);
    renderTitles(data.slice(1));
    renderTables(data.slice(1));

    // repair-types tabs
    const repairTypesTabSelectors = {
      sectionSelector: '.popup-repair-types',
      tabSelector: '.button_o',
      tabContentSelector: '.popup-repair-types-content-table__list',
      visibleTabContent: 'visible-content-table'
    };
    tabs(repairTypesTabSelectors);

    // repair-types tabs slider
    tabsSlider('.popup-repair-types');

    return data;
  };

  getData(url).catch(err => console.error(err));
};

export default renderRepairTypesData;
