let javascript = {
    age: 25,
    governess: 'ecma',
    supports: ['functional programming', 'OOP', 'Scripting'],
    sector: ['web dev', 'desktop dev', 'game dev'],
};

const enduserIntrest = prompt(
    'What u wanna know about Javascipt  age governess supports sector'
);

document.write(javascript[enduserIntrest]);
