var mongoose =  require('mongoose');
 
var flightSchema = new mongoose.Schema({
    airline: {
        type: String,
        trim: true,
        lowercase: true,
        default:null
    },                                     
    airlineCode: {
        type: Number,
        default: null
    },

    flightCode: {
        type: String,
        lowercase: false,
        default: null
    },

    sourceCity: {
        type: String,
        lowercase: false,
        default: null
    },

    destinationCity: {
        type: String,
        lowercase: false,
        default: null
    },

    date: {
        type: Date,
        default: moment().format()
    },

    ticketPrice: {
        type: Number
    },

    priceBreakup: {
        type: Number
    }
});

var flightCraw = mongoose.model('flightCrawler', flightSchema);
module.exports = flightCraw;
