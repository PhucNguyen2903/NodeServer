const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override')
const app = express();
const port = 3000;


const SortMiddleware = require('./app/middleware/sortMiddleware');

//override middleware
app.use(methodOverride('_method'))

app.use(SortMiddleware);

//route
const route = require('./routes');

//DB
const db = require('./config/db/index');
// Connect to DB
db.Connect();


app.use(express.static(path.join(__dirname, 'resources', 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// XMLHttpRequest, Fetch, axios,

//HTTP logger
// app.use(morgan('combined'))

//Template engine
app.engine('.hbs', handlebars.engine({
  extname: '.hbs',
  helpers: {
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

      return `<a href="?_sort&column=${field}&type=${type}">
      <span class="${icon}"></span> sort!
  </a>`
    }
  }
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

//Route Init
route(app);

app.listen(port, () => {
  console.log(`ECommerce App listening on port http://localhost:${port}`);
});
