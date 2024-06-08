const handlerbars = require('handlerbar');

module.exports = {
    sum: (a, b) => a + b,
    sortable: (field, sort) => {

      const sortType = field === sort.column ? sort.type : 'default';

      const icons = {
        default:'fa-solid fa-envelope',
        asc:'',
        desc:''
      };

      const types= {
        default:'desc',
        asc: 'desc',
        desc:'asc',
      }

      const icon = icons[sortType]
      const type = types[sortType]

      const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);

      const output = `<a href="${href}">
      <span class="${icon}"></span> sort!
  </a>`;
        return new Handlebars.SafeString(output);
    }
};