const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/farmershub', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Import routes
const forumRoutes = require('./routes/forumRoutes');
const productRoutes = require('./routes/productRoutes');
const trackerRoutes = require('./routes/trackerRoutes');
const diseaseRoutes = require('./routes/diseaseRoutes');
const soilRoutes = require('./routes/soilRoutes');
const financeRoutes = require('./routes/financeRoutes');

// Use routes
app.use('/api/forums', forumRoutes);
app.use('/api/products', productRoutes);
app.use('/api/tracker', trackerRoutes);
app.use('/api/disease', diseaseRoutes);
app.use('/api/soil', soilRoutes);
app.use('/api/finance', financeRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
