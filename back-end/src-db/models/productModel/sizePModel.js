const SizeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

})

const Size = mongoose.model('Size', SizeSchema);

module.exports = Size;