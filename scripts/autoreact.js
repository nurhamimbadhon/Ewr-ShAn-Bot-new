const tf = require('@tensorflow/tfjs-node');
const mobilenet = require('@tensorflow-models/mobilenet');
const natural = require('natural');

// রিঅ্যাকশন বেসড অন ক্যাটাগরি
const reactToCategory = (category) => {
    const reactions = {
        'cat': '😺 এটা একটি বিড়াল!',
        'dog': '🐶 এটা একটি কুকুর!',
        'food': '🍕 মজার খাবার!',
        'text': '📄 এটি একটি টেক্সট ফাইল!',
        'unknown': '❓ কিছু সনাক্ত করা যায়নি!'
    };
    return reactions[category] || reactions['unknown'];
};

// ইমেজ থেকে ক্যাটাগরি ডিটেকশন
const detectImageCategory = async (imagePath) => {
    const image = tf.node.decodeImage(imagePath);
    const model = await mobilenet.load();
    const predictions = await model.classify(image);
    const category = predictions[0]?.className?.toLowerCase();

    // সাধারণ ক্যাটাগরি রিটার্ন
    if (category.includes('cat')) return 'cat';
    if (category.includes('dog')) return 'dog';
    if (category.includes('food')) return 'food';
    return 'unknown';
};

// টেক্সট এনালাইসিস
const detectTextCategory = (text) => {
    const tokenizer = new natural.WordTokenizer();
    const words = tokenizer.tokenize(text.toLowerCase());

    // উদাহরণস্বরূপ, খাবার সম্পর্কিত শব্দ
    const foodKeywords = ['pizza', 'burger', 'rice', 'chicken'];
    if (words.some(word => foodKeywords.includes(word))) return 'food';
    
    return 'text';
};

// মেইন ফাংশন
const autoReact = async (input, type) => {
    let category;

    if (type === 'image') {
        category = await detectImageCategory(input);
    } else if (type === 'text') {
        category = detectTextCategory(input);
    } else {
        category = 'unknown';
    }

    return reactToCategory(category);
};

// উদাহরণ কল
(async () => {
    const imagePath = './image.jpg'; // আপনার ইমেজ পাথ
    const textContent = "I love pizza and burgers!";
    
    const imageReaction = await autoReact(imagePath, 'image');
    console.log('Image Reaction:', imageReaction);

    const textReaction = await autoReact(textContent, 'text');
    console.log('Text Reaction:', textReaction);
})();
